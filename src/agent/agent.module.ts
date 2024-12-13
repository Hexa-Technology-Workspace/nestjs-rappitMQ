import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { AgentService } from './agent.service';
import { TransformService } from './transform.service';
import { RabbitMQService } from './rabbitmq.service';

@Module({
  imports: [HttpModule],
  providers: [AgentService, TransformService, RabbitMQService],
  exports: [AgentService],
})
export class AgentModule { }
