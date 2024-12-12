import { Router, Request, Response } from "express";
import { getPosts, addPost, deletePostById } from "../db/posts/posts";
import { getUserById } from "../db/users/users";

const router = Router();

const crypto = require('crypto');

function generateId() {
  return crypto.randomBytes(16).toString('hex');
}

router.get("/", async (req: Request, res: Response) => {
  const userId = req.query.userId?.toString();
  if (!userId) {
    res.status(400).send({ error: "userId is required" });
    return;
  }
  const user = await getUserById(userId);
  const posts = await getPosts(userId);
  const { name, email } = user
  const userInfo = { name, email }
  res.send({posts, userInfo});
});

router.delete("/:postId", async (req: Request, res: Response) => {
  const postId = req.params.postId;
  await deletePostById(postId);
  res.status(200).send({success: true});
});

router.post("/", async (req: Request, res: Response) => {
  const { userId, title, body } = req.body;
  if (!userId) {
    res.status(400).send({ error: "userId is required" });
    return;
  }
  if (!title || !body) {
    res.status(400).send({ error: "title and body required" });
    return;
  }
  const createdAt = new Date().toISOString();
  const id = generateId();
  const payload = {id, user_id: userId, title, body, created_at: createdAt}
  await addPost(payload);
  res.status(201).send({success: true});
});

export default router;
