-- ==========================================================
-- E-COMMERCE DATABASE DESIGN (MySQL)
-- Practical Exercise 4: 5 Relational Tables & 12 Fashion Products
-- ==========================================================

CREATE DATABASE IF NOT EXISTS ecommerce_fashion_db;
USE ecommerce_fashion_db;

-- 1. Customers Table
CREATE TABLE IF NOT EXISTS customers (
    customer_id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    phone VARCHAR(20) NOT NULL,
    address TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 2. Categories Table
CREATE TABLE IF NOT EXISTS categories (
    category_id INT AUTO_INCREMENT PRIMARY KEY,
    category_name VARCHAR(100) NOT NULL
);

-- 3. Products Table (Clothing with size, color, variant)
CREATE TABLE IF NOT EXISTS products (
    product_id INT AUTO_INCREMENT PRIMARY KEY,
    category_id INT,
    product_name VARCHAR(150) NOT NULL,
    variant VARCHAR(50),
    size VARCHAR(20),
    color VARCHAR(50),
    price DECIMAL(10, 2) NOT NULL,
    image VARCHAR(255),
    stock INT DEFAULT 0,
    FOREIGN KEY (category_id) REFERENCES categories(category_id)
        ON DELETE SET NULL
        ON UPDATE CASCADE
);

-- 4. Orders Table
CREATE TABLE IF NOT EXISTS orders (
    order_id INT AUTO_INCREMENT PRIMARY KEY,
    customer_id INT NOT NULL,
    order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    shopping_method VARCHAR(100),
    total_amount DECIMAL(10, 2) NOT NULL,
    status VARCHAR(50) DEFAULT 'Pending',
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

-- 5. Order_Items Table (Junction Table)
CREATE TABLE IF NOT EXISTS order_items (
    order_item_id INT AUTO_INCREMENT PRIMARY KEY,
    order_id INT NOT NULL,
    product_id INT NOT NULL,
    quantity INT NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (order_id) REFERENCES orders(order_id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
    FOREIGN KEY (product_id) REFERENCES products(product_id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

-- ==========================================================
-- SEED DATA (12 Fashion & Clothing Products)
-- ==========================================================
INSERT INTO categories (category_name) VALUES
('Outerwear'),
('Hoodies'),
('Streetwear'),
('Tops'),
('Bottoms'),
('Dresses'),
('Shoes');

INSERT INTO products (category_id, product_name, variant, size, color, price, stock) VALUES
(1, 'Black Jacket Puffed', 'Agora', 'XXL', 'Black', 499.00, 50),
(1, 'Women White Jacket Coat', 'Allure', 'XL', 'Smoke White', 1000.00, 20),
(3, 'Orange Streetwear Full Set', 'Vibe', 'L', 'Bright Orange', 1200.00, 15),
(2, 'Men Top Black Hoodie', 'Urban', 'L', 'Jet Black', 150.00, 60),
(1, 'Vintage Classic Denim Jacket', 'Classic', 'M', 'Indigo Blue', 180.00, 40),
(4, 'Oversized Minimal Graphic Tee', 'Minimal', 'L', 'Off-White', 45.00, 100),
(5, 'Slim Fit Chino Trousers', 'Slim Fit', '32', 'Khaki Beige', 85.00, 50),
(6, 'Summer Floral Maxi Dress', 'Floral Bloom', 'M', 'Pastel Floral', 120.00, 30),
(1, 'Genuine Leather Biker Jacket', 'Racer', 'XL', 'Charcoal Black', 650.00, 20),
(7, 'Urban Street Chunky Sneakers', 'Air Street', '42 EU', 'White/Grey', 220.00, 45),
(1, 'Wool Blend Overcoat', 'Tailored', 'L', 'Camel Brown', 380.00, 25),
(5, 'Relaxed Fit Cargo Pants', 'Utility', '32', 'Olive Green', 75.00, 80);
