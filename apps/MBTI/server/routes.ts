import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertQuizResponseSchema } from "@shared/schema";
import archiver from "archiver";
import path from "path";
import fs from "fs";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post("/api/quiz-responses", async (req, res) => {
    try {
      const validatedData = insertQuizResponseSchema.parse(req.body);
      const response = await storage.createQuizResponse(validatedData);
      res.status(201).json(response);
    } catch (error: any) {
      if (error.name === "ZodError") {
        return res.status(400).json({ error: "Invalid quiz response data" });
      }
      console.error("Failed to save quiz response:", error);
      res.status(500).json({ error: "Failed to save quiz response" });
    }
  });

  app.get("/api/quiz-responses", async (req, res) => {
    try {
      const responses = await storage.getQuizResponses();
      res.json(responses);
    } catch (error) {
      console.error("Failed to fetch quiz responses:", error);
      res.status(500).json({ error: "Failed to fetch quiz responses" });
    }
  });

  app.get("/api/quiz-responses/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ error: "Invalid ID parameter" });
      }
      const response = await storage.getQuizResponseById(id);
      if (!response) {
        return res.status(404).json({ error: "Quiz response not found" });
      }
      res.json(response);
    } catch (error) {
      console.error("Failed to fetch quiz response:", error);
      res.status(500).json({ error: "Failed to fetch quiz response" });
    }
  });

  app.get("/api/download-project", async (req, res) => {
    try {
      const projectRoot = process.cwd();
      
      res.setHeader('Content-Type', 'application/zip');
      res.setHeader('Content-Disposition', 'attachment; filename=mbti-family-app.zip');
      
      const archive = archiver('zip', {
        zlib: { level: 9 }
      });
      
      archive.on('error', (err) => {
        console.error('Archive error:', err);
        res.status(500).send({ error: 'Failed to create archive' });
      });
      
      archive.pipe(res);
      
      const foldersToInclude = ['client', 'server', 'shared', 'attached_assets'];
      const filesToInclude = [
        'package.json',
        'package-lock.json',
        'tsconfig.json',
        'vite.config.ts',
        'tailwind.config.ts',
        'postcss.config.js',
        'drizzle.config.ts',
        'components.json',
        'design_guidelines.md',
        'replit.md',
        '.replit'
      ];
      
      for (const folder of foldersToInclude) {
        const folderPath = path.join(projectRoot, folder);
        if (fs.existsSync(folderPath)) {
          archive.directory(folderPath, folder);
        }
      }
      
      for (const file of filesToInclude) {
        const filePath = path.join(projectRoot, file);
        if (fs.existsSync(filePath)) {
          archive.file(filePath, { name: file });
        }
      }
      
      await archive.finalize();
    } catch (error) {
      console.error("Failed to create project archive:", error);
      res.status(500).json({ error: "Failed to create project archive" });
    }
  });

  return httpServer;
}
