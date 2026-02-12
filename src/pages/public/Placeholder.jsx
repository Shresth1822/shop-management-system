import React from "react";

const Placeholder = ({ pageName = "Page" }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center">
        <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          {pageName}
        </h1>
        <p className="mt-4 text-xl text-gray-500">
          This page is currently under construction. Please check back later!
        </p>
      </div>
      <div className="mt-12 border-2 border-dashed border-gray-300 rounded-lg h-64 flex items-center justify-center text-gray-400">
        Content for {pageName} will go here.
      </div>
    </div>
  );
};

export default Placeholder;
