import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import HomePage from "../pages/HomePage";
import DishDetails from "../pages/DishDetails";
import Order from "../pages/Order";
import Menu from "../pages/Menu";
import Navbar from "../pages/NavBar";
import About from "../pages/About";
import Footer from "../pages/Footer";
import Contact from "../pages/Contact";
import PageLoadingIndicator from "../PageLoadingIndicator";
import { EnhancedPageTransition } from "../EnhancedPageTransitions";

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
  const location = useLocation();

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
    <>
      {/* Scroll to the top on route change */}
      <ScrollToTop />

      {/* Navbar */}
      <Navbar order={order} />
      <PageLoadingIndicator />

      {/* Main content area with AnimatePresence for exit animations */}
      <div className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <EnhancedPageTransition transitionType="fade">
                  <HomePage />
                </EnhancedPageTransition>
              }
            />
            <Route
              path="/menu"
              element={
                <EnhancedPageTransition transitionType="scale">
                  <Menu addToOrder={addToOrder} />
                </EnhancedPageTransition>
              }
            />
            <Route
              path="/dish/:id"
              element={
                <EnhancedPageTransition transitionType="scale">
                  <DishDetails addToOrder={addToOrder} />
                </EnhancedPageTransition>
              }
            />
            <Route
              path="/order"
              element={
                <EnhancedPageTransition transitionType="slide">
                  <Order
                    order={order}
                    removeFromOrder={removeFromOrder}
                    updateQuantity={updateQuantity}
                  />
                </EnhancedPageTransition>
              }
            />
            <Route
              path="/about"
              element={
                <EnhancedPageTransition transitionType="reveal">
                  <About />
                </EnhancedPageTransition>
              }
            />
            <Route
              path="/contact"
              element={
                <EnhancedPageTransition transitionType="slide">
                  <Contact />
                </EnhancedPageTransition>
              }
            />
          </Routes>
        </AnimatePresence>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

// Wrapper component to provide Router context
const AppRouter = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <MyRoutes />
      </div>
    </Router>
  );
};

export default AppRouter;
