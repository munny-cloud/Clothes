# គម្រោងលំហាត់អនុវត្ត E-Commerce (Practical Exercises 1 - 4)

គម្រោងនេះត្រូវបានបង្កើតឡើងស្របតាមតម្រូវការទាំង ៤ នៃឯកសារ **លំហាត់អនុវត្ត.pdf** ដោយប្រើប្រាស់ **React.js** សម្រាប់ Frontend (Exercise 1, 2, 3) និង **MySQL Relational Schema + ERD** សម្រាប់ Database Design (Exercise 4)។

---

## 📂 មាតិកានិងរចនាសម្ព័ន្ធឯកសារ (Project Structure)

```text
├── index.html                # HTML Entry point សម្រាប់ Vite React App
├── standalone_demo.html      # ឯកសារ Single-File Demo (ចុច Double Click បើកមើលក្នុង Browser ភ្លាមៗបាន)
├── database_schema.sql       # SQL Script បង្កើត Database, Tables ទាំង 5 & ទំនាក់ទំនង (Exercise 4)
├── package.json              # Dependencies (React, ReactDOM, Vite)
├── vite.config.js            # ការកំណត់ Vite Config
├── src/
│   ├── main.jsx              # React DOM render
│   ├── App.jsx               # Source code ពេញលេញសម្រាប់ Exercise 1, 2, 3
│   └── index.css             # UI Styling (ស្រដៀងនឹង Design ក្នុង PDF)
└── README.md
```

---

## 🚀 របៀបដំណើរការគម្រោង (How to Run)

### ជម្រើសទី ១: ដំណើរការ React Vite App (Development Server)
បើក Terminal ក្នុង Folder នេះរួចវាយពាក្យបញ្ជា៖
```bash
npm run dev
```
បន្ទាប់មកបើក Browser ទៅកាន់ link `http://localhost:5173`។

### ជម្រើសទី ២: បើកឯកសារ Standalone ភ្លាមៗ (No Node/NPM required)
លោកអ្នកគ្រាន់តែចុចពីរដង (Double-click) លើឯកសារ `standalone_demo.html` វានឹងដំណើរការមុខងារទាំងអស់ ១០០% លើ Browser ដោយផ្ទាល់។

---

## 📝 សេចក្តីសង្ខេបនៃលំហាត់ទាំង ៤

1. **Practical Exercise 1 – Shopping Cart**:
   - បង្ហាញផលិតផល ៤ មុខ: Laptop ($650), Mouse ($15), Keyboard ($25), Monitor ($120)
   - ប៊ូតុង Add to Cart
   - ទំព័រ Shopping Cart: View Cart, Update QTY (+/-), Remove Product, គណនា Subtotal & Grand Total

2. **Practical Exercise 2 – Checkout**:
   - Form ព័ត៌មានអតិថិជន: First Name, Last Name, Email, Phone, Address
   - Validate Required Fields (បង្ហាញ Alert/Error ពណ៌ក្រហមបើមិនទាន់បំពេញ)
   - ជ្រើសរើស Shipping Method (Free $0 / Express $9)
   - Order Summary & ប៊ូតុង Place Order

3. **Practical Exercise 3 – Order Confirmation**:
   - សារជោគជ័យ: "Order Placed Successfully!"
   - Order ID: ORD-0001
   - Customer Name
   - Order Date
   - Ordered Products (បញ្ជីទំនិញដែលបានទិញ)
   - Total Amount & Status: "Pending"

4. **Practical Exercise 4 – Database Design & ERD**:
   - តារាងទាំង ៥: Customers, Categories, Products, Orders, Order_Items
   - កំណត់ Primary Key, Foreign Key និងទំនាក់ទំនង (1-to-many, many-to-many)
