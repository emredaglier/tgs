import db from "@/drizzle/db"; // Adjust path to your getData function
//import { verifyIdToken } from "@/firebase/admin"; // Import Firebase Admin
import {
  //NextRequest,
  NextResponse,
} from "next/server";

// request: NextRequest

export async function GET() {
  /*
  const authHeader = request.headers.get("Authorization");

  
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return new NextResponse("Unauthorized", { status: 401 });
  }
    

  
  const idToken = authHeader.split("Bearer ")[1]; // Extract the token

  try {
    const decodedToken = await verifyIdToken(idToken);

    if (decodedToken.uid === process.env.FIREBASE_ADMIN_UID) {
    */
  const data = await db.getData();

  return new NextResponse(JSON.stringify(data), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
  /*
    }

    // If token is valid, fetch data
  } catch (error) {
    console.error("Error verifying ID token:", error);
    return new NextResponse("Unauthorized", { status: 401 });
  }
    */
}
