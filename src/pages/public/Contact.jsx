import React from "react";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Contact Us
          </h1>
          <p className="mt-4 text-xl text-gray-500">
            We'd love to hear from you. Visit our store or get in touch!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Get in Touch
              </h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div className="ml-3">
                    <p className="text-lg font-medium text-gray-900">
                      Our Location
                    </p>
                    <p className="mt-1 text-gray-500">
                      Bisauli, Uttar Pradesh 243720
                    </p>
                    <p className="mt-1 text-sm text-gray-400">
                      Near Main Market
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div className="ml-3">
                    <p className="text-lg font-medium text-gray-900">Phone</p>
                    <p className="mt-1 text-gray-500">
                      <a
                        href="tel:+919876543210"
                        className="hover:text-primary transition-colors"
                      >
                        +91 98765 43210
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div className="ml-3">
                    <p className="text-lg font-medium text-gray-900">Email</p>
                    <p className="mt-1 text-gray-500">
                      <a
                        href="mailto:contact@haribhagwantraders.com"
                        className="hover:text-primary transition-colors"
                      >
                        contact@haribhagwantraders.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div className="ml-3">
                    <p className="text-lg font-medium text-gray-900">
                      Business Hours
                    </p>
                    <p className="mt-1 text-gray-500">
                      Monday - Saturday: 10:00 AM - 8:00 PM
                    </p>
                    <p className="mt-1 text-gray-500">Sunday: Closed</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex space-x-4">
                <a
                  href="tel:+919876543210"
                  className="flex-1 flex justify-center items-center py-3 border border-transparent text-base font-medium rounded-md text-white bg-secondary hover:bg-primary transition-colors"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Call Now
                </a>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex justify-center items-center py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-colors"
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="bg-white shadow rounded-lg overflow-hidden h-96 md:h-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14065.659637774936!2d78.9324!3d28.3075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390b9680c2f5dcb7%3A0x6c6e75e1b4b0b0b0!2sBisauli%2C%20Uttar%20Pradesh%20243720!5e0!3m2!1sen!2sin!4v1645000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Google Maps Location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
