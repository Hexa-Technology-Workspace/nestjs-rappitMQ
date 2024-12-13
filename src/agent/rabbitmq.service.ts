import { Injectable } from '@nestjs/common';
import {
  ClientProxy,
  ClientProxyFactory,
  Transport,
} from '@nestjs/microservices';

@Injectable()
export class RabbitMQService {
  private client: ClientProxy;

  constructor() {
    this.client = ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: ['amqp://guest:guest@localhost:5672'],
        queue: 'som247_queue',
        queueOptions: { durable: true },
      },
    });
  }

  async sendToQueue(pattern: string, data: any): Promise<void> {
    await this.client.emit(pattern, data).toPromise();
  }
}
