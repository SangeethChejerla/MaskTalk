import { env } from "@/env";
import * as schema from "./schema";
import { PostgresJsDatabase, drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

declare global {
  // eslint-disable-next-line no-var -- only var works here
  var database: PostgresJsDatabase<typeof schema> | undefined;
}

let database: PostgresJsDatabase<typeof schema>;
let pg: ReturnType<typeof postgres>;

if (env.NODE_ENV === "production") {
  // Replace with your Vercel Postgres connection URL
  pg = postgres(env.POSTGRES_URL);
  database = drizzle(pg, { schema });
} else {
  if (!global.database) {
    // Replace with your Vercel Postgres connection URL
    pg = postgres(env.POSTGRES_URL);
    global.database = drizzle(pg, { schema });
  }
  database = global.database;
}

export { database, pg };
