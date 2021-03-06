import express from "express";
import { json, urlencoded } from "body-parser";
//hoew to use body-parser using es6 module ,gives error

const app = express();
const router = express.Router();

app.use(json());
app.use(urlencoded({ extended: true }));

//console.log("hello");

//custom middleware created
const customLogger = (req, res, next) => {
  console.log("Logger incoming");
  next();
};

app.use("/api/v1", router);

app.get("/", customLogger, (req, res) => {
  console.log(req.body);
  res.send({ message: "OK GET" });
});

app.post("/", (req, res) => {
  console.log(req.body);
  res.send({ message: "OK POST" });
});

// router.get("/post", (req, res) => {
//   res.send({ message: "Router OK" });
// });

// router.post("/post", (req, res) => {
//   res.send({ message: "OK" });
// });

router
  .route("/post")
  .get((req, res) => {
    res.send({ message: "Router OK get" });
  })
  .post((req, res) => {
    res.send({ message: "Router OK POST" });
  });

router
  .route("/post/:id/:nums")
  .put((req, res) => {
    console.log(req.params);
    res.send({ message: "Router OK PUT" });
  })
  .patch((req, res) => {
    res.send({ message: "Router OK Patch" });
  })
  .delete((req, res) => {
    res.send({ message: "Router OK delete" });
  });

export const start = () => {
  app.listen(3000, () => {
    console.log("Server started at 3000");
  });
};
