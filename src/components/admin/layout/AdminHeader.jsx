import React from "react";
import { Menu, Bell } from "lucide-react";
import { useAuth } from "../../../contexts/AuthContext";

const AdminHeader = ({ toggleSidebar }) => {
  const { user } = useAuth();

  return (
    <header className="bg-white shadow-sm h-16 flex items-center justify-between px-4 sm:px-6 lg:px-8">
      <div className="flex items-center">
        <button
          onClick={toggleSidebar}
          className="text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary md:hidden"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      <div className="flex items-center space-x-4">
        <button className="text-gray-400 hover:text-gray-500">
          <Bell className="h-6 w-6" />
        </button>
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-bold">
            {user?.email?.charAt(0).toUpperCase() || "A"}
          </div>
          <span className="text-sm font-medium text-gray-700 hidden sm:block">
            {user?.email}
          </span>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
