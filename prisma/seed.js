const { PrismaClient } = require("@prisma/client");
const { PrismaPg } = require("@prisma/adapter-pg");
const { Pool } = require("pg");

const pool = new Pool({ connectionString: "postgresql://thinqmedia_user:1yj029mX9pdoX0SCA375QfcSI36inBlS@dpg-d5vfqgd6ubrc73cf1b70-a.oregon-postgres.render.com/thinqmedia?sslmode=require" });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
    const admin = await prisma.admin.upsert({
        where: { email: 'admin@thinqmedia.com' },
        update: {},
        create: {
            email: 'admin@thinqmedia.com',
            password: 'admin123', // In real app, hash this!
            name: 'Admin Strategist',
        },
    });
    console.log({ admin });
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
