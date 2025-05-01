
# 📝 Next.js Blog Frontend

This is the **frontend** of a full-stack blog project built with **Next.js** and styled using **Tailwind CSS**. It connects to a **Strapi CMS** backend to fetch and display blog content.

---

## ✨ Features

- Built with React & Next.js
- Styled with Tailwind CSS
- Dynamic routing for blog posts
- Mobile menu animation (Framer Motion)
- Light/Dark theme toggle
- REST API integration with Strapi

---

## 🧩 Pages

- `/` – Home (all posts)
- `/about` – About page
- `/newsletter` – Newsletter form
- `/posts/[slug]` – Dynamic post detail

---

## 🔌 Connects to Backend

This frontend consumes content from a separate Strapi backend:  
👉 [comoartista/theblog-backend](https://github.com/comoartista/theblog-backend)

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/comoartista/theblog
cd theblog
npm install
```

### 2. Create `.env.local`

```env
NEXT_PUBLIC_API_URL=https://theblog-backend-production.up.railway.app
NEXT_PUBLIC_API_TOKEN=your_optional_strapi_api_token
```

> Only needed if your API is protected with token auth.

### 3. Run dev server

```bash
npm run dev
```

---

## 🖼 Image Optimization

If using `next/image`, allow the backend image host in `next.config.js`:

```js
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'theblog-backend-production.up.railway.app',
        pathname: '/uploads/**',
      },
    ],
  },
};
export default nextConfig;
```

---

## 🌐 Production

This app is deployed on **Vercel**:  
🔗 [https://theblog.vercel.app](https://theblog-rho.vercel.app/)

---

## 🧑‍💻 Author

Created by [@comoartista](https://github.com/comoartista)
