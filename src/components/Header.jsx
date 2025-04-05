import React, { useState } from "react";
import { Link } from "react-router-dom";
import "remixicon/fonts/remixicon.css";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="w-full py-4 px-4 md:px-6 flex items-center justify-between border-b border-gray-100 relative">
            {/* Left Section - Navigation & Mobile Menu Button */}
            <div className="flex items-center">
                {/* Mobile Menu Button */}
                <button
                    className="w-8 h-8 flex items-center justify-center mr-4 md:mr-6 lg:hidden"
                    onClick={toggleMenu}
                >
                    <i className={`ri-${isMenuOpen ? "close-line" : "menu-line"} text-gray-800 text-xl`}></i>
                </button>

                {/* Desktop Menu */}
                <nav className="hidden lg:flex space-x-6">
                    <Link to="/women" className="text-gray-800 hover:text-primary font-medium">
                        Women
                    </Link>
                    <Link to="/men" className="text-gray-800 hover:text-primary font-medium">
                        Men
                    </Link>
                </nav>
            </div>

            {/* Center - Logo */}
            <div className="text-center">
                <Link to="/" className="font-['Pacifico'] text-xl md:text-2xl text-gray-900">
                    Mira
                </Link>
            </div>

            {/* Right Section - Search & Cart Icons */}
            <div className="flex items-center space-x-4 md:space-x-6">
                <button className="w-8 h-8 flex items-center justify-center">
                    <i className="ri-search-line text-gray-800"></i>
                </button>
                {/* <button className="w-8 h-8 flex items-center justify-center">
          <i className="ri-shopping-cart-line text-gray-800"></i>
        </button> */}
            </div>

            {/* Mobile Menu (Hidden by Default) */}
            {isMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-white shadow-md p-4 flex flex-col space-y-4 lg:hidden z-2">
                    <Link to="/women" className="text-gray-800 hover:text-primary font-medium" onClick={toggleMenu}>
                        Women
                    </Link>
                    <Link to="/men" className="text-gray-800 hover:text-primary font-medium" onClick={toggleMenu}>
                        Men
                    </Link>
                </div>
            )}
        </header>
    );
};

export default Header;
