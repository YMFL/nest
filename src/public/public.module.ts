import { Module } from '@nestjs/common';
import { PublicController } from './public.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PublicService } from './services/public.service';

@Module({
  imports: [TypeOrmModule.forFeature([])],
  controllers: [PublicController],
  providers: [PublicService],
})
export class PublicModule {}
