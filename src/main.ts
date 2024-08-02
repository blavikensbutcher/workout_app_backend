import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as process from 'process';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: false });
  app.enableCors({
    origin: 'localhost',
    credentials: true,
    exposedHeaders: ['set-cookie'],
  });
  app.setGlobalPrefix('api');

  const config = new DocumentBuilder()
    .setTitle('Task manager')
    .setDescription('Task manager API routing')
    .addBearerAuth()
    .addApiKey()
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
