import { Module } from '@nestjs/common';
import { InstitutesService } from './institutes.service';
import { InstitutesController } from './institutes.controller';

@Module({
  controllers: [InstitutesController],
  providers: [InstitutesService],
})
export class InstitutesModule {}
