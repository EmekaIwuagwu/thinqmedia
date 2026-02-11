const { PrismaClient } = require("@prisma/client");
const path = require("path");
async function main() {
    const url = "file:./prisma/dev.db";
    console.log("Testing datasourceUrl with URL:", url);
    try {
        const prisma = new PrismaClient({
            datasourceUrl: url
        });
        await prisma.$connect();
        console.log("SUCCESS!");
        await prisma.$disconnect();
    } catch (e) {
        console.log("FAILED:", e.message);
    }
}
main();
