const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient({
    datasourceUrl: "mongodb+srv://devapply:devapply@cluster0.mpoa0sq.mongodb.net/thinqmedia?retryWrites=true&w=majority"
});

async function main() {
    console.log("Seeding MongoDB database using Prisma Client...");

    try {
        // Seed Admin
        console.log("Seeding Admin...");
        const adminEmail = 'admin@thinqmedia.com';
        const existingAdmin = await prisma.admin.findUnique({
            where: { email: adminEmail }
        });

        if (!existingAdmin) {
            await prisma.admin.create({
                data: {
                    email: adminEmail,
                    password: 'admin123456',
                    name: 'Admin Strategist'
                }
            });
            console.log("Admin seeded.");
        } else {
            console.log("Admin already exists.");
        }

        // Seed Posts
        const posts = [
            {
                title: 'Welcome to ThinqMedia',
                slug: 'welcome-to-thinqmedia',
                excerpt: 'The future of digital media and strategy is here.',
                content: '<p>Welcome to ThinqMedia, your partner in digital excellence. We provide cutting-edge solutions for your media needs.</p>',
                category: 'Announcements',
                author: 'Admin Strategist',
                image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop',
                status: 'Published'
            },
            {
                title: 'Digital Transformation in 2026',
                slug: 'digital-transformation-2026',
                excerpt: 'How businesses are evolving in the new era of technology.',
                content: '<p>Digital transformation is no longer an option but a necessity. In 2026, we see a shift towards more integrated AI solutions.</p>',
                category: 'Strategy',
                author: 'Admin Strategist',
                image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop',
                status: 'Published'
            },
            {
                title: 'The Power of Strategic Media',
                slug: 'power-of-strategic-media',
                excerpt: 'Why your business needs a strong media strategy.',
                content: '<p>Strategic media is the backbone of modern marketing. We explore why it matters more than ever.</p>',
                category: 'Media',
                author: 'Admin Strategist',
                image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop',
                status: 'Published'
            }
        ];

        for (const post of posts) {
            const existingPost = await prisma.post.findUnique({
                where: { slug: post.slug }
            });

            if (!existingPost) {
                console.log(`Seeding post: ${post.title}`);
                await prisma.post.create({
                    data: post
                });
            } else {
                console.log(`Post already exists: ${post.title}`);
            }
        }

        console.log("Seed successful!");
    } catch (error) {
        console.error("Seed failed:", error);
        if (error.message) console.error("Error Message:", error.message);
        if (error.stack) console.error("Stack Trace:", error.stack);
    } finally {
        await prisma.$disconnect();
    }
}

main();

