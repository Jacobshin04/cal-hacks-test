import { NextRequest, NextResponse } from "next/server";

// GET /api/users - Get all users
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get("page") || "1";
  const limit = searchParams.get("limit") || "10";

  return NextResponse.json({
    users: [
      { id: 1, name: "Alice", email: "alice@example.com" },
      { id: 2, name: "Bob", email: "bob@example.com" },
    ],
    pagination: {
      page: parseInt(page),
      limit: parseInt(limit),
      total: 2,
    },
  });
}

// POST /api/users - Create a new user
export async function POST(request: NextRequest) {
  const body = await request.json();
  const { name, email } = body;

  if (!name || !email) {
    return NextResponse.json(
      { error: "Missing required fields: name, email" },
      { status: 400 }
    );
  }

  return NextResponse.json(
    {
      id: Date.now(),
      name,
      email,
      createdAt: new Date().toISOString(),
    },
    { status: 201 }
  );
}
