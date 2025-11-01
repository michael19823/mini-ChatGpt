import { z } from "zod";
import { Request, Response, NextFunction } from "express";

export const uuidSchema = z.string().uuid();

// CUID validation - CUIDs are 25 character strings starting with 'c'
export const cuidSchema = z.string().regex(/^c[0-9a-z]{24}$/i);

export const conversationIdSchema = z.object({
  id: cuidSchema,
});

export const messageCursorSchema = z.object({}).passthrough();

export const createMessageSchema = z.object({
  content: z.string().min(1).max(10000),
});

export function validate(
  schema: z.ZodSchema,
  source: "body" | "params" | "query" = "body"
) {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      const data =
        source === "body"
          ? req.body
          : source === "params"
          ? req.params
          : req.query;
      const result = schema.parse(data);
      // Update the request with validated data (useful for transformed values)
      if (source === "query") {
        Object.assign(req.query, result);
      } else if (source === "params") {
        Object.assign(req.params, result);
      } else {
        Object.assign(req.body, result);
      }
      next();
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({
          error: "Validation failed",
          details: error.errors.map((e) => ({
            path: e.path.join("."),
            message: e.message,
          })),
        });
      } else {
        res.status(400).json({ error: "Invalid request" });
      }
    }
  };
}
