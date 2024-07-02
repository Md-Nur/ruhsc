import dbConnect from "@/utils/dbConnect";
import UserModel, { User } from "@/models/User";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  await dbConnect();
  const data = await req.json();
  // console.log(data)
  const user = await UserModel.findOne({ email: data.email });
  if (user) {
    return NextResponse.json(
      { message: "User already exists" },
      { status: 400 }
    );
  }

  const salt = await bcrypt.genSalt(11);
  data.password = await bcrypt.hash(data.password, salt);

  data.isAdmin = false;
  // console.log(data);
  const newUser: any = await UserModel.create(data);
  const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET!, {
    expiresIn: "30d",
  });
  cookies().set("ruhscToken", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
  });
  return NextResponse.json(newUser, { status: 201 });
}
