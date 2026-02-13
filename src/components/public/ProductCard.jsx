import React from "react";
import { Phone, MessageCircle } from "lucide-react";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
      <div className="relative h-48 sm:h-56 bg-gray-200">
        {product.image_url ? (
          <img
            src={product.image_url}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            No Image Available
          </div>
        )}
        {product.stock <= 0 && (
          <div className="absolute top-0 right-0 bg-red-500 text-white px-3 py-1 text-sm font-bold rounded-bl-lg">
            Out of Stock
          </div>
        )}
      </div>

      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-gray-900 mb-1 line-clamp-2">
          {product.name}
        </h3>
        <p className="text-sm text-gray-500 mb-2">
          {product.categories?.name || "Uncategorized"}
        </p>

        <div className="mt-auto">
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg font-bold text-primary">
              {product.price_min ? `₹${product.price_min}` : "Price on Request"}
              {product.price_max && ` - ₹${product.price_max}`}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <a
              href="tel:+919876543210"
              className="flex justify-center items-center py-2 px-3 border border-secondary text-secondary rounded-md hover:bg-secondary hover:text-white transition-colors text-sm font-medium"
            >
              <Phone className="h-4 w-4 mr-2" />
              Call
            </a>
            <a
              href={`https://wa.me/919876543210?text=I'm interested in ${product.name}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center py-2 px-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors text-sm font-medium"
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
