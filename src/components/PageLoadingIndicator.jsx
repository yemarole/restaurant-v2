import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const PageLoadingIndicator = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Start loading when location changes
    setIsLoading(true);

    // Simulating page load time (you can adjust this based on your needs)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed top-0 left-0 w-full z-50"
        >
          <div className="h-1 bg-gradient-to-r from-[#2F855A] via-[#38A169] to-[#6B4423]">
            <motion.div
              className="h-full bg-white opacity-50"
              initial={{ width: "0%" }}
              animate={{
                width: "100%",
                transition: { duration: 0.5, ease: "easeInOut" },
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageLoadingIndicator;
