import prisma from "@/lib/db";
import type { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req: Request, res: NextApiResponse) {
  const { name, email, password } = await req.json();

  
  try {
      const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return NextResponse.json({ message: "email already taken!" }, { status: 400 });
    }
  } catch (error) {
    return NextResponse.json({ message: "error in finding user" }, { status: 400 });
  }

  const hashedPassword = bcrypt.hashSync(password, 10);
  try {
    const user = await prisma.user.create({
      data: {  name, email, hashedPassword },
    });  
    return NextResponse.json({ message: "User registered successfully", user }, { status: 201 });
  } catch (error: unknown) {
    
    return NextResponse.json({ message: "error in creating user" }, { status: 400 });
  }
}
