import { useEffect, useMemo, useState } from "react";
import "./App.css";

const defaultFoods = [

  {
    id: 1,
    name: "Smoky BBQ Burger",
    category: "Burgers",
    price: 189,
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 2,
    name: "Classic Cheeseburger",
    category: "Burgers",
    price: 169,
    image:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 3,
    name: "Double Beef Burger",
    category: "Burgers",
    price: 249,
    image:
      "https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 4,
    name: "Crispy Chicken Burger",
    category: "Burgers",
    price: 199,
    image:
      "https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=1000&q=85",
  },

  // PIZZA
  {
    id: 5,
    name: "Truffle Cheese Pizza",
    category: "Pizza",
    price: 349,
    image:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 6,
    name: "Pepperoni Pizza",
    category: "Pizza",
    price: 299,
    image:
      "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 7,
    name: "Four Cheese Pizza",
    category: "Pizza",
    price: 329,
    image:
      "https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 8,
    name: "Hawaiian Pizza",
    category: "Pizza",
    price: 289,
    image:
      "https://images.unsplash.com/photo-1566843972142-a7fcb70de55a?auto=format&fit=crop&w=1000&q=85",
  },

  // PASTA
  {
    id: 9,
    name: "Creamy Carbonara",
    category: "Pasta",
    price: 229,
    image:
      "https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 10,
    name: "Classic Spaghetti",
    category: "Pasta",
    price: 199,
    image:
      "https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 11,
    name: "Creamy Pesto Pasta",
    category: "Pasta",
    price: 239,
    image:
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 12,
    name: "Spicy Seafood Pasta",
    category: "Pasta",
    price: 279,
    image:
      "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&w=1000&q=85",
  },

  // CHICKEN
  {
    id: 13,
    name: "Crispy Chicken",
    category: "Chicken",
    price: 199,
    image:
      "https://images.unsplash.com/photo-1562967916-eb82221dfb92?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 14,
    name: "Spicy Chicken Wings",
    category: "Chicken",
    price: 219,
    image:
      "https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 15,
    name: "Buffalo Chicken",
    category: "Chicken",
    price: 239,
    image:
      "https://images.unsplash.com/photo-1608039755401-742074f0548d?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 16,
    name: "Chicken Tenders",
    category: "Chicken",
    price: 189,
    image:
      "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=1000&q=85",
  },

  // SIDES
  {
    id: 17,
    name: "Loaded Fries",
    category: "Sides",
    price: 139,
    image:
      "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 18,
    name: "Cheesy Fries",
    category: "Sides",
    price: 129,
    image:
      "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 19,
    name: "Onion Rings",
    category: "Sides",
    price: 119,
    image:
      "https://images.unsplash.com/photo-1639024471283-03518883512d?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 20,
    name: "Mozzarella Sticks",
    category: "Sides",
    price: 159,
    image:
      "https://images.unsplash.com/photo-1548340748-6d2b7d7da5b8?auto=format&fit=crop&w=1000&q=85",
  },

  // DRINKS
  {
    id: 21,
    name: "Classic Milk Tea",
    category: "Drinks",
    price: 119,
    image:
      "https://images.unsplash.com/photo-1558857563-b371033873b8?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 22,
    name: "Iced Caramel Coffee",
    category: "Drinks",
    price: 149,
    image:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 23,
    name: "Iced Chocolate",
    category: "Drinks",
    price: 139,
    image:
      "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 24,
    name: "Strawberry Smoothie",
    category: "Drinks",
    price: 159,
    image:
      "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 25,
    name: "Mango Shake",
    category: "Drinks",
    price: 149,
    image:
      "https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 26,
    name: "Fresh Lemonade",
    category: "Drinks",
    price: 99,
    image:
      "https://images.unsplash.com/photo-1523677011781-c91d1bbe2f75?auto=format&fit=crop&w=1000&q=85",
  },
];

