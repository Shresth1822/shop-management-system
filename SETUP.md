# Setup & Deployment Guide

This guide covers how to set up the Hari Bhagwan Traders Shop Management System locally and deploy it to production.

## 📋 Prerequisites

- **Node.js** (v18 or higher)
- **npm** (comes with Node.js)
- **Supabase Account** (for backend services)
- **Vercel Account** (recommended for deployment)

## 🛠️ Local Installation

1.  **Clone the repository**

    ```bash
    git clone <repository-url>
    cd shop-management-system
    ```

2.  **Install dependencies**

    ```bash
    npm install
    ```

3.  **Configure Environment Variables**
    Create a `.env` file in the root directory:

    ```env
    VITE_SUPABASE_URL=your_supabase_project_url
    VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
    ```

4.  **Run the development server**
    ```bash
    npm run dev
    ```
    The app will be available at `http://localhost:5173`.

## 🗄️ Backend Setup (Supabase)

1.  **Create a new project** in Supabase.
2.  **Database Schema**:
    - Go to the SQL Editor in your Supabase dashboard.
    - Copy the contents of `supabase_schema.sql` (found in the root of this project).
    - Run the SQL script to create tables (`products`, `categories`, `settings`) and set up Row Level Security (RLS) policies.

3.  **Storage Bucket**:
    - Go to **Storage** in Supabase.
    - Create a new public bucket named `product-images`.
    - Ensure policies allow public read access and authenticated uploads.

4.  **Authentication**:
    - Go to **Authentication** > **Providers** and enable Email/Password.
    - Create an admin user manually via the Supabase dashboard (or enable signups temporarily, create one user, then disable signups).

## 🚀 Deployment (Vercel)

1.  **Push your code** to a Git repository (GitHub, GitLab, or Bitbucket).
2.  **Log in to Vercel** and click "Add New... > Project".
3.  **Import your repository**.
4.  **Configure Project**:
    - **Framework Preset**: Vite
    - **Root Directory**: `./` (default)
    - **Environment Variables**: Add the same variables from your `.env` file:
      - `VITE_SUPABASE_URL`
      - `VITE_SUPABASE_ANON_KEY`
5.  **Deploy**: Click "Deploy". Vercel will build and host your application.

## 🔄 Post-Deployment

- **Admin Access**: Log in to `/admin/login` using the credentials created in Supabase.
- **Initial Setup**: Go to `/admin/settings` to populate business details (Address, Phone, etc.) so the public footer and contact page display correct information.
- **Categories**: Go to `/admin/categories` to create initial product categories.

## ⚠️ Troubleshooting

- **404 on Refresh**: If you encounter 404 errors when refreshing pages on Vercel, ensure `vercel.json` is present in the root with the following content:
  ```json
  {
    "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
  }
  ```
