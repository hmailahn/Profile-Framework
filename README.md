# Modern Portfolio Website

A beautiful, responsive personal portfolio website built with React, TypeScript, and Tailwind CSS. This project provides a clean foundation that you can easily customize and extend.

## ✨ Features

- **Modern Design**: Clean, professional UI with smooth animations powered by Framer Motion
- **Fully Responsive**: Works seamlessly on desktop, tablet, and mobile devices
- **Type-Safe**: Built with TypeScript for better code quality and developer experience
- **Fast Performance**: Optimized build with Vite for lightning-fast development and production builds
- **Easy Customization**: Modular component structure with centralized data configuration
- **Smooth Navigation**: Animated scroll behavior and mobile-friendly navigation
- **Contact Form**: Fully functional contact form with Resend API integration for sending emails

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ and npm installed on your machine

### Installation

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
   - Create a `.env` file in the root directory
   - Add your Resend API key and receiver email:
   ```env
   RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxx
   CONTACT_RECEIVER_EMAIL=your-email@example.com
   ```
   - Get your Resend API key from [https://resend.com/api-keys](https://resend.com/api-keys)

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Contact Form Setup

The contact form uses Resend API to send emails. To set it up:

1. **Get a Resend API Key**:
   - Sign up at [Resend.com](https://resend.com)
   - Navigate to API Keys section
   - Create a new API key

2. **Configure Environment Variables**:
   - Create a `.env` file in the project root
   - Add: `RESEND_API_KEY=your_api_key_here`
   - Add: `CONTACT_RECEIVER_EMAIL=your-email@example.com`

3. **For Production (Vercel)**:
   - Go to your Vercel project settings
   - Navigate to Environment Variables
   - Add the same variables there

4. **Update the From Email** (Optional):
   - In `api/contact.ts`, update the `from` field to use your verified domain
   - Replace `onboarding@resend.dev` with your verified email address

### Building for Production

```bash
npm run build
```

The optimized production build will be in the `dist` folder.

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── layout/         # Layout components (Navigation, Layout)
│   └── sections/       # Page sections (Hero, About, Projects, Contact)
├── data/               # Data and content
│   └── portfolio.ts    # Main content configuration
├── pages/              # Route pages
│   └── Home.tsx        # Home page
├── types/              # TypeScript type definitions
│   └── index.ts        # Shared types
├── App.tsx             # Main app component with routing
├── main.tsx           # Application entry point
└── index.css          # Global styles and Tailwind imports
```

## 🎨 Customization Guide

### 1. Update Your Information

Edit `src/data/portfolio.ts` to customize all content:

```typescript
export const personalInfo = {
  name: 'Your Name',           // Your name
  title: 'Your Title',         // Your job title
  tagline: 'Your tagline',     // Brief description
  about: 'Your bio...',        // About section text
  email: 'your@email.com',     // Your email
  location: 'Your Location',   // Your location
  availability: 'Status',      // Your availability status
};
```

### 2. Add Your Projects

Add or modify projects in `src/data/portfolio.ts`:

```typescript
export const projects: Project[] = [
  {
    id: '1',
    title: 'Project Name',
    description: 'Project description',
    image: 'https://your-image-url.com',
    tags: ['React', 'TypeScript', 'Tailwind'],
    demoUrl: 'https://demo.com',
    githubUrl: 'https://github.com/...',
  },
  // Add more projects...
];
```

### 3. Update Skills

Modify your skills in `src/data/portfolio.ts`:

```typescript
export const skills: Skill[] = [
  { name: 'React', category: 'frontend' },
  { name: 'Node.js', category: 'backend' },
  // Add more skills...
];
```

Categories: `frontend`, `backend`, `cloud tools`, `design`

### 4. Update Social Links

Edit `src/data/portfolio.ts`:

```typescript
export const socialLinks: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com/yourusername', icon: 'github' },
  // Update with your links...
];
```

### 5. Customize Colors

Edit `tailwind.config.js` to change the color scheme:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Update with your brand colors
        500: '#0ea5e9',
        600: '#0284c7',
        // ...
      },
    },
  },
}
```

### 6. Update Meta Information

Edit `index.html` to update page title and meta tags:

```html
<title>Your Name | Portfolio</title>
<meta name="description" content="Your description" />
<meta name="author" content="Your Name" />
```

## 🔧 Tech Stack

- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons (Feather Icons)
- **Routing**: React Router v6
- **Code Quality**: ESLint with TypeScript support

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## 🌟 Features to Add (Ideas for Evolution)

- **Blog Section**: Add a blog using MDX or a headless CMS
- **Dark Mode**: Implement theme switching
- **Animations**: Add more complex animations and page transitions
- **CMS Integration**: Connect to Sanity, Contentful, or Strapi
- **Analytics**: Add Google Analytics or Plausible
- **SEO**: Implement React Helmet for better SEO
- **Email Customization**: Customize email templates and add email notifications
- **Testing**: Add unit and integration tests with Vitest and React Testing Library
- **Accessibility**: Enhance ARIA labels and keyboard navigation
- **Multi-language**: Add i18n support for multiple languages

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

Built with ❤️ using React and TypeScript
