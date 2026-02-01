import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

const DATABASE_URL = "postgresql://thinqmedia_user:1yj029mX9pdoX0SCA375QfcSI36inBlS@dpg-d5vfqgd6ubrc73cf1b70-a.oregon-postgres.render.com/thinqmedia?sslmode=require";

const pool = new Pool({ connectionString: DATABASE_URL });
const adapter = new PrismaPg(pool);

export const prisma =
    globalForPrisma.prisma ||
    new PrismaClient({
        adapter,
    });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
