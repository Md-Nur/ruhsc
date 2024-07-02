import dbConnect from "@/utils/dbConnect";
import UserModel from "@/models/User";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function GET(req: Request) {
  await dbConnect();
  const token: string | undefined = cookies().get("ruhscToken")?.value;
  // console.log(token);

  if (!token) {
    return NextResponse.json({ message: "No token found" }, { status: 401 });
  }
  const userData: any = jwt.verify(token, process.env.JWT_SECRET!);

  const user = await UserModel.findById(userData.id);
  if (!user) {
    return NextResponse.json({ message: "User not found" }, { status: 404 });
  }
  return NextResponse.json(user, { status: 200 });
}
