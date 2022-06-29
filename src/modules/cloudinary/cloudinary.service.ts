import { Injectable } from '@nestjs/common';
// eslint-disable-next-line @typescript-eslint/no-var-requires
import { v2 } from 'cloudinary';
@Injectable()
export class CloudinaryService {
  resultUrl;
  async uploadImage({ stream }): Promise<any> {
    try {
      await new Promise((resolve, reject) => {
        const streamLoad = v2.uploader.upload_stream(function (error, result) {
          if (result) {
            console.log(result);
            const resultUrl = result.secure_url;
            const resultSecureUrl = result.secure_url;
            resolve(resultUrl);
          } else {
            reject(error);
          }
        });
        stream.pipe(streamLoad);
      });
    } catch (err) {
      throw new Error(`Failed to upload profile picture ! Err:${err.message}`);
    }
  }
}
