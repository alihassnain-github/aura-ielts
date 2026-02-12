import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Role } from '../enums/role.enum';

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true })
export class User {
  @Prop({
    type: String,
    required: true,
    unique: true,
    index: true,
  })
  email: string;

  @Prop({
    type: String,
    required: true,
  })
  password: string;

  @Prop({
    type: String,
  })
  refresh_token: string;

  @Prop({
    type: Boolean,
    default: false,
  })
  is_verified: boolean;

  @Prop({
    type: Boolean,
    default: true,
  })
  is_active: boolean;

  @Prop({
    type: String,
    enum: Role,
    default: Role.User,
  })
  role: Role;

  @Prop({
    type: String,
    minlength: 6,
    maxlength: 6,
  })
  verification_code: string;

  @Prop({
    type: Date,
  })
  verification_code_expiry: Date;

  @Prop()
  password_reset_token: string;

  @Prop()
  password_reset_expires: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
