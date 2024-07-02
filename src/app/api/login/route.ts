import dbConnect from "@/utils/dbConnect";
import UserModel from "@/models/User";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  await dbConnect();
  const data = await req.json();

  console.log(data);
  const user = await UserModel.findOne({
    email: data.email,
  });
  if (!user) {
    return NextResponse.json({ message: "User not found" }, { status: 404 });
  }

  const isMatch = await bcrypt.compare(data.password, user.password);
  if (!isMatch) {
    return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
  }
  
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET!, {
    expiresIn: "30d",
  });
  cookies().set("ruhscToken", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
  });
  return NextResponse.json(user, { status: 200 });
}
