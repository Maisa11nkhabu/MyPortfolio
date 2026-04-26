# 🚀 Personal Portfolio — Software Engineering Student

A modern, responsive portfolio website built with React. Features dark/light mode, smooth animations, and a fully responsive design.

## ✨ Features

- **Dark/Light Mode Toggle**
- **Smooth scroll animations** (fade-in on scroll)
- **Sticky header** with active section highlighting
- **Responsive** across all screen sizes
- **7 Sections**: Hero, About, Tech Stack, Projects, GitHub, Services, Contact
- **Project filter** by technology
- **Animated skill bars**
- Your **profile photo** included in the hero section

## 🛠️ Tech Stack

- React 18
- Custom CSS (no frameworks needed — all styles are handcrafted)
- Google Fonts: Syne + DM Sans

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm start
```

The app will open at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

## 📝 Customization Checklist

Replace all placeholder values in the source files:

### Personal Info
- [ ] `[Your Name]` → Your real name (Hero.js, Footer.js)
- [ ] `your.email@example.com` → Your email (Contact.js, Footer.js)
- [ ] `yourusername` → Your GitHub username (GitHub.js, Projects.js, Footer.js, About.js)
- [ ] LinkedIn URL in `Contact.js` and `Footer.js`

### Projects (src/components/Projects.js)
- Update project titles, descriptions, GitHub links, and demo links
- Add/remove projects as needed

### GitHub Section (src/components/GitHub.js)
- Update repo names, descriptions, stars, forks
- Update commit/star counts

### Stats (src/components/Hero.js)
- Update the stats: `10+ Projects`, `5+ Technologies`, `2+ Years Coding`

### Profile Photo
- The photo is already included at `public/profile.jpeg`
- To replace it, swap out `public/profile.jpeg` with your new photo

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.js / .css       — Sticky navigation with theme toggle
│   ├── Hero.js / .css         — Hero section with profile image
│   ├── About.js / .css        — About me + skills overview
│   ├── TechStack.js / .css    — Animated tech skill bars by category
│   ├── Projects.js / .css     — Filterable project cards
│   ├── Services.js / .css     — Services offered
│   ├── GitHub.js / .css       — GitHub profile + featured repos
│   ├── Contact.js / .css      — Contact form + social links
│   └── Footer.js / .css       — Footer
├── App.js                     — Root component with theme state
├── App.css
└── index.css                  — Global design system & CSS variables
```

## 🎨 Design System

All colors, fonts, and spacing live in `src/index.css` as CSS custom properties. To change the color scheme, simply update the variables in `:root` (dark) and `[data-theme="light"]`.

---

Made with 💙 using React
