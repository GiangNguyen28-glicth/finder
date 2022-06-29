import 'dotenv/config';

import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';

import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import graphqlUploadExpress from 'graphql-upload/graphqlUploadExpress.js';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  // app.useGlobalFilters(new GraphQLExceptionFilter());
  app.use(
    graphqlUploadExpress({
      maxFiles: 100,
      maxFileSize: 10000000, // 10 MB,
    }),
  );
  await app.listen(process.env.PORT || 3000, function () {});
}
bootstrap();
