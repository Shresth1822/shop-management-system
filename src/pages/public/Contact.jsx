import React from "react";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useSettings } from "../../hooks/useSettings";
import SEO from "../../components/common/SEO";

const Contact = () => {
  const { settings } = useSettings();

  if (!settings)
    return <div className="p-8 text-center">Loading contact info...</div>;

  return (
    <div className="min-h-screen bg-neutral-50 py-12 px-4 sm:px-6 lg:px-8">
      <SEO
        title="Contact Us"
        description="Get in touch with Hari Bhagwan Traders. Visit our store in Bisauli or contact us via phone or email."
      />
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-semibold tracking-widest uppercase text-sm">
            We'd Love to Hear From You
          </span>
          <h1 className="mt-2 text-3xl font-serif font-bold text-gray-900 sm:text-4xl text-primary-dark">
            Get in Touch
          </h1>
          <p className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto font-light">
            Visit our store in Bisauli or reach out to us for any queries about
            our products.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-100"
          >
            <div className="p-8 md:p-10">
              <h2 className="text-2xl font-bold font-serif text-gray-900 mb-8 border-b border-gray-100 pb-4">
                Contact Information
              </h2>

              <div className="space-y-8">
                <div className="flex items-start group">
                  <div className="flex-shrink-0 p-3 bg-primary/5 rounded-lg group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <MapPin className="h-6 w-6 text-primary group-hover:text-white" />
                  </div>
                  <div className="ml-5">
                    <p className="text-lg font-bold text-gray-900">
                      Our Location
                    </p>
                    <p className="mt-1 text-gray-500 whitespace-pre-line leading-relaxed">
                      {settings.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="flex-shrink-0 p-3 bg-primary/5 rounded-lg group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Phone className="h-6 w-6 text-primary group-hover:text-white" />
                  </div>
                  <div className="ml-5">
                    <p className="text-lg font-bold text-gray-900">Phone</p>
                    <p className="mt-1 text-gray-500">
                      <a
                        href={`tel:${settings.phone}`}
                        className="hover:text-primary transition-colors font-medium"
                      >
                        {settings.phone}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="flex-shrink-0 p-3 bg-primary/5 rounded-lg group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Mail className="h-6 w-6 text-primary group-hover:text-white" />
                  </div>
                  <div className="ml-5">
                    <p className="text-lg font-bold text-gray-900">Email</p>
                    <p className="mt-1 text-gray-500">
                      <a
                        href={`mailto:${settings.email}`}
                        className="hover:text-primary transition-colors font-medium"
                      >
                        {settings.email}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="flex-shrink-0 p-3 bg-primary/5 rounded-lg group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Clock className="h-6 w-6 text-primary group-hover:text-white" />
                  </div>
                  <div className="ml-5">
                    <p className="text-lg font-bold text-gray-900">
                      Business Hours
                    </p>
                    <p className="mt-1 text-gray-500 whitespace-pre-line leading-relaxed">
                      {settings.business_hours}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <a
                  href={`tel:${settings.phone}`}
                  className="flex-1 flex justify-center items-center py-4 border border-transparent text-base font-medium rounded-xl text-white bg-secondary hover:bg-primary transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Call Now
                </a>
                <a
                  href={`https://wa.me/${settings.whatsapp?.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex justify-center items-center py-4 border border-transparent text-base font-medium rounded-xl text-white bg-green-600 hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  WhatsApp
                </a>
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white shadow-xl rounded-2xl overflow-hidden h-[500px] lg:h-auto border border-gray-100 relative"
          >
            <div className="absolute inset-0 bg-gray-200 animate-pulse z-0 rounded-2xl" />
            <iframe
              src={settings.map_url}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Google Maps Location"
              className="relative z-10 w-full h-full"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
