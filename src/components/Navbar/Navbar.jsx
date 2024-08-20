/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion } from "framer-motion";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../../assets/favicon.jpg";

const Navbar = ({ sections }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeButton, setActiveButton] = useState("Home");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
    setIsOpen(false); // Close the menu after clicking a button
    const section = sections[buttonName];
    if (section && section.current) {
      section.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-black text-white z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center py-2 px-4">
        {/* Company Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 0.2,
          }}
          className="text-2xl font-semibold uppercase"
        >
          <img src={logo} alt="Company Logo" className="h-8 lg:h-16 my-0" /> {/* Reduced logo height */}
        </motion.div>

        {/* Hamburger Menu Icon */}
        <div className="lg:hidden">
          <GiHamburgerMenu
            className="text-3xl cursor-pointer"
            onClick={toggleMenu}
          />
        </div>

        {/* Navigation Buttons */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } absolute lg:static top-16 left-0 w-full lg:w-auto bg-black lg:bg-transparent lg:flex lg:items-center lg:space-x-6`}
        >
          {Object.keys(sections).map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.2 + index * 0.1,
              }}
              className={`text-sm font-medium ${
                activeButton === item
                  ? "border-2 border-[#FF0100] rounded-3xl p-2"
                  : ""
              }`}
            >
              <button
                className="text-white hover:text-[#FF0100] transition-colors w-full text-left px-4 py-2 lg:p-0 lg:w-auto lg:text-center"
                onClick={() => handleButtonClick(item)}
              >
                {item}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
