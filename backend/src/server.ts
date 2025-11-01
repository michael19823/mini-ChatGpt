import express from "express";
import cors from "cors";
import conversationsRouter from "./routes/conversations";
import messagesRouter from "./routes/messages";
import { prisma } from "./prisma";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/conversations", conversationsRouter);
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
app.listen(PORT);
