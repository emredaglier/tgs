import { drizzle } from "drizzle-orm/vercel-postgres";
import { sql } from "@vercel/postgres";
import * as schema from "./schema";
import { eq } from "drizzle-orm";

export const db = drizzle(sql, { schema });

const getData = async () => {
  return db.query.announcements.findMany();
};

const selectData = async (data: string) => {
  return await db
    .select()
    .from(schema.announcements)
    .where(eq(schema.announcements.link, data));
};

// eslint-disable-next-line
const insertData = async (data: any) => {
  await db.insert(schema.announcements).values(data);
};

const out = { getData, selectData, insertData };

export default out;
