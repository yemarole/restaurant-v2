import React, { useEffect } from "react";
import PageBanner from "./PageBanner";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarker,
} from "react-icons/fa";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser"; // Import EmailJS

const Contact = () => {
  // Initialize EmailJS when the component mounts
  useEffect(() => {
    emailjs.init({
      publicKey: "H8tF5JB1rS2gT6PAI", // Replace with your EmailJS Public Key
    });
  }, []);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission

    // Send the email using EmailJS
    emailjs
      .sendForm("service_ra3g46m", "template_oe3wdmz", e.target) // Replace with your Service ID and Template ID
      .then(
        (result) => {
          console.log("Email sent successfully!", result.text);
          alert("Your message has been sent!"); // Notify the user
          e.target.reset(); // Reset the form
        },
        (error) => {
          console.error("Failed to send email:", error.text);
          alert("Failed to send message. Please try again."); // Notify the user of the error
        }
      );
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <>
      <PageBanner
        title="Contact Us"
        subtitle="We're here to help you on your wellness journey"
        backgroundImage="/images/homepage-banner.jpg"
      />

      <div className="bg-[#F7FAFC] py-16 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <h1 className="text-4xl font-bold text-[#6B4423] mb-8 text-center font-serif">
            Contact Us
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <motion.div
              className="bg-white p-8 rounded-lg shadow-lg"
              variants={itemVariants}
            >
              <h2 className="text-2xl font-bold text-[#6B4423] mb-6 font-serif">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Hidden input for contact number */}
                <input type="hidden" name="contact_number" value="697483" />

                {/* Name Field */}
                <div>
                  <label className="block text-[#2D3748] mb-2 font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    name="user_name" // Match the EmailJS template
                    className="w-full p-3 border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#38A169] transition duration-300"
                    placeholder="Your Name"
                    required
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-[#2D3748] mb-2 font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    name="user_email" // Match the EmailJS template
                    className="w-full p-3 border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#38A169] transition duration-300"
                    placeholder="Your Email"
                    required
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-[#2D3748] mb-2 font-medium">
                    Message
                  </label>
                  <textarea
                    name="message" // Match the EmailJS template
                    className="w-full p-3 border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#38A169] transition duration-300"
                    rows="5"
                    placeholder="Your Message"
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-[#2F855A] text-[#F7FAFC] font-bold py-3 px-6 rounded-lg hover:bg-[#38A169] transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Contact Details */}
            <motion.div
              className="bg-white p-8 rounded-lg shadow-lg"
              variants={itemVariants}
            >
              <h2 className="text-2xl font-bold text-[#6B4423] mb-6 font-serif">
                Contact Information
              </h2>
              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="text-[#2F855A]">
                    <FaMapMarker size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#2D3748]">
                      Address
                    </h3>
                    <p className="text-[#4A5568]">
                      123 Mushroom Lane, London, UK
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="text-[#2F855A]">
                    <FaPhone size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#2D3748]">
                      Phone
                    </h3>
                    <p className="text-[#4A5568]">+44 123 456 7890</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="text-[#2F855A]">
                    <FaEnvelope size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#2D3748]">
                      Email
                    </h3>
                    <p className="text-[#4A5568]">info@mycobrew.com</p>
                  </div>
                </div>

                {/* Opening Hours */}
                <div className="flex items-start space-x-4">
                  <div className="text-[#2F855A]">
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
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#2D3748]">
                      Opening Hours
                    </h3>
                    <p className="text-[#4A5568]">
                      Mon-Fri: 8:00 AM - 6:00 PM
                      <br />
                      Sat-Sun: 9:00 AM - 5:00 PM
                    </p>
                  </div>
                </div>

                {/* Social Media Icons */}
                <div className="flex items-start space-x-4">
                  <div className="text-[#2F855A]">
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
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#2D3748]">
                      Follow Us
                    </h3>
                    <div className="flex space-x-4 mt-2">
                      <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#4A5568] hover:text-[#38A169] transition duration-300"
                      >
                        <FaFacebook size={24} />
                      </a>
                      <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#4A5568] hover:text-[#38A169] transition duration-300"
                      >
                        <FaTwitter size={24} />
                      </a>
                      <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#4A5568] hover:text-[#38A169] transition duration-300"
                      >
                        <FaInstagram size={24} />
                      </a>
                      <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#4A5568] hover:text-[#38A169] transition duration-300"
                      >
                        <FaLinkedin size={24} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Contact;
