import mongoose, { Schema, Document } from "mongoose";

export interface IArticle extends Document {
  title: string;
  content: string;
  imgUrl: string;
}

const ArticleSchema: Schema<IArticle> = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  imgUrl: { type: String, required: true },
});

export interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  verifyCode: string;
  verifiyCodeExpires: Date;
  articles: IArticle[];
}

const UserSchema: Schema<IUser> = new Schema({
  username: { type: String, required: true, trim: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  verifyCode: { type: String, required: true },
  verifiyCodeExpires: { type: Date, required: true },
  articles: [ArticleSchema],
});
