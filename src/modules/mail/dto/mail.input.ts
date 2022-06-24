import { Field, InputType } from '@nestjs/graphql';
import { IsEmail } from 'class-validator';

@InputType()
export class ConfirmMailInput {
  @Field()
  token: string;
  @Field()
  @IsEmail()
  email: string;
}
