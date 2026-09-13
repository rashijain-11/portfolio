# 🚀 Rashi's Personal Portfolio

A sleek, responsive, and modern developer portfolio built with **React**, **Vite**, and **Tailwind CSS**.

---

## ✨ Features

- 🌓 **Dark & Light Mode**: Smooth theme toggling with persistent user preference storage.
- 📱 **Fully Responsive**: Designed to look clean across mobile phones, tablets, and wide desktop screens.
- ⚡ **Lightning Fast**: Built on Vite for near-instant hot module replacement (HMR) and optimized static production builds.
- 🎨 **Glassmorphism & Micro-animations**: Modern aesthetic with glowing gradients, floating cards, and subtle hover interactions.
- 🛠️ **Config-Driven Architecture**: Easily update your bio, projects, skills, education, and social links in one file: `src/data/portfolioData.js`.
- 📋 **Quick Email Copy & Contact Form**: Frictionless connection workflow for recruiters and clients.
- 🏷️ **Categorized Project Filtering**: Showcase projects by category (Full Stack, Frontend, Backend, AI & Tools).

---

## 💻 Getting Started

### 1. Install Dependencies
```bash
npm install
```
*(On Windows PowerShell, use `npm.cmd install` if script execution policies are restricted).*

### 2. Start Development Server
```bash
npm run dev
# or npm.cmd run dev
```
Open your browser at `http://localhost:3000` (or the port shown in your terminal).

### 3. Build for Production
```bash
npm run build
# or npm.cmd run build
```
The optimized static files will be generated in the `dist/` directory, ready to deploy to **Vercel**, **Netlify**, or **GitHub Pages**.

---

## ⚙️ How to Personalize

To customize the portfolio with your real information:
1. Open `src/data/portfolioData.js`.
2. Edit:
   - `personal`: Name, title, tagline, bio, email, location, resume URL.
   - `socials`: GitHub, LinkedIn, Twitter, etc.
   - `stats`: Experience years, projects completed, etc.
   - `skills`: Add or remove skills and proficiency percentages.
   - `projects`: Replace demo projects with your own GitHub repos and live links.
   - `experience`: Update work history, internships, and key achievements.
   - `education`: Update your degrees and universities.
   - `testimonials`: Recommendations or endorsements from teammates/mentors.

---

## 📦 Tech Stack

- **Framework**: React 18
- **Bundler**: Vite 5
- **Styling**: Tailwind CSS 3
- **Icons**: Lucide React
- **Fonts**: Inter & JetBrains Mono (via Google Fonts)
