import { Document, Types } from 'mongoose';

export interface IPost extends Document{
    _id: string;
    title: string;
    subject: string;
    owner: Types.ObjectId;
		messages: Types.ObjectId[];

}

export interface IUser extends Document {
    _id: string;
    username: string;
    email: string;
    password: string;
    token: string;
    confirmed: boolean;
    imgProfile?: string;
    comparePassword: (password: string) => boolean;
}

export interface IMessage extends Document {
  message: string;
	emitter: Types.ObjectId;
	post: Types.ObjectId;
}

export interface IPayload {
    _id: string;
    iat: number;
    exp: number;
}