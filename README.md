# Restaurant Backend API

This is the backend API for managing **products** and **categories** in a restaurant application. The API allows you to **get**, **create**, **update**, and **delete** products and categories.

**Base URL:**  
`https://restaurant-backend-antopolis.vercel.app/`

---

## Products

### 1. Get All Products
- **Endpoint:** `/api/products`
- **Method:** `GET`
- **Description:** Retrieve all products.
- **Request Example:**
```http
GET https://restaurant-backend-antopolis.vercel.app/api/products

2. Create a Product

Endpoint: /api/products

Method: POST

Description: Create a new product.

Request Body Example: 
{
  "name": "Mushroom Omelette",
  "category": "6923f93c8eaa948016c6f089",
  "price": 12.99,
  "rating": 4.5,
  "image": "https://example.com/image.jpg"
}


4. Delete a Product

Endpoint: /api/products/:productId

Method: DELETE

Description: Delete a product by its ID.

Request Example:DELETE https://restaurant-backend-antopolis.vercel.app/api/products/paste_id_here


1. Get All Categories

Endpoint: /api/categories

Method: GET

Description: Retrieve all categories.

Request Example:GET https://restaurant-backend-antopolis.vercel.app/api/categories

2. Create a Category

Endpoint: /api/categories

Method: POST

Description: Create a new category.

Request Body Example:
{
  "name": "Breakfast"
}

4. Delete a Category

Endpoint: /api/categories/:categoryId

Method: DELETE

Description: Delete a category by its ID.

Request Example:DELETE https://restaurant-backend-antopolis.vercel.app/api/categories/paste_id_here
