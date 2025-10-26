import { NextRequest, NextResponse } from "next/server";

// POST /api/auth/login - Login endpoint
export async function POST(request: NextRequest) {
  const body = await request.json();
  const { email, password } = body;

  // Simulate authentication check
  if (!email || !password) {
    return NextResponse.json(
      { error: "Email and password are required" },
      { status: 400 }
    );
  }

  // Simulate invalid credentials
  if (password.length < 6) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  return NextResponse.json({
    token: "mock_jwt_token_" + Date.now(),
    user: {
      id: 1,
      email,
      name: "Test User",
    },
  });
}
