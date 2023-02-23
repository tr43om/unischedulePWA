// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { OmsuGroupType } from "../../../types/index";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { schedule } = req.query as { schedule: string };
    const response = await fetch(
      `https://eservice.omsu.ru/schedule/backend/schedule/group/${schedule}`
    );

    console.log("FETCH");
    const { data } = await response.json();

    res.json(data);
  } catch (error) {
    console.error(error);
  }
}
