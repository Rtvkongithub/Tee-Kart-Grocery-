from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Sample in-memory products (you can later hook this to PostgreSQL)
products = [
    {"id": 1, "name": "Tomatoes", "price": 30, "stock": "In Stock"},
    {"id": 2, "name": "Milk", "price": 45, "stock": "In Stock"},
    {"id": 3, "name": "Rice", "price": 60, "stock": "Low Stock"},
]

@app.route("/api/products", methods=["GET"])
def get_products():
    return jsonify(products)

@app.route("/api/products", methods=["POST"])
def add_product():
    data = request.json
    products.append({**data, "id": len(products) + 1})
    return jsonify({"message": "Product added!"}), 201

@app.route("/health", methods=["GET"])
def health():
    return "OK", 200

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
