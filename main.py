# FastAPI example routes
from fastapi import FastAPI, Query, Path
from pydantic import BaseModel
from typing import Optional

app = FastAPI()

class User(BaseModel):
    name: str
    email: str

class Post(BaseModel):
    title: str
    content: str
    author: str

# GET /users - Get all users
@app.get("/users")
async def get_users(page: int = Query(1, ge=1), limit: int = Query(10, ge=1, le=100)):
    return {
        "users": [
            {"id": 1, "name": "Alice", "email": "alice@example.com"},
            {"id": 2, "name": "Bob", "email": "bob@example.com"},
        ],
        "page": page,
        "limit": limit,
    }

# POST /users - Create user
@app.post("/users")
async def create_user(user: User):
    return {"id": 123, **user.dict()}

# GET /posts/{post_id} - Get specific post
@app.get("/posts/{post_id}")
async def get_post(post_id: int = Path(..., ge=1)):
    return {
        "id": post_id,
        "title": "Example Post",
        "content": "Content here",
        "author": "Alice",
    }

# PUT /posts/{post_id} - Update post
@app.put("/posts/{post_id}")
async def update_post(post_id: int, post: Post):
    return {"id": post_id, **post.dict()}

# DELETE /posts/{post_id} - Delete post
@app.delete("/posts/{post_id}")
async def delete_post(post_id: int):
    return {"message": "deleted", "id": post_id}

# GET /health - Health check
@app.get("/health")
async def health_check():
    return {"status": "healthy", "version": "1.0.0"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=3000)

