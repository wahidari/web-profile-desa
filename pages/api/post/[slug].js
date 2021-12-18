// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { posts } from "./data";

export default function singlePostHandler({ query: { slug } }, res) {
  // console.log(slug)
  const filtered = posts.filter((post) => post.slug === slug);

  // Post with slug exists
  if (filtered.length > 0) {
    res.status(200).json(filtered[0]);
  } else {
    res.status(404).json({ message: `Post with slug: ${slug} not found.` });
  }
};

