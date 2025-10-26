# Example Test Repository for API Endpoint Testing

This repository is designed to demonstrate the automated API endpoint testing feature.

## 🚀 Quick Start

### 1. Push to GitHub

```bash
cd calhacks12.0/example-test-repo
git init
git add .
git commit -m "Initial commit: API testing example"
git remote add origin <your-github-repo-url>
git push -u origin main
```

### 2. Test in CalHacks App

1. Navigate to your CalHacks app
2. Go to the review page for this repository
3. Click the **"🧪 Test API Endpoints"** button
4. Watch it discover and test 21+ endpoints automatically!

## 📁 What's Included

This repo contains API endpoints in multiple frameworks:

- **Next.js App Router** (9 endpoints)
- **Express.js** (2 endpoints)
- **Flask** (4 endpoints)
- **FastAPI** (6 endpoints)

### Next.js Endpoints (`app/api/`)

- `GET /api/users` - Get all users
- `POST /api/users` - Create user
- `GET /api/posts` - Get all posts
- `POST /api/posts` - Create post
- `GET /api/posts/[id]` - Get specific post
- `PUT /api/posts/[id]` - Update post
- `DELETE /api/posts/[id]` - Delete post
- `POST /api/auth/login` - Login
- `GET /api/health` - Health check

### Express.js Routes (`routes/ping.js`)

- `GET /ping` - Ping endpoint
- `POST /ping/echo` - Echo endpoint

### Flask Routes (`app.py`)

- `GET /api/users`
- `POST /api/users`
- `GET /api/health`
- `DELETE /api/users/:id`

### FastAPI Routes (`main.py`)

- `GET /users`
- `POST /users`
- `GET /posts/{post_id}`
- `PUT /posts/{post_id}`
- `DELETE /posts/{post_id}`
- `GET /health`

## 🎯 Expected Test Results

When you test this repo, you should see:

- ✅ **21+ endpoints discovered**
- ✅ **Most endpoints pass** (demo mode)
- ❌ **Auth endpoint may fail** (expected in demo)
- ✅ **Summary stats** with pass/fail counts

## 🔧 Environment Variables

See `env.example` for all environment variables that will be parsed and used for testing.

## 📝 Next Steps

1. Push this repo to GitHub
2. Use your CalHacks app to test it
3. See comprehensive test results!
