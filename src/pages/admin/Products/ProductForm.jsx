import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { supabase } from "../../../lib/supabase";
import { Save, ArrowLeft, Upload } from "lucide-react";

const ProductForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEditMode = !!id;

  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [uploading, setUploading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    category_id: "",
    price_min: "",
    price_max: "",
    stock: "",
    description: "",
    image_url: "",
    is_visible: true,
  });

  useEffect(() => {
    fetchCategories();
    if (isEditMode) {
      fetchProduct();
    }
  }, [id]);

  const fetchCategories = async () => {
    const { data, error } = await supabase
      .from("categories")
      .select("*")
      .order("name");
    if (data) setCategories(data);
    if (error) console.error("Error fetching categories:", error);
  };

  const fetchProduct = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .eq("id", id)
        .single();

      if (error) throw error;
      if (data) setFormData(data);
    } catch (error) {
      console.error("Error fetching product:", error);
      alert("Error fetching product details");
      navigate("/admin/products");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleImageUpload = async (e) => {
    try {
      setUploading(true);
      const file = e.target.files[0];
      if (!file) return;

      const fileExt = file.name.split(".").pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `products/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from("product-images")
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const { data } = supabase.storage
        .from("product-images")
        .getPublicUrl(filePath);

      setFormData((prev) => ({ ...prev, image_url: data.publicUrl }));
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("Error uploading image");
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const productData = {
        ...formData,
        price_min: parseFloat(formData.price_min),
        price_max: parseFloat(formData.price_max),
        stock: parseInt(formData.stock),
      };

      if (isEditMode) {
        const { error } = await supabase
          .from("products")
          .update(productData)
          .eq("id", id);
        if (error) throw error;
      } else {
        const { error } = await supabase.from("products").insert([productData]);
        if (error) throw error;
      }

      navigate("/admin/products");
    } catch (error) {
      console.error("Error saving product:", error);
      alert("Error saving product");
    } finally {
      setLoading(false);
    }
  };

  if (loading && isEditMode) return <div className="p-4">Loading...</div>;

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center">
          <button
            onClick={() => navigate("/admin/products")}
            className="mr-4 p-2 rounded-full hover:bg-gray-200 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 text-gray-500" />
          </button>
          <h1 className="text-2xl font-bold text-gray-900">
            {isEditMode ? "Edit Product" : "Add New Product"}
          </h1>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow rounded-lg p-6 space-y-6"
      >
        {/* Basic Info */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label className="block text-sm font-medium text-gray-700">
              Product Name
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Category
            </label>
            <select
              name="category_id"
              required
              value={formData.category_id}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
            >
              <option value="">Select Category</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Stock
            </label>
            <input
              type="number"
              name="stock"
              required
              min="0"
              value={formData.stock}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Min Price
            </label>
            <input
              type="number"
              name="price_min"
              required
              min="0"
              step="0.01"
              value={formData.price_min}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Max Price
            </label>
            <input
              type="number"
              name="price_max"
              required
              min="0"
              step="0.01"
              value={formData.price_max}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
            />
          </div>
        </div>

        {/* Image Upload */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Product Image
          </label>
          <div className="mt-1 flex items-center space-x-4">
            {formData.image_url ? (
              <img
                src={formData.image_url}
                alt="Product"
                className="h-20 w-20 object-cover rounded-md border border-gray-300"
              />
            ) : (
              <div className="h-20 w-20 rounded-md border border-gray-300 bg-gray-50 flex items-center justify-center text-gray-400">
                No Image
              </div>
            )}
            <label className="cursor-pointer bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
              <span className="flex items-center">
                <Upload className="h-4 w-4 mr-2" />
                {uploading ? "Uploading..." : "Upload Image"}
              </span>
              <input
                type="file"
                className="hidden"
                accept="image/*"
                onChange={handleImageUpload}
                disabled={uploading}
              />
            </label>
          </div>
        </div>

        {/* Visibility */}
        <div className="flex items-center">
          <input
            id="is_visible"
            name="is_visible"
            type="checkbox"
            checked={formData.is_visible}
            onChange={handleChange}
            className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
          />
          <label
            htmlFor="is_visible"
            className="ml-2 block text-sm text-gray-900"
          >
            Visible in Catalog
          </label>
        </div>

        <div className="flex justify-end pt-4">
          <button
            type="button"
            onClick={() => navigate("/admin/products")}
            className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary mr-3"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={loading || uploading}
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50"
          >
            <Save className="h-4 w-4 mr-2" />
            {loading ? "Saving..." : "Save Product"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
