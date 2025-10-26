# Complete Endpoint List

This document lists all API endpoints that will be automatically discovered and tested.

## Summary

- **Total Endpoints**: 21
- **Next.js Routes**: 9
- **Express Routes**: 2
- **Flask Routes**: 4
- **FastAPI Routes**: 6

---

## Next.js App Router Endpoints

### `/app/api/users/route.ts`

**GET `/api/users`**

- Method: `GET`
- Parameters:
  - Query: `page` (optional, default: "1")
  - Query: `limit` (optional, default: "10")
- Response: List of users with pagination

**POST `/api/users`**

- Method: `POST`
- Parameters:
  - Body: `name` (required)
  - Body: `email` (required)
- Response: Created user object

---

### `/app/api/posts/route.ts`

**GET `/api/posts`**

- Method: `GET`
- Parameters:
  - Query: `author` (optional)
  - Query: `category` (optional)
- Response: List of posts with filters

**POST `/api/posts`**

- Method: `POST`
- Parameters:
  - Body: `title`
  - Body: `content`
  - Body: `author`
  - Body: `category`
- Response: Created post object

---

### `/app/api/posts/[id]/route.ts`

**GET `/api/posts/[id]`**

- Method: `GET`
- Parameters:
  - Path: `id` (number)
- Response: Single post object

**PUT `/api/posts/[id]`**

- Method: `PUT`
- Parameters:
  - Path: `id` (number)
  - Body: post data
- Response: Updated post object

**DELETE `/api/posts/[id]`**

- Method: `DELETE`
- Parameters:
  - Path: `id` (number)
- Response: 204 No Content

---

### `/app/api/auth/login/route.ts`

**POST `/api/auth/login`**

- Method: `POST`
- Parameters:
  - Body: `email` (required)
  - Body: `password` (required)
- Response: JWT token and user object
- Note: May return 401 in demo mode

---

### `/app/api/health/route.ts`

**GET `/api/health`**

- Method: `GET`
- Response: Health status, timestamp, uptime

---

## Express.js Routes

### `/routes/ping.js`

**GET `/ping`**

- Method: `GET`
- Response: Pong message

**POST `/ping/echo`**

- Method: `POST`
- Parameters:
  - Body: `message` (optional)
- Response: Echo of the message

---

## Flask Routes

### `/app.py`

**GET `/api/users`**

- Method: `GET`
- Parameters:
  - Query: `page` (optional, default: 1)
- Response: List of users

**POST `/api/users`**

- Method: `POST`
- Parameters:
  - Body: user data (JSON)
- Response: Created user (201)

**GET `/api/health`**

- Method: `GET`
- Response: Status OK

**DELETE `/api/users/:id`**

- Method: `DELETE`
- Parameters:
  - Path: `id` (integer)
- Response: 204 No Content

---

## FastAPI Routes

### `/main.py`

**GET `/users`**

- Method: `GET`
- Parameters:
  - Query: `page` (default: 1, min: 1)
  - Query: `limit` (default: 10, min: 1, max: 100)
- Response: List of users with pagination

**POST `/users`**

- Method: `POST`
- Parameters:
  - Body: `User` model with `name` and `email`
- Response: Created user

**GET `/posts/{post_id}`**

- Method: `GET`
- Parameters:
  - Path: `post_id` (integer, min: 1)
- Response: Single post object

**PUT `/posts/{post_id}`**

- Method: `PUT`
- Parameters:
  - Path: `post_id` (integer)
  - Body: `Post` model
- Response: Updated post

**DELETE `/posts/{post_id}`**

- Method: `DELETE`
- Parameters:
  - Path: `post_id` (integer)
- Response: Deletion confirmation

**GET `/health`**

- Method: `GET`
- Response: Health status

---

## Test Coverage

### Successful Endpoints (Expected 200/201)

- All GET endpoints (except auth)
- All POST endpoints (70% success rate in demo)
- All PUT endpoints
- All DELETE endpoints

### Auth Endpoints (Expected 401)

- POST /api/auth/login (demo mode without valid credentials)

### Health Endpoints (Always Success)

- GET /api/health
- GET /health

---

## How to Test

1. Push this repo to GitHub
2. In your CalHacks app, navigate to the review page
3. Click "🧪 Test API Endpoints"
4. Watch all 21+ endpoints get discovered and tested automatically!

The system will:

- ✅ Discover all endpoints
- ✅ Identify HTTP methods
- ✅ Extract query, body, and path parameters
- ✅ Execute tests (demo mode with mock responses)
- ✅ Show comprehensive results
