# 🚀 Personal Website

A modern, full-stack personal website built with Next.js 16, featuring a dynamic portfolio, blog integration, book tracking, and resume management powered by a GraphQL backend.

## ✨ Features

### 🏠 Home

- Dynamic hero section with scroll-based animations
- Smooth avatar size transitions and fade effects
- Responsive design with sticky navigation

### 👤 About

- Comprehensive professional profile
- Social media integrations
- Contact information and network profiles

### 📚 Books

- Goodreads integration for book tracking
- Reading states (Currently Reading, Want to Read, Read)
- Dynamic book displays with metadata

### 📝 Articles

- Substack feed integration
- Blog post listings with rich previews
- Article metadata and summaries

### 💼 Projects

- GitHub repository integration
- Project showcases with live demos
- Detailed project descriptions and highlights

### 📄 Resume

- Multi-language support (English/German)
- Dynamic resume data from GraphQL backend
- Sections for work experience, education, skills, certifications, and more
- Downloadable resume links

## 🛠️ Built With

### Frontend

![TypeScript](https://img.shields.io/badge/-TypeScript-000000?style=flat-square&logo=typescript)
![React](https://img.shields.io/badge/-React-black?style=flat-square&logo=react)
![Next.js](https://img.shields.io/badge/-Next.js-black?style=flat-square&logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-000000?logo=tailwind-css&logoColor=white)
![DaisyUI](https://img.shields.io/badge/-DaisyUI-563D7C?logo=tailwind-css&logoColor=white)

### Backend & Data

![GraphQL](https://img.shields.io/badge/-GraphQL-E10098?style=flat-square&logo=graphql&logoColor=white)
![Node.js](https://img.shields.io/badge/-Node.js-339933?style=flat-square&logo=node.js&logoColor=white)

### Tools & Libraries

- **usehooks-ts** - Custom React hooks for enhanced functionality
- **graphql-tag** - GraphQL query parsing and manipulation
- **Theme Toggles** - Light/dark mode support
- **React Icons** - Comprehensive icon library
- **Nodemailer** - Email functionality
- **Substack Feed API** - Blog post integration

### Integrations

- **Goodreads API** - Book tracking and reading lists
- **GitHub API** - Repository data and project showcases
- **Substack** - Blog content syndication
- **Custom GraphQL Backend** - Resume and portfolio data management

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ or 18+
- pnpm (see `packageManager` in `package.json`)
- A GraphQL backend server (set `NEXT_PUBLIC_GRAPHQL_SERVER_HOST` in your environment)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/rohit1901/personal-website.git
   cd personal-website
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Set up environment variables**

   Create a `.env.local` file in the root directory:

   ```env
   NEXT_PUBLIC_GRAPHQL_SERVER_HOST=your_graphql_server_url
   ```

4. **Start the development server**

   ```bash
   pnpm run dev
   ```

5. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `pnpm run dev` - Start development server
- `pnpm run build` - Build for production
- `pnpm run start` - Start production server
- `pnpm run lint` - Run ESLint
- `pnpm run format` - Format code with Prettier

## 📁 Project Structure

```
personal-website/
├── src/
│   ├── app/              # Next.js app router pages
│   │   ├── about/        # About page
│   │   ├── articles/     # Articles/blog page
│   │   ├── books/        # Books page
│   │   ├── projects/     # Projects page
│   │   └── resume/       # Resume page
│   ├── components/       # React components
│   ├── constants/        # Constants and configurations
│   ├── graphql/          # GraphQL queries
│   │   └── queries/      # GraphQL query definitions
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions
│   └── types/            # TypeScript type definitions
├── public/               # Static assets
└── package.json
```

## 🎨 Key Features

### Scroll-Based Animations

- Avatar dynamically shrinks from 96px to 48px on scroll
- Smooth fade effects on scroll direction changes
- Sticky navigation with responsive behavior

### Theme Support

- Light and dark mode toggle
- Persistent theme preferences
- Smooth transitions between themes

### Responsive Design

- Mobile-first approach
- Desktop and mobile navigation variants
- Optimized for all screen sizes

### Performance

- Next.js 16 App Router for optimal performance
- Server-side rendering and static generation
- Optimized image loading with Next.js Image component

## 🌐 Deployment

The website is deployed on **Heroku** with automatic deployments from the main branch.

**Live Site:** [rohit.khanduri.de](https://www.rohit.khanduri.de/)

### Deploy Your Own

1. **Heroku Deployment**

   ```bash
   heroku create your-app-name
   heroku config:set NEXT_PUBLIC_GRAPHQL_SERVER_HOST=your_server_url
   git push heroku main
   ```

2. **Vercel Deployment**

   ```bash
   vercel --prod
   ```

3. **Other Platforms**
   - The project can be deployed to any platform that supports Next.js
   - Ensure environment variables are properly configured

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/rohit1901/personal-website/issues).

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available for personal use.

## 📬 Contact

**Rohit Khanduri**

- 🌐 Website: [rohit.khanduri.de](https://www.rohit.khanduri.de/)
- 📧 Email: [rohit.khanduri@proton.me](mailto:rohit.khanduri@proton.me)
- 💼 LinkedIn: [Rohit Khanduri](https://www.linkedin.com/in/rohit-khanduri-9098b84a/)
- 🦋 Bluesky: [@drama-j.bsky.social](https://bsky.app/profile/drama-j.bsky.social)

---

⭐ **Star this repo if you find it helpful!**

Made with ❤️ using Next.js and TypeScript
