import { useState } from 'react';
import '../styles/OrderForm.css';

function OrderForm({ item, price, cartItems, onClose, setCartItems }) {
  const isCartOrder = cartItems && cartItems.length > 0;
  const initialQuantity = isCartOrder ? 1 : 1;

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    quantity: initialQuantity,
    orderDetails: isCartOrder
      ? generateCartOrderDetails(cartItems)
      : `Item: ${item}, Price: ${price}-PKR`
  });

  function generateCartOrderDetails(items) {
    return items.map(item =>
      `${item.item} (Qty: ${item.quantity}) - PKR ${item.price * item.quantity}`
    ).join('\n');
  }

  const calculateCartTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const phoneRegex = /^(\+92|0)[0-9]{10}$/;
    if (!phoneRegex.test(formData.phone)) {
      alert('Please enter a valid Pakistani phone number (e.g., +92XXXXXXXXXX or 0XXXXXXXXXX).');
      return;
    }

    try {
      const orderData = {
        customer: {
          name: formData.name,
          phone: formData.phone,
          address: formData.address
        },
        items: isCartOrder ? cartItems.map(item => ({
          item: item.item,
          price: item.price,
          quantity: item.quantity
        })) : [{
          item: item,
          price: price,
          quantity: formData.quantity
        }],
        total: isCartOrder ? calculateCartTotal() : price * formData.quantity,
        orderDetails: formData.orderDetails
      };

      const response = await fetch('http://localhost:5000/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderData)
      });

      if (!response.ok) throw new Error('Order failed');

      alert('Order placed successfully!');
      onClose();
      if (isCartOrder && setCartItems) {
        setCartItems([]); 
      }
    } catch (err) {
      alert('Error: ' + err.message);
    }
  };

  const handleQuantityChange = (e) => {
    if (isCartOrder) return;

    const quantity = parseInt(e.target.value, 10);
    setFormData({
      ...formData,
      quantity,
      orderDetails: `Item: ${item}, Price: ${price * quantity}-PKR`
    });
  };

  return (
    <div className="order-form-overlay">
      <div className="order-form">
        <h2>Place Order</h2>
        <button className="close-button" onClick={onClose}>×</button>

        <form onSubmit={handleSubmit}>
          {isCartOrder && (
            <div className="cart-summary">
              <h3>Your Order Summary</h3>
              <div className="cart-items-list">
                {cartItems.map((cartItem, index) => (
                  <div key={index} className="cart-item">
                    <span>{cartItem.item} (Qty: {cartItem.quantity})</span>
                    <span>PKR {cartItem.price * cartItem.quantity}</span>
                  </div>
                ))}
              </div>
              <div className="cart-total">
                <strong>Total: PKR {calculateCartTotal()}</strong>
              </div>
            </div>
          )}

          {!isCartOrder && (
            <div className="single-item-summary">
              <h3>{item}</h3>
              <p>Price: PKR {price * formData.quantity}</p>
            </div>
          )}

          <div className="form-inputs">
            <input
              type="text"
              placeholder="Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
            <input
              type="tel"
              placeholder="Phone Number (e.g., +92XXXXXXXXXX or 0XXXXXXXXXX)"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
            />
            <input
              type="text"
              placeholder="Address"
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              required
            />

            {!isCartOrder && (
              <input
                type="number"
                placeholder="Quantity"
                value={formData.quantity}
                onChange={handleQuantityChange}
                min="1"
                required
              />
            )}
          </div>

          <div className="form-actions">
            <button type="submit" className="submit-button">
              {isCartOrder ? 'Place Order' : 'Confirm Order'}
            </button>
            <button type="button" onClick={onClose} className="cancel-button">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default OrderForm;