import { PrismaClient } from "@prisma/client";
import path from "path";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma = new Proxy({} as PrismaClient, {
    get(target, prop) {
        if (!globalForPrisma.prisma) {
            // Use the remote MySQL connection
            const dbUrl = "mysql://thinqmed_root:thinqmedia12345678%2A%2A%2A%40%21@131.153.147.98:3306/thinqmed_thinqmedia_db";
            process.env.DATABASE_URL = dbUrl;
            globalForPrisma.prisma = new PrismaClient();
        }

        const instance = globalForPrisma.prisma as any;
        return typeof instance[prop] === 'function'
            ? instance[prop].bind(instance)
            : instance[prop];
    }
});
