import slugify from "slugify";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { storeSchema } from "@/lib/validators/store";
import prisma from "@/lib/db";
import { z } from "zod";

export async function POST(req: Request) {
    try {
        const session = await getServerSession(authOptions);
        if (!session?.user) {
            return new Response("Unauthorized", { status: 401 });
        }

        const body = await req.json();
        const { name, description } = storeSchema.parse(body);
        // const slug = slugify(name, { lower: true });

        // const isStoreExist = await prisma.store.findUnique({
        //     where: {
        //         id: slug,
        //     },
        // });

        // if (isStoreExist) {
        //     return new Response("Store name is already exist", { status: 409 });
        // }

        const user = await prisma.store.create({
            data: {
                name,
                description,
                userId: session.user.id,
            },
        },);

        return new Response("OK");
    } catch (error) {
        if (error instanceof z.ZodError) {
            return new Response("Invalid request data passed", { status: 422 });
        }

        console.log(error)
        return new Response("Could not create store, please try again later.", {
            status: 500,
        });
    }
}
