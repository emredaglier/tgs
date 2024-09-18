import { getData } from "@/drizzle/db"; // Adjust path to your getData function
import { verifyIdToken } from "@/firebase/admin"; // Import Firebase Admin
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const authHeader = request.headers.get("Authorization");

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const idToken = authHeader.split("Bearer ")[1]; // Extract the token

  try {
    // Verify the token with Firebase Admin
    const decodedToken = await verifyIdToken(idToken);

    // If token is valid, fetch data
    const data = await getData();

    return new NextResponse(JSON.stringify(data), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error verifying ID token:", error);
    return new NextResponse("Unauthorized", { status: 401 });
  }
}
