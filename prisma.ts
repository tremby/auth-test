// prisma.ts
// This file is responsible for setting up the Prisma client and database connection.

import { neonConfig } from "@neondatabase/serverless";
import { PrismaClient } from "@prisma/client";
import ws from "ws";

declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

const connectionString = `${process.env.DATABASE_URL}`;
neonConfig.webSocketConstructor = ws;
const prisma =
  global.prisma ||
  new PrismaClient({ datasources: { db: { url: connectionString } } });

export default prisma;

if (process.env.NODE_ENV === "development") global.prisma = prisma;
