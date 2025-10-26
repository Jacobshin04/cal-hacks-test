# Real API Testing Instructions

This guide explains how to test the API endpoints with REAL HTTP requests (not mocks).

## Quick Start

### 1. Install Dependencies & Start Server

```bash
cd calhacks12.0/example-test-repo
npm install
npm start
```

The server will start on `http://localhost:3001` with all endpoints ready.

### 2. Test with the CalHacks App

1. Push this repo to GitHub (if not already)
2. In your CalHacks app, navigate to this repository
3. Click "🧪 Test API Endpoints"
4. You should see REAL responses!

## Available Endpoints

All endpoints will be discovered and tested automatically:

### Health

- `GET /api/health` → `200 OK` ✅

### Users

- `GET /api/users` → `200 OK` ✅
- `POST /api/users` → `201 Created` ✅

### Posts

- `GET /api/posts` → `200 OK` ✅
- `POST /api/posts` → `201 Created` ✅
- `GET /api/posts/:id` → `200 OK` ✅
- `PUT /api/posts/:id` → `200 OK` ✅
- `DELETE /api/posts/:id` → `204 No Content` ✅

### Auth

- `POST /api/auth/login` → `200 OK` ✅

### Ping

- `GET /ping` → `200 OK` ✅
- `POST /ping/echo` → `200 OK` ✅

## Expected Results

When you run the test:

✅ **10 endpoints** should be discovered
✅ **All endpoints** should receive real HTTP responses
✅ **Response times** will be actual network latency
✅ **Response bodies** will contain real data from the server

## Troubleshooting

### "Failed to connect" errors

- Make sure the server is running: `npm start`
- Check it's on port 3001
- Verify firewall settings

### "No endpoints found"

- The system now searches ALL directories recursively
- Should find: `route.ts`, `.js`, `.py` files
- Check if server.js is properly formatted

## Testing Different Scenarios

### Test with invalid data

The POST endpoints will return 400 errors when required fields are missing.

### Test with auth

The login endpoint works with any email/password combo (demo mode).

### Test health endpoints

Health and ping endpoints always return 200 OK.

## What Makes This "Real" Testing?

✅ **Actual HTTP requests** - Uses `fetch()` to call real server
✅ **Real response codes** - Status codes come from actual responses  
✅ **Real response times** - Measures actual network latency
✅ **Real response bodies** - Shows actual data returned by server
✅ **Connection errors** - Will fail if server isn't running

Previously it was just showing mock/simulated results. Now it's **genuinely testing** the APIs!
