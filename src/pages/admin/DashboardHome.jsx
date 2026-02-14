import React, { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import { Package, AlertTriangle, Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";

const DashboardHome = () => {
  const [stats, setStats] = useState({
    totalProducts: 0,
    lowStock: 0,
    activeProducts: 0,
    hiddenProducts: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      setLoading(true);
      const { data: products, error } = await supabase
        .from("products")
        .select("*");

      if (error) throw error;

      const totalProducts = products.length;
      const lowStock = products.filter((p) => p.stock < 5).length;
      const activeProducts = products.filter((p) => p.is_visible).length;
      const hiddenProducts = products.filter((p) => !p.is_visible).length;

      setStats({
        totalProducts,
        lowStock,
        activeProducts,
        hiddenProducts,
      });
    } catch (error) {
      console.error("Error fetching stats:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="p-4">Loading stats...</div>;

  const statCards = [
    {
      name: "Total Products",
      value: stats.totalProducts,
      icon: Package,
      color: "bg-blue-500",
      link: "/admin/products",
    },
    {
      name: "Low Stock (< 5)",
      value: stats.lowStock,
      icon: AlertTriangle,
      color: "bg-yellow-500",
      link: "/admin/products",
    },
    {
      name: "Active / Visible",
      value: stats.activeProducts,
      icon: Eye,
      color: "bg-green-500",
      link: "/admin/products",
    },
    {
      name: "Hidden",
      value: stats.hiddenProducts,
      icon: EyeOff,
      color: "bg-gray-500",
      link: "/admin/products",
    },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {statCards.map((card) => (
          <Link
            key={card.name}
            to={card.link}
            className="bg-white overflow-hidden shadow rounded-lg hover:shadow-md transition-shadow cursor-pointer block"
          >
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className={`rounded-md p-3 ${card.color} text-white`}>
                    <card.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      {card.name}
                    </dt>
                    <dd>
                      <div className="text-lg font-medium text-gray-900">
                        {card.value}
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-lg font-medium text-gray-900 mb-4">
          Quick Actions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link
            to="/admin/products/new"
            className="flex items-center p-4 border rounded-lg hover:bg-gray-50"
          >
            <div className="p-2 bg-primary/10 rounded-full mr-4">
              <Package className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-medium text-gray-900">Add New Product</h3>
              <p className="text-sm text-gray-500">
                Create a new product listing
              </p>
            </div>
          </Link>
          <Link
            to="/admin/settings"
            className="flex items-center p-4 border rounded-lg hover:bg-gray-50"
          >
            <div className="p-2 bg-primary/10 rounded-full mr-4">
              <Eye className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-medium text-gray-900">
                Manage Business Info
              </h3>
              <p className="text-sm text-gray-500">
                Update contact details and hours
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
