# Restaurant Backend API

This is the backend API for managing products (dishes) and categories in a restaurant system.  
Built with Node.js/Express and MongoDB.

**Base URL:** `https://restaurant-backend-antopolis.vercel.app/`

---

## Table of Contents
- [Products API](#products-api)  
- [Categories API](#categories-api)  
- [Notes](#notes)

---

## Products API

| Method | Endpoint | Body (JSON) | Description |
|--------|---------|-------------|------------|
| POST   | `/api/products` | `{ "name": "Mushroom Omelette", "category": "category_id", "price": 190, "rating": 5, "image": "https://example.com/omelette.jpg" }` | Create a new product (category ID must exist) |
| GET    | `/api/products` | - | Get all products |
| GET    | `/api/products?category=<category_id>` | - | Get products filtered by category |
| DELETE | `/api/products/id=<product_id>` | - | Delete a product by ID |

**Example:**  
GET https://restaurant-backend-antopolis.vercel.app/api/products

GET https://restaurant-backend-antopolis.vercel.app/api/products?category=6923f93c8eaa948016c6f089

DELETE https://restaurant-backend-antopolis.vercel.app/api/products/id=6923f93c8eaa948016c6f090



---

## Categories API

| Method | Endpoint | Body (JSON) | Description |
|--------|---------|-------------|------------|
| POST   | `/api/categories` | `{ "name": "Breakfast" }` | Create a new category |
| GET    | `/api/categories` | - | Get all categories |
| DELETE | `/api/categories/id=<category_id>` | - | Delete a category by ID |

**Example:**  
GET https://restaurant-backend-antopolis.vercel.app/api/categories

DELETE https://restaurant-backend-antopolis.vercel.app/api/categories/id=6923f93c8eaa948016c6f089
