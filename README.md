# Pixel Mango - Creative Services Platform

## Project Overview

Pixel Mango is a modern creative services platform providing premium branding, web design, and digital solutions for small to medium-sized businesses.

## Technologies Used

This project is built with:

- **Vite** - Fast build tool and development server
- **TypeScript** - Type-safe development
- **React** - Modern UI library
- **shadcn-ui** - High-quality component library
- **Tailwind CSS** - Utility-first CSS framework

## Getting Started

### Prerequisites

Make sure you have Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

### Installation

```sh
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to the project directory
cd Updated-PM-Site

# Install the necessary dependencies
npm install

# Start the development server with auto-reloading and an instant preview
npm run dev
```

The development server will start at `http://localhost:8080`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build with development mode
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Project Structure

```
Updated-PM-Site/
├── public/           # Static assets
│   ├── assets/       # Images and media files
│   ├── custom-font/  # Gilroy font files
│   └── favicon.ico   # Site favicon
├── src/
│   ├── components/   # React components
│   ├── pages/        # Page components
│   ├── hooks/        # Custom React hooks
│   ├── i18n/         # Internationalization
│   ├── lib/          # Utility functions
│   └── providers/    # Context providers
└── ...
```

## Features

- **Multi-language Support** - i18next integration with multiple languages
- **Responsive Design** - Mobile-first approach with adaptive layouts
- **Theme Support** - Dark/light theme switching
- **Modern UI** - Pixel-art aesthetic with custom animations
- **Type Safety** - Full TypeScript implementation
- **Form Management** - React Hook Form with Zod validation
- **Routing** - React Router DOM for seamless navigation

## Contact Integration

The site includes floating chat buttons for:
- WhatsApp integration
- Facebook Messenger support

## Development

### Code Style

This project uses:
- ESLint for code linting
- TypeScript for type checking
- Tailwind CSS for styling

### Building for Production

```sh
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## License

Copyright © 2025 Pixel Mango. All rights reserved.
