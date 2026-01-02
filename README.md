
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


