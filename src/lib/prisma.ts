import { PrismaClient } from "@prisma/client";

const prismaClientSingleton = () => {
    const dbUrl = "mysql://thinqmed_root:thinqmedia12345678%2A%2A%2A%40%21@131.153.147.98:3306/thinqmed_thinqmedia_db";

    return new PrismaClient({
        datasources: {
            db: {
                url: dbUrl,
            },
        },
    });
};

declare global {
    var prisma: undefined | ReturnType<typeof prismaClientSingleton>;
}

export const prisma = globalThis.prisma ?? prismaClientSingleton();

if (process.env.NODE_ENV !== "production") globalThis.prisma = prisma;
