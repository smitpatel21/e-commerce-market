// ref: https://authjs.dev/getting-started/adapters/prisma
import { PrismaClient } from "@prisma/client";

// It is all nothing but just an instance created from the PrismaClient and setting it in global scope

const prismaClientSingleton = () => {
    return new PrismaClient();
};

type PrismaClientSingleton = ReturnType<typeof prismaClientSingleton>;

const globalForPrisma = global as unknown as {
    prisma: PrismaClientSingleton | undefined;
};

const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export default prisma;