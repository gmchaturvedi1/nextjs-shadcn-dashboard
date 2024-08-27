//import { drizzle } from "drizzle-orm/postgres-js";
import { env } from "@/env";
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";

export const connection = neon(env.DATABASE_URL!);

export const db = drizzle(connection, { schema });
