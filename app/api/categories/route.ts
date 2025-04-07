import prisma from "@/lib/db";

export async function GET(req: Request){
    try {
        const response = await prisma.category.findMany()
        return Response.json(response)
    } catch (error) {
        console.log(error)
        return new Response("Could not fetch more orders", { status: 500 });
    }
}