import { useState, useEffect, useRef } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Navigation Items
  const navItems = [
    { to: "banner", label: "Home" },
    { to: "features", label: "Features" },
    { to: "liveMarket", label: "Live Market" },
    { to: "faq", label: "FAQ" },
    { to: "privacy", label: "Privacy Policy" },
  ];

  return (
    <nav className="bg-[#151A18] text-[#C0C0C0] fixed w-full top-0 shadow-md z-50">
      <div className="container mx-auto max-w-7xl flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <RouterLink
          className="flex items-center gap-2 text-lg font-bold"
          to="/"
        >
          <img alt="Logo" className="h-8" src="/images/logo.png" />
          T-Stackz Rackz
        </RouterLink>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex space-x-6">
          {navItems.map((item) => (
            <li key={item.to}>
              <ScrollLink
                className="cursor-pointer hover:text-primary"
                duration={500}
                offset={-80}
                smooth={true}
                to={item.to}
              >
                {item.label}
              </ScrollLink>
            </li>
          ))}
        </ul>

        {/* Right Side Controls */}
        <div className="hidden lg:flex items-center space-x-4">
          <a
            className="px-4 py-2 text-sm font-normal text-white bg-gradient-to-r from-[#B12533] to-[#CA4250] rounded-md"
            href="https://discord.gg/S2jPeJfXR4"
            rel="noopener noreferrer"
            target="_blank"
          >
            Join Now
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-2xl focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          ref={menuRef}
          className="lg:hidden px-6 bg-[#151A18] py-4 space-y-4 border-t border-gray-700"
        >
          <ul>
            {navItems.map((item) => (
              <li key={item.to}>
                <ScrollLink
                  className="cursor-pointer hover:text-primary"
                  duration={500}
                  offset={-80}
                  smooth={true}
                  to={item.to}
                  onClick={toggleMenu}
                >
                  {item.label}
                </ScrollLink>
              </li>
            ))}
          </ul>
          <RouterLink
            className="inline-block px-4 py-2 text-sm font-normal text-white bg-gradient-to-r from-[#B12533] to-[#CA4250] rounded-md"
            target="_blank"
            to="https://whop.com/t-stackzrackz/"
            onClick={toggleMenu}
          >
            Join Now
          </RouterLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
