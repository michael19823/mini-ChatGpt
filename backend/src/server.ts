import express from "express";
import cors from "cors";
import conversationsRouter from "./routes/conversations";
import messagesRouter from "./routes/messages";
import { prisma } from "./prisma";

const app = express();
app.use(cors());
app.use(express.json());

// Add request logging middleware
app.use("/api/conversations", (req, res, next) => {
  console.log(`[SERVER] ${req.method} ${req.path} - ${req.url}`);
  next();
});

// Mount conversationsRouter first - it handles GET /, POST /, DELETE /:id
app.use("/api/conversations", conversationsRouter);
// Mount messagesRouter second - it handles GET /:id, POST /:id/messages
// This order matters: more specific routes (/:id) should come after general ones (/)
app.use("/api/conversations", messagesRouter);

app.get("/healthz", (req, res) => res.status(200).send("OK"));
app.get("/readyz", async (req, res) => {
  try {
    await prisma.$queryRaw`SELECT 1`;
    res.status(200).send("OK");
  } catch {
    res.status(500).send("DB not ready");
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Backend listening on ${PORT}`);
});
