import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class AgentService {
  constructor(private readonly httpService: HttpService) { }

  async fetchDataFromApi(): Promise<any> {
    try {
      const response = await lastValueFrom(
        this.httpService.get('https://jsonplaceholder.typicode.com/posts'),
      );
      return response.data;
    } catch (error) {
      throw new Error(`Failed to fetch data: ${error.message}`);
    }
  }
}