const categories = [
  { name: "All", icon: "⌂" },
  { name: "Burgers", icon: "B" },
  { name: "Pizza", icon: "P" },
  { name: "Pasta", icon: "PA" },
  { name: "Chicken", icon: "C" },
  { name: "Sides", icon: "S" },
  { name: "Drinks", icon: "D" },
];

const CART_KEY = "crave_cart";
const ORDER_KEY = "crave_orders";
const FAVORITE_KEY = "crave_favorites";

function getStorage(key, fallback) {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : fallback;
  } catch {
    return fallback;
  }
}

function saveStorage(key, data) {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch {
    // Ignore localStorage errors.
  }
}

function App() {
  const [page, setPage] = useState("home");

  const [foods] = useState(defaultFoods);

  const [cart, setCart] = useState(() =>
    getStorage(CART_KEY, [])
  );

  const [orders, setOrders] = useState(() =>
    getStorage(ORDER_KEY, [])
  );

  const [favorites, setFavorites] = useState(() =>
    getStorage(FAVORITE_KEY, [])
  );

  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");

  const [cartOpen, setCartOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  const [order, setOrder] = useState(null);

  const [customer, setCustomer] = useState({
    name: "",
    phone: "",
    address: "",
  });

  useEffect(() => {
    saveStorage(CART_KEY, cart);
  }, [cart]);

  useEffect(() => {
    saveStorage(ORDER_KEY, orders);
  }, [orders]);

  useEffect(() => {
    saveStorage(FAVORITE_KEY, favorites);
  }, [favorites]);

  const filteredFoods = useMemo(() => {
    const keyword = search.toLowerCase().trim();

    return foods.filter((food) => {
      const categoryMatch =
        category === "All" || food.category === category;

      const searchMatch =
        food.name.toLowerCase().includes(keyword) ||
        food.category.toLowerCase().includes(keyword);

      return categoryMatch && searchMatch;
    });
  }, [foods, category, search]);

  const itemCount = cart.reduce(
    (total, item) => total + item.qty,
    0
  );

  const subtotal = cart.reduce(
    (total, item) => total + item.subtotal,
    0
  );

  const deliveryFee = cart.length > 0 ? 49 : 0;
  const total = subtotal + deliveryFee;

  function scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  function goHome() {
    setPage("home");
    setCategory("All");
    setSearch("");
    scrollTop();
  }

  function goMenu(selectedCategory = "All") {
    setPage("menu");
    setCategory(selectedCategory);
    scrollTop();
  }

  function goFavorites() {
    setPage("favorites");
    setSearch("");
    setCategory("All");
    scrollTop();
  }

  function goOrders() {
    setPage("orders");
    scrollTop();
  }

  function addToCart(food) {
    setCart((currentCart) => {
      const existing = currentCart.find(
        (item) => item.product_id === food.id
      );

      if (existing) {
        const newQty = existing.qty + 1;

        return currentCart.map((item) =>
          item.product_id === food.id
            ? {
                ...item,
                qty: newQty,
                subtotal: item.price * newQty,
              }
            : item
        );
      }

      return [
        ...currentCart,
        {
          product_id: food.id,
          name: food.name,
          price: food.price,
          qty: 1,
          subtotal: food.price,
        },
      ];
    });

    setCartOpen(true);
  }

  function increase(productId) {
    setCart((currentCart) =>
      currentCart.map((item) => {
        if (item.product_id !== productId) return item;

        const qty = item.qty + 1;

        return {
          ...item,
          qty,
          subtotal: item.price * qty,
        };
      })
    );
  }

  function decrease(productId) {
    setCart((currentCart) =>
      currentCart
        .map((item) => {
          if (item.product_id !== productId) return item;

          const qty = item.qty - 1;

          return {
            ...item,
            qty,
            subtotal: item.price * qty,
          };
        })
        .filter((item) => item.qty > 0)
    );
  }

  function removeItem(productId) {
    setCart((currentCart) =>
      currentCart.filter(
        (item) => item.product_id !== productId
      )
    );
  }

  function toggleFavorite(foodId) {
    setFavorites((current) =>
      current.includes(foodId)
        ? current.filter((id) => id !== foodId)
        : [...current, foodId]
    );
  }

  function isFavorite(foodId) {
    return favorites.includes(foodId);
  }

  function updateCustomer(field, value) {
    setCustomer((current) => ({
      ...current,
      [field]: value,
    }));
  }

  function placeOrder() {
    const name = customer.name.trim();
    const phone = customer.phone.trim();
    const address = customer.address.trim();

    if (!name) {
      alert("Please enter your name.");
      return;
    }

    if (!phone) {
      alert("Please enter your phone number.");
      return;
    }

    if (phone.length < 7) {
      alert("Please enter a valid phone number.");
      return;
    }

    if (!address) {
      alert("Please enter your delivery address.");
      return;
    }

    if (cart.length === 0) {
      alert("Your cart is empty.");
      setCheckoutOpen(false);
      return;
    }

    const newOrder = {
      id: Math.floor(Math.random() * 900000) + 100000,
      customer: {
        name,
        phone,
        address,
      },
      items: [...cart],
      subtotal,
      deliveryFee,
      total,
      status: "Pending",
      date: new Date().toISOString(),
    };

    setOrders((current) => [newOrder, ...current]);
    setOrder(newOrder);

    setCart([]);
    setCheckoutOpen(false);
    setCartOpen(false);

    setCustomer({
      name: "",
      phone: "",
      address: "",
    });

    setPage("success");
    scrollTop();
  }

  function clearCart() {
    if (cart.length === 0) return;

    if (!window.confirm("Remove all items from your cart?")) {
      return;
    }

    setCart([]);
  }

  function clearAllData() {
    const confirmDelete = window.confirm(
      "Clear cart, favorites, and all orders?"
    );

    if (!confirmDelete) return;

    setCart([]);
    setOrders([]);
    setFavorites([]);
    setOrder(null);

    localStorage.removeItem(CART_KEY);
    localStorage.removeItem(ORDER_KEY);
    localStorage.removeItem(FAVORITE_KEY);

    alert("All saved data has been cleared.");
  }

  const favoriteFoods = foods.filter((food) =>
    favorites.includes(food.id)
  );

  return (
    <div className="app">
      <aside className="sidebar">
        <div
          className="sidebar-brand"
          onClick={goHome}
          role="button"
          tabIndex={0}
        >
          <div className="brand-logo">CR</div>

          <div>
            <strong>CRAVE</strong>
            <small>KITCHEN</small>
          </div>
        </div>

        <div className="sidebar-label">MENU</div>

        <nav className="sidebar-nav">
          <button
            className={page === "home" ? "active" : ""}
            onClick={goHome}
          >
            <span className="nav-icon">⌂</span>
            Home
          </button>

          <button
            className={page === "menu" ? "active" : ""}
            onClick={() => goMenu()}
          >
            <span className="nav-icon">☷</span>
            Our Menu
          </button>

          <button
            className={page === "favorites" ? "active" : ""}
            onClick={goFavorites}
          >
            <span className="nav-icon">♥</span>
            Favorites
            {favorites.length > 0 && (
              <b className="nav-count">{favorites.length}</b>
            )}
          </button>

          <button
            className={page === "orders" ? "active" : ""}
            onClick={goOrders}
          >
            <span className="nav-icon">▣</span>
            Orders
            {orders.length > 0 && (
              <b className="nav-count">{orders.length}</b>
            )}
          </button>
        </nav>

        <div className="sidebar-label category-label">
          CATEGORIES
        </div>

        <div className="sidebar-categories">
          {categories.slice(1).map((item) => (
            <button
              key={item.name}
              onClick={() => goMenu(item.name)}
              className={
                page === "menu" && category === item.name
                  ? "category-selected"
                  : ""
              }
            >
              <span>{item.icon}</span>
              {item.name}
            </button>
          ))}
        </div>

        <div className="sidebar-bottom">
          <div className="sidebar-promo">
            <div className="promo-circle">%</div>

            <strong>Hungry?</strong>

            <p>
              Get something delicious today.
            </p>

            <button onClick={() => goMenu()}>
              Order now
            </button>
          </div>

          <div className="sidebar-footer">
            <span className="status-dot" />
            Open now
          </div>
        </div>
      </aside>

      <div className="main-area">
        <header className="topbar">
          <div className="mobile-brand">
            <div className="brand-logo">CR</div>
            <strong>CRAVE</strong>
          </div>

          <div className="topbar-title">
            <span>GOOD FOOD</span>
            <strong>Made for you.</strong>
          </div>

          <div className="topbar-actions">
            <button
              className="cart-button"
              onClick={() => setCartOpen(true)}
            >
              <span className="cart-icon">🛒</span>
              <span className="cart-text">Cart</span>

              {itemCount > 0 && <b>{itemCount}</b>}
            </button>
          </div>
        </header>

        {page === "home" && (
          <main>
            <section className="hero">
              <div className="hero-copy">
                <div className="eyebrow">
                  <span />
                  FRESH • FAST • FLAVORFUL
                </div>

                <h1>
                  Food that
                  <br />
                  makes you
                  <em> happy.</em>
                </h1>

                <p>
                  Delicious comfort food made
                  with quality ingredients and
                  delivered straight to your
                  doorstep.
                </p>

                <div className="hero-buttons">
                  <button
                    className="primary-button"
                    onClick={() => goMenu()}
                  >
                    Explore Menu
                    <span>→</span>
                  </button>

                  <div className="delivery-box">
                    <div className="delivery-icon">
                      ⚡
                    </div>

                    <div>
                      <strong>25–35 min</strong>
                      <small>Average delivery</small>
                    </div>
                  </div>
                </div>

                <div className="customer-rating">
                  <div className="customer-avatars">
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>+</span>
                  </div>

                  <div>
                    <strong>4.9/5</strong>
                    <small>
                      from 2,000+ happy customers
                    </small>
                  </div>
                </div>
              </div>

              <div className="hero-visual">
                <div className="hero-bg-circle" />

                <div className="floating-card card-one">
                  <span>★</span>

                  <div>
                    <strong>4.9</strong>
                    <small>Top rated</small>
                  </div>
                </div>

                <div className="floating-card card-two">
                  <span>+</span>

                  <div>
                    <strong>Fresh</strong>
                    <small>Every day</small>
                  </div>
                </div>

                <div className="hero-image-wrapper">
                  <img
                    src={foods[0].image}
                    alt={foods[0].name}
                  />
                </div>

                <div className="hero-price">
                  <small>STARTING FROM</small>
                  <strong>₱99</strong>
                </div>
              </div>
            </section>

            <section className="features">
              <Feature
                icon="⚡"
                title="Lightning Fast"
                description="Hot & fresh delivery"
              />

              <Feature
                icon="✦"
                title="Fresh Ingredients"
                description="Quality you can taste"
              />

              <Feature
                icon="♥"
                title="Made With Love"
                description="Every order matters"
              />

              <Feature
                icon="✓"
                title="Secure Payment"
                description="Safe & easy checkout"
              />
            </section>

            <section className="content-section">
              <div className="section-heading">
                <div>
                  <span>OUR FAVORITES</span>

                  <h2>
                    Most loved
                    <em> dishes.</em>
                  </h2>
                </div>

                <button
                  onClick={() => goMenu()}
                  className="text-button"
                >
                  View full menu →
                </button>
              </div>

              <div className="food-grid">
                {foods.slice(0, 8).map((food) => (
                  <FoodCard
                    key={food.id}
                    food={food}
                    addToCart={addToCart}
                    favorite={isFavorite(food.id)}
                    toggleFavorite={toggleFavorite}
                  />
                ))}
              </div>
            </section>

            <section className="bottom-cta">
              <div>
                <span>HUNGRY YET?</span>

                <h2>
                  Your next favorite
                  <br />
                  meal is waiting.
                </h2>

                <button
                  className="primary-button"
                  onClick={() => goMenu()}
                >
                  Order Now →
                </button>
              </div>

              <img
                src={foods[5].image}
                alt={foods[5].name}
              />
            </section>
          </main>
        )}

        {page === "menu" && (
          <main className="menu-page">
            <section className="menu-heading">
              <div>
                <span>OUR MENU</span>

                <h1>
                  Pick your
                  <em> craving.</em>
                </h1>

                <p>
                  From juicy burgers to creamy
                  pasta, we have something for
                  everyone.
                </p>
              </div>

              <div className="search-box">
                <span>⌕</span>

                <input
                  type="text"
                  placeholder="Search your favorite food..."
                  value={search}
                  onChange={(e) =>
                    setSearch(e.target.value)
                  }
                />

                {search && (
                  <button
                    onClick={() => setSearch("")}
                    aria-label="Clear search"
                  >
                    ×
                  </button>
                )}
              </div>
            </section>

            <div className="mobile-category-bar">
              {categories.map((item) => (
                <button
                  key={item.name}
                  className={
                    category === item.name
                      ? "selected"
                      : ""
                  }
                  onClick={() =>
                    setCategory(item.name)
                  }
                >
                  {item.name}
                </button>
              ))}
            </div>

            <section className="menu-grid">
              {filteredFoods.map((food) => (
                <FoodCard
                  key={food.id}
                  food={food}
                  addToCart={addToCart}
                  large
                  favorite={isFavorite(food.id)}
                  toggleFavorite={toggleFavorite}
                />
              ))}
            </section>

            {filteredFoods.length === 0 && (
              <div className="no-results">
                <div>😕</div>

                <h2>No food found</h2>

                <p>
                  Try searching for something else.
                </p>

                <button
                  className="primary-button"
                  onClick={() => {
                    setSearch("");
                    setCategory("All");
                  }}
                >
                  Show all food
                </button>
              </div>
            )}
          </main>
        )}

        {page === "favorites" && (
          <main className="menu-page">
            <section className="menu-heading">
              <div>
                <span>YOUR FAVORITES</span>

                <h1>
                  Foods you
                  <em> love.</em>
                </h1>

                <p>
                  Your saved favorites are all
                  here.
                </p>
              </div>
            </section>

            {favoriteFoods.length > 0 ? (
              <section className="menu-grid">
                {favoriteFoods.map((food) => (
                  <FoodCard
                    key={food.id}
                    food={food}
                    addToCart={addToCart}
                    large
                    favorite
                    toggleFavorite={toggleFavorite}
                  />
                ))}
              </section>
            ) : (
              <div className="no-results">
                <div>♥</div>

                <h2>No favorites yet</h2>

                <p>
                  Tap the heart on a food you love.
                </p>

                <button
                  className="primary-button"
                  onClick={() => goMenu()}
                >
                  Browse Menu
                </button>
              </div>
            )}
          </main>
        )}

        {page === "orders" && (
          <main className="orders-page">
            <section className="menu-heading">
              <div>
                <span>ORDER HISTORY</span>

                <h1>
                  Your
                  <em> orders.</em>
                </h1>

                <p>
                  Check your previous Crave orders.
                </p>
              </div>

              {orders.length > 0 && (
                <button
                  className="clear-data-button"
                  onClick={clearAllData}
                >
                  Clear saved data
                </button>
              )}
            </section>

            {orders.length === 0 ? (
              <div className="no-results">
                <div>📦</div>

                <h2>No orders yet</h2>

                <p>
                  Your completed orders will appear
                  here.
                </p>

                <button
                  className="primary-button"
                  onClick={() => goMenu()}
                >
                  Start Ordering
                </button>
              </div>
            ) : (
              <section className="orders-list">
                {orders.map((savedOrder) => (
                  <OrderCard
                    key={savedOrder.id}
                    order={savedOrder}
                    foods={foods}
                  />
                ))}
              </section>
            )}
          </main>
        )}

        {page === "success" && order && (
          <main className="success-page">
            <div className="success-check">✓</div>

            <span className="success-label">
              ORDER CONFIRMED
            </span>

            <h1>
              Thanks, {order.customer.name}!
            </h1>

            <p>
              Your delicious order is being prepared.
            </p>

            <div className="order-number">
              ORDER #{order.id}
            </div>

            <div className="receipt-card">
              <div className="receipt-heading">
                <div>
                  <span>YOUR ORDER</span>

                  <h2>Order Summary</h2>
                </div>

                <strong>{order.status}</strong>
              </div>

              {order.items.map((item) => (
                <div
                  className="receipt-item"
                  key={item.product_id}
                >
                  <div className="receipt-food">
                    <img
                      src={
                        foods.find(
                          (food) =>
                            food.id ===
                            item.product_id
                        )?.image
                      }
                      alt={item.name}
                    />

                    <div>
                      <strong>{item.name}</strong>

                      <small>
                        Qty: {item.qty}
                      </small>
                    </div>
                  </div>

                  <b>₱{item.subtotal}</b>
                </div>
              ))}

              <div className="receipt-total">
                <span>Total</span>

                <strong>₱{order.total}</strong>
              </div>
            </div>

            <div className="success-actions">
              <button
                className="primary-button"
                onClick={() => goMenu()}
              >
                Order Again →
              </button>

              <button
                className="secondary-button"
                onClick={goOrders}
              >
                View Orders
              </button>
            </div>
          </main>
        )}
      </div>

      {cartOpen && (
        <div
          className="overlay"
          onClick={() => setCartOpen(false)}
        />
      )}

      <aside
        className={
          cartOpen
            ? "cart-drawer open"
            : "cart-drawer"
        }
      >
        <div className="cart-header">
          <div>
            <span>YOUR ORDER</span>

            <h2>Shopping Cart</h2>
          </div>

          <button
            onClick={() => setCartOpen(false)}
            aria-label="Close cart"
          >
            ×
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="empty-cart">
            <div className="empty-cart-icon">
              🛒
            </div>

            <h3>Your cart is empty</h3>

            <p>
              Add something delicious to get
              started.
            </p>

            <button
              className="primary-button"
              onClick={() => {
                setCartOpen(false);
                goMenu();
              }}
            >
              Browse Menu
            </button>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cart.map((item) => {
                const food = foods.find(
                  (food) =>
                    food.id === item.product_id
                );

                return (
                  <div
                    className="cart-item"
                    key={item.product_id}
                  >
                    <img
                      src={food?.image}
                      alt={item.name}
                    />

                    <div className="cart-item-info">
                      <strong>{item.name}</strong>

                      <span>₱{item.price}</span>

                      <div className="quantity">
                        <button
                          onClick={() =>
                            decrease(
                              item.product_id
                            )
                          }
                        >
                          −
                        </button>

                        <b>{item.qty}</b>

                        <button
                          onClick={() =>
                            increase(
                              item.product_id
                            )
                          }
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="cart-item-right">
                      <strong>
                        ₱{item.subtotal}
                      </strong>

                      <button
                        onClick={() =>
                          removeItem(
                            item.product_id
                          )
                        }
                      >
                        ×
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="cart-bottom">
              <button
                className="clear-cart-button"
                onClick={clearCart}
              >
                Clear cart
              </button>

              <div className="bill-row">
                <span>Subtotal</span>
                <b>₱{subtotal}</b>
              </div>

              <div className="bill-row">
                <span>Delivery</span>
                <b>₱{deliveryFee}</b>
              </div>

              <div className="bill-total">
                <span>Total</span>
                <strong>₱{total}</strong>
              </div>

              <button
                className="primary-button checkout-button"
                onClick={() => {
                  setCartOpen(false);
                  setCheckoutOpen(true);
                }}
              >
                Checkout • ₱{total}
              </button>
            </div>
          </>
        )}
      </aside>

      {checkoutOpen && (
        <div className="modal-background">
          <div className="checkout-modal">
            <button
              className="modal-close"
              onClick={() =>
                setCheckoutOpen(false)
              }
            >
              ×
            </button>

            <span>FINAL STEP</span>

            <h2>Complete your order.</h2>

            <p>
              Tell us where to deliver your food.
            </p>

            <label>Full Name</label>

            <input
              type="text"
              placeholder="Juan Dela Cruz"
              value={customer.name}
              onChange={(e) =>
                updateCustomer(
                  "name",
                  e.target.value
                )
              }
            />

            <label>Phone Number</label>

            <input
              type="tel"
              placeholder="09XX XXX XXXX"
              value={customer.phone}
              onChange={(e) =>
                updateCustomer(
                  "phone",
                  e.target.value
                )
              }
            />

            <label>Delivery Address</label>

            <textarea
              placeholder="House number, street, barangay..."
              value={customer.address}
              onChange={(e) =>
                updateCustomer(
                  "address",
                  e.target.value
                )
              }
            />

            <div className="checkout-total">
              <span>Total</span>
              <strong>₱{total}</strong>
            </div>

            <button
              className="primary-button checkout-button"
              onClick={placeOrder}
            >
              Place Order →
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function Feature({
  icon,
  title,
  description,
}) {
  return (
    <div className="feature">
      <div className="feature-icon">{icon}</div>

      <div>
        <strong>{title}</strong>
        <small>{description}</small>
      </div>
    </div>
  );
}

function FoodCard({
  food,
  addToCart,
  large,
  favorite,
  toggleFavorite,
}) {
  return (
    <article
      className={
        large
          ? "food-card large"
          : "food-card"
      }
    >
      <div className="food-image">
        <img
          src={food.image}
          alt={food.name}
          loading="lazy"
        />

        <button
          className={
            favorite
              ? "favorite-button liked"
              : "favorite-button"
          }
          onClick={() => toggleFavorite(food.id)}
          aria-label={
            favorite
              ? "Remove from favorites"
              : "Add to favorites"
          }
        >
          {favorite ? "♥" : "♡"}
        </button>
      </div>

      <div className="food-content">
        <span className="food-category">
          {food.category}
        </span>

        <h3>{food.name}</h3>

        <div className="food-bottom">
          <strong>₱{food.price}</strong>

          <button
            onClick={() => addToCart(food)}
          >
            <span>+</span>
            Add
          </button>
        </div>
      </div>
    </article>
  );
}

function OrderCard({ order, foods }) {
  const formattedDate = new Date(
    order.date
  ).toLocaleString("en-PH", {
    dateStyle: "medium",
    timeStyle: "short",
  });

  return (
    <article className="order-card">
      <div className="order-card-header">
        <div>
          <span>ORDER</span>

          <h2>#{order.id}</h2>

          <small>{formattedDate}</small>
        </div>

        <strong>{order.status}</strong>
      </div>

      <div className="order-card-items">
        {order.items.map((item) => {
          const food = foods.find(
            (food) =>
              food.id === item.product_id
          );

          return (
            <div
              className="order-card-item"
              key={item.product_id}
            >
              <img
                src={food?.image}
                alt={item.name}
              />

              <div>
                <strong>{item.name}</strong>

                <small>
                  {item.qty} × ₱{item.price}
                </small>
              </div>

              <b>₱{item.subtotal}</b>
            </div>
          );
        })}
      </div>

      <div className="order-card-footer">
        <span>
          Deliver to: {order.customer.address}
        </span>

        <strong>₱{order.total}</strong>
      </div>
    </article>
  );
}

export default App;
