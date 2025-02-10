import prisma from "@/lib/db";
import type { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req: Request, res: NextApiResponse) {
    const { name, email, password } = await req.json();

    const existingUser = await prisma.user.findUnique({ where: { email } });

    if (existingUser) {
        return NextResponse.json(
            { message: "email already taken!" },
            { status: 400 }
        );
    }

    const hashedPassword = bcrypt.hashSync(password, 10);

    const user = await prisma.user.create({
        data: {
            name,
            email,
            hashedPassword: hashedPassword,
        },
    });

    return NextResponse.json(
        { message: "User registered successfully", user },
        { status: 201 }
    );
}
