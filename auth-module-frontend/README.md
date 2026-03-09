# Register and Login Pages 

A Frontend app that integrates with auth apis to provide authentication functionalites.

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/remix-run/react-router-templates/tree/main/default)

## Project Structure

```
auth-module-frontend/
├── .dockerignore
├── .gitignore
├── Dockerfile
├── environment.tsx
├── package.json
├── package-lock.json
├── react-router.config.ts
├── README.md
├── tsconfig.json
├── vite.config.ts
├── .idea/                     # IDE configuration
├── .react-router/              # React Router cache
├── app/                        # Main application source
│   ├── app.css
│   ├── AppCrashHandler.tsx
│   ├── root.tsx
│   ├── routes.ts
│   ├── auth/                   # Authentication module
│   │   ├── auth.tsx
│   │   ├── services/
│   │   │   └── userManagement.tsx
│   │   ├── shared/
│   │   │   └── pop-up.tsx
│   │   ├── sign-in/
│   │   │   ├── sign-in.css
│   │   │   └── sign-in.tsx
│   │   └── sign-up/
│   │       ├── sign-up.css
│   │       └── sign-up.tsx
│   ├── routes/
│   │   └── home.tsx
│   └── welcome/
│       ├── logo-dark.svg
│       ├── logo-light.svg
│       └── welcome.tsx
├── build/                      # Production build output
│   ├── client/
│   └── server/
├── node_modules/               # Dependencies
└── public/                     # Static assets
```

## Features

- 🚀 Server-side rendering
- ⚡️ Hot Module Replacement (HMR)
- 📦 Asset bundling and optimization
- 🔄 Data loading and mutations
- 🔒 TypeScript by default
- 🎉 TailwindCSS for styling
- 📖 [React Router docs](https://reactrouter.com/)

## Getting Started

### Installation

Install the dependencies:

```bash
npm install
```

### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

## Building for Production

Create a production build:

```bash
npm run build
```



### DIY Deployment

If you're familiar with deploying Node applications, the built-in app server is production-ready.

Make sure to deploy the output of `npm run build`

```
├── package.json
├── package-lock.json (or pnpm-lock.yaml, or bun.lockb)
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever CSS framework you prefer.

---

Built with ❤️ using React Router.
