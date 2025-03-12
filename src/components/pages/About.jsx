import React from "react";
import PageBanner from "./PageBanner";
import { motion } from "framer-motion";
import "../../output.css";

const About = () => {
  // Animation variants for text and cards
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  // Image animation variants - now will trigger on scroll into view
  const imageVariants = {
    hidden: { opacity: 0, x: 50, rotateY: 20 },
    visible: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      transition: { duration: 0.8, delay: 0.2 },
    },
  };

  // Text animation variants for sliding in from the left
  const textSlideVariants = {
    hidden: { opacity: 0, x: -50, rotateY: -20 },
    visible: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      transition: { duration: 0.8, delay: 0.2 },
    },
  };

  // Mushroom data
  const mushrooms = [
    {
      id: 1,
      name: "Lion's Mane",
      description:
        "Known for its cognitive benefits, Lion's Mane supports brain health, memory, and focus. It's a natural nootropic that helps enhance mental clarity.",
      image: "/images/lions-mane.jpg",
    },
    {
      id: 2,
      name: "Cordyceps",
      description:
        "Cordyceps is renowned for boosting energy and stamina. It helps improve physical performance and supports respiratory health.",
      image: "/images/cordyceps.jpg",
    },
    {
      id: 3,
      name: "Chaga",
      description:
        "Chaga is a powerful antioxidant that supports immune health and promotes overall well-being. It's often used for its anti-inflammatory properties.",
      image: "/images/chaga.jpg",
    },
    {
      id: 4,
      name: "Reishi",
      description:
        "Reishi is known as the 'mushroom of immortality.' It supports stress relief, relaxation, and a healthy immune system.",
      image: "/images/reishi.jpg",
    },
  ];

  return (
    <>
      <PageBanner
        title="About Us"
        subtitle="Discover the power of functional mushrooms in every cup"
        backgroundImage="/images/mushroom-coffee.jpg"
      />

      {/* Alternating Sections */}
      <div className="container mx-auto px-4 py-12 space-y-20">
        {/* Section 1 */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          style={{ perspective: 1000 }} // Add perspective for 3D effect
        >
          {/* Text sliding in from the left */}
          <motion.div className="w-full md:w-1/2" variants={textSlideVariants}>
            <h2 className="text-3xl font-semibold text-[#6B4423] mb-4 font-serif">
              Our Story
            </h2>
            <p className="text-lg text-[#2D3748]">
              At <strong className="text-[#2F855A]">mycoBrew</strong>, we
              believe in the power of nature to heal and energize. Our journey
              began with a simple idea: to create beverages that not only taste
              great but also provide functional benefits. By blending the rich
              flavors of coffee and matcha with the powerful properties of
              functional mushrooms, we aim to help you feel your best,
              naturally.
            </p>
          </motion.div>

          {/* Image sliding in from the right */}
          <motion.div
            className="w-full md:w-1/2 perspective-1000"
            variants={imageVariants}
          >
            <motion.img
              src="/images/our-story.jpg"
              alt="Our Story"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </motion.div>
        </motion.div>

        {/* Section 2 */}
        <motion.div
          className="flex flex-col md:flex-row-reverse items-center justify-between gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          style={{ perspective: 1000 }} // Add perspective for 3D effect
        >
          {/* Text sliding in from the right */}
          <motion.div className="w-full md:w-1/2" variants={textSlideVariants}>
            <h2 className="text-3xl font-semibold text-[#6B4423] mb-4 font-serif">
              Our Mushrooms
            </h2>
            <p className="text-lg text-[#2D3748]">
              We use only the finest functional mushrooms in our blends. Each
              mushroom is carefully selected for its unique benefits, ensuring
              that every sip of our beverages nourishes your mind, body, and
              soul.
            </p>
          </motion.div>

          {/* Image sliding in from the left */}
          <motion.div
            className="w-full md:w-1/2 perspective-1000"
            variants={imageVariants}
          >
            <motion.img
              src="/images/about-mushrooms.jpg"
              alt="Our Mushrooms"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </motion.div>
        </motion.div>

        {/* Section 3 */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          style={{ perspective: 1000 }} // Add perspective for 3D effect
        >
          {/* Text sliding in from the left */}
          <motion.div className="w-full md:w-1/2" variants={textSlideVariants}>
            <h2 className="text-3xl font-semibold text-[#6B4423] mb-4 font-serif">
              Our Mission
            </h2>
            <p className="text-lg text-[#2D3748]">
              Our mission is to provide you with the highest-quality, functional
              beverages that not only taste amazing but also support your
              overall well-being. We are committed to sustainability, quality,
              and innovation in everything we do.
            </p>
          </motion.div>

          {/* Image sliding in from the right */}
          <motion.div
            className="w-full md:w-1/2 perspective-1000"
            variants={imageVariants}
          >
            <motion.img
              src="/images/our-mission.jpg"
              alt="Our Mission"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Mushroom Cards Section */}
      <div className="bg-[#F7FAFC] py-16 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-6xl mx-auto"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2 className="text-3xl font-semibold text-[#6B4423] mb-6 text-center font-serif">
            Our Mushrooms
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mushrooms.map((mushroom) => (
              <motion.div
                key={mushroom.id}
                className="bg-white p-6 rounded-lg shadow-md text-center"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                whileHover="hover"
              >
                <img
                  src={mushroom.image}
                  alt={mushroom.name}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-bold text-[#6B4423] mb-2 font-serif">
                  {mushroom.name}
                </h3>
                <p className="text-[#2D3748]">{mushroom.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default About;
