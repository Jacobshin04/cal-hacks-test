import { NextRequest, NextResponse } from "next/server";

// GET /api/posts - Get all posts
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const author = searchParams.get("author");
  const category = searchParams.get("category");

  return NextResponse.json({
    posts: [
      {
        id: 1,
        title: "Hello World",
        content: "This is my first post",
        author: "Alice",
        category: "tech",
      },
      {
        id: 2,
        title: "Second Post",
        content: "Another great post",
        author: "Bob",
        category: "design",
      },
    ],
    filters: { author, category },
  });
}

// POST /api/posts - Create a new post
export async function POST(request: NextRequest) {
  const body = await request.json();
  const { title, content, author, category } = body;

  return NextResponse.json(
    {
      id: Date.now(),
      title,
      content,
      author,
      category,
      createdAt: new Date().toISOString(),
    },
    { status: 201 }
  );
}
