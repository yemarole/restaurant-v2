import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
// Import Swiper styles and modules
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

const HomePage = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.2, duration: 1 } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.8 } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { delay: 1, duration: 0.5 } },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  // Testimonial data with unique quotes for each testimonial
  const testimonials = [
    {
      id: 1,
      quote:
        "The best coffee I've ever had! The Brainstorm Brew is my favorite. It's not just delicious but also gives me the energy I need to start my day.",
      name: "Jane Doe",
      role: "Coffee Lover",
    },
    {
      id: 2,
      quote:
        "I'm obsessed with the Zen Matcha Latte. It's so smooth and calming. Perfect for my afternoon pick-me-up!",
      name: "John Smith",
      role: "Matcha Enthusiast",
    },
    {
      id: 3,
      quote:
        "The Immunity Mocha is a game-changer. It's rich, flavorful, and I feel healthier every time I drink it.",
      name: "Emily Johnson",
      role: "Health Advocate",
    },
    {
      id: 4,
      quote:
        "I've tried many mushroom coffees, but mycoBrew's Focus Blend has the perfect balance. It keeps me alert without the jitters.",
      name: "Michael Brown",
      role: "Productivity Coach",
    },
    {
      id: 5,
      quote:
        "Their Relaxation Elixir is now part of my evening routine. The taste is divine and it helps me unwind after a long day.",
      name: "Sarah Williams",
      role: "Yoga Instructor",
    },
    {
      id: 6,
      quote:
        "As a barista, I'm picky about my coffee. The Clarity Cappuccino exceeded my expectations with its depth of flavor and smooth finish.",
      name: "David Chen",
      role: "Professional Barista",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <div
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/images/homepage-banner.jpg')" }}
      >
        {/* Darker Overlay */}
        <div className="absolute inset-0 bg-[#2D3748] opacity-60"></div>

        {/* Content */}
        <motion.div
          className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6 lg:px-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-5xl md:text-6xl font-bold text-[#F7FAFC] mb-6 font-serif"
            variants={textVariants}
          >
            Welcome to mycoBrew
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-[#F0F4F8] mb-8 max-w-2xl mx-auto"
            variants={textVariants}
          >
            Discover the finest mushroom-coffee and mushroom-matcha blends
            crafted with passion. Fuel your day with nature's best.
          </motion.p>
          <motion.div variants={buttonVariants} whileHover="hover">
            <Link
              to="/menu"
              className="bg-gradient-to-r from-[#2F855A] to-[#38A169] text-[#F7FAFC] font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
            >
              Explore Menu
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Testimonial Carousel Section */}
      <div className="bg-[#F7FAFC] py-16">
        <div className="container mx-auto px-4 relative">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#6B4423] font-serif">
            What Our Customers Say
          </h2>

          {/* Custom navigation buttons outside the Swiper container */}
          <div className="testimonial-navigation absolute top-1/2 w-full z-10 flex justify-between items-center pointer-events-none">
            <div className="swiper-button-prev-custom -left-5 md:-left-12 absolute cursor-pointer w-10 h-10 rounded-full bg-[#6B4423] text-white flex items-center justify-center shadow-md pointer-events-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="swiper-button-next-custom -right-5 md:-right-12 absolute cursor-pointer w-10 h-10 rounded-full bg-[#6B4423] text-white flex items-center justify-center shadow-md pointer-events-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>

          <Swiper
            pagination={{ clickable: true, dynamicBullets: true }}
            navigation={{
              prevEl: ".swiper-button-prev-custom",
              nextEl: ".swiper-button-next-custom",
            }}
            modules={[Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="testimonial-swiper py-8" // Added padding for pagination bullets
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="bg-white rounded-lg shadow-lg p-8 h-64 md:h-72 flex flex-col justify-between transform transition-transform duration-300 hover:shadow-xl">
                  <div>
                    <p className="text-[#2D3748] mb-4 italic text-lg leading-relaxed line-clamp-4">
                      "{testimonial.quote}"
                    </p>
                  </div>
                  <div className="text-left mt-auto">
                    <h4 className="font-bold text-[#6B4423] text-xl">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-[#718096]">{testimonial.role}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style jsx>{`
        .testimonial-swiper .swiper-pagination {
          position: relative;
          bottom: -5px !important;
          margin-top: 20px;
        }

        .testimonial-swiper .swiper-pagination-bullet {
          background: #6b4423;
          opacity: 0.5;
        }

        .testimonial-swiper .swiper-pagination-bullet-active {
          opacity: 1;
          background: #6b4423;
        }

        /* Hide default Swiper navigation buttons */
        .testimonial-swiper .swiper-button-next,
        .testimonial-swiper .swiper-button-prev {
          display: none;
        }
      `}</style>
    </>
  );
};

export default HomePage;
