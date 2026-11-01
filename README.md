# Rashidali Sunasara — Personal Developer Portfolio

Modern, high-performance personal portfolio website built with **Next.js 16**, **React 19**, **Tailwind CSS v4**, and **Framer Motion**.

---

## ⚡ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (Turbopack, App Router)
- **Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/) & Canvas Confetti
- **Icons**: [Lucide React](https://lucide.dev/)
- **Contact Service**: [Web3Forms](https://web3forms.com/)

---

## 🚀 Getting Started

### 1. Clone & Install Dependencies
```bash
git clone https://github.com/rashidali0711/portfolio.git
cd portfolio
npm install
```

### 2. Configure Environment Variables
Copy `.env.example` to `.env.local` and add your Web3Forms access key:
```bash
cp .env.example .env.local
```
Inside `.env.local`:
```env
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_access_key_here
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view your portfolio.

---

## ☁️ Deployment on Cloudflare Pages

1. Push this repository to GitHub.
2. In the **Cloudflare Dashboard**, navigate to **Workers & Pages** > **Create application** > **Pages** > **Connect to Git**.
3. Select your repository.
4. Set Build Settings:
   - **Framework preset**: `Next.js`
   - **Build command**: `npm run build`
   - **Output directory**: `.next` (or use Cloudflare `@cloudflare/next-on-pages`)
5. In **Environment Variables**, add:
   - `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` = your access key
6. Click **Save and Deploy**.

---

## 📄 License
MIT © [Rashidali Sunasara](https://github.com/rashidali0711)
