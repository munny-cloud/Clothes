# ⚡ NovaStore — Premium E-Commerce System

> ប្រព័ន្ធហាងទំនិញអេឡិចត្រូនិក និងម៉ូដទាន់សម័យ (Practical Exercises 1 - 4) បង្កើតឡើងដោយប្រើប្រាស់ **React.js + Vite + Modern Glassmorphism CSS + MySQL Database Design**។

🌐 **Live Demo Website (GitHub Pages)**: [https://munny-cloud.github.io/NovaStore/](https://munny-cloud.github.io/NovaStore/)

---

## 🚀 មាតិកានៃលំហាត់ទាំង ៤ (Practical Exercises)

1. **Practical Exercise 1 – Shopping Cart**:
   - បង្ហាញកាតាឡុកផលិតផលទាន់សម័យ (Products Catalog)
   - Add to Cart ជាមួយ Floating Toast Notification
   - Update Quantity (កែប្រែចំនួនទំនិញ `+` / `−` តាម Rounded Pill Counter)
   - Remove Product (លុបទំនិញចេញពីកន្ត្រក)
   - គណនា Subtotal & Grand Total ដោយស្វ័យប្រវត្តិ

2. **Practical Exercise 2 – Checkout**:
   - Form ព័ត៌មានអតិថិជន (First Name, Last Name, Email, Phone Number, Address)
   - Real-time Required Fields Validation (ផ្ទៀងផ្ទាត់ទម្រង់ Email & Required Inputs)
   - Shipping Method Selection (Standard Free Delivery vs Express Priority Delivery)
   - Order Summary Preview & ប៊ូតុង Place Order

3. **Practical Exercise 3 – Order Confirmation**:
   - សារអបអរសាទរជោគជ័យ: `Order Placed Successfully!` ជាមួយ Animated Checkmark
   - Order ID: `ORD-0001` (មានប៊ូតុង Copy Order ID)
   - Customer Details, Order Date & Delivery Address
   - Ordered Products Breakdown (បញ្ជីឈ្មោះទំនិញ ចំនួន និងតម្លៃរាយ)
   - Total Amount & Status: `⏳ Pending`
   - Simulated Barcode Receipt វិក្កយបត្រប្រណិត

4. **Practical Exercise 4 – Database Design (MySQL)**:
   - តារាងទិន្នន័យទាំង ៥: `customers`, `categories`, `products`, `orders`, `order_items`
   - រៀបចំទំនាក់ទំនង Relational Database (1:N, Many-to-Many via Junction Table)
   - ឯកសារ [database_schema.sql](database_schema.sql) រួមបញ្ចូលទាំង Table Creation និង Seed Data

---

## 🛠️ បច្ចេកវិទ្យាប្រើប្រាស់ (Tech Stack)

- **Frontend**: React 18, Vite 5, Modern CSS (Glassmorphism, CSS Variables, Flexbox/Grid)
- **Deployment**: GitHub Pages តាមរយៈ GitHub Actions CI/CD Workflow (`deploy.yml`)
- **Database**: MySQL Relational Schema & ERD

---

## 💻 របៀបតេស្ត និងដំណើរការលើម៉ាស៊ីនផ្ទាល់ (Local Setup)

### ១. Clone Repository
```bash
git clone https://github.com/munny-cloud/NovaStore.git
cd NovaStore
```

### ២. Install Dependencies
```bash
npm install
```

### ៣. ដំណើរការ Development Server
```bash
npm run dev
```
បើក Browser ទៅកាន់: `http://localhost:5173`

### ៤. Build សម្រាប់ Production
```bash
npm run build
```

---

## 📄 អាជ្ញាប័ណ្ណ (License)
គម្រោងនេះបង្កើតឡើងសម្រាប់គោលបំណងសិក្សា និងការអនុវត្ត (Educational & Practical Project)។
