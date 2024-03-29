import express, { Request, Response } from "express";
import cors from "cors";

const app = express();
const originList = [
  "http://localhost:3000",
  "http://localhost:3001",
  "http://localhost:3002",
  "http://localhost:3003",
  "http://localhost:3004",
  "http://localhost:3005",
  "http://43.203.120.163:3000",
];

app.use(express.json()); // bodyParser가 express 최근 버전에서 deprecated되어서 다음과 같이 처리해줘야함
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: originList,
    credentials: true,
    optionsSuccessStatus: 200,
    methods: ["GET", "PATCH", "POST", "DELETE", "OPTIONS"],
  })
);

app.get("/test", (req: Request, res: Response) => {
  res.send("server is listening on 3000");
});

export default app;
