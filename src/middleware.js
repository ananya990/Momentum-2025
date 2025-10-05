import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  console.log("Decoded token:", token);

  if (!token) {
    // return NextResponse.redirect(new URL("/"));
    return NextResponse.json({msg: "unauthorised!"})
  }

  return NextResponse.next();
}

export const config = {
    matcher: [
      "/api/profile",
      // "/api/events"
    ],
};