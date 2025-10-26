// Simple Express server to run the example API endpoints
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

// Debug logging middleware - logs every request
app.use((req, res, next) => {
  const timestamp = new Date().toISOString();

  console.log(`\n🔵 [${timestamp}] ${req.method} ${req.url}`);

  // Log headers (excluding auth tokens for security)
  const sanitizedHeaders = { ...req.headers };
  if (sanitizedHeaders.authorization) {
    sanitizedHeaders.authorization = "[REDACTED]";
  }
  console.log(`   📋 Headers:`, JSON.stringify(sanitizedHeaders, null, 2));

  // Log body if present
  if (req.body && Object.keys(req.body).length > 0) {
    console.log(`   📦 Body:`, JSON.stringify(req.body, null, 2));
  }

  // Log query parameters
  if (Object.keys(req.query).length > 0) {
    console.log(`   🔍 Query:`, JSON.stringify(req.query, null, 2));
  }

  // Log URL parameters
  if (Object.keys(req.params).length > 0) {
    console.log(`   🎯 Params:`, JSON.stringify(req.params, null, 2));
  }

  // Intercept response to log it
  const originalSend = res.send;
  res.send = function (data) {
    console.log(`   ✅ Response Status: ${res.statusCode}`);
    if (data && typeof data === "string" && data.length < 500) {
      console.log(`   📤 Response Body:`, data.substring(0, 500));
    } else if (data && typeof data === "object") {
      console.log(
        `   📤 Response Body:`,
        JSON.stringify(data, null, 2).substring(0, 500)
      );
    }
    return originalSend.apply(res, arguments);
  };

  next();
});

// Port from environment or default
const PORT = process.env.PORT || 3001;

// Health check
app.get("/api/health", (req, res) => {
  res.json({ status: "healthy", timestamp: new Date().toISOString() });
});

// Users endpoints
app.get("/api/users", (req, res) => {
  const { page = "1", limit = "10" } = req.query;
  res.json({
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
});

app.post("/api/users", (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res
      .status(400)
      .json({ error: "Missing required fields: name, email" });
  }
  res.status(201).json({
    id: Date.now(),
    name,
    email,
    createdAt: new Date().toISOString(),
  });
});

// Posts endpoints
app.get("/api/posts", (req, res) => {
  const { author, category } = req.query;
  res.json({
    posts: [
      {
        id: 1,
        title: "Hello World",
        content: "Content",
        author: "Alice",
        category: "tech",
      },
      {
        id: 2,
        title: "Second Post",
        content: "Content",
        author: "Bob",
        category: "design",
      },
    ],
    filters: { author, category },
  });
});

app.post("/api/posts", (req, res) => {
  const { title, content, author, category } = req.body;
  res.status(201).json({
    id: Date.now(),
    title,
    content,
    author,
    category,
    createdAt: new Date().toISOString(),
  });
});

app.get("/api/posts/:id", (req, res) => {
  const id = parseInt(req.params.id);
  res.json({
    id,
    title: "Example Post",
    content: "Content",
    author: "Alice",
    createdAt: new Date().toISOString(),
  });
});

app.put("/api/posts/:id", (req, res) => {
  const id = parseInt(req.params.id);
  res.json({
    id,
    ...req.body,
    updatedAt: new Date().toISOString(),
  });
});

app.delete("/api/posts/:id", (req, res) => {
  const id = parseInt(req.params.id);
  res.status(204).json({ message: "Post deleted", id });
});

// Auth endpoint
app.post("/api/auth/login", (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: "Email and password required" });
  }
  res.json({
    token: "mock_jwt_token_" + Date.now(),
    user: { id: 1, email, name: "Test User" },
  });
});

// Ping endpoint
app.get("/ping", (req, res) => {
  res.json({ message: "pong", timestamp: new Date().toISOString() });
});

app.post("/ping/echo", (req, res) => {
  const { message } = req.body;
  res.json({ echo: message || "No message provided" });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Test server running on http://localhost:${PORT}`);
  console.log(`📝 Available endpoints:`);
  console.log(`   GET    /api/health`);
  console.log(`   GET    /api/users`);
  console.log(`   POST   /api/users`);
  console.log(`   GET    /api/posts`);
  console.log(`   POST   /api/posts`);
  console.log(`   GET    /api/posts/:id`);
  console.log(`   PUT    /api/posts/:id`);
  console.log(`   DELETE /api/posts/:id`);
  console.log(`   POST   /api/auth/login`);
  console.log(`   GET    /ping`);
  console.log(`   POST   /ping/echo`);
});
