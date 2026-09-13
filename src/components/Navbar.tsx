import Logo from "/images/logo-text.png";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Technologies", href: "#technologies" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-base-100 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Main Navbar */}
        <div className="flex items-center justify-between h-16">
          
          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-2xl md:hidden w-10"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>

          {/* Logo */}
          <div className="flex items-center md:flex-1">
            <img
              src={Logo}
              alt="Dev Stack"
              className="h-9 sm:h-10 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`text-sm font-medium ${
                    link.name === "Home"
                      ? "text-pink-600"
                      : "text-slate-600"
                  } hover:text-pink-700 transition-colors`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Auth Buttons */}
          <div className="flex items-center gap-2 sm:gap-4 md:flex-1 md:justify-end">
            <a
              href="#"
              className="text-xs sm:text-sm font-medium text-slate-600 hover:text-pink-700"
            >
              Sign In
            </a>

            <button className="text-xs sm:text-sm text-white px-3 sm:px-5 py-2 rounded-full btn-gradient hover:-translate-y-0.5 hover:shadow-xl hover:shadow-pink-500/30 transition-all">
              Sign Up
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-slate-200 py-4">
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={closeMenu}
                    className={`block px-3 py-2 rounded-lg text-sm font-medium ${
                      link.name === "Home"
                        ? "text-pink-600 bg-pink-50"
                        : "text-slate-600"
                    } hover:text-pink-700 hover:bg-pink-50 transition-colors`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;