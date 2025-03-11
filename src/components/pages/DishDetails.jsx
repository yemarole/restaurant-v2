import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import PageBanner from "./PageBanner";
import { motion } from "framer-motion";

const DishDetails = ({ addToOrder }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Static menu data (same as in Menu.jsx)
  const menuItems = [
    {
      id: 1,
      name: "Brainstorm Brew",
      description:
        "Espresso or strong brewed coffee with Lion’s mane + Cordyceps, oat milk, vanilla syrup, and cinnamon. Topped with light foam and cinnamon dust.",
      price: 4.5,
      image: "/images/coffee-latte.jpg", // Placeholder image
    },
    {
      id: 2,
      name: "Immunity Mocha",
      description:
        "Espresso or strong brewed coffee with Chaga + Reishi, raw cacao powder, coconut milk, and maple syrup. Topped with whipped coconut cream and cacao nibs.",
      price: 4.75,
      image: "/images/cappucinno.jpg", // Placeholder image
    },
    {
      id: 3,
      name: "Earthy Espresso",
      description:
        "Espresso or strong brewed coffee with Chaga + Cordyceps, hazelnut milk, cardamom, and vanilla. Topped with crushed hazelnuts and caramel drizzle.",
      price: 4.8,
      image: "/images/iced-latte.jpg", // Placeholder image
    },
    {
      id: 4,
      name: "Zen Matcha Latte",
      description:
        "Ceremonial-grade matcha with Reishi + Lion’s mane, almond milk, honey, and nutmeg. Topped with matcha sprinkle and edible gold flakes.",
      price: 5.0,
      image: "/images/matcha-latte.jpg", // Placeholder image
    },
    {
      id: 5,
      name: "Matcha Powerhouse",
      description:
        "Ceremonial-grade matcha with Cordyceps + Lion’s mane, cashew milk, maca powder, and agave. Topped with bee pollen and turmeric.",
      price: 5.25,
      image: "/images/iced-matcha.jpg", // Placeholder image
    },
    {
      id: 6,
      name: "Golden Matcha Glow",
      description:
        "Ceremonial-grade matcha with Reishi + Chaga, golden milk blend (turmeric, ginger, cinnamon), and oat milk. Topped with black pepper and edible flowers.",
      price: 5.5,
      image: "/images/matcha.jpg", // Placeholder image
    },
  ];

  // Find the dish by ID
  const dish = menuItems.find((item) => item.id === parseInt(id));

  if (!dish) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-2xl text-[#6B4423]">Dish not found.</p>
      </div>
    );
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { delay: 0.3, duration: 0.8 } },
    hover: { scale: 1.02, transition: { duration: 0.3 } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.8 } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { delay: 0.8, duration: 0.5 },
    },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  return (
    <>
      <PageBanner
        title={dish.name}
        subtitle="Discover the unique blend of flavor and function in every sip"
        backgroundImage={dish.image}
      />
      <motion.div
        className="container mx-auto px-4 py-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-2xl overflow-hidden">
          <div className="md:flex">
            {/* Dish Image */}
            <motion.div
              className="md:w-1/2"
              variants={imageVariants}
              whileHover="hover"
            >
              <img
                src={dish.image}
                alt={dish.name}
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Dish Details */}
            <motion.div className="md:w-1/2 p-8" variants={textVariants}>
              <h2 className="text-4xl font-bold text-[#6B4423] mb-6 font-serif">
                {dish.name}
              </h2>
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-[#6B4423] mb-4 font-serif">
                  Description
                </h3>
                <p className="text-lg text-[#4A5568] leading-relaxed">
                  {dish.description}
                </p>
              </div>
              <div className="flex items-center justify-between mb-8">
                <span className="text-3xl font-bold text-[#2F855A]">
                  £{dish.price.toFixed(2)}
                </span>
                <motion.button
                  className="bg-[#D69E2E] text-[#F7FAFC] py-3 px-6 rounded-full hover:bg-[#ECC94B] transition duration-300 shadow-lg"
                  variants={buttonVariants}
                  whileHover="hover"
                  onClick={() => addToOrder(dish)}
                >
                  Add to Order
                </motion.button>
              </div>
              <motion.button
                className="w-full bg-[#F7FAFC] text-[#2D3748] py-3 px-6 rounded-full border border-[#E2E8F0] hover:bg-[#E2E8F0] transition duration-300 shadow-lg"
                variants={buttonVariants}
                whileHover="hover"
                onClick={() => navigate("/menu")}
              >
                Back to Menu
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default DishDetails;
