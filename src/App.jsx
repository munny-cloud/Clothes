import React, { useState } from 'react';
import './style.css';

// =========================================================================
// បញ្ជីម៉ូដសម្លៀកបំពាក់ទាំង ១២ មុខ (12 Fashion & Clothing Collection)
// =========================================================================
const CLOTHING_PRODUCTS = [
  {
    id: 1,
    name: 'Black Jacket Puffed',
    khName: 'អាវរងា Puffed Jacket ពណ៌ខ្មៅ',
    category: 'Outerwear',
    variant: 'Agora',
    size: 'XXL',
    color: 'Black',
    price: 499.0,
    rating: '4.9',
    reviews: 142,
    badge: 'Trending',
    image: 'https://images.unsplash.com/photo-1544923246-77307dd654cb?w=700&auto=format&fit=crop&q=80',
    description: 'អាវរងាក្រាស់ទាន់សម័យ សាច់ក្រណាត់ការពារទឹក និងភាពត្រជាក់បានយ៉ាងល្អឥតខ្ចោះ',
  },
  {
    id: 2,
    name: 'Women White Jacket Coat',
    khName: 'អាវធំស្ត្រីស្ទីលបែប Modern ពណ៌ស',
    category: 'Outerwear',
    variant: 'Allure',
    size: 'XL',
    color: 'Smoke White',
    price: 1000.0,
    rating: '5.0',
    reviews: 98,
    badge: 'Luxury',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=700&auto=format&fit=crop&q=80',
    description: 'អាវកូតពណ៌សប្រណិត សម្រាប់នារីទាន់សម័យ សាកសមសម្រាប់កម្មវិធី និងការងារផ្លូវការ',
  },
  {
    id: 3,
    name: 'Orange Streetwear Full Set',
    khName: 'ឈុត Streetwear ពណ៌ទឹកក្រូច',
    category: 'Streetwear',
    variant: 'Vibe',
    size: 'L',
    color: 'Bright Orange',
    price: 1200.0,
    rating: '4.8',
    reviews: 76,
    badge: 'Hot Drop',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=700&auto=format&fit=crop&q=80',
    description: 'ឈុតខោអាវស្ទីលយុវវ័យពណ៌ទឹកក្រូច ស្រស់ស្អាត ទាក់ទាញ និងមានផាសុកភាពខ្ពស់',
  },
  {
    id: 4,
    name: 'Men Top Black Hoodie',
    khName: 'អាវ Hoodie បុរស ពណ៌ខ្មៅសុទ្ធ',
    category: 'Hoodies',
    variant: 'Urban',
    size: 'L',
    color: 'Jet Black',
    price: 150.0,
    rating: '4.9',
    reviews: 215,
    badge: 'Best Seller',
    image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=700&auto=format&fit=crop&q=80',
    description: 'អាវរងាមានមួកសាច់កប្បាស 100% Heavyweight Cotton ទន់ស្រួលពាក់ មិនបែកព្រុយ',
  },
  {
    id: 5,
    name: 'Vintage Classic Denim Jacket',
    khName: 'អាវខូវប៊យ Denim បែប Vintage',
    category: 'Outerwear',
    variant: 'Classic',
    size: 'M',
    color: 'Indigo Blue',
    price: 180.0,
    rating: '4.8',
    reviews: 130,
    badge: 'Classic',
    image: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=700&auto=format&fit=crop&q=80',
    description: 'អាវខូវប៊យសាច់ក្រណាត់ស្វិតធន់ បែបស្ទីល Vintage មិនងាយហួសសម័យ',
  },
  {
    id: 6,
    name: 'Oversized Minimal Graphic Tee',
    khName: 'អាវយឺត Oversized កប្បាសសុទ្ធ',
    category: 'Tops',
    variant: 'Minimal',
    size: 'L',
    color: 'Off-White',
    price: 45.0,
    rating: '4.7',
    reviews: 310,
    badge: 'Popular',
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=700&auto=format&fit=crop&q=80',
    description: 'អាវយឺតកប្បាស 100% Breathable Cotton សាច់ត្រជាក់ ស្រួលពាក់ដើរលេងប្រចាំថ្ងៃ',
  },
  {
    id: 7,
    name: 'Slim Fit Chino Trousers',
    khName: 'ខោជើងវែង Chino សាច់ទន់',
    category: 'Bottoms',
    variant: 'Slim Fit',
    size: '32',
    color: 'Khaki Beige',
    price: 85.0,
    rating: '4.9',
    reviews: 84,
    badge: 'Essential',
    image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=700&auto=format&fit=crop&q=80',
    description: 'ខោជើងវែងបែបសុភាព សាច់យឺតបន្តិច ងាយស្រួលធ្វើចលនា និងពាក់ធ្វើការយ៉ាងថ្លៃថ្នូរ',
  },
  {
    id: 8,
    name: 'Summer Floral Maxi Dress',
    khName: 'រ៉ូបនារីផ្កាស្រស់ស្អាត Summer Dress',
    category: 'Dresses',
    variant: 'Floral Bloom',
    size: 'M',
    color: 'Pastel Floral',
    price: 120.0,
    rating: '5.0',
    reviews: 118,
    badge: 'Elegant',
    image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=700&auto=format&fit=crop&q=80',
    description: 'រ៉ូបវែងសាច់ក្រណាត់ទន់រលោង ខ្យល់ចេញចូលស្រួល ល្អឥតខ្ចោះសម្រាប់ដើរលេង និងដំណើរកម្សាន្ត',
  },
  {
    id: 9,
    name: 'Genuine Leather Biker Jacket',
    khName: 'អាវស្បែក Biker Jacket ប្រណិត',
    category: 'Outerwear',
    variant: 'Racer',
    size: 'XL',
    color: 'Charcoal Black',
    price: 650.0,
    rating: '4.9',
    reviews: 65,
    badge: 'Premium',
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=700&auto=format&fit=crop&q=80',
    description: 'អាវស្បែកសុទ្ធប្រណិត ការពារខ្យល់ ម៉ូដបែប Cool និងបង្កើនភាពទាក់ទាញ',
  },
  {
    id: 10,
    name: 'Urban Street Chunky Sneakers',
    khName: 'ស្បែកជើងប៉ាត់ Sneakers ស្ទីល Streetwear',
    category: 'Shoes',
    variant: 'Air Street',
    size: '42 EU',
    color: 'White/Grey',
    price: 220.0,
    rating: '4.8',
    reviews: 175,
    badge: 'Trending',
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=700&auto=format&fit=crop&q=80',
    description: 'ស្បែកជើងស្ទីលយុវវ័យ បាតទន់ដើរស្រួល មិនឈឺជើង សាកសមជាមួយគ្រប់ឈុតសម្លៀកបំពាក់',
  },
  {
    id: 11,
    name: 'Wool Blend Overcoat',
    khName: 'អាវកូតធំសាច់រោមចៀម Wool Blend',
    category: 'Outerwear',
    variant: 'Tailored',
    size: 'L',
    color: 'Camel Brown',
    price: 380.0,
    rating: '4.9',
    reviews: 52,
    badge: 'Winter Pick',
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=700&auto=format&fit=crop&q=80',
    description: 'អាវកូតវែងការពាររងាបានយ៉ាងល្អឥតខ្ចោះ ស្ទីលបែបអឺរ៉ុប សង្ហានិងទាន់សម័យ',
  },
  {
    id: 12,
    name: 'Relaxed Fit Cargo Pants',
    khName: 'ខោការហ្គោស្ទីលយុវវ័យ Cargo Pants',
    category: 'Bottoms',
    variant: 'Utility',
    size: '32',
    color: 'Olive Green',
    price: 75.0,
    rating: '4.7',
    reviews: 164,
    badge: 'Street Style',
    image: 'https://images.unsplash.com/photo-1517445312882-bc9910d016b7?w=700&auto=format&fit=crop&q=80',
    description: 'ខោហោប៉ៅច្រើនសាច់ស្វិត ស្ទីល Utility Streetwear ងាយស្រួលពាក់ដើរលេង',
  },
];

