// Prisma configuration for ThinqMedia
// Using direct connection string for Cpanel compatibility (no .env reliance)
import { defineConfig } from "prisma/config";

const DATABASE_URL = "mysql://thinqmed_root:thinqmedia12345678%2A%2A%2A%40%21@131.153.147.98:3306/thinqmed_thinqmedia_db";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
    seed: "node prisma/seed.js",
  },
  datasource: {
    url: DATABASE_URL,
  },
});
