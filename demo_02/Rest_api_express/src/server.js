import express from "express";
import { json, urlencoded } from "body-parser";
//hoew to use body-parser using es6 module ,gives error

const app = express();
app.use(json());
app.use(urlencoded({ extended: true }));

//console.log("hello");

//custom middleware created
const customLogger = (req, res, next) => {
  console.log("Logger incoming");
  next();
};

app.get("/", customLogger, (req, res) => {
  console.log(req.body);
  res.send({ message: "OK GET" });
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
