export class MailVerifyAccount {
  static createHTML(otp: string): string {
    return `"<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@100;200;300;400;500;600&family=Poppins:wght@100;200;300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <style></style>
      <body
        style="
          font-size: 62.5%;
          font-family: 'Be Vietnam Pro', sans-serif;
          font-family: 'Poppins', sans-serif;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          background-color: rgb(245, 245, 245);
          min-height: 100vh;
          font-size: black !important;
        "
      >
        <div class="main" style="margin: auto">
          <div class="box" style="background-color: white; padding: 20px 40px">
            <div class="logo" style="margin-bottom: 40px">
              <img
                src="https://f002.backblazeb2.com/file/summonshop/logo.png"
                alt="logo"
              />
            </div>
            <h3
              style="
                font-size: 28px;
                font-weight: 400;
                margin-bottom: 0px;
                color: #000;
              "
            >
              Welcome To Finder
            </h3>
            <div class="image" style="width: 260px; margin: 50px auto">
              <img
                src="https://f002.backblazeb2.com/file/summonshop/welcome.png"
                style="display: block; height: 100%; width: 100%; object-fit: cover"
              />
            </div>
            <p style="font-size: 14px; color: #555 !important">
            Qu?? kh??ch v???a t???o th??nh c??ng th??ng tin ????ng nh???p t??i kho???n Web Finder c???a ch??ng t??i.
              ????y l?? m?? OTP c???a b???n
            </p>
            <div class="code" style="margin: 20px 0">
                <p style="display: inline-block;
          font-size: 20px;
          background-color: #9BDBF6;
          padding: 4px 28px;
          border-radius: 4px;
          text-decoration: none;
          color: black;
          ">${otp}</p>
            </div>
            <p style="font-size: 10px; color: #555555">
            D?????i ????y l?? m???t s??? l??u ?? trong su???t qu?? tr??nh s??? d???ng t??i kho???n gi??p Qu?? kh??ch ?????m b???o an to??n b???o m???t v?? tr??nh ph??t sinh r???i ro <br />
            Kh??ng chia s??? th??ng tin t??n ????ng nh???p v?? m???t kh???u ????ng nh???p t??i kho???n cho b???t k??? ai <br />
            Kh??ng cung c???p m?? x??c th???c SMS OTP/ iOTP trong m???i t??nh hu???ng. 
            </p>
            </div>
            <p style="font-size: 10px; color: #555555">
              N???u b???n c?? b???t c??? c??u h???i n??o hay th???c m???c n??o xin h??y li??n h??? t???i Email shopme293@gmail.com.<br />
              All right reserved. Update
              <a
                href="#"
                rel="noopener"
                style="text-decoration: none; color: #555555"
                target="_blank"
                >email preferences</a
              >
            </p>
            <span style="font-weight: 500">Ho Chi Minh City</span>
          </div>
        </div>
      </body>
    </html>`;
  }
}
