import { useState } from 'react'
import OrderForm from '../components/OrderForm'
import '../styles/Services.css'

function Services() {
  const [showOrderForm, setShowOrderForm] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [orderFromCart, setOrderFromCart] = useState(false);

  const categories = {
    fast_food: [
      { name: 'Zinger Burger', price: 450, image: './src/assets/fastfood.png' },
      { name: 'Beef Burger', price: 500, image: './src/assets/fastfood.png' },
      { name: 'Chicken Tikka Pizza', price: 1200, image: './src/assets/fastfood.png' },
      { name: 'Fajita Pizza', price: 1300, image: './src/assets/fastfood.png' },
      { name: 'Alfredo Pasta', price: 700, image: './src/assets/fastfood.png' },
      { name: 'Spicy Arrabiata Pasta', price: 750, image: './src/assets/fastfood.png' },
      { name: 'Chicken Mayo Roll', price: 250, image: './src/assets/fastfood.png' },
      { name: 'Zinger Roll', price: 300, image: './src/assets/fastfood.png' },
      { name: 'Masala Fries', price: 200, image: './src/assets/fastfood.png' },
      { name: 'Cheese Fries', price: 280, image: './src/assets/fastfood.png' },
      { name: 'Crispy Broast', price: 550, image: './src/assets/fastfood.png' },
      { name: 'Spicy Broast', price: 580, image: './src/assets/fastfood.png' }
    ],
    desi_food: [
      { name: 'Chicken Karahi', price: 1200, image: './src/assets/desifood.png' },
      { name: 'Mutton Karahi', price: 2200, image: './src/assets/desifood.png' },
      { name: 'Chicken Biryani', price: 500, image: './src/assets/desifood.png' },
      { name: 'Beef Pulao', price: 600, image: './src/assets/desifood.png' },
      { name: 'Tandoori Kabab', price: 450, image: './src/assets/desifood.png' },
      { name: 'Malai Boti', price: 550, image: './src/assets/desifood.png' },
      { name: 'Nihari', price: 900, image: './src/assets/desifood.png' },
      { name: 'Payee', price: 1100, image: './src/assets/desifood.png' },
      { name: 'Daal Makhni', price: 400, image: './src/assets/desifood.png' },
      { name: 'Aloo Gosht', price: 750, image: './src/assets/desifood.png' },
      { name: 'Halwa Puri', price: 350, image: './src/assets/desifood.png' },
      { name: 'Chana Chat', price: 300, image: './src/assets/desifood.png' }
    ],
    drinks_and_juices: [
      { name: 'Doodh Pati Chai', price: 150, image: './src/assets/drinksjuices.png' },
      { name: 'Karak Chai', price: 120, image: './src/assets/drinksjuices.png' },
      { name: 'Special Coffee', price: 300, image: './src/assets/drinksjuices.png' },
      { name: 'Lassi (Sweet/Salted)', price: 250, image: './src/assets/drinksjuices.png' },
      { name: 'Falooda', price: 450, image: './src/assets/drinksjuices.png' },
      { name: 'Rasmali Special', price: 280, image: './src/assets/drinksjuices.png' },
      { name: 'Mango Juice', price: 350, image: './src/assets/drinksjuices.png' },
      { name: 'Orange Juice', price: 300, image: './src/assets/drinksjuices.png' },
      { name: 'Pomegranate Juice', price: 450, image: './src/assets/drinksjuices.png' },
      { name: 'Cold Drink (500ml)', price: 100, image: './src/assets/drinksjuices.png' },
      { name: 'Cold Drink (1.5L)', price: 250, image: './src/assets/drinksjuices.png' },
      { name: 'Chocolate Milkshake', price: 400, image: './src/assets/drinksjuices.png' }
    ],
  };

  const deals = [
    { name: 'Cheesy Combo', items: ['Zinger Burger', 'Fries', 'Cold Drink (500ml)'], price: 750 },
    { name: 'Double Delight', items: ['Chicken Pizza', 'Garlic Bread', 'Cold Drink (1.5L)'], price: 1500 },
    { name: 'Crispy Treat', items: ['Chicken Broast', 'Fries', 'Choco Shake'], price: 850 },
    { name: 'Roll & Sip', items: ['Chicken Roll', 'Crispy Fries', 'Rooh Afza'], price: 600 },
    { name: 'Pasta Lovers', items: ['Creamy Pasta', 'Garlic Bread', 'Cold Drink (500ml)'], price: 950 },
    { name: 'Snack Pack', items: ['Nuggets', 'Cheese Sticks', 'Mango Juice'], price: 700 },
    { name: 'Desi Treat', items: ['Chicken Biryani', 'Shami Kabab', 'Sweet Lassi'], price: 950 },
    { name: 'Traditional Feast', items: ['Mutton Karahi', 'Tandoori Roti', 'Falooda'], price: 2500 },
    { name: 'Classic Nashta', items: ['Halwa Puri', 'Chana Curry', 'Doodh Pati Chai'], price: 500 },
    { name: 'Royal Nihari', items: ['Beef Nihari', 'Naan', 'Special Coffee'], price: 1300 },
    { name: 'BBQ Special', items: ['Malai Boti', 'Paratha', 'Rooh Afza'], price: 1000 },
    { name: 'Pulao & Chai', items: ['Beef Pulao', 'Salad', 'Karak Chai'], price: 800 }
  ];

  const handleOrderFromCart = () => {
    setOrderFromCart(true);
    setShowOrderForm(true);
    setShowCart(false);
  };

  const handleAddToCart = (item, price) => {
    setCartItems(prevItems => {
      // Check if item already exists in cart
      const existingItem = prevItems.find(cartItem => cartItem.item === item)
      if (existingItem) {
        return prevItems.map(cartItem =>
          cartItem.item === item
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      }
      // Add new item to cart
      return [...prevItems, { item, price, quantity: 1 }]
    })
  }

  const handleRemoveFromCart = (itemToRemove) => {
    setCartItems(prevItems =>
      prevItems.filter(item => item.item !== itemToRemove)
    )
  }

  const handleQuantityChange = (itemToUpdate, newQuantity) => {
    if (newQuantity < 1) return
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.item === itemToUpdate
          ? { ...item, quantity: newQuantity }
          : item
      )
    )
  }

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)
  }

  const handleOrder = (item, price) => {
    setSelectedItem({ item, price })
    setShowOrderForm(true)
  }

  const handleCategoryClick = (category) => {
    setSelectedCategory(category)
  }

  const handleBackToCategories = () => {
    setSelectedCategory(null)
  }

  return (
    <div className="services">
      {/* Cart Button at the top */}
      <div className="cart-header">
        <button
          className="cart-toggle"
          onClick={() => {
            setShowCart(!showCart);
            setOrderFromCart(false);
          }}
        >
          🛒 Cart ({cartItems.reduce((total, item) => total + item.quantity, 0)})
        </button>
      </div>

      {/* Cart Dropdown */}
      {showCart && (
        <div className="cart-dropdown">
          <h3>Your Cart</h3>
          {cartItems.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <>
              <ul className="cart-items">
                {cartItems.map((cartItem, index) => (
                  <li key={index} className="cart-item">
                    <span>{cartItem.item} (PKR {cartItem.price})</span>
                    <div className="quantity-controls">
                      <button onClick={() => handleQuantityChange(cartItem.item, cartItem.quantity - 1)}>
                        -
                      </button>
                      <span>{cartItem.quantity}</span>
                      <button onClick={() => handleQuantityChange(cartItem.item, cartItem.quantity + 1)}>
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => handleRemoveFromCart(cartItem.item)}
                      className="remove-item"
                    >
                      ×
                    </button>
                  </li>
                ))}
              </ul>
              <div className="cart-total">
                <strong>Total: PKR {calculateTotal()}</strong>
              </div>
              <button
                onClick={handleOrderFromCart}
                className="order-button"
              >
                Place Order
              </button>
            </>
          )}
        </div>
      )}

      {/* Main Content */}
      {!showOrderForm ? (
        <>
          {!selectedCategory ? (
            <>
              <section className="categories">
                <h2>Our Menu Categories</h2>
                <div className="category-cards">
                  {Object.keys(categories).map((category, index) => (
                    <div
                      key={index}
                      className="category-card"
                      onClick={() => handleCategoryClick(category)}
                    >
                      <img
                        src={`/images/${category}.jpg`}
                        alt={category}
                        className="category-image"
                      />
                      <h3>{category.replace(/_/g, ' ').toUpperCase()}</h3>
                    </div>
                  ))}
                </div>
              </section>

              <section className="deals">
                <h2>Special Deals</h2>
                <div className="deals-container">
                  {deals.map((deal, index) => (
                    <div key={index} className="deal">
                      <h3>{deal.name}</h3>
                      <ul>
                        {deal.items.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                      <p>PKR: {deal.price}</p>
                      <div className="deal-buttons">
                        <button onClick={() => handleOrder(deal.name, deal.price)}>
                          Order Now
                        </button>
                        <button
                          onClick={() => handleAddToCart(deal.name, deal.price)}
                          className="add-to-cart"
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </>

          ) : (
            <section className="category-items">
              <button onClick={handleBackToCategories} className="back-button">
                &larr; Back to Categories
              </button>
              <h2>{selectedCategory.replace(/_/g, ' ').toUpperCase()}</h2>
              <div className="items">
                {categories[selectedCategory].map((item, index) => (
                  <div key={index} className="food-item">
                    <div className="food-image-container">
                      <img src={item.image} alt={item.name} className="food-image" />
                      <div className="food-overlay">
                        <h4>{item.name}</h4>
                        <p>PKR: {item.price}</p>
                        <div className="item-buttons">
                          <button onClick={() => handleOrder(item.name, item.price)}>
                            Order Now
                          </button>
                          <button
                            onClick={() => handleAddToCart(item.name, item.price)}
                            className="add-to-cart"
                          >
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

        </>
      ) : (
        <OrderForm
          cartItems={orderFromCart ? cartItems : null}
          item={!orderFromCart ? selectedItem?.item : null}
          price={!orderFromCart ? selectedItem?.price : null}
          onClose={() => {
            setShowOrderForm(false);
            setOrderFromCart(false);
          }}
          setCartItems={setCartItems}
        />
      )}
    </div>
  );
}

export default Services;