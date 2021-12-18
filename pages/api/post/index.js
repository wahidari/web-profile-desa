// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { posts } from "./data";

export default function allPostHandler(req, res) {
  res.status(200).json(posts);
};

