import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const PageBanner = ({
  title,
  backgroundImage = "/images/homepage-banner.jpg",
  subtitle = "",
}) => {
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 200], [1, 1.1]); // Scale up as user scrolls to the top

  return (
    <motion.div
      className="relative h-[400px] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url('${backgroundImage}')`, scale }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#2D3748] opacity-50"></div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h1 className="text-5xl md:text-6xl font-bold text-[#F7FAFC] mb-4 font-serif">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl md:text-2xl text-[#F0F4F8] max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </motion.div>
    </motion.div>
  );
};

export default PageBanner;
