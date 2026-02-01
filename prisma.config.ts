// Prisma configuration for ThinqMedia
// Using direct connection string for Cpanel compatibility (no .env reliance)
import { defineConfig } from "prisma/config";

const DATABASE_URL = "postgresql://thinqmedia_user:1yj029mX9pdoX0SCA375QfcSI36inBlS@dpg-d5vfqgd6ubrc73cf1b70-a.oregon-postgres.render.com/thinqmedia?sslmode=require";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: DATABASE_URL,
  },
});
