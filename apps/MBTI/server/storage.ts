import { users, quizResponses, type User, type InsertUser, type QuizResponse, type InsertQuizResponse } from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createQuizResponse(response: InsertQuizResponse): Promise<QuizResponse>;
  getQuizResponses(): Promise<QuizResponse[]>;
  getQuizResponseById(id: number): Promise<QuizResponse | undefined>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }

  async createQuizResponse(insertResponse: InsertQuizResponse): Promise<QuizResponse> {
    const [response] = await db
      .insert(quizResponses)
      .values(insertResponse)
      .returning();
    return response;
  }

  async getQuizResponses(): Promise<QuizResponse[]> {
    return await db.select().from(quizResponses);
  }

  async getQuizResponseById(id: number): Promise<QuizResponse | undefined> {
    const [response] = await db.select().from(quizResponses).where(eq(quizResponses.id, id));
    return response || undefined;
  }
}

export const storage = new DatabaseStorage();
