import { sql } from "drizzle-orm";
import { pgTable, text, varchar, jsonb, timestamp, serial } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export const quizResponses = pgTable("quiz_responses", {
  id: serial("id").primaryKey(),
  ageGroup: text("age_group").notNull(),
  language: text("language").notNull(),
  answers: jsonb("answers").notNull(),
  mbtiResult: text("mbti_result").notNull(),
  percentages: jsonb("percentages").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertQuizResponseSchema = createInsertSchema(quizResponses).omit({
  id: true,
  createdAt: true,
});

export type InsertQuizResponse = z.infer<typeof insertQuizResponseSchema>;
export type QuizResponse = typeof quizResponses.$inferSelect;
