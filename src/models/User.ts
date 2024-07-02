import mongoose, { Schema, Document } from "mongoose";

export interface User extends Document {
  name: string;
  email: string;
  password: string;
  avatar?: string;
  isAdmin?: boolean;
}

const UserSchema: Schema<User> = new Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  avatar: { type: String },
  isAdmin: { type: Boolean, default: false },
});

export default mongoose.models.User || mongoose.model<User>("User", UserSchema);
