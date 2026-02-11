const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
    console.log("Seeding database...");
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
