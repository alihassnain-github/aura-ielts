import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type StudentDocument = HydratedDocument<Student>;

@Schema({ timestamps: true })
export class Student {
  @Prop({
    type: String,
    required: true,
    maxlength: 100,
  })
  first_name: string;

  @Prop({
    type: String,
    required: true,
    maxlength: 100,
  })
  last_name: string;

  @Prop({
    type: Date,
    required: true,
  })
  dob: Date;

  @Prop({
    type: String,
  })
  avatar: string;

  @Prop({
    type: String,
    maxlength: 20,
  })
  phone: string;

  
}

export const StudentSchema = SchemaFactory.createForClass(Student);
