# Naresh Kumar Purohit - Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS, featuring Apple-like smooth scrolling animations and a premium design aesthetic.

## 🚀 Features

- **Next.js 14** with App Router and TypeScript
- **Tailwind CSS** for styling with custom theme
- **Smooth Scrolling** powered by Lenis (Apple-like experience)
- **Scroll Animations** with Framer Motion
- **Glassmorphism** UI design
- **Fully Responsive** mobile-first design
- **No Personal Images** - elegant gradient-based design
- **SEO Optimized** with proper metadata
- **Static Export** ready for GitHub Pages

## 🛠️ Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion, Lenis
- **Icons:** Lucide React
- **Fonts:** Inter, Outfit (Google Fonts)

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🌐 Development

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── layout/
│   │   ├── Navigation.tsx  # Sticky navigation
│   │   └── Footer.tsx      # Footer component
│   ├── sections/
│   │   ├── Hero.tsx        # Hero section
│   │   ├── About.tsx       # About section
│   │   ├── Skills.tsx      # Skills section
│   │   ├── Experience.tsx  # Experience timeline
│   │   ├── Projects.tsx    # Projects grid
│   │   ├── Content.tsx     # LinkedIn content
│   │   └── Contact.tsx     # Contact section
│   └── ui/
│       ├── SmoothScroll.tsx       # Lenis wrapper
│       ├── AnimatedSection.tsx    # Scroll animations
│       └── GradientBackground.tsx # Animated background
├── lib/
│   └── utils.ts            # Utility functions
└── public/
    └── icons/              # Favicon and icons
```

## 🎨 Design Features

- **Gradient Text Effects** - Purple to blue gradients
- **Glassmorphism Cards** - Frosted glass effect
- **Animated Gradient Orbs** - Dynamic background
- **Smooth Scroll** - Apple-like scrolling experience
- **Hover Animations** - Interactive elements
- **Responsive Design** - Mobile, tablet, desktop

## 🚢 Deployment

### GitHub Pages

1. Build the static site:

```bash
npm run build
```

2. The output will be in the `out/` directory

3. Configure GitHub Pages to serve from the `out/` directory or push the `out/` contents to a `gh-pages` branch

### Vercel/Netlify

Simply connect your repository and deploy. The platform will automatically detect Next.js and configure the build.

## 📝 Customization

### Colors

Edit `tailwind.config.ts` to customize the color scheme:

```typescript
colors: {
  primary: {
    DEFAULT: '#667eea',
    light: '#764ba2',
    dark: '#302b63',
  },
}
```

### Content

Update the content in the respective component files:

- `components/sections/Hero.tsx` - Personal info
- `components/sections/About.tsx` - About text and stats
- `components/sections/Skills.tsx` - Technical skills
- `components/sections/Experience.tsx` - Work experience
- `components/sections/Projects.tsx` - Projects
- `components/sections/Content.tsx` - LinkedIn posts
- `components/sections/Contact.tsx` - Contact information

## 📄 License

© 2024 Naresh Kumar Purohit. All rights reserved.

## 🤝 Connect

- **LinkedIn:** [nareshpurohit](https://www.linkedin.com/in/nareshpurohit)
- **GitHub:** [Mspurohit15](https://github.com/Mspurohit15)
- **Twitter:** [@MSpurohit15](https://twitter.com/MSpurohit15)
- **Email:** nareshkumarpurohit7890@gmail.com

---

Built with ❤️ using Next.js and Tailwind CSS
