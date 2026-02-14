import React, { useState, useEffect } from "react";
import { supabase } from "../../lib/supabase";
import ProductCard from "../../components/public/ProductCard";
import { Search, Filter, X } from "lucide-react";
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <SEO
        title="Our Products"
        description="Explore our wide range of premium stainless steel utensils, cookware, and crockery. Best prices and quality guaranteed."
      />
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Our Products</h1>
          <p className="text-gray-500 mt-1">
            Explore our wide range of kitchenware
          </p>
        </div>

        {/* Search and Mobile Filter Toggle */}
        <div className="flex items-center gap-2 w-full md:w-auto">
          <div className="relative flex-grow md:flex-grow-0">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search products..."
              className="block w-full md:w-64 pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <button
            className="md:hidden p-2 border border-gray-300 rounded-md text-gray-700 bg-white"
            onClick={() => setShowFilters(!showFilters)}
          >
            <Filter className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar Filters */}
        <div
          className={`md:w-64 flex-shrink-0 ${showFilters ? "block" : "hidden"} md:block`}
        >
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <div className="flex justify-between items-center mb-4 md:hidden">
              <h3 className="font-bold text-gray-900">Filters</h3>
              <button onClick={() => setShowFilters(false)}>
                <X className="h-5 w-5 text-gray-500" />
              </button>
            </div>

            <h3 className="font-semibold text-gray-900 mb-3 hidden md:block">
              Categories
            </h3>
            <div className="space-y-2">
              <button
                className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${selectedCategory === "All" ? "bg-primary text-white" : "text-gray-700 hover:bg-gray-100"}`}
                onClick={() => setSelectedCategory("All")}
              >
                All Products
              </button>
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${selectedCategory === category.name ? "bg-primary text-white" : "text-gray-700 hover:bg-gray-100"}`}
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-lg border border-dashed border-gray-300">
              <p className="text-gray-500 text-lg">
                No products found matching your criteria.
              </p>
              <button
                className="mt-4 text-primary font-medium hover:underline"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
