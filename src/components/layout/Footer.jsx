import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Hari Bhagwan Traders</h3>
            <p className="text-gray-400 mb-4">
              Your trusted shop for premium utensils and crockery in Bisauli.
              Quality products for your kitchen and dining needs.
            </p>
            <div className="flex space-x-4">
              {/* Add social media icons if needed */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Our Products
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Visit Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary mr-2 mt-0.5" />
                <span className="text-gray-400">
                  Bisauli, Uttar Pradesh, India - 243720
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-primary mr-2" />
                <a
                  href="tel:+919876543210"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-primary mr-2" />
                <a
                  href="mailto:contact@haribhagwantraders.com"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  contact@haribhagwantraders.com
                </a>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 text-primary mr-2 mt-0.5" />
                <span className="text-gray-400">
                  Mon - Sat: 10:00 AM - 8:00 PM
                  <br />
                  Sun: Closed
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Hari Bhagwan Traders. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
