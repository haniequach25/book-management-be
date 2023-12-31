import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PublisherSchema } from './schemas/publisher.schema';
import { PublisherController } from './publisher.controller';
import { PublisherService } from './publisher.service';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Publisher', schema: PublisherSchema }])
  ],
  controllers: [PublisherController],
  providers: [PublisherService]
})
export class PublisherModule { }
