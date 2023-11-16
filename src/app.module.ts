import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UrlShortenerModule } from './url-shortener/url-shortener.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'), // <-- path to the static files
    }),
    UrlShortenerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