export default function App() {
  const [currentPage, setCurrentPage] = useState('products');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  // Preloaded Shopping Cart (Matching PDF Fashion Items)
  const [cart, setCart] = useState([
    {
      id: 1,
      name: 'Black Jacket Puffed',
      price: 499.0,
      variant: 'Agora',
      size: 'XXL',
      color: 'Black',
      image: CLOTHING_PRODUCTS[0].image,
      quantity: 1,
    },
    {
      id: 2,
      name: 'Women White Jacket Coat',
      price: 1000.0,
      variant: 'Allure',
      size: 'XL',
      color: 'Smoke White',
      image: CLOTHING_PRODUCTS[1].image,
      quantity: 2,
    },
    {
      id: 3,
      name: 'Orange Streetwear Full Set',
      price: 1200.0,
      variant: 'Vibe',
      size: 'L',
      color: 'Bright Orange',
      image: CLOTHING_PRODUCTS[2].image,
      quantity: 1,
    },
  ]);

  const [toastMessage, setToastMessage] = useState(null);

  // Customer Checkout Info (Exercise 2)
  const [customer, setCustomer] = useState({
    firstName: 'Divyansh',
    lastName: 'Agarwal',
    email: 'divyansh@webyansh.com',
    phone: '+91 6377588843',
    address: 'Street 210, Sensok, Phnom Penh',
    shippingMethod: 'free', // 'free' ($0) or 'express' ($12.99)
  });

  const [formErrors, setFormErrors] = useState({});
  const [confirmedOrder, setConfirmedOrder] = useState(null);
  const [orderCounter, setOrderCounter] = useState(1);
  const [copiedId, setCopiedId] = useState(false);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2500);
  };

  // Cart Functions
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
    showToast(`✨ បានបន្ថែម ${product.name} ទៅកន្ត្រក!`);
  };

  const updateQuantity = (id, newQty) => {
    if (newQty <= 0) {
      removeProduct(id);
      return;
    }
    setCart((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: newQty } : item))
    );
  };

  const removeProduct = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
    showToast('🗑️ បានលុបខោអាវចេញពីកន្ត្រក!');
  };

  // Calculations
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shippingFee = customer.shippingMethod === 'express' ? 12.99 : 0.0;
  const grandTotal = subtotal + shippingFee;
  const totalItemsCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const formatPrice = (amount) =>
    '$' + amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  // Filter List
  const categoriesList = ['All', 'Outerwear', 'Hoodies', 'Streetwear', 'Tops', 'Bottoms', 'Dresses', 'Shoes'];
  const filteredProducts = CLOTHING_PRODUCTS.filter((p) => {
    const matchesCat = activeCategory === 'All' || p.category === activeCategory;
    const matchesSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.khName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  // Checkout Validation
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomer((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!customer.firstName.trim()) errors.firstName = 'សូមបញ្ចូលនាមខ្លួន (First Name)';
    if (!customer.lastName.trim()) errors.lastName = 'សូមបញ្ចូលនាមត្រកូល (Last Name)';
    if (!customer.email.trim()) {
      errors.email = 'សូមបញ្ចូលអាសយដ្ឋាន Email';
    } else if (!/\S+@\S+\.\S+/.test(customer.email)) {
      errors.email = 'ទម្រង់អ៊ីមែលមិនត្រឹមត្រូវទេ!';
    }
    if (!customer.phone.trim()) errors.phone = 'សូមបញ្ចូលលេខទូរស័ព្ទ';
    if (!customer.address.trim()) errors.address = 'សូមបញ្ចូលអាសយដ្ឋានដឹកជញ្ជូន';

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    if (cart.length === 0) {
      alert('កន្ត្រករបស់អ្នកទទេ! សូមជ្រើសរើសខោអាវជាមុនសិន។');
      return;
    }

    if (!validateForm()) return;

    const formattedOrderId = `ORD-${String(orderCounter).padStart(4, '0')}`;
    const currentDate = new Date().toLocaleString('en-US', {
      dateStyle: 'medium',
      timeStyle: 'short',
    });

    const newOrder = {
      orderId: formattedOrderId,
      customerName: `${customer.firstName} ${customer.lastName}`,
      customerEmail: customer.email,
      customerPhone: customer.phone,
      customerAddress: customer.address,
      shippingMethodName:
        customer.shippingMethod === 'express'
          ? 'Express Priority Delivery (1-3 Days)'
          : 'Standard Free Shipping (7-14 Days)',
      shippingFee: shippingFee,
      orderDate: currentDate,
      products: [...cart],
      subtotal: subtotal,
      totalAmount: grandTotal,
      orderStatus: 'Pending',
    };

    setConfirmedOrder(newOrder);
    setOrderCounter((prev) => prev + 1);
    setCart([]);
    setCurrentPage('confirmation');
  };

  const copyOrderId = () => {
    if (confirmedOrder) {
      navigator.clipboard.writeText(confirmedOrder.orderId);
      setCopiedId(true);
      setTimeout(() => setCopiedId(false), 2000);
    }
  };

  return (
    <div className="app-container">
      {/* Toast Notification */}
      {toastMessage && <div className="toast-notice">{toastMessage}</div>}

      {/* TOP GLASS NAVIGATION (Webyansh Fashion) */}
      <header className="navbar">
        <div className="nav-wrapper">
          <div className="brand-group" onClick={() => setCurrentPage('products')}>
            <div className="brand-icon">👗</div>
            <div>
              <span className="brand-title">Webyansh</span>
              <span className="brand-tag">Fashion Store</span>
            </div>
          </div>

          {/* Stepper Progress */}
          <div className="stepper-nav">
            <div
              className={`step-item ${currentPage === 'products' || currentPage === 'cart' ? 'active' : 'completed'}`}
              onClick={() => setCurrentPage('cart')}
            >
              <span className="step-circle">1</span>
              <span>Cart</span>
            </div>
            <span className="step-divider">›</span>
            <div
              className={`step-item ${currentPage === 'checkout' ? 'active' : confirmedOrder ? 'completed' : ''}`}
              onClick={() => cart.length > 0 && setCurrentPage('checkout')}
            >
              <span className="step-circle">2</span>
              <span>Checkout</span>
            </div>
            <span className="step-divider">›</span>
            <div className={`step-item ${currentPage === 'confirmation' ? 'active' : ''}`}>
              <span className="step-circle">3</span>
              <span>Confirmation</span>
            </div>
          </div>

          {/* Right Action */}
          <div className="nav-actions">
            {currentPage !== 'products' && (
              <button className="nav-store-btn" onClick={() => setCurrentPage('products')}>
                🧥 Shop Clothes ({CLOTHING_PRODUCTS.length})
              </button>
            )}
            <button className="nav-cart-btn" onClick={() => setCurrentPage('cart')}>
              <span>🛍️</span>
              <span>Cart</span>
              <span className="cart-pill">{totalItemsCount}</span>
            </button>
          </div>
        </div>
      </header>

      {/* MAIN WRAPPER */}
      <main className="main-wrapper">
        {/* =====================================================================
            PAGE 1: CLOTHING PRODUCTS CATALOG
            ===================================================================== */}
        {currentPage === 'products' && (
          <div>
            <div className="hero-banner">
              <span className="hero-pill">✨ New Fashion Drop • {CLOTHING_PRODUCTS.length} Styles</span>
              <h1 className="hero-title">
                Trending <span>Clothing & Fashion</span>
              </h1>
              <p className="hero-desc">
                ម៉ូដសម្លៀកបំពាក់ទាន់សម័យ បែបយុវវ័យ និងផ្លូវការ (Add to Cart, Update QTY, Calculate Total)
              </p>
            </div>

            {/* Search Input & Category Filters */}
            <div style={{ marginBottom: '2.5rem' }}>
              <div style={{ maxWidth: '520px', margin: '0 auto 1.5rem', position: 'relative' }}>
                <span style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', fontSize: '1.1rem', color: '#94a3b8' }}>
                  🔍
                </span>
                <input
                  type="text"
                  placeholder="ស្វែងរកម៉ូដខោអាវ (Search clothes, jackets, hoodies...)"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.85rem 1.25rem 0.85rem 2.8rem',
                    borderRadius: '9999px',
                    border: '1px solid #cbd5e1',
                    fontSize: '0.95rem',
                    outline: 'none',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
                    background: 'white',
                  }}
                />
              </div>

              {/* Category Pills */}
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                {categoriesList.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    style={{
                      padding: '0.45rem 1.15rem',
                      borderRadius: '9999px',
                      border: '1px solid',
                      borderColor: activeCategory === cat ? '#0f172a' : '#e2e8f0',
                      background: activeCategory === cat ? '#0f172a' : 'white',
                      color: activeCategory === cat ? 'white' : '#64748b',
                      fontSize: '0.85rem',
                      fontWeight: 700,
                      cursor: 'pointer',
                      transition: 'all 0.15s ease',
                      boxShadow: activeCategory === cat ? '0 4px 12px rgba(15,23,42,0.15)' : 'none',
                    }}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Products Grid */}
            {filteredProducts.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '3rem', color: '#64748b' }}>
                <p style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>👗</p>
                <h3>រកមិនឃើញម៉ូដសម្លៀកបំពាក់ដែលត្រូវនឹងពាក្យស្វែងរកទេ</h3>
                <button
                  className="btn-link"
                  onClick={() => {
                    setSearchQuery('');
                    setActiveCategory('All');
                  }}
                >
                  Clear search filters
                </button>
              </div>
            ) : (
              <div className="product-grid-4">
                {filteredProducts.map((product) => {
                  const inCart = cart.find((item) => item.id === product.id);
                  return (
                    <div key={product.id} className="modern-product-card">
                      <div className="card-visual">
                        <span className="visual-badge">{product.badge}</span>
                        <img src={product.image} alt={product.name} />
                      </div>

                      <div className="card-details">
                        <div style={{ display: 'flex', gap: '0.35rem', marginBottom: '0.4rem' }}>
                          <span style={{ fontSize: '0.72rem', background: '#f1f5f9', color: '#475569', padding: '0.15rem 0.5rem', borderRadius: '4px', fontWeight: 600 }}>
                            Size: {product.size}
                          </span>
                          <span style={{ fontSize: '0.72rem', background: '#f1f5f9', color: '#475569', padding: '0.15rem 0.5rem', borderRadius: '4px', fontWeight: 600 }}>
                            {product.color}
                          </span>
                        </div>
                        <h3 className="card-name">{product.name}</h3>
                        <p style={{ fontSize: '0.8rem', color: '#64748b', marginBottom: '0.35rem' }}>{product.khName}</p>
                        <p className="card-desc">{product.description}</p>

                        <div className="card-action-bar">
                          <div className="price-box">
                            <span className="price-sub">Price</span>
                            <span className="price-amount">{formatPrice(product.price)}</span>
                          </div>
                          <button className="btn-add-glow" onClick={() => addToCart(product)}>
                            + Add {inCart && `(${inCart.quantity})`}
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {cart.length > 0 && (
              <div style={{ marginTop: '3.5rem', display: 'flex', justifyContent: 'center' }}>
                <button
                  className="btn-proceed-cta"
                  style={{ width: 'auto', padding: '1rem 2.75rem' }}
                  onClick={() => setCurrentPage('cart')}
                >
                  Go to Shopping Cart ({totalItemsCount} items • {formatPrice(subtotal)}) →
                </button>
              </div>
            )}
          </div>
        )}

        {/* =====================================================================
            PAGE 2: SHOPPING CART (Exercise 1)
            ===================================================================== */}
        {currentPage === 'cart' && (
          <div>
            <div style={{ marginBottom: '2rem' }}>
              <button className="btn-back-link" onClick={() => setCurrentPage('products')}>
                ← Back to Clothes Catalog
              </button>
              <h1 style={{ fontSize: '1.85rem', fontWeight: 800, marginTop: '0.5rem', color: '#0f172a' }}>
                Shopping Cart
              </h1>
              <p style={{ color: '#64748b', fontSize: '0.95rem' }}>
                ពិនិត្យទំនិញ បង្កើន/បន្ថយចំនួន (Update QTY) និងលុបទំនិញ (Remove)
              </p>
            </div>

            {cart.length === 0 ? (
              <div className="empty-cart-display">
                <div className="empty-cart-icon">🛍️</div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '0.5rem' }}>
                  កន្ត្រកទំនិញរបស់អ្នកទទេស្អាត
                </h3>
                <p style={{ color: '#64748b', marginBottom: '1.5rem' }}>
                  មិនទាន់មានខោអាវក្នុងកន្ត្រកនៅឡើយទេ។ សូមជ្រើសរើសទំនិញដើម្បីបន្ត!
                </p>
                <button
                  className="btn-proceed-cta"
                  style={{ width: 'auto', margin: '0 auto', padding: '0.8rem 2rem' }}
                  onClick={() => setCurrentPage('products')}
                >
                  ← ទៅជ្រើសរើសសម្លៀកបំពាក់ឥឡូវនេះ
                </button>
              </div>
            ) : (
              <div className="two-col-layout">
                {/* Left: Cart Items List */}
                <div className="glass-card">
                  <div className="panel-header">
                    <h2 className="panel-title">
                      <span>👗 Selected Clothes</span>
                    </h2>
                    <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#64748b' }}>
                      {totalItemsCount} Items in Cart
                    </span>
                  </div>

                  <div>
                    {cart.map((item) => (
                      <div key={item.id} className="cart-item-card">
                        <img src={item.image} alt={item.name} className="cart-thumb" />
                        <div className="cart-item-info">
                          <h4 className="cart-item-title">{item.name}</h4>
                          <div style={{ fontSize: '0.78rem', color: '#64748b', marginBottom: '0.25rem' }}>
                            {item.size && <span>Size: {item.size} • </span>}
                            {item.color && <span>Color: {item.color}</span>}
                          </div>
                          <span className="cart-item-unit-price">{formatPrice(item.price)} each</span>
                        </div>

                        {/* QTY Counter */}
                        <div className="qty-pill-counter">
                          <button
                            className="btn-counter-ctrl"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            title="Decrease quantity"
                          >
                            −
                          </button>
                          <span className="qty-counter-val">{item.quantity}</span>
                          <button
                            className="btn-counter-ctrl"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            title="Increase quantity"
                          >
                            +
                          </button>
                        </div>

                        {/* Subtotal per item */}
                        <div className="cart-item-subtotal">
                          {formatPrice(item.price * item.quantity)}
                        </div>

                        {/* Remove item */}
                        <button
                          className="btn-delete-item"
                          onClick={() => removeProduct(item.id)}
                          title="Remove item"
                        >
                          🗑️
                        </button>
                      </div>
                    ))}
                  </div>

                  <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid #f1f5f9' }}>
                    <button className="btn-back-link" onClick={() => setCurrentPage('products')}>
                      ← បន្តជ្រើសរើសខោអាវបន្ថែម (Continue Shopping)
                    </button>
                  </div>
                </div>

                {/* Right: Summary */}
                <div className="glass-card sticky-summary">
                  <h3 className="panel-title" style={{ marginBottom: '1.25rem' }}>
                    Order Summary
                  </h3>

                  <div className="summary-breakdown">
                    <div className="breakdown-row">
                      <span>Subtotal</span>
                      <strong style={{ color: '#0f172a' }}>{formatPrice(subtotal)}</strong>
                    </div>
                    <div className="breakdown-row">
                      <span>Delivery Fee</span>
                      <span style={{ color: '#64748b' }}>
                        {shippingFee === 0 ? 'Free ($0.00)' : formatPrice(shippingFee)}
                      </span>
                    </div>
                    <div className="breakdown-row total-grand">
                      <span>Grand Total</span>
                      <strong>{formatPrice(grandTotal)}</strong>
                    </div>
                  </div>

                  <button className="btn-proceed-cta" onClick={() => setCurrentPage('checkout')}>
                    Proceed to Checkout →
                  </button>

                  <div className="security-trust-box">
                    <span>🔒 256-Bit SSL Secure Checkout</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* =====================================================================
            PAGE 3: CHECKOUT (Exercise 2)
            ===================================================================== */}
        {currentPage === 'checkout' && (
          <div>
            <div style={{ marginBottom: '2rem' }}>
              <button className="btn-back-link" onClick={() => setCurrentPage('cart')}>
                ← Back to Cart
              </button>
              <h1 style={{ fontSize: '1.85rem', fontWeight: 800, marginTop: '0.5rem', color: '#0f172a' }}>
                Practical Exercise 2: Checkout
              </h1>
              <p style={{ color: '#64748b', fontSize: '0.95rem' }}>
                ព័ត៌មានអតិថិជន និងការដឹកជញ្ជូន (Customer Details & Shipping Method)
              </p>
            </div>

            <form onSubmit={handlePlaceOrder} className="two-col-layout">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div className="glass-card">
                  <h3 className="form-section-title">
                    <span>👤</span> Customer Information
                  </h3>

                  <div className="checkout-grid">
                    <div className="input-box">
                      <label className="input-label">First Name *</label>
                      <div className="input-field-wrap">
                        <span className="input-field-icon">👤</span>
                        <input
                          type="text"
                          name="firstName"
                          className={`modern-input ${formErrors.firstName ? 'input-invalid' : ''}`}
                          placeholder="Divyansh"
                          value={customer.firstName}
                          onChange={handleInputChange}
                        />
                      </div>
                      {formErrors.firstName && <span className="error-hint">{formErrors.firstName}</span>}
                    </div>

                    <div className="input-box">
                      <label className="input-label">Last Name *</label>
                      <div className="input-field-wrap">
                        <span className="input-field-icon">👤</span>
                        <input
                          type="text"
                          name="lastName"
                          className={`modern-input ${formErrors.lastName ? 'input-invalid' : ''}`}
                          placeholder="Agarwal"
                          value={customer.lastName}
                          onChange={handleInputChange}
                        />
                      </div>
                      {formErrors.lastName && <span className="error-hint">{formErrors.lastName}</span>}
                    </div>

                    <div className="input-box col-full">
                      <label className="input-label">Email Address *</label>
                      <div className="input-field-wrap">
                        <span className="input-field-icon">✉️</span>
                        <input
                          type="email"
                          name="email"
                          className={`modern-input ${formErrors.email ? 'input-invalid' : ''}`}
                          placeholder="divyansh@webyansh.com"
                          value={customer.email}
                          onChange={handleInputChange}
                        />
                      </div>
                      {formErrors.email && <span className="error-hint">{formErrors.email}</span>}
                    </div>

                    <div className="input-box col-full">
                      <label className="input-label">Phone Number *</label>
                      <div className="input-field-wrap">
                        <span className="input-field-icon">📞</span>
                        <input
                          type="tel"
                          name="phone"
                          className={`modern-input ${formErrors.phone ? 'input-invalid' : ''}`}
                          placeholder="+91 6377588843"
                          value={customer.phone}
                          onChange={handleInputChange}
                        />
                      </div>
                      {formErrors.phone && <span className="error-hint">{formErrors.phone}</span>}
                    </div>

                    <div className="input-box col-full">
                      <label className="input-label">Street Address *</label>
                      <div className="input-field-wrap">
                        <span className="input-field-icon">📍</span>
                        <input
                          type="text"
                          name="address"
                          className={`modern-input ${formErrors.address ? 'input-invalid' : ''}`}
                          placeholder="Street 210, Sensok, Phnom Penh"
                          value={customer.address}
                          onChange={handleInputChange}
                        />
                      </div>
                      {formErrors.address && <span className="error-hint">{formErrors.address}</span>}
                    </div>
                  </div>
                </div>

                {/* Shipping Selector */}
                <div className="glass-card">
                  <h3 className="form-section-title">
                    <span>🚚</span> Shipping Method
                  </h3>

                  <div className="shipping-selector-group">
                    <label
                      className={`shipping-radio-card ${customer.shippingMethod === 'free' ? 'active' : ''}`}
                    >
                      <div className="shipping-left-side">
                        <input
                          type="radio"
                          name="shippingMethod"
                          value="free"
                          checked={customer.shippingMethod === 'free'}
                          onChange={() => setCustomer((prev) => ({ ...prev, shippingMethod: 'free' }))}
                          className="shipping-radio-input"
                        />
                        <div>
                          <div className="shipping-name">Standard Free Delivery</div>
                          <div className="shipping-eta">Arrives in 7-14 business days</div>
                        </div>
                      </div>
                      <span className="shipping-price-tag">$0.00</span>
                    </label>

                    <label
                      className={`shipping-radio-card ${customer.shippingMethod === 'express' ? 'active' : ''}`}
                    >
                      <div className="shipping-left-side">
                        <input
                          type="radio"
                          name="shippingMethod"
                          value="express"
                          checked={customer.shippingMethod === 'express'}
                          onChange={() => setCustomer((prev) => ({ ...prev, shippingMethod: 'express' }))}
                          className="shipping-radio-input"
                        />
                        <div>
                          <div className="shipping-name">Express Priority Delivery ⚡</div>
                          <div className="shipping-eta">Fast shipping in 1-3 business days</div>
                        </div>
                      </div>
                      <span className="shipping-price-tag">$12.99</span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Right Column: Preview & Place Order */}
              <div className="glass-card sticky-summary">
                <h3 className="panel-title" style={{ marginBottom: '1.25rem' }}>
                  Your Cart Summary
                </h3>

                <div className="mini-cart-preview">
                  {cart.map((item) => (
                    <div key={item.id} className="mini-item-row">
                      <div className="mini-item-left">
                        <img src={item.image} alt={item.name} className="mini-item-thumb" />
                        <div>
                          <div style={{ fontWeight: 700, fontSize: '0.85rem' }}>{item.name}</div>
                          <span style={{ color: '#64748b', fontSize: '0.78rem' }}>
                            Size: {item.size} • Qty: {item.quantity}
                          </span>
                        </div>
                      </div>
                      <strong style={{ fontSize: '0.9rem' }}>{formatPrice(item.price * item.quantity)}</strong>
                    </div>
                  ))}
                </div>

                <div className="summary-breakdown">
                  <div className="breakdown-row">
                    <span>Subtotal</span>
                    <span>{formatPrice(subtotal)}</span>
                  </div>
                  <div className="breakdown-row">
                    <span>Delivery</span>
                    <span>{shippingFee === 0 ? 'Free ($0.00)' : formatPrice(shippingFee)}</span>
                  </div>
                  <div className="breakdown-row total-grand">
                    <span>Grand Total</span>
                    <strong>{formatPrice(grandTotal)}</strong>
                  </div>
                </div>

                <button type="submit" className="btn-proceed-cta">
                  <span>🛍️</span> Place Order ({formatPrice(grandTotal)})
                </button>

                <div className="security-trust-box">
                  <span>🛡️ 100% Money-Back & Buyer Protection</span>
                </div>
              </div>
            </form>
          </div>
        )}

        {/* =====================================================================
            PAGE 4: ORDER CONFIRMATION (Exercise 3)
            ===================================================================== */}
        {currentPage === 'confirmation' && confirmedOrder && (
          <div className="confirmation-container">
            <div className="receipt-card">
              <div className="animated-check-icon">✓</div>
              <h1 className="confirm-head-title">Order Placed Successfully!</h1>
              <p className="confirm-sub-caption">
                សូមអរគុណ! ការបញ្ជាទិញខោអាវម៉ូដរបស់អ្នកត្រូវបានកត់ត្រាទុកដោយជោគជ័យ។
              </p>

              <div className="order-metadata-box">
                <div>
                  <span className="meta-label-tag">Order ID</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span className="order-id-badge">{confirmedOrder.orderId}</span>
                    <button
                      onClick={copyOrderId}
                      style={{
                        background: '#e0e7ff',
                        color: '#4f46e5',
                        border: 'none',
                        borderRadius: '4px',
                        padding: '0.15rem 0.45rem',
                        fontSize: '0.7rem',
                        fontWeight: 700,
                        cursor: 'pointer',
                      }}
                    >
                      {copiedId ? 'Copied! ✓' : 'Copy'}
                    </button>
                  </div>
                </div>

                <div>
                  <span className="meta-label-tag">Order Status</span>
                  <div>
                    <span className="status-pill-pending">⏳ {confirmedOrder.orderStatus}</span>
                  </div>
                </div>

                <div>
                  <span className="meta-label-tag">Customer Name</span>
                  <div className="meta-strong-val">{confirmedOrder.customerName}</div>
                </div>

                <div>
                  <span className="meta-label-tag">Order Date</span>
                  <div className="meta-strong-val">{confirmedOrder.orderDate}</div>
                </div>

                <div>
                  <span className="meta-label-tag">Contact Email</span>
                  <div className="meta-strong-val">{confirmedOrder.customerEmail}</div>
                </div>

                <div>
                  <span className="meta-label-tag">Phone Number</span>
                  <div className="meta-strong-val">{confirmedOrder.customerPhone}</div>
                </div>

                <div className="meta-col full-col">
                  <span className="meta-label-tag">Delivery Address & Method</span>
                  <div className="meta-strong-val">
                    {confirmedOrder.customerAddress} ({confirmedOrder.shippingMethodName})
                  </div>
                </div>
              </div>

              {/* Receipt Items */}
              <div className="receipt-items-list">
                <h3 className="receipt-items-heading">
                  👗 Ordered Clothes ({confirmedOrder.products.length})
                </h3>

                {confirmedOrder.products.map((item) => (
                  <div key={item.id} className="receipt-row">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                      <img
                        src={item.image}
                        alt={item.name}
                        style={{ width: '40px', height: '50px', borderRadius: '6px', objectFit: 'cover' }}
                      />
                      <div>
                        <strong>{item.name}</strong>
                        <div style={{ fontSize: '0.78rem', color: '#64748b' }}>
                          Size: {item.size} • Qty: {item.quantity}
                        </div>
                      </div>
                    </div>
                    <strong style={{ fontSize: '0.95rem' }}>{formatPrice(item.price * item.quantity)}</strong>
                  </div>
                ))}

                <div className="receipt-total-section">
                  <div className="receipt-calc-line">
                    <span>Subtotal</span>
                    <span>{formatPrice(confirmedOrder.subtotal)}</span>
                  </div>
                  <div className="receipt-calc-line">
                    <span>Delivery Fee</span>
                    <span>{formatPrice(confirmedOrder.shippingFee)}</span>
                  </div>
                  <div className="receipt-grand-line">
                    <span>Total Amount</span>
                    <span>{formatPrice(confirmedOrder.totalAmount)}</span>
                  </div>
                </div>
              </div>

              {/* Barcode Receipt */}
              <div className="simulated-barcode">
                {[6, 2, 4, 1, 5, 2, 8, 3, 2, 7, 1, 4, 3, 6, 2, 5, 1, 4, 7, 2, 5, 3, 6, 2].map(
                  (weight, idx) => (
                    <div
                      key={idx}
                      className="bar-line"
                      style={{ width: `${weight * 1.5}px` }}
                    />
                  )
                )}
              </div>
              <span style={{ fontSize: '0.75rem', fontFamily: 'monospace', color: '#94a3b8' }}>
                {confirmedOrder.orderId}-FASHION-RECEIPT
              </span>

              <div style={{ marginTop: '2rem' }}>
                <button
                  className="btn-new-order"
                  onClick={() => {
                    setConfirmedOrder(null);
                    setCurrentPage('products');
                  }}
                >
                  🛍️ Continue Shopping Clothes
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
