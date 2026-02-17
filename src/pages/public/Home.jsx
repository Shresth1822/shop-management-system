import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Star, ShieldCheck, Truck } from "lucide-react";
import { motion } from "framer-motion";
import SEO from "../../components/common/SEO";

const Home = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="bg-neutral-50 min-h-screen">
      <SEO />

      {/* Hero Section */}
      <div className="relative bg-primary overflow-hidden min-h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover opacity-20"
            src="https://images.unsplash.com/photo-1556910103-1c02745a30bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
            alt="Luxury Kitchen Background"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/80" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="max-w-3xl"
          >
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-bold text-white leading-tight tracking-tight mb-6">
              Elevate Your <br />
              <span className="text-secondary italic">Culinary Art</span>
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 mb-8 max-w-2xl leading-relaxed font-light">
              Discover our curated collection of premium stainless steel
              utensils and exquisite crockery. Serving Bisauli with elegance and
              durability since 2000.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/products"
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-full text-primary bg-white hover:bg-neutral-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Explore Collection
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 border border-white text-base font-medium rounded-full text-white hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              >
                Visit Our Store
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <span className="text-secondary font-semibold tracking-widest uppercase text-sm">
              Our Promise
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-serif font-bold text-gray-900">
              Why Choose Hari Bhagwan Traders?
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto mt-6 rounded-full" />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
          >
            {[
              {
                icon: ShieldCheck,
                title: "Premium Quality",
                desc: "Crafted from high-grade 304 stainless steel and bone china, ensuring durability that lasts generations.",
              },
              {
                icon: Star,
                title: "Unmatched Value",
                desc: "Direct-from-manufacturer pricing means you get luxury quality without the luxury markup.",
              },
              {
                icon: Truck,
                title: "Wholesale & Bulk",
                desc: "Specialized service for weddings, events, and bulk orders with custom packaging solutions.",
              },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="group p-8 rounded-2xl bg-neutral-50 hover:bg-white border border-transparent hover:border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 bg-primary/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <feature.icon className="h-7 w-7 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-serif">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Categories Preview */}
      <section className="py-24 bg-neutral-900 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-secondary font-semibold tracking-widest uppercase text-sm">
                Curated Categories
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-serif font-bold text-white">
                Shop by Collection
              </h2>
            </div>
            <Link
              to="/products"
              className="hidden sm:inline-flex items-center text-white hover:text-secondary transition-colors group"
            >
              View Full Catalog{" "}
              <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Kitchen Sets",
                image:
                  "https://images.unsplash.com/photo-1584990347449-a06076fc465a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
              },
              {
                name: "Cookware",
                image:
                  "https://images.unsplash.com/photo-1583947215259-38e31be8751f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
              },
              {
                name: "Dinnerware",
                image:
                  "https://images.unsplash.com/photo-1623910769300-88001712a2aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
              },
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={`/products?category=${category.name}`}
                  className="group block relative h-80 rounded-2xl overflow-hidden cursor-pointer"
                >
                  <img
                    src={category.image}
                    alt={category.name}
                    className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                  <div className="absolute bottom-0 left-0 p-8 w-full">
                    <h3 className="text-2xl font-serif font-bold text-white group-hover:text-secondary transition-colors">
                      {category.name}
                    </h3>
                    <span className="inline-block mt-2 text-sm text-gray-300 border-b border-secondary/0 group-hover:border-secondary transition-all">
                      Explore Collection
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 sm:hidden text-center">
            <Link
              to="/products"
              className="inline-flex items-center text-white hover:text-secondary font-medium"
            >
              View Full Catalog <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
