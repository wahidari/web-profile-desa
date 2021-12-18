// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { posts } from "../data";

export default function singlePostHandler({ query: { id } }, res) {

  const filtered = posts.filter((post) => post.category === id);

  // Post with category exists
  if (filtered.length > 0) {
    res.status(200).json(filtered);
  } else {
    res.status(404).json({ message: `Post with category: ${id} not found.` });
  }
};

