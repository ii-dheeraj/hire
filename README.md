# HireGenAI — AI Recruiting Platform

A modern, responsive web application built with Next.js 15, TypeScript, and Tailwind CSS. This demo showcases a complete AI-powered recruitment platform with a beautiful UI and smooth user experience.

## Features

- **Homepage**: Marketing-style landing page with hero section, features grid, and call-to-action
- **Login Page**: Clean authentication form with validation and demo functionality
- **Signup Page**: Registration form with password strength indicator and terms agreement
- **Responsive Design**: Mobile-first approach with hamburger navigation
- **Modern UI**: Clean, accessible design with proper focus states and animations
- **Form Validation**: Client-side validation with inline error messages
- **Toast Notifications**: Success/error feedback for user actions

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Icons**: Heroicons (SVG)
- **Utilities**: clsx for className merging

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd hire
```

2. Install dependencies:
```bash
npm install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
app/
├── components/          # Reusable UI components
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── Input.tsx
│   ├── NavBar.tsx
│   ├── Footer.tsx
│   └── Toast.tsx
├── (auth)/             # Auth pages (route group)
│   ├── login/
│   │   └── page.tsx
│   └── signup/
│       └── page.tsx
├── lib/
│   └── utils.ts        # Utility functions
├── globals.css         # Global styles
├── layout.tsx          # Root layout
└── page.tsx            # Homepage
```

## Pages

### Homepage (`/`)
- Hero section with compelling copy and CTA buttons
- Feature grid showcasing platform capabilities
- Social proof section
- Final call-to-action

### Login (`/login`)
- Email and password fields with validation
- Show/hide password toggle
- Remember me checkbox
- Forgot password link
- Link to signup page

### Signup (`/signup`)
- Full name, email, password, and confirm password fields
- Password strength indicator
- Terms and privacy policy agreement
- Link to login page

## Components

### Button
- Multiple variants: primary, secondary, outline
- Loading state with spinner
- Different sizes: sm, md, lg

### Input
- Label, error, and helper text support
- Proper accessibility attributes
- Focus states and validation styling

### Card
- Consistent container styling
- Configurable padding options

### Toast
- Success, error, and info types
- Auto-dismiss functionality
- Smooth animations

### NavBar
- Responsive navigation with mobile hamburger menu
- Brand logo and navigation links
- Sticky positioning

### Footer
- Links to Terms, Privacy, and Support
- Copyright information
- Responsive layout

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Styling

The project uses Tailwind CSS 4 with a custom color palette:
- Primary: Blue (`blue-600`)
- Secondary: Gray (`gray-100`)
- Success: Green (`green-500`)
- Error: Red (`red-500`)
- Warning: Yellow (`yellow-500`)

### Accessibility

- Proper heading hierarchy
- ARIA labels and roles
- Focus management
- Screen reader support
- Sufficient color contrast

## Demo Features

This is a frontend-only demo with simulated functionality:
- Form validation works with client-side checks
- Login/signup show success toasts and redirect
- No actual authentication or backend integration
- All links to Terms/Privacy are placeholder (`#`)

## License

This project is for demonstration purposes only.
