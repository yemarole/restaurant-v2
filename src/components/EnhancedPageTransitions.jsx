import React from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

// Enhanced page transition component with multiple animation options
const EnhancedPageTransition = ({ children, transitionType = "fade" }) => {
  const location = useLocation();

  // Different transition variants
  const transitions = {
    fade: {
      initial: { opacity: 0 },
      animate: {
        opacity: 1,
        transition: { duration: 0.5, ease: "easeOut" },
      },
      exit: {
        opacity: 0,
        transition: { duration: 0.3, ease: "easeIn" },
      },
    },
    slide: {
      initial: { opacity: 0, y: 20 },
      animate: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
      },
      exit: {
        opacity: 0,
        y: -20,
        transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
      },
    },
    scale: {
      initial: { opacity: 0, scale: 0.95 },
      animate: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, ease: "easeOut" },
      },
      exit: {
        opacity: 0,
        scale: 1.05,
        transition: { duration: 0.3, ease: "easeIn" },
      },
    },
    reveal: {
      initial: { opacity: 0 },
      animate: {
        opacity: 1,
        transition: {
          duration: 0.5,
          ease: "easeOut",
          staggerChildren: 0.1,
        },
      },
      exit: {
        opacity: 0,
        transition: {
          duration: 0.3,
          ease: "easeIn",
        },
      },
    },
  };

  // Choose the appropriate transition based on the route
  const getTransitionForRoute = () => {
    switch (location.pathname) {
      case "/":
        return "fade";
      case "/menu":
        return "scale";
      case "/order":
        return "slide";
      case "/about":
        return "reveal";
      case "/contact":
        return "slide";
      default:
        if (location.pathname.includes("/dish/")) {
          return "scale";
        }
        return "fade";
    }
  };

  // Use either specified transition type or route-based transition
  const selectedTransition =
    transitionType === "auto"
      ? transitions[getTransitionForRoute()]
      : transitions[transitionType] || transitions.fade;

  return (
    <motion.div
      key={location.pathname}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={selectedTransition}
      className="w-full"
    >
      {children}
    </motion.div>
  );
};

// Page content reveal animation for staggered elements
const PageContentReveal = ({ children, delay = 0 }) => {
  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay,
      },
    },
  };

  return (
    <motion.div variants={itemVariants} className="w-full">
      {children}
    </motion.div>
  );
};

export { EnhancedPageTransition, PageContentReveal };
