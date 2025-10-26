# Setup Instructions for Testing

## Quick Start

1. **Copy this folder to your GitHub account**

   ```bash
   git clone <this-repo-url>
   cd example-test-repo
   ```

2. **Push to GitHub**

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

3. **Test with the Auto-Testing Feature**
   - Navigate to your CalHacks app
   - Go to the repository review page for `example-test-repo`
   - Click the "🧪 Test API Endpoints" button
   - Watch it automatically discover and test all endpoints!

## What Will Be Discovered

Your automated testing system will find:

### Next.js Routes (app/api/)

- ✅ `GET /api/users` - with `page` and `limit` query params
- ✅ `POST /api/users` - requires `name` and `email` body
- ✅ `GET /api/posts` - with `author` and `category` query params
- ✅ `POST /api/posts` - requires `title`, `content`, `author`, `category` body
- ✅ `GET /api/posts/[id]` - dynamic route with `id` param
- ✅ `PUT /api/posts/[id]` - update route with body
- ✅ `DELETE /api/posts/[id]` - delete route (204 response)
- ✅ `POST /api/auth/login` - auth endpoint (might fail in demo)
- ✅ `GET /api/health` - health check endpoint

### Express.js Routes (routes/)

- ✅ `GET /ping`
- ✅ `POST /ping/echo`

### Flask Routes (app.py)

- ✅ `GET /api/users`
- ✅ `POST /api/users`
- ✅ `GET /api/health`
- ✅ `DELETE /api/users/:id`

### FastAPI Routes (main.py)

- ✅ `GET /users` - with query params
- ✅ `POST /users` - with body validation
- ✅ `GET /posts/{post_id}` - path params
- ✅ `PUT /posts/{post_id}`
- ✅ `DELETE /posts/{post_id}`
- ✅ `GET /health`

## Environment Variables

The system will:

1. Read `env.example` from your repo
2. Generate default test values for all variables
3. Use mock values like:
   - `API_SECRET_KEY` → `mock_api_secret_key_for_testing`
   - `DATABASE_URL` → `postgresql://localhost:5432/testdb`
   - `PORT` → `3000`

## Expected Test Results (Demo Mode)

- ✅ **Health endpoints** → 200 OK
- ✅ **GET endpoints** → 200 OK with mock data
- ❌ **Auth endpoints** → 401 Unauthorized (expected in demo)
- ✅ **POST endpoints** → 201 Created (70% success rate in mock)
- ✅ **DELETE endpoints** → 204 No Content
- ✅ **PUT/PATCH endpoints** → 200 OK

## Total Endpoints: 20+

Your system will discover and test approximately 20+ endpoints across multiple frameworks!
