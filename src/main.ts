import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  const appVersion = configService.get<string>('APP_VERSION') ?? '0.2.0';

  const swaggerConfig = new DocumentBuilder()
    .setTitle('USIApp API')
    .setDescription('USIApp backend API documentation')
    .setVersion(appVersion)
    .addTag('health')
    .build();

  const swaggerDocument = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api', app, swaggerDocument);

  const port = configService.get<number>('PORT') ?? 3000;
  await app.listen(port);
}

bootstrap();