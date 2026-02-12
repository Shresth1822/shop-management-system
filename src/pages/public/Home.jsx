import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Star, ShieldCheck, Truck } from "lucide-react";

const Home = () => {
  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section */}
      <div className="relative bg-primary overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-primary sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">Premium Utensils</span>{" "}
                  <span className="block text-accent xl:inline">
                    & Crockery
                  </span>
                </h1>
                <p className="mt-3 text-base text-blue-100 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Upgrade your kitchen with our high-quality stainless steel
                  utensils and elegant crockery sets. Serving Bisauli with trust
                  and quality for years.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Link
                      to="/products"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-gray-50 md:py-4 md:text-lg"
                    >
                      Browse Catalog
                    </Link>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <Link
                      to="/contact"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-secondary hover:bg-opacity-90 md:py-4 md:text-lg"
                    >
                      Visit Store
                    </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          {/* Placeholder for hero image - using a generic kitchen image from unsplash source */}
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="https://images.unsplash.com/photo-1556910103-1c02745a30bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
            alt="Modern kitchen with utensils"
          />
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Why Choose Us?
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            We bring the best quality products for your home.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white overflow-hidden shadow rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-blue-100 rounded-full">
                <ShieldCheck className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h3 className="text-lg font-medium text-gray-900">
              Premium Quality
            </h3>
            <p className="mt-2 text-base text-gray-500">
              Made from high-grade materials ensuring durability and
              long-lasting shine.
            </p>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-blue-100 rounded-full">
                <Star className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h3 className="text-lg font-medium text-gray-900">Best Prices</h3>
            <p className="mt-2 text-base text-gray-500">
              Competitive pricing on all our products without compromising on
              quality.
            </p>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-blue-100 rounded-full">
                <Truck className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h3 className="text-lg font-medium text-gray-900">Bulk Orders</h3>
            <p className="mt-2 text-base text-gray-500">
              Special rates and arrangements for weddings, parties, and
              wholesale requirements.
            </p>
          </div>
        </div>
      </div>

      {/* Categories Preview */}
      <div className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900">
                Shop by Category
              </h2>
            </div>
            <Link
              to="/products"
              className="hidden sm:flex items-center text-primary hover:text-secondary font-medium"
            >
              View All <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* Placeholder Categories */}
            {["Kitchen Sets", "Cookware", "Dinnerware"].map(
              (category, index) => (
                <Link
                  key={index}
                  to={`/products?category=${category}`}
                  className="group relative rounded-lg overflow-hidden bg-white shadow-md hover:shadow-xl transition-all h-64"
                >
                  <div className="absolute inset-0 bg-gray-200 animate-pulse">
                    {/* Replace with actual category images later */}
                    <div className="h-full w-full flex items-center justify-center text-gray-400">
                      Image Placeholder
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <h3 className="text-2xl font-bold text-white group-hover:text-accent transition-colors">
                      {category}
                    </h3>
                  </div>
                </Link>
              ),
            )}
          </div>

          <div className="mt-8 sm:hidden text-center">
            <Link
              to="/products"
              className="inline-flex items-center text-primary hover:text-secondary font-medium"
            >
              View All Categories <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
