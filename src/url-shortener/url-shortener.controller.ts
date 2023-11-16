import { Controller, Post, Body, Res, HttpStatus } from '@nestjs/common';
import { UrlShortenerService } from './url-shortener.service';
import { Response } from 'express';

@Controller('url-shortener')
export class UrlShortenerController {
  constructor(private readonly urlShortenerService: UrlShortenerService) {}

  @Post()
  async shortenUrl(
    @Body('url') url: string,
    @Res() res: Response,
  ): Promise<void> {
    try {
      const shortUrl = await this.urlShortenerService.shortenUrl(url);
      res.status(HttpStatus.OK).json({ shortUrl });
    } catch (err) {
      res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: err.message });
    }
  }
}
