import React, { useState, useEffect } from "react";
import { supabase } from "../../lib/supabase";
import ProductCard from "../../components/public/ProductCard";
import { Search, Filter, X } from "lucide-react";
import { motion } from "framer-motion";
import SEO from "../../components/common/SEO";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Filters
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);

      // Fetch Categories
      const { data: categoriesData, error: categoriesError } = await supabase
        .from("categories")
        .select("*")
        .order("name");

      if (categoriesError) throw categoriesError;
      setCategories(categoriesData);

      // Fetch Products (initial fetch)
      // We will handle filtering in the render or via separate effect if needed,
      // but client-side filtering is often smoother for small-medium catalogs.
      // Let's fetch all visible products first.
      const { data: productsData, error: productsError } = await supabase
        .from("products")
        .select("*, categories(name)") // Join with categories to get category name
        .eq("is_visible", true)
        .order("created_at", { ascending: false });

      if (productsError) throw productsError;
      setProducts(productsData);
    } catch (err) {
      console.error("Error fetching data:", err);
      setError("Failed to load products. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  // Filter Logic
  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "All" ||
      product.categories?.name === selectedCategory;
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex justify-center items-center text-red-500">
        {error}
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-screen">
      <SEO
        title="Our Collection"
        description="Explore our wide range of premium stainless steel utensils, cookware, and crockery. Best prices and quality guaranteed."
      />

      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <span className="text-secondary font-semibold tracking-widest uppercase text-sm">
            Catalog
          </span>
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mt-2">
            Our Collection
          </h1>
          <p className="text-gray-500 mt-3 max-w-xl text-lg font-light">
            Meticulously crafted kitchenware designed for elegant dining and
            durable cooking.
          </p>
        </div>

        {/* Search and Mobile Filter Toggle */}
        <div className="flex items-center gap-3 w-full md:w-auto bg-white p-1 rounded-lg border border-gray-200 shadow-sm">
          <div className="relative flex-grow md:flex-grow-0">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search products..."
              className="block w-full md:w-72 pl-10 pr-4 py-2.5 border-transparent rounded-md leading-5 bg-transparent placeholder-gray-400 focus:outline-none focus:ring-0 sm:text-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <button
            className="md:hidden p-2.5 text-gray-500 hover:text-primary hover:bg-gray-50 rounded-md transition-colors"
            onClick={() => setShowFilters(!showFilters)}
          >
            <Filter className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-10">
        {/* Sidebar Filters */}
        <div
          className={`md:w-64 flex-shrink-0 ${showFilters ? "block" : "hidden"} md:block`}
        >
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 sticky top-24">
            <div className="flex justify-between items-center mb-6 md:hidden">
              <h3 className="font-bold text-gray-900 font-serif text-lg">
                Filters
              </h3>
              <button
                onClick={() => setShowFilters(false)}
                className="p-1 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="h-5 w-5 text-gray-500" />
              </button>
            </div>

            <h3 className="font-bold text-gray-900 mb-4 hidden md:block font-serif text-lg">
              Categories
            </h3>
            <div className="space-y-1">
              <button
                className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${selectedCategory === "All" ? "bg-primary text-white shadow-md transform scale-105" : "text-gray-600 hover:bg-gray-50 hover:pl-5"}`}
                onClick={() => setSelectedCategory("All")}
              >
                All Products
              </button>
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${selectedCategory === category.name ? "bg-primary text-white shadow-md transform scale-105" : "text-gray-600 hover:bg-gray-50 hover:pl-5"}`}
                  onClick={() => setSelectedCategory(category.name)}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="flex-1">
          {filteredProducts.length > 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-gray-200">
              <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-1">
                No products found
              </h3>
              <p className="text-gray-500">
                Try adjusting your search or filter to find what you're looking
                for.
              </p>
              <button
                className="mt-6 text-primary font-medium hover:text-secondary hover:underline transition-colors"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
