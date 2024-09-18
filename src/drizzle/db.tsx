import { drizzle } from "drizzle-orm/vercel-postgres";
import { sql } from "@vercel/postgres";
import * as schema from "./schema";

export const db = drizzle(sql, { schema });

const getData = async () => {
  return db.query.announcements.findMany();
};

// eslint-disable-next-line
const insertData = async (data: any) => {
  await db.insert(schema.announcements).values(data);
};

export default { getData, insertData };

/* EXPERIMENTAL
export const insert_TEST = async () => {
  await db.insert(schema.Announcements).values({
    title: "TEST",
    content: "TEST",
    image: "TEST",
  });
};
*/
