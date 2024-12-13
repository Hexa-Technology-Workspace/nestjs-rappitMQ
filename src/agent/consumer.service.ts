import { Injectable } from '@nestjs/common';
import { Ctx, EventPattern, Payload, RmqContext } from '@nestjs/microservices';

@Injectable()
export class ConsumerService {
  @EventPattern('process_data')
  async handleData(
    @Payload() data: any,
    @Ctx() context: RmqContext,
  ): Promise<void> {
    console.log('Received data:', data);

    // Xử lý dữ liệu từ queue
    // Gọi API thứ 2
    // Logic xử lý khác

    const channel = context.getChannelRef();
    const originalMsg = context.getMessage();
    channel.ack(originalMsg);
  }
}
