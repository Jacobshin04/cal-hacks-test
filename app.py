# Flask example routes
from flask import Flask, request, jsonify

app = Flask(__name__)

# GET /api/users - Get users
@app.get("/api/users")
def get_users():
    page = request.args.get("page", 1, type=int)
    return jsonify({
        "users": [
            {"id": 1, "name": "Alice"},
            {"id": 2, "name": "Bob"}
        ],
        "page": page
    })

# POST /api/users - Create user
@app.post("/api/users")
def create_user():
    data = request.json
    return jsonify({"id": 1, **data}), 201

# GET /api/health - Health check
@app.route("/api/health", methods=["GET"])
def health():
    return jsonify({"status": "ok"})

# DELETE /api/users/:id - Delete user
@app.route("/api/users/<int:id>", methods=["DELETE"])
def delete_user(id):
    return jsonify({"message": "deleted", "id": id}), 204

if __name__ == "__main__":
    app.run(port=3000)

