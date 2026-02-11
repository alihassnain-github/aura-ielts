import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { InstitutesModule } from './institutes/institutes.module';
import { TeachersModule } from './teachers/teachers.module';
import { StudentsModule } from './students/students.module';
import { BatchesModule } from './batches/batches.module';

@Module({
  imports: [UsersModule, InstitutesModule, TeachersModule, StudentsModule, BatchesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
