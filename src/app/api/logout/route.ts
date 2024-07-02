import { cookies } from "next/headers";

export async function GET(req: Request) {
  cookies().delete("ruhscToken");
  return Response.json({ message: "Log out successfully" });
}
