-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- Create categories table
create table public.categories (
  id uuid default uuid_generate_v4() primary key,
  name text not null unique
);

-- Create products table
create table public.products (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  category_id uuid references public.categories(id),
  price_min numeric,
  price_max numeric,
  stock integer default 0,
  image_url text,
  is_visible boolean default true,
  created_at timestamp with time zone default timezone('utc'::text, now())
);

-- Create settings table
create table public.settings (
  id uuid default uuid_generate_v4() primary key,
  phone text,
  address text,
  business_hours text,
  whatsapp text
);

-- Set up Row Level Security (RLS)
-- Enable RLS
alter table public.products enable row level security;
alter table public.categories enable row level security;
alter table public.settings enable row level security;

-- Policies for products
-- Everyone can view visible products
create policy "Public products are viewable by everyone"
  on products for select
  using ( is_visible = true );

-- Admins can do everything (we'll implement admin auth logic later, for now allow all for dev or assume authenticated)
-- simpler policy for now: 
-- Authenticated users (admin) can do all. 
-- For the public facing site, we only need read access.
-- Ideally we would have a specific role or check for admin user email.
-- Since requirement is "Admin login using Supabase Auth", we can assume any authenticated user committed to this app is an admin if we restrict signups, or we check a users table.
-- For now, let's allow read for public, and everything for authenticated users.

create policy "Enable read access for all users"
  on products for select
  using (true);
  
create policy "Enable all access for authenticated users"
  on products for all
  using (auth.role() = 'authenticated');

-- Policies for categories
create policy "Enable read access for all users"
  on categories for select
  using (true);

create policy "Enable all access for authenticated users"
  on categories for all
  using (auth.role() = 'authenticated');

-- Policies for settings
create policy "Enable read access for all users"
  on settings for select
  using (true);

create policy "Enable all access for authenticated users"
  on settings for all
  using (auth.role() = 'authenticated');

-- Storage Bucket for product images
-- You'll need to create a bucket named 'products' in the Supabase dashboard manually or via policy if possible, 
-- but usually bucket creation is a one-time admin task. 
-- We can add policy for storage though.
-- (This SQL assumes the bucket 'products' exists)
