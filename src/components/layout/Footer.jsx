import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useSettings } from "../../hooks/useSettings";

const Footer = () => {
  const { settings } = useSettings();

  if (!settings) return null;
  return (
    <footer className="bg-primary-dark text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-white/10 p-2 rounded-lg">
                {/* Reusing ShoppingBag icon logic or just text */}
                <span className="text-2xl font-serif font-bold text-white tracking-tight">
                  Hari Bhagwan Traders
                </span>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-sm">
              Your trusted destination for premium stainless steel utensils and
              elegant crockery in Bisauli. Elevating your kitchen and dining
              experience since 2000.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider text-sm">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-secondary hover:pl-2 transition-all duration-300 inline-block"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-gray-400 hover:text-secondary hover:pl-2 transition-all duration-300 inline-block"
                >
                  Collections
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-secondary hover:pl-2 transition-all duration-300 inline-block"
                >
                  Our Story
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-secondary hover:pl-2 transition-all duration-300 inline-block"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider text-sm">
              Get in Touch
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start group">
                <MapPin className="h-5 w-5 text-secondary flex-shrink-0 mr-3 mt-1 group-hover:text-white transition-colors" />
                <span className="text-gray-400 group-hover:text-gray-200 transition-colors">
                  {settings.address}
                </span>
              </li>
              <li className="flex items-center group">
                <Phone className="h-5 w-5 text-secondary flex-shrink-0 mr-3 group-hover:text-white transition-colors" />
                <a
                  href={`tel:${settings.phone}`}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {settings.phone}
                </a>
              </li>
              <li className="flex items-center group">
                <Mail className="h-5 w-5 text-secondary flex-shrink-0 mr-3 group-hover:text-white transition-colors" />
                <a
                  href={`mailto:${settings.email}`}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {settings.email}
                </a>
              </li>
              <li className="flex items-start group">
                <Clock className="h-5 w-5 text-secondary flex-shrink-0 mr-3 mt-1 group-hover:text-white transition-colors" />
                <span className="text-gray-400 whitespace-pre-line group-hover:text-gray-200 transition-colors">
                  {settings.business_hours}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Hari Bhagwan Traders. All rights
            reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <span className="text-gray-600">Designed with precision.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
