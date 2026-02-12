import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { InstitutesModule } from './institutes/institutes.module';
import { StudentsModule } from './students/students.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.DATABASE_URL!),
    UsersModule,
    InstitutesModule,
    StudentsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
