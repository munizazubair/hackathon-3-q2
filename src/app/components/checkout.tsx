"use client";

import { useState } from "react";

const CheckoutPage = () => {
  const [showShippingRates, setShowShippingRates] = useState(false);
  const [showPaymentMethod, setShowPaymentMethod] = useState(false);
  const [showPlaceOrder, setShowPlaceOrder] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderStatus, setOrderStatus] = useState<string | null>(null); // Nullable string

  // Function to show shipping rates based on user details
  const handleGetShippingRates = () => {
    setShowShippingRates(true); // Show shipping rates section
  };

  // Function to show payment method after calculating shipping rates
  const handleGetPaymentMethod = () => {
    setShowPaymentMethod(true); // Show payment method section
  };

  // Function to handle order placement after selecting payment method
  const handlePlaceOrder = () => {
    setOrderPlaced(true); // Set order placed to true
    setOrderStatus("Order placed successfully!"); // Show success message
  };

  // Function to track order after order is placed
  const handleTrackOrder = () => {
    alert("Tracking order..."); // Simulated tracking
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Checkout Page</h1>

      {/* Step 1: Get Shipping Rates */}
      {!showShippingRates && !showPaymentMethod && !orderPlaced && (
        <div>
          <button onClick={handleGetShippingRates}>Get Shipping Rates</button>
        </div>
      )}

      {/* Show Shipping Rates Section */}
      {showShippingRates && (
        <div>
          <h3>Shipping Rates</h3>
          <p>Shipping rates are calculated based on your address.</p>

          {/* Step 2: Get Payment Method Button */}
          <button onClick={handleGetPaymentMethod}>Get Payment Method</button>
        </div>
      )}

      {/* Step 3: Show Payment Method */}
      {showPaymentMethod && (
        <div>
          <h3>Payment Information</h3>
          <form>
            <label>
              Card Number:
              <input type="text" placeholder="Enter card number" />
            </label>
            <br />
            <label>
              Expiry Date:
              <input type="text" placeholder="MM/YY" />
            </label>
            <br />
            <button type="button" onClick={handlePlaceOrder}>
              Place Order
            </button>
          </form>
        </div>
      )}

      {/* Step 4: Order Confirmation */}
      {orderPlaced && (
        <div>
          <h3>{orderStatus}</h3>
          <button onClick={handleTrackOrder}>Track Order</button>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;
