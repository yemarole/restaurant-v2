import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaHome,
  FaUtensils,
  FaInfoCircle,
  FaEnvelope,
  FaShoppingBasket,
} from "react-icons/fa";

const Navbar = ({ order }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 100], // Adjust the scroll range for the transition
    ["transparent", "#1A202C"] // From transparent to dark background
  );

  // Ref for the hamburger menu
  const menuRef = useRef(null);

  // Check for mobile view on mount and window resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024); // 1024px is typically lg breakpoint in Tailwind
    };

    // Initial check
    checkMobile();

    // Add event listener for window resize
    window.addEventListener("resize", checkMobile);

    // Clean up
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Close the menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    // Add event listener when the menu is open
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Cleanup the event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  // Open menu on hover
  const handleHover = () => {
    if (isMobile) {
      setIsMenuOpen(true);
    }
  };

  // Close menu when clicking the close button
  const handleClose = () => {
    setIsMenuOpen(false);
  };

  // Animation variants for the hamburger menu
  const menuVariants = {
    hidden: { x: "100%" },
    visible: { x: 0 },
  };

  // Menu items with icons
  const menuItems = [
    { to: "/", label: "Home", icon: <FaHome className="mr-4" /> },
    { to: "/menu", label: "Menu", icon: <FaUtensils className="mr-4" /> },
    { to: "/about", label: "About", icon: <FaInfoCircle className="mr-4" /> },
    { to: "/contact", label: "Contact", icon: <FaEnvelope className="mr-4" /> },
    {
      to: "/order",
      label: "Order",
      icon: <FaShoppingBasket className="mr-4" />,
    },
  ];

  // Calculate the total number of items in the basket
  const totalItems = order.reduce((total, item) => total + item.quantity, 0);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out"
      style={{ backgroundColor }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              to="/"
              className="text-2xl font-bold text-[#F7FAFC] hover:text-[#38A169] transition duration-300 font-serif"
            >
              mycoBrew
            </Link>
          </div>

          {/* Desktop Navigation */}
          {!isMobile && (
            <div className="hidden lg:flex items-center space-x-8 font-semibold">
              {menuItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="text-[#F7FAFC] hover:text-[#38A169] transition duration-300 font-medium flex items-center"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}

          {/* Hamburger Menu Icon and Basket Icon */}
          <div className="flex items-center space-x-4">
            {/* Basket Icon with Notification Badge */}
            <Link
              to="/order"
              className="relative text-[#F7FAFC] hover:text-[#38A169] transition duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
              {/* Notification Badge */}
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#D69E2E] text-[#F7FAFC] text-xs font-bold rounded-full px-2 py-1">
                  {totalItems}
                </span>
              )}
            </Link>

            {/* Social Media Icons - Desktop Only */}
            {!isMobile && (
              <div className="hidden lg:flex items-center space-x-4 ml-6">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#F7FAFC] hover:text-[#38A169] transition duration-300"
                >
                  <FaFacebook size={20} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#F7FAFC] hover:text-[#38A169] transition duration-300"
                >
                  <FaTwitter size={20} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#F7FAFC] hover:text-[#38A169] transition duration-300"
                >
                  <FaInstagram size={20} />
                </a>
              </div>
            )}

            {/* Hamburger Menu Icon - Mobile Only */}
            {isMobile && (
              <div onMouseEnter={handleHover} className="relative lg:hidden">
                <button className="text-[#F7FAFC] hover:text-[#38A169] focus:outline-none">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                </button>

                {/* Hamburger Menu (quarter-page overlay) */}
                <AnimatePresence>
                  {isMenuOpen && (
                    <motion.div
                      ref={menuRef}
                      className="fixed top-0 right-0 h-full w-64 bg-[#1A202C] bg-opacity-95 z-50 shadow-2xl flex flex-col"
                      variants={menuVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      transition={{ type: "tween", duration: 0.3 }}
                    >
                      <div className="flex justify-end p-6">
                        <button
                          onClick={handleClose}
                          className="text-[#F7FAFC] hover:text-[#38A169] focus:outline-none"
                        >
                          <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      </div>

                      {/* Logo at the Top */}
                      <div className="flex justify-center p-6">
                        <Link
                          to="/"
                          className="text-2xl font-bold text-[#F7FAFC] hover:text-[#38A169] transition duration-300 font-serif"
                        >
                          mycoBrew
                        </Link>
                      </div>

                      {/* Menu Items with Icons */}
                      <div className="flex flex-col items-center p-6 flex-grow">
                        <ul className="space-y-6">
                          {menuItems.map((link) => (
                            <li key={link.to}>
                              <Link
                                to={link.to}
                                className="text-xl font-bold text-[#F7FAFC] hover:text-[#38A169] transition duration-200 font-serif flex items-center"
                                onClick={handleClose}
                              >
                                {link.icon} {link.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Social Media Icons at the Bottom */}
                      <div className="p-6 border-t border-[#4A5568]">
                        <div className="flex justify-center space-x-4">
                          <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#F7FAFC] hover:text-[#38A169] transition duration-300"
                          >
                            <FaFacebook size={24} />
                          </a>
                          <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#F7FAFC] hover:text-[#38A169] transition duration-300"
                          >
                            <FaTwitter size={24} />
                          </a>
                          <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#F7FAFC] hover:text-[#38A169] transition duration-300"
                          >
                            <FaInstagram size={24} />
                          </a>
                          <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#F7FAFC] hover:text-[#38A169] transition duration-300"
                          >
                            <FaLinkedin size={24} />
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
