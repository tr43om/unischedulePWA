// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const response = await fetch(
      "https://eservice.omsu.ru/schedule/backend/dict/groups"
    );
    const { data } = await response.json();
    res.json(data);
  } catch (error) {
    console.error(error);
  }
}
