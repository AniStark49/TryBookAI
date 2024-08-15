import { useState } from "react";
import { Link } from "react-scroll";
import PropTypes from "prop-types";
import { FaMoon, FaBars } from "react-icons/fa";
import { LuSunDim } from "react-icons/lu";
import { AnimatePresence, motion } from "framer-motion";

const mobileNavContainerVariant = {
  hidden: { opacity: 0, height: 0 },
  show: { opacity: 1, height: "auto", transition: { duration: 0.3 } },
};

const mobileNavListVariant = {
  hidden: { opacity: 0, y: -20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const Navbar = ({ isDarkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleNavbar = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`flex items-center justify-between sticky top-0 z-50 shadow-md p-4 ${
        isDarkMode ? "bg-[#1e293b] text-white" : "bg-white text-[#1e293b]"
      }`}
    >
      {/* Hamburger Icon */}
      <div className="flex justify-end md:hidden">
        <button onClick={toggleNavbar}>
          {isMenuOpen ? <FaBars /> : <FaBars />}
        </button>
      </div>

      {/* Logo */}
      <div className="text-2xl text-primary font-bold cursor-pointer hover:text-[#a5b4fc]">
        TryBookAI
      </div>

      {/* Links for larger screens */}
      <ul className="hidden md:flex justify-center gap-10 mr-24 list-none m-0 p-0">
        <li className="">
          <Link
            to="overview"
            smooth={true}
            className="cursor-pointer hover:text-[#22d3ee]"
          >
            OVERVIEW
          </Link>
        </li>
        <li className="">
          <Link
            to="tutorial"
            smooth={true}
            className="cursor-pointer hover:text-[#22d3ee]"
          >
            TUTORIAL
          </Link>
        </li>
        <li className="">
          <Link
            to="pricing"
            smooth={true}
            className="cursor-pointer hover:text-[#22d3ee]"
          >
            PRICING
          </Link>
        </li>
      </ul>

      {/* Dark Mode Toggle */}
      <div>
        <button
          onClick={toggleDarkMode}
          className={`p-2 rounded transition-all ${
            isDarkMode ? "bg-gray-700 text-white" : "bg-gray-200 text-black"
          }`}
        >
          {!isDarkMode ? <FaMoon /> : <LuSunDim />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            layout="position"
            key="nav-links"
            variants={mobileNavContainerVariant}
            initial="hidden"
            animate="show"
            exit="hidden"
            className={`absolute top-16 left-0 w-full flex flex-col justify-between items-center 
              ${isDarkMode ? "bg-[#1e293b] text-white" : "bg-white text-[#1e293b]"} 
              md:bg-transparent md:static md:flex md:justify-center md:gap-10 mr-24 list-none m-0 p-0 
              shadow-md md:shadow-none z-40`}
          >
            <motion.div variants={mobileNavListVariant}>
              <Link
                to="overview"
                smooth={true}
                className="cursor-pointer hover:text-[#22d3ee] block p-4"
                onClick={() => setIsMenuOpen(false)} 
              >
                OVERVIEW
              </Link>
            </motion.div>
            <motion.div variants={mobileNavListVariant}>
              <Link
                to="tutorial"
                smooth={true}
                className="cursor-pointer hover:text-[#22d3ee] block p-4"
                onClick={() => setIsMenuOpen(false)}
              >
                TUTORIAL
              </Link>
            </motion.div>
            <motion.div variants={mobileNavListVariant}>
              <Link
                to="pricing"
                smooth={true}
                className="cursor-pointer hover:text-[#22d3ee] block p-4"
                onClick={() => setIsMenuOpen(false)} 
              >
                PRICING
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

Navbar.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
  toggleDarkMode: PropTypes.func.isRequired,
};

export default Navbar;
