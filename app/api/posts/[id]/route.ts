import { NextRequest, NextResponse } from "next/server";

// GET /api/posts/[id] - Get a specific post
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id);

  if (isNaN(id)) {
    return NextResponse.json({ error: "Invalid post ID" }, { status: 400 });
  }

  return NextResponse.json({
    id,
    title: "Example Post",
    content: "This is the content of the post",
    author: "Alice",
    createdAt: new Date().toISOString(),
  });
}

// PUT /api/posts/[id] - Update a post
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id);
  const body = await request.json();

  return NextResponse.json({
    id,
    ...body,
    updatedAt: new Date().toISOString(),
  });
}

// DELETE /api/posts/[id] - Delete a post
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id);

  return NextResponse.json(
    { message: "Post deleted successfully", id },
    { status: 204 }
  );
}
