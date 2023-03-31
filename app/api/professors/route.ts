import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const response = await fetch(
      "https://eservice.omsu.ru/schedule/backend/dict/tutors",
      { next: { revalidate: 180 } }
    );
    const { data } = await response.json();
    console.log(data);
    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
  }
}
