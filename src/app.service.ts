import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { AgentService } from './agent/agent.service';
import { TransformService } from './agent/transform.service';
import { RabbitMQService } from './agent/rabbitmq.service';
@Injectable()
export class AppService {
  constructor(
    private readonly agentService: AgentService,
    private readonly transformService: TransformService,
    private readonly rabbitMQService: RabbitMQService,
  ) { }

  @Cron(CronExpression.EVERY_5_SECONDS)
  async processAndSendData(): Promise<void> {
    // 1. Gọi API đầu tiên
    console.log('=============');

    const data = await this.agentService.fetchDataFromApi();
    console.log(data);

    // 2. Transform dữ liệu
    const transformedData = this.transformService.transformData(data);

    // 3. Đẩy vào RabbitMQ
    await this.rabbitMQService.sendToQueue('process_data', transformedData);
  }

  getHello(): string {
    return 'Hello World!';
  }

  getHelloName(name: string): string {
    return `Hello ${name}!`;
  }
}
