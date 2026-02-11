const { PrismaClient } = require("@prisma/client");
async function main() {
    try {
        const prisma = new PrismaClient({});
        await prisma.$connect();
        console.log("Connected!");
        await prisma.$disconnect();
    } catch (e) {
        console.log("ERROR_START");
        console.log(e.message);
        console.log("ERROR_END");
    }
}
main();
