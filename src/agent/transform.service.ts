import { Injectable } from '@nestjs/common';

@Injectable()
export class TransformService {
  transformData(data: any): any {
    // Logic transform dữ liệu
    console.log(data);

    return {
      id: data.id,
      name: data.title,
      processedAt: new Date(),
    };
  }
}
