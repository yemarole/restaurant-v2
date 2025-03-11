import React from "react";
import { Link } from "react-router-dom";
import PageBanner from "./PageBanner";
import { motion } from "framer-motion";

const Menu = ({ addToOrder }) => {
  // Static menu data with categories
  const menuCategories = [
    {
      id: 1,
      name: "Coffee Creations",
      items: [
        {
          id: 1,
          name: "Brainstorm Brew",
          description:
            "Espresso or strong brewed coffee with Lion’s mane + Cordyceps, oat milk, vanilla syrup, and cinnamon. Topped with light foam and cinnamon dust.",
          price: 4.5,
          image: "/images/coffee-latte.jpg",
          focusPoint: "50% 67%", // Center focus point (x: 50%, y: 50%)
          containerHeight: "20rem", // Custom height for the container
          containerWidth: "100%", // Custom width for the container
        },
        {
          id: 2,
          name: "Immunity Mocha",
          description:
            "Espresso or strong brewed coffee with Chaga + Reishi, raw cacao powder, coconut milk, and maple syrup. Topped with whipped coconut cream and cacao nibs.",
          price: 4.75,
          image: "/images/cappucinno.jpg",
          focusPoint: "50% 32%", // Top-left focus point (x: 0%, y: 0%)
          containerHeight: "20rem", // Custom height for the container
          containerWidth: "100%", // Custom width for the container
        },
        {
          id: 3,
          name: "Earthy Espresso",
          description:
            "Espresso or strong brewed coffee with Chaga + Cordyceps, hazelnut milk, cardamom, and vanilla. Topped with crushed hazelnuts and caramel drizzle.",
          price: 4.8,
          image: "/images/iced-latte.jpg",
          focusPoint: "10% 88%", // Bottom-right focus point (x: 100%, y: 100%)
          containerHeight: "20rem", // Custom height for the container
          containerWidth: "100%", // Custom width for the container
        },
      ],
    },
    {
      id: 2,
      name: "Matcha Magic",
      items: [
        {
          id: 4,
          name: "Zen Matcha Latte",
          description:
            "Ceremonial-grade matcha with Reishi + Lion’s mane, almond milk, honey, and nutmeg. Topped with matcha sprinkle and edible gold flakes.",
          price: 5.0,
          image: "/images/matcha-latte.jpg",
          focusPoint: "50% 0%", // Top-center focus point (x: 50%, y: 0%)
          containerHeight: "20rem", // Custom height for the container
          containerWidth: "100%", // Custom width for the container
        },
        {
          id: 5,
          name: "Matcha Powerhouse",
          description:
            "Ceremonial-grade matcha with Cordyceps + Lion’s mane, cashew milk, maca powder, and agave. Topped with bee pollen and turmeric.",
          price: 5.25,
          image: "/images/iced-matcha.jpg",
          focusPoint: "0% 55%", // Left-center focus point (x: 0%, y: 50%)
          containerHeight: "20rem", // Custom height for the container
          containerWidth: "100%", // Custom width for the container
        },
        {
          id: 6,
          name: "Golden Matcha Glow",
          description:
            "Ceremonial-grade matcha with Reishi + Chaga, golden milk blend (turmeric, ginger, cinnamon), and oat milk. Topped with black pepper and edible flowers.",
          price: 5.5,
          image: "/images/matcha.jpg",
          focusPoint: "100% 40%", // Right-center focus point (x: 100%, y: 50%)
          containerHeight: "20rem", // Custom height for the container
          containerWidth: "100%", // Custom width for the container
        },
      ],
    },
  ];

  // Animation variants for menu items
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <PageBanner
        title="Our Menu"
        subtitle="Explore our functional mushroom-infused coffee and matcha creations"
        backgroundImage="/images/mushroom-coffee.jpg"
      />
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-5xl font-bold text-center mb-10 text-[#6B4423] font-serif">
          Our Menu
        </h2>
        {menuCategories.map((category) => (
          <div key={category.id} className="mb-12">
            <h3 className="text-3xl font-bold text-[#6B4423] mb-6 font-serif">
              {category.name}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.items.map((item, index) => (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Link
                    to={`/dish/${item.id}`}
                    className="bg-[#F7FAFC] rounded-lg shadow-md overflow-hidden transition duration-300 hover:shadow-xl group"
                  >
                    {/* Image with adjustable focus point and custom container size */}
                    <div
                      className="relative overflow-hidden"
                      style={{
                        height: item.containerHeight, // Set custom height
                        width: item.containerWidth, // Set custom width
                      }}
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                        style={{
                          objectPosition: item.focusPoint, // Set custom focus point
                        }}
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="text-xl font-semibold text-[#6B4423] mb-2 font-serif">
                        {item.name}
                      </h4>
                      <p className="text-[#2D3748] mb-4">{item.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-bold text-[#2F855A]">
                          £{item.price.toFixed(2)}
                        </span>
                        <button
                          onClick={(e) => {
                            e.preventDefault(); // Prevent the Link from navigating
                            e.stopPropagation(); // Stop event propagation
                            addToOrder(item); // Add the item to the order
                          }}
                          className="text-center bg-[#D69E2E] text-[#F7FAFC] py-2 px-4 rounded hover:bg-[#ECC94B] transition duration-300"
                        >
                          Add to Order
                        </button>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Menu;
