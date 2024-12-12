import express, { Application } from "express";
import cors from 'cors';
import postsRouter from "./routes/posts";
import usersRouter from "./routes/users";
const PORT = process.env.PORT || 3030;

const app: Application = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("/posts", postsRouter);
app.use("/users", usersRouter);

app.listen(PORT, () => {
  console.log(`API server is running on port ${PORT}`);
});
