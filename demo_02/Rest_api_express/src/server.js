import express from "express";
import { json, urlencoded } from "body-parser";
//hoew to use body-parser using es6 module ,gives error

const app = express();

//console.log("hello");

app.get("/", (req, res) => {
  res.send({ message: "ok" });
});

app.post("/", (req, res) => {
  console.log(req.body);
  res.send({ message: "OK POST" });
});

export const start = () => {
  app.listen(3000, () => {
    console.log("Server started at 3000");
  });
};
