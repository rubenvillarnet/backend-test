import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { UrlShortenerService } from './url-shortener.service';
import { UrlShortenerController } from './url-shortener.controller';

@Module({
  imports: [HttpModule],
  providers: [UrlShortenerService],
  controllers: [UrlShortenerController],
})
export class UrlShortenerModule {}
