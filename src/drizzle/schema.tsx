import { pgTable, serial, text, timestamp, varchar } from "drizzle-orm/pg-core";

export const announcements = pgTable("announcements", {
  id: serial("id").primaryKey(),
  link: varchar("link").notNull().unique(),
  title: varchar("title", { length: 256 }).notNull(),
  shortContent: varchar("shortContent", { length: 256 }).notNull(),
  content: text("content").notNull(),
  image: text("image").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});
