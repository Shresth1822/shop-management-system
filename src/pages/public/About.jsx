import React from "react";
import { Award, Users, History, CheckCircle } from "lucide-react";

const About = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-primary py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
            About Hari Bhagwan Traders
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-blue-100">
            Serving Bisauli with quality kitchenware and crockery for over 20
            years.
          </p>
        </div>
      </div>

      {/* Our Story */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Story
            </h2>
            <p className="mt-3 max-w-3xl text-lg text-gray-500">
              Established in the heart of Bisauli, Hari Bhagwan Traders started
              with a simple mission: to provide high-quality stainless steel
              utensils and elegant crockery to every household.
            </p>
            <p className="mt-3 max-w-3xl text-lg text-gray-500">
              Over the years, we have grown from a small shop to a trusted name
              in the region, known for our durability, fair pricing, and
              excellent customer service. We believe that a kitchen is the heart
              of a home, and our products are designed to make cooking and
              dining a delightful experience.
            </p>
          </div>
          <div className="mt-8 lg:mt-0">
            <div className="aspect-w-3 aspect-h-2 rounded-lg shadow-lg overflow-hidden bg-gray-100">
              {/* Placeholder for shop image */}
              <div className="w-full h-64 flex items-center justify-center text-gray-400 bg-gray-200">
                <span className="text-lg">Shop Image</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Our Values
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-blue-100 rounded-full">
                  <Award className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-medium text-gray-900">
                Quality First
              </h3>
              <p className="mt-2 text-gray-500">
                We never compromise on the quality of steel and materials used
                in our products.
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-blue-100 rounded-full">
                  <Users className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-medium text-gray-900">
                Customer Satisfaction
              </h3>
              <p className="mt-2 text-gray-500">
                Your happiness is our priority. We ensure you get the best value
                for your money.
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-blue-100 rounded-full">
                  <History className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-medium text-gray-900">
                Trust & Legacy
              </h3>
              <p className="mt-2 text-gray-500">
                Building relationships for generations through honesty and
                transparency.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
