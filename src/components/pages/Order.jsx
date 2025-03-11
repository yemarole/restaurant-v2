import React from "react";
import { Link } from "react-router-dom";
import PageBanner from "./PageBanner";

const Order = ({ order, removeFromOrder, updateQuantity }) => {
  // Calculate the total price
  const calculateTotal = () => {
    return order.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // Calculate total number of items
  const totalItemCount = order.reduce(
    (count, item) => count + item.quantity,
    0
  );

  // Handle quantity increase
  const handleIncreaseQuantity = (id) => {
    const item = order.find((item) => item.id === id);
    if (item) {
      updateQuantity(id, item.quantity + 1);
    }
  };

  // Handle quantity decrease
  const handleDecreaseQuantity = (id) => {
    const item = order.find((item) => item.id === id);
    if (item && item.quantity > 1) {
      updateQuantity(id, item.quantity - 1);
    } else if (item && item.quantity === 1) {
      removeFromOrder(id);
    }
  };

  // Group items by ID to display them together in the UI
  const groupedItems = {};
  order.forEach((item) => {
    if (!groupedItems[item.id]) {
      groupedItems[item.id] = { ...item };
    } else {
      groupedItems[item.id].quantity += item.quantity;
    }
  });

  const displayItems = Object.values(groupedItems);

  return (
    <>
      <PageBanner
        title="Your Order"
        subtitle="Fuel your day with nature's most powerful beverages"
        backgroundImage="/images/homepage-banner.jpg"
      />
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-4xl font-bold text-center mb-10 text-[#6B4423] font-serif">
          Your Order
        </h2>

        {displayItems.length === 0 ? (
          <div className="text-center">
            <p className="text-xl text-[#2D3748] mb-6">
              No items in your order yet!
            </p>
            <Link
              to="/menu"
              className="bg-[#2F855A] text-[#F7FAFC] py-2 px-4 rounded hover:bg-[#38A169] transition duration-300"
            >
              Explore Menu
            </Link>
          </div>
        ) : (
          <div className="max-w-2xl mx-auto">
            <div className="space-y-4 mb-8">
              {displayItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between bg-[#F7FAFC] rounded-lg shadow-md p-4"
                >
                  <div className="flex items-center space-x-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-md"
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-[#6B4423]">
                        {item.name}
                      </h3>
                      <div className="flex items-center space-x-2">
                        <label className="text-sm text-[#4A5568]">
                          Quantity:
                        </label>
                        <div className="flex items-center border border-[#E2E8F0] rounded">
                          <button
                            onClick={() => handleDecreaseQuantity(item.id)}
                            className="px-2 py-1 text-[#4A5568] hover:bg-[#E2E8F0] transition duration-300"
                            aria-label="Decrease quantity"
                          >
                            -
                          </button>
                          <span className="px-3 py-1 text-[#4A5568]">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => handleIncreaseQuantity(item.id)}
                            className="px-2 py-1 text-[#4A5568] hover:bg-[#E2E8F0] transition duration-300"
                            aria-label="Increase quantity"
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <p className="text-sm font-medium text-[#2F855A] mt-1">
                        £{(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromOrder(item.id)}
                    className="bg-[#D69E2E] text-[#F7FAFC] py-1 px-3 rounded hover:bg-[#ECC94B] transition duration-300"
                    aria-label="Remove item"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <div className="bg-[#F0F4F8] p-6 rounded-lg shadow-md">
              <div className="flex justify-between mb-4">
                <span className="text-lg font-semibold text-[#2D3748]">
                  Total Items:
                </span>
                <span className="text-lg font-bold text-[#6B4423]">
                  {totalItemCount}
                </span>
              </div>
              <div className="flex justify-between mb-6">
                <span className="text-lg font-semibold text-[#2D3748]">
                  Estimated Total:
                </span>
                <span className="text-xl font-bold text-[#2F855A]">
                  £{calculateTotal().toFixed(2)}
                </span>
              </div>
              <div className="flex space-x-4">
                <Link
                  to="/menu"
                  className="w-1/2 text-center bg-[#F0F4F8] text-[#2D3748] py-2 rounded hover:bg-[#F7FAFC] transition duration-300 border border-[#E2E8F0]"
                >
                  Continue Shopping
                </Link>
                <button className="w-1/2 bg-[#2F855A] text-[#F7FAFC] py-2 rounded hover:bg-[#38A169] transition duration-300">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Order;
