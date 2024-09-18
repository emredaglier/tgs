import { NextResponse } from "next/server";
import db from "@/drizzle/db";

export async function POST(request: Request) {
  try {
    const body = await request.text();
    if (!body) {
      return NextResponse.json(
        { error: "Missing request body" },
        { status: 400 }
      );
    }
    const data = JSON.parse(body);
    const { title, content, image } = data;

    if (!title || !content || !image) {
      return NextResponse.json(
        { error: "Missing title, content, or image" },
        { status: 400 }
      );
    }
    // Insert data into the database
    await db.insertData(data);

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
