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

  const config = new DocumentBuilder()
    .setTitle('Workout app 💪🏼')
    .setDescription('Workout app schema')
    .addBearerAuth()
    .addApiKey()
    .setVersion('0.1')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  await app.listen(process.env.PORT || 4000);
}
bootstrap();
