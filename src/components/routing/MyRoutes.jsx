import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import HomePage from "../pages/HomePage";
import DishDetails from "../pages/DishDetails";
import Order from "../pages/Order";
import Menu from "../pages/Menu";
import Navbar from "../pages/NavBar";
import About from "../pages/About";
import Footer from "../pages/Footer";
import Contact from "../pages/Contact";

// Component to scroll to the top on route change
const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, [location.pathname]); // Trigger effect when the pathname changes

  return null; // This component doesn't render anything
};

const MyRoutes = () => {
  const [order, setOrder] = useState([]);

  // Add an item to the order
  const addToOrder = (dish) => {
    setOrder((prevOrder) => {
      // Check if item already exists in order
      const existingItemIndex = prevOrder.findIndex(
        (item) => item.id === dish.id
      );

      if (existingItemIndex >= 0) {
        // Item exists, increase quantity
        const updatedOrder = [...prevOrder];
        updatedOrder[existingItemIndex] = {
          ...updatedOrder[existingItemIndex],
          quantity: updatedOrder[existingItemIndex].quantity + 1,
        };
        return updatedOrder;
      } else {
        // Item doesn't exist, add with quantity 1
        return [...prevOrder, { ...dish, quantity: 1 }];
      }
    });
  };

  // Remove one instance of an item from the order
  const removeFromOrder = (dishId) => {
    setOrder((prevOrder) => {
      const index = prevOrder.findIndex((item) => item.id === dishId);
      if (index !== -1) {
        const newOrder = [...prevOrder];
        newOrder.splice(index, 1); // Remove one instance of the item
        return newOrder;
      }
      return prevOrder;
    });
  };

  // Update the quantity of an item in the order
  const updateQuantity = (dishId, newQuantity) => {
    setOrder((prevOrder) =>
      prevOrder.map((item) =>
        item.id === dishId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  return (
    <Router>
      {/* Flex container to ensure footer sticks to the bottom */}
      <div className="flex flex-col min-h-screen">
        {/* Scroll to the top on route change */}
        <ScrollToTop />

        {/* Navbar */}
        <Navbar order={order} />

        {/* Main content area */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/menu" element={<Menu addToOrder={addToOrder} />} />
            <Route
              path="/dish/:id"
              element={<DishDetails addToOrder={addToOrder} />}
            />
            <Route
              path="/order"
              element={
                <Order
                  order={order}
                  removeFromOrder={removeFromOrder}
                  updateQuantity={updateQuantity}
                />
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default MyRoutes;
