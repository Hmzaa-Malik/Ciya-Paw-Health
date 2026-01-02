# Paw Health - Pet Care Management App

A beautiful and modern pet health management application built with Next.js 16, React 19, Framer Motion, and Tailwind CSS. Manage your pets' health records, appointments, vaccinations, and expenses all in one place with stunning animations and interactions.

## Features

- **Multi-Pet Management**: Track multiple pets with individual profiles and favorites
- **Health Monitoring**: Keep track of weight, temperature, heart rate with animated progress bars
- **Appointment Scheduling**: Interactive calendar with full booking system for vet appointments
- **Reminder System**: Set medication, feeding, exercise, and grooming reminders
- **Vaccine Tracking**: Complete vaccination schedule with status tracking
- **Services Directory**: Find nearby veterinarians, groomers, and pet services with ratings
- **Wallet Integration**: Track pet-related expenses and manage your budget with transaction history
- **Beautiful UI**: Modern gradient design with smooth Framer Motion animations
- **Splash Screen**: Professional loading screen with animated logo
- **Mobile-First**: Fully responsive design optimized for all devices
- **Interactive Elements**: Hover effects, scale animations, and micro-interactions throughout

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **UI Library**: React 19.2 with latest features
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion for advanced animations
- **Components**: shadcn/ui component library
- **Icons**: Lucide React
- **Fonts**: Geist Sans & Geist Mono
- **Language**: TypeScript

## Advanced Animations

This project features professional-grade animations:

- **Page Transitions**: Smooth slide animations between tabs
- **Splash Screen**: 3-second animated loading screen with rotating logo
- **Particle Background**: Floating animated particles throughout the app
- **Micro-interactions**: Button hover, tap, and scale effects
- **Staggered Lists**: Sequential fade-in animations for list items
- **Modal Animations**: Spring-based modal entry/exit animations
- **Progress Indicators**: Animated health metric progress bars
- **Icon Animations**: Rotating, scaling, and bouncing icons
- **Calendar Interactions**: Interactive date picker with hover states

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd paw-health
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment Options

### Option 1: Deploy to Vercel (Recommended - Easiest)

The fastest way to deploy this Next.js app:

