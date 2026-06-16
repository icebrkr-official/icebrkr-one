import { NextResponse } from "next/server";
import db from "../../../lib/db";

export async function POST(request: Request) {
  try {
    const { name, email } = await request.json();

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required." },
        { status: 400 }
      );
    }

    try {
      // Insert registry into MySQL early_access table
      await db.query(
        "INSERT INTO early_access (name, email) VALUES (?, ?)",
        [name, email]
      );
      
      return NextResponse.json({ ok: true });
    } catch (dbError: any) {
      // MySQL code 1062 is ER_DUP_ENTRY (duplicate key violation)
      if (dbError.code === "ER_DUP_ENTRY" || dbError.errno === 1062) {
        return NextResponse.json(
          { error: "duplicate_email", message: "This email is already registered for early access." },
          { status: 409 }
        );
      }
      // Re-throw if it's some other database issue (e.g. connection error, table doesn't exist)
      throw dbError;
    }
  } catch (error: any) {
    console.error("Database error in /api/early-access:", error);
    return NextResponse.json(
      { error: "server_error", message: error.message || "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}
