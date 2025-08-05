import { Link } from "react-router-dom";
import { Heart, Mail, Phone, MapPin } from "lucide-react";
import drsLogo from "@/assets/drs-logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src={drsLogo} alt="DRS Foundation Logo" className="h-10 w-10" />
              <div>
                <h3 className="font-bold">SHREE GANESH</h3>
                <p className="text-sm opacity-80">DRS Foundation</p>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Dedicated to creating positive change and providing comprehensive support to communities in need.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <Link to="/about" className="block text-sm opacity-80 hover:opacity-100 transition-opacity">
                About Us
              </Link>
              <Link to="/program" className="block text-sm opacity-80 hover:opacity-100 transition-opacity">
                Our Programs
              </Link>
              <Link to="/approach" className="block text-sm opacity-80 hover:opacity-100 transition-opacity">
                Our Approach
              </Link>
              <Link to="/features" className="block text-sm opacity-80 hover:opacity-100 transition-opacity">
                Features
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm opacity-80">
                <Mail className="h-4 w-4" />
                <span>info@drsfoundation.org</span>
              </div>
              <div className="flex items-center space-x-2 text-sm opacity-80">
                <Phone className="h-4 w-4" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-2 text-sm opacity-80">
                <MapPin className="h-4 w-4" />
                <span>Mumbai, Maharashtra, India</span>
              </div>
            </div>
          </div>

          {/* Mission Statement */}
          <div>
            <h4 className="font-semibold mb-4">Our Mission</h4>
            <p className="text-sm opacity-80 leading-relaxed">
              To empower communities through education, healthcare, and sustainable development initiatives.
            </p>
            
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm opacity-80">
            © 2024 SHREE GANESH DRS Foundation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;