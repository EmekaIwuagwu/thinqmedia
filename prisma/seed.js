const mysql = require('mysql2/promise');

async function main() {
    const connectionString = "mysql://thinqmed_root:thinqmedia12345678%2A%2A%2A%40%21@131.153.147.98:3306/thinqmed_thinqmedia_db";

    console.log("Seeding database using mysql2 direct connection...");

    let connection;
    try {
        connection = await mysql.createConnection(connectionString);

        // Use the database
        await connection.query('USE thinqmed_thinqmedia_db');

        // Seed Admin
        console.log("Seeding Admin...");
        const adminId = 'seed-admin-id';
        const [admins] = await connection.query('SELECT * FROM Admin WHERE email = ?', ['admin@thinqmedia.com']);

        if (admins.length === 0) {
            await connection.query(
                'INSERT INTO Admin (id, email, password, name, createdAt, updatedAt) VALUES (?, ?, ?, ?, NOW(), NOW())',
                [adminId, 'admin@thinqmedia.com', 'admin123456', 'Admin Strategist']
            );
            console.log("Admin seeded.");
        } else {
            console.log("Admin already exists.");
        }

        // Seed Posts
        const posts = [
            {
                id: 'post-1',
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
                id: 'post-2',
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
                id: 'post-3',
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
            const [existing] = await connection.query('SELECT * FROM Post WHERE slug = ?', [post.slug]);
            if (existing.length === 0) {
                console.log(`Seeding post: ${post.title}`);
                await connection.query(
                    'INSERT INTO Post (id, title, slug, excerpt, content, image, category, author, status, views, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, 0, NOW(), NOW())',
                    [post.id, post.title, post.slug, post.excerpt, post.content, post.image, post.category, post.author, post.status]
                );
            } else {
                console.log(`Post already exists: ${post.title}`);
            }
        }

        console.log("Seed successful!");
    } catch (error) {
        console.error("Seed failed:", error);
    } finally {
        if (connection) await connection.end();
    }
}

main();
