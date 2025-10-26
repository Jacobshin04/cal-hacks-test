# Example Test Repository

This is a demo repository with various API endpoints to test the automated API testing feature.

## Endpoints

### Next.js App Router

- `GET /api/users` - Get all users with pagination
- `POST /api/users` - Create a new user
- `GET /api/posts` - Get all posts with filters
- `POST /api/posts` - Create a new post
- `GET /api/posts/[id]` - Get a specific post
- `PUT /api/posts/[id]` - Update a post
- `DELETE /api/posts/[id]` - Delete a post
- `POST /api/auth/login` - Login endpoint
- `GET /api/health` - Health check

### Express.js

- `GET /ping` - Ping endpoint
- `POST /ping/echo` - Echo endpoint

### Flask

- `GET /api/users` - Get users
- `POST /api/users` - Create user
- `GET /api/health` - Health check
- `DELETE /api/users/:id` - Delete user

### FastAPI

- `GET /users` - Get all users
- `POST /users` - Create user
- `GET /posts/{post_id}` - Get specific post
- `PUT /posts/{post_id}` - Update post
- `DELETE /posts/{post_id}` - Delete post
- `GET /health` - Health check

## Testing

Use the automated API testing feature to discover and test all these endpoints automatically!

1. Clone this repository
2. Push it to GitHub
3. Use the "Test API Endpoints" button in the review page
4. See all endpoints automatically discovered and tested

## Environment Variables

See `.env.example` for all required environment variables.
