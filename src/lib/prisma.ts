import { PrismaClient } from "@prisma/client";
import path from "path";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma = new Proxy({} as PrismaClient, {
    get(target, prop) {
        if (!globalForPrisma.prisma) {
            // Ensure DATABASE_URL uses an absolute path for SQLite on cPanel
            const dbPath = path.resolve(process.cwd(), "prisma/dev.db");
            process.env.DATABASE_URL = `file:${dbPath}`;
            globalForPrisma.prisma = new PrismaClient();
        }
        const instance = globalForPrisma.prisma as any;
        return typeof instance[prop] === 'function'
            ? instance[prop].bind(instance)
            : instance[prop];
    }
});
