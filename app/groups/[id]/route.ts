import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const response = await fetch(
      `https://eservice.omsu.ru/schedule/backend/schedule/group/${id}`,
      { next: { revalidate: 60 } }
    );

    const { data } = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
  }
}
