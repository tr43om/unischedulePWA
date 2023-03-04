import { NextResponse } from "next/server";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const response = await fetch(
      `https://eservice.omsu.ru/schedule/backend/schedule/group/${id}`
    );

    const { data } = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
  }
}
