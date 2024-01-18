import express from "express";

const app = express();

app.listen(3000, () => console.log("Server listening at port 3000"));

app.get("/", (req: any, res: any) => {
  res.send("Hello World");
});

app.get("/healthcheck", (req: any, res: any) => {
  res.send("healthcheck");
});
