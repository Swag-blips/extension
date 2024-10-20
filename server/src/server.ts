import express, { Request, Response } from "express";
import cors from "cors";

import "dotenv/config";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", async (req: Request, res: Response) => {
  res.json({ message: "Hello world" });
});

app.listen(7000, () => {
  console.log("Server started on localhost:7000");
});
