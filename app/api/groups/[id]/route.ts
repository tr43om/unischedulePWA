import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;

    const response = await fetch(
      `https://eservice.omsu.ru/schedule/backend/schedule/group/${id}`,
<<<<<<< HEAD
      { next: { revalidate: 180 } }
    );

    const { data } = await response.json();
    console.log("GROUPS", data);
=======
      { next: { revalidate: 10 }, cache: "no-store" }
    );

    const { data } = await response.json();
>>>>>>> master

    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
  }
}
