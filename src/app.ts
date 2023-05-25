import express, { Request, Response } from "express";
import cors from "cors";

const app = express();

app.use(express.json()); // bodyParser가 express 최근 버전에서 deprecated되어서 다음과 같이 처리해줘야함
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: "http://localhost:3001",
    credentials: true,
    optionsSuccessStatus: 200,
  })
);

app.get("/test", (req: Request, res: Response) => {
  res.send("server is listening on 3000");
});

export default app;
