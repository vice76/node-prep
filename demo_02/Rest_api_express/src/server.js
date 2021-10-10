import express from "express";
const 
//hoew to use body-parser using es6 module ,gives error 

const app = express();

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
