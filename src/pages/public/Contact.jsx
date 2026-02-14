import React from "react";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { useSettings } from "../../hooks/useSettings";
import SEO from "../../components/common/SEO";

const Contact = () => {
  const { settings } = useSettings();

  if (!settings)
    return <div className="p-8 text-center">Loading contact info...</div>;
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <SEO
        title="Contact Us"
        description="Get in touch with Hari Bhagwan Traders. Visit our store in Bisauli or contact us via phone or email."
      />
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
                    <p className="mt-1 text-gray-500 whitespace-pre-line">
                      {settings.address}
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
                        href={`tel:${settings.phone}`}
                        className="hover:text-primary transition-colors"
                      >
                        {settings.phone}
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
                        href={`mailto:${settings.email}`}
                        className="hover:text-primary transition-colors"
                      >
                        {settings.email}
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
                    <p className="mt-1 text-gray-500 whitespace-pre-line">
                      {settings.business_hours}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex space-x-4">
                <a
                  href={`tel:${settings.phone}`}
                  className="flex-1 flex justify-center items-center py-3 border border-transparent text-base font-medium rounded-md text-white bg-secondary hover:bg-primary transition-colors"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Call Now
                </a>
                <a
                  href={`https://wa.me/${settings.whatsapp?.replace(/[^0-9]/g, "")}`}
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
              src={settings.map_url}
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
