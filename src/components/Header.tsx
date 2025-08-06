import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import drsLogo from "@/assets/DRSlogo.jpg";

const Header = () => {
  const location = useLocation();
  const [showDropdown, setShowDropdown] = useState(false);

  const navItems = [
    { name: "About", path: "/about" },
    { name: "Program", path: "/program" },
    { name: "Approach", path: "/approach" },
    { name: "Features", path: "/features" },
  ];

  return (
    <header className="bg-background border-b shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Name */}
          <Link
            to="/"
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
          >
            <img src={drsLogo} alt="DRS Foundation Logo" className="h-12 w-12" />
            <div>
              <h1 className="text-xl font-bold text-primary">SHREE GANESH</h1>
              <p className="text-sm text-muted-foreground">DRS Foundation</p>
            </div>
          </Link>

          {/* Navigation Menu */}
          <nav className="hidden md:flex items-center space-x-1 relative">
            {navItems.map((item) =>
              item.name === "Program" ? (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setShowDropdown(true)}
                  onMouseLeave={() => setShowDropdown(false)}
                >
                  <Button
                    asChild
                    variant="ghost"
                    className={`font-medium hover:bg-blue ${
                      location.pathname.startsWith(item.path)
                        ? "text-blue-600"
                        : "text-foreground hover:text-black"
                    }`}
                  >
                    <Link to={item.path}>{item.name}</Link>
                  </Button>

                  {/* Dropdown Menu */}
                  {showDropdown && (
                    <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-50">
                      <Link
                        to="/program/education"
                        className="block px-4 py-2 text-sm text-gray-700 hover:text-primary"
                      >
                        Education
                      </Link>
                      <Link
                        to="/program/health"
                        className="block px-4 py-2 text-sm text-gray-700 hover:text-primary"
                      >
                        Health
                      </Link>
                      <Link
                        to="/program/environment"
                        className="block px-4 py-2 text-sm text-gray-700 hover:text-primary"
                      >
                        Environment
                      </Link>
                    </div>
                  )}
                </div>
              ) : (
                <Button
                  key={item.name}
                  asChild
                  variant="ghost"
                  className={`font-medium hover:bg-transparent ${
                    location.pathname === item.path
                      ? "text-blue-600"
                      : "text-foreground hover:text-foreground"
                  }`}
                >
                  <Link to={item.path}>{item.name}</Link>
                </Button>
              )
            )}
          </nav>

          {/* Mobile Menu Button */}
          <Button variant="ghost" className="md:hidden">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
