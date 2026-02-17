import React from "react";
import { Award, Users, History, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import SEO from "../../components/common/SEO";

const About = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="bg-white min-h-screen">
      <SEO
        title="About Us"
        description="Learn about Hari Bhagwan Traders, a trusted name in Bisauli for quality kitchenware and crockery since 20 years."
      />

      {/* Hero Section */}
      <div className="relative bg-primary py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1556912173-3db996e7c68b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Kitchen Background"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/95 to-primary" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <h1 className="text-4xl font-serif font-bold text-white sm:text-5xl sm:tracking-tight lg:text-6xl mb-6">
              Our Legacy of{" "}
              <span className="text-secondary italic">Quality</span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-blue-100 font-light leading-relaxed">
              Serving Bisauli with premium kitchenware and elegant crockery for
              over two decades. Where tradition meets modern durability.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Our Story */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-secondary font-semibold tracking-widest uppercase text-sm">
              Our Journey
            </span>
            <h2 className="mt-2 text-3xl font-serif font-bold text-gray-900 sm:text-4xl mb-6">
              From Humble Beginnings to Trusted Choice
            </h2>
            <div className="prose prose-lg text-gray-500 space-y-6">
              <p>
                Established in the heart of Bisauli,{" "}
                <span className="font-semibold text-gray-900">
                  Hari Bhagwan Traders
                </span>{" "}
                started with a simple mission: to provide high-quality stainless
                steel utensils and elegant crockery to every household.
              </p>
              <p>
                Over the years, we have grown from a small shop to a trusted
                name in the region, known for our durability, fair pricing, and
                excellent customer service. We believe that a kitchen is the
                heart of a home, and our products are designed to make cooking
                and dining a delightful experience.
              </p>
            </div>

            <div className="mt-8 flex gap-4">
              <div className="flex items-center gap-2 text-gray-700">
                <CheckCircle className="text-secondary h-5 w-5" />
                <span className="font-medium">Direct Sourcing</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <CheckCircle className="text-secondary h-5 w-5" />
                <span className="font-medium">Quality Tested</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-12 lg:mt-0 relative"
          >
            <div className="absolute inset-0 bg-secondary/10 transform translate-x-4 translate-y-4 rounded-2xl" />
            <div className="aspect-w-4 aspect-h-3 rounded-2xl shadow-xl overflow-hidden relative z-10">
              <img
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Shop Interior"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Values */}
      <div className="bg-neutral-50 py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="text-secondary font-semibold tracking-widest uppercase text-sm">
              Our Core Beliefs
            </span>
            <h2 className="mt-3 text-3xl font-serif font-bold text-gray-900 sm:text-4xl">
              Driven by Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                icon: Award,
                title: "Quality First",
                desc: "We never compromise on the quality of steel and materials used in our products.",
              },
              {
                icon: Users,
                title: "Customer Satisfaction",
                desc: "Your happiness is our priority. We ensure you get the best value for your money.",
              },
              {
                icon: History,
                title: "Trust & Legacy",
                desc: "Building relationships for generations through honesty and transparency.",
              },
            ].map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="text-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-primary/5 rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <value.icon className="h-8 w-8" />
                  </div>
                </div>
                <h3 className="text-xl font-bold font-serif text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-500 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