1. Push your code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <your-github-repo-url>
git push -u origin main
```

2. Go to [Vercel](https://vercel.com) and sign in with GitHub
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Next.js settings
6. Click "Deploy"
7. Your app will be live in ~2 minutes!

### Option 2: Deploy to Netlify

1. Push code to GitHub (see above)
2. Go to [Netlify](https://netlify.com) and click "Add new site"
3. Choose "Import an existing project"
4. Select your GitHub repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Click "Deploy"

### Option 3: GitHub Pages (Static Export)

For static hosting on GitHub Pages:

1. Update `next.config.mjs`:
```javascript
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: '/your-repo-name',
}
```

2. Build the project:
```bash
npm run build
```

3. Deploy the `out` folder to GitHub Pages:
```bash
git add out -f
git commit -m "Deploy to GitHub Pages"
git subtree push --prefix out origin gh-pages
```

4. Enable GitHub Pages in repository settings pointing to `gh-pages` branch

### Option 4: Self-Hosted

Build and run on any server:

```bash
npm run build
npm start
```

## Project Structure

```
paw-health/
├── app/
│   ├── layout.tsx           # Root layout with fonts and metadata
│   ├── page.tsx             # Main app with all tabs and animations
│   └── globals.css          # Global styles, design tokens, Tailwind config
├── components/
│   └── ui/                  # Reusable UI components (shadcn/ui)
│       ├── avatar.tsx
│       ├── badge.tsx
│       ├── button.tsx
│       ├── card.tsx
│       └── input.tsx
├── public/                  # Static assets (pet images)
├── .github/
│   └── workflows/
│       └── deploy.yml       # GitHub Actions deployment workflow
├── .gitignore
├── DEPLOYMENT.md            # Detailed deployment instructions
├── README.md                # This file
├── next.config.mjs          # Next.js configuration
├── package.json             # Project dependencies
└── tsconfig.json            # TypeScript configuration
```

## Available Tabs & Features

### 1. Home Tab
- Pet selection carousel with 3 demo pets (Demon, Lucky, Wing)
- Animated pet profile cards with 3D images
- Quick action buttons: Reminder, Vaccine, Appointment
- Upcoming reminders card
- Profile image upload functionality
- Favorite pets feature with heart icons

### 2. Pet Health Tab
- Health metrics with animated progress bars:
  - Weight tracking
  - Temperature monitoring
  - Heart rate display
- Upcoming appointments list
- Status badges (Normal, Healthy)

### 3. Services Tab
- 6 popular pet services:
  - Grooming
  - Veterinary
  - Training
  - Pet Sitting
  - Vaccination
  - Boarding
- Nearby veterinarians with:
  - Distance
  - Ratings
  - Review counts
  - Interactive cards

### 4. Wallet Tab
- Balance display with gradient card
- Quick action buttons:
  - Top Up
  - Cards
  - Rewards
- Transaction history with:
  - Income/Expense indicators
  - Amounts
  - Dates
  - Categories

### 5. Profile Tab
- User profile with avatar
- Pet overview
- Account settings:
  - My Profile
  - Saved
  - Schedule
- App settings:
  - Notifications
  - Language
- Help section:
  - About us

## Interactive Modals

### Reminder Modal
- Pet selection
- Reminder type dropdown (Medication, Feeding, Exercise, Grooming)
- Time picker
- Confirm/Cancel actions

### Vaccine Modal
- Pet-specific vaccine schedule
- Status badges (Upcoming/Completed)
- List of vaccines with due dates

### Appointment Modal
- Full interactive calendar
- Month/year display
- Date selection with highlighting
- Appointment type dropdown
- Time slot selection
- Booking confirmation

### Image Upload Modal
- Profile picture preview
- File upload input
- Instant preview

## Customization Guide

### Adding New Pets

Edit the `pets` array in `app/page.tsx` (around line 24):

```typescript
const pets = [
  {
    id: 4, // Unique ID
    name: "Your Pet Name",
    type: "Dog/Cat/Bird/Other",
    age: "X years",
    birthday: "DD MMM YYYY",
    image: "/your-pet-3d-image.jpg", // 3D model/cartoon image
    avatar: "/your-pet-face.jpg", // Circular avatar image
    flag: "🇬🇧", // Country flag emoji
  },
]
```

### Changing Colors

Modify design tokens in `app/globals.css`:

```css
:root {
  --primary: oklch(0.55 0.18 250); /* Blue */
  --secondary: oklch(0.75 0.12 260); /* Purple */
  --accent: oklch(0.65 0.2 280); /* Pink */
}
```

### Adjusting Animations

Framer Motion animations can be customized in `app/page.tsx`:

```typescript
// Change duration and easing
transition={{ duration: 0.5, ease: "easeInOut" }}

// Adjust spring physics
transition={{ type: "spring", damping: 25, stiffness: 300 }}
```

## Semester Project Documentation

### Project Overview
This is a full-stack web application demonstrating modern React development with:
- Component-based architecture
- State management with React hooks
- Advanced animations with Framer Motion
- Responsive design principles
- TypeScript for type safety
- Modern CSS with Tailwind v4

### Key Learning Outcomes
- Next.js 16 App Router architecture
- React 19.2 latest features
- Framer Motion animation library
- Component composition patterns
- Modal management and state handling
- Form handling and validation
- Responsive mobile-first design
- Git version control and deployment

### Technologies Demonstrated
1. **Frontend**: React 19.2, TypeScript, Next.js 16
2. **Styling**: Tailwind CSS v4, Custom Design Tokens
3. **Animations**: Framer Motion with spring physics
4. **Components**: shadcn/ui component library
5. **Icons**: Lucide React icon library
6. **Deployment**: Vercel, GitHub Pages, Netlify








---

**Built with ❤️ for Semester Project | Full-Stack Web Development Course**

Showcasing modern web technologies: Next.js 16 • React 19 • TypeScript • Framer Motion • Tailwind CSS v4
