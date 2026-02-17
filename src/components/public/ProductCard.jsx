import React from "react";
import { Phone, MessageCircle } from "lucide-react";
import { useSettings } from "../../hooks/useSettings";

const ProductCard = ({ product }) => {
  const { settings } = useSettings();

  // Default values if settings aren't loaded yet or available
  const phone = settings?.phone || "+919876543210";
  const whatsapp = settings?.whatsapp?.replace(/[^0-9]/g, "") || "919876543210";

  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full group border border-gray-100 overflow-hidden transform hover:-translate-y-1">
      <div className="relative h-56 bg-gray-100 overflow-hidden">
        {product.image_url ? (
          <img
            src={product.image_url}
            alt={product.name}
            loading="lazy"
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400 bg-gray-50">
            <span className="text-sm">No Image</span>
          </div>
        )}
        {product.stock <= 0 && (
          <div className="absolute top-3 right-3 bg-red-500/90 backdrop-blur-sm text-white px-3 py-1 text-xs font-bold rounded-full uppercase tracking-wider shadow-sm">
            Out of Stock
          </div>
        )}
        {/* Quick action overlay could go here */}
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <div className="mb-2">
          <span className="text-xs font-medium text-secondary uppercase tracking-wider">
            {product.categories?.name || "Uncategorized"}
          </span>
        </div>
        <h3 className="text-lg font-serif font-bold text-gray-900 mb-2 line-clamp-2 leading-tight group-hover:text-primary transition-colors">
          {product.name}
        </h3>

        <div className="mt-auto pt-4 border-t border-gray-50">
          <div className="flex justify-between items-end mb-4">
            <div className="flex flex-col">
              <span className="text-xs text-gray-500 mb-0.5">Price</span>
              <span className="text-lg font-bold text-primary">
                {product.price_min ? `₹${product.price_min}` : "On Request"}
                {product.price_max && ` - ₹${product.price_max}`}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <a
              href={`tel:${phone}`}
              className="flex justify-center items-center py-2.5 px-3 border border-secondary text-secondary rounded-lg hover:bg-secondary hover:text-white transition-all duration-300 text-sm font-medium"
            >
              <Phone className="h-4 w-4 mr-2" />
              Call
            </a>
            <a
              href={`https://wa.me/${whatsapp}?text=I'm interested in ${product.name}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center py-2.5 px-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all duration-300 text-sm font-medium shadow-sm hover:shadow-md"
            >
              <MessageCircle className="h-4 w-4 mr-2" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
