# Hari Bhagwan Traders - Shop Management System

A modern, responsive web application for Hari Bhagwan Traders, a premium utensils and crockery shop in Bisauli. This system includes a public-facing catalog for customers and a comprehensive admin dashboard for inventory and content management.

## 🚀 Features

### Public Storefront

- **Product Catalog**: Browse a wide range of utensils and crockery with filtering by category and search functionality.
- **Responsive Design**: Optimized for seamless experience across mobile, tablet, and desktop devices.
- **Dynamic Content**: Homepage, About, and Contact pages powered by dynamic business settings.
- **SEO Optimized**: Fully managed meta tags and titles for better search engine visibility.
- **Fast Loading**: Lazy loading for images and optimized assets.

### Admin Dashboard

- **Secure Authentication**: Protected admin routes using Supabase Authentication.
- **Dashboard Overview**: Real-time statistics on total products, low stock alerts, and catalog visibility.
- **Product Management**: deeply integrated CRUD (Create, Read, Update, Delete) operations for products.
- **Category Management**: Manage product categories dynamically.
- **Inventory Tracking**: Visual indicators for low stock and out-of-stock items.
- **Business Settings**: Update contact info, business hours, and social links directly from the dashboard.
- **Image Management**: Seamless image uploads via Supabase Storage.

## 🛠️ Tech Stack

- **Frontend**: React.js 18, Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM v6
- **State Management**: React Context API
- **Backend & Database**: Supabase (PostgreSQL, Auth, Storage)
- **Icons**: Lucide React
- **SEO**: React Helmet Async

## 📂 Project Structure

```
src/
├── components/         # Reusable UI components
│   ├── admin/          # Admin-specific components (e.g., layouts, forms)
│   ├── common/         # Shared components (e.g., SEO, loading spinners)
│   ├── layout/         # Public layout components (Navbar, Footer)
│   └── public/         # Public-facing components (ProductCard)
├── contexts/           # React Contexts (AuthContext)
├── hooks/              # Custom React hooks (useSettings)
├── lib/                # Library configurations (Supabase client)
├── pages/              # Page components
│   ├── admin/          # Admin dashboard pages
│   └── public/         # Public website pages
└── App.jsx             # Main application router and provider setup
```

## 🔗 Live Demo

[Insert Live Demo URL Here]

## 📄 License

This project is proprietary software developed for Hari Bhagwan Traders.
