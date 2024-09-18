import { drizzle } from "drizzle-orm/vercel-postgres";
import { sql } from "@vercel/postgres";
import * as schema from "./schema";

export const db = drizzle(sql, { schema });

export const getData = async () => {
  return db.query.announcements.findMany();
};

/* EXPERIMENTAL
export const insert_TEST = async () => {
  await db.insert(schema.Announcements).values({
    title: "TEST",
    content: "TEST",
    image: "TEST",
  });
};
*/
