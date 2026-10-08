import cors from "cors";
import express from "express";

const CORS_ORIGIN = process.env.CORS_ORIGIN ?? "http://localhost:3000";

export const app = express();

app.use(cors({ origin: CORS_ORIGIN }));
app.use(express.json());

app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});
