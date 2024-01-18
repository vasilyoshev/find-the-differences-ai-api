import express from "express";
import 'dotenv/config'

const app = express();

app.listen(3000, () => console.log("Server listening at port 3000"));

app.get("/", (req: any, res: any) => {
  res.send("Hello World 2");
});

app.get("/healthcheck", (req: any, res: any) => {
  res.send("healthcheck");
});
