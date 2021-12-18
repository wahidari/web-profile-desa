// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { agendas } from "./data";

export default function allPostHandler(req, res) {
  res.status(200).json(agendas);
};

