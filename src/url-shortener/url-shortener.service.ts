import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';

interface CleanUriAPIResponse {
  result_url: string;
}

@Injectable()
export class UrlShortenerService {
  constructor(private httpService: HttpService) {}

  async shortenUrl(originalUrl: string): Promise<string> {
    const response = await firstValueFrom(
      this.httpService.post<CleanUriAPIResponse>(
        'https://cleanuri.com/api/v1/shorten',
        { url: originalUrl },
      ),
    );
    return response.data.result_url;
  }
}
