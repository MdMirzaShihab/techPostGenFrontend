# Tech Post Generator Frontend

This is a React-based frontend application for generating tech news posts. It uses Vite for fast development builds, React Router for navigation, and TailwindCSS for styling. This project provides a simple interface for users to generate posts and view their content history.

## Project Structure

Below is the directory structure of the project:

```bash

├── index.html               # The main HTML file
├── package.json             # Project metadata and dependencies
├── postcss.config.js        # Tailwind and PostCSS configurations
├── tailwind.config.js       # TailwindCSS configuration
├── vite.config.js           # Vite configuration file
├── .gitignore               # Git ignore file
├── src/
│   ├── assets/              # Directory for images and other static assets
│   │   ├── images           # All the images used in the app are stored directly in the assets folder
│   │   └── index.js         # Index file for assets
│   ├── components/          # Folder containing React components
│   │   ├── Error.js         # Error page component
│   │   ├── History.js       # Content history page component
│   │   ├── Home.js          # Home page component
│   │   └── Navbar.js        # Navbar component
│   ├── App.jsx              # Main App component that defines routing
│   ├── App.css              # Global CSS for App
│   ├── index.css            # Global CSS for application
│   └── main.jsx             # Entry point for the application
└── README.md                # This file
```


### Key Components:

    `App.jsx`: Main component that sets up routing and renders the Navbar and different pages (`Home`, `History`, `Error`).
    `Navbar.js`: The navigation bar of the application, includes links to the home and history pages.
    `Home.js`: The main page where users can generate content posts and view 5 recent posts from history.
    `History.js`: A page that displays the content generation history.
    `Error.js`: A fallback page for 404 errors (for unknown routes).



## Getting Started

To get this project up and running on your local machine, follow the steps below.

### Prerequisites

Ensure you have the following tools installed:

    - Node.js (version 18.x or higher)
    - npm (Node package manager)

You can download Node.js from [here](https://nodejs.org/en).

### 1. Clone the Repository

First, clone the repository to your local machine:
```bash
git clone https://github.com/your-username/techpostgenfrontend.git
```

### 2. Install Dependencies

Navigate to the project directory and install the necessary dependencies using npm:
```bash
cd techpostgenfrontend
npm install
```
This will install all the dependencies listed in package.json.


### 3. Run the Development Server

After the dependencies are installed, you can start the development server:
```bash
npm run dev
```
This will start a Vite development server and you can access the application at http://localhost:5173.


### 4. Build the Project (for Production)

To create a production build of the application, run the following command:
```bash
npm run build
```
This will generate optimized files in the dist directory that can be deployed to any static file hosting service.


### 5. Preview the Production Build

To preview the production build locally, run:
```bash
npm run preview
```
This will start a preview server for your production build on http://localhost:4173.



## Available Scripts

In addition to the usual `npm` commands, the following scripts are available:

    `npm run dev`: Starts the development server using Vite.
    `npm run build`: Builds the project for production.
    `npm run preview`: Previews the production build locally.
    `npm run lint`: Lints the project using ESLint.

### Folder Structure Breakdown

    `src/assets/`: Contains static assets such as images used throughout the application.
    `src/components/`: Contains React components such as `Navbar`, `Home`, `History`, and `Error`.
    `src/App.jsx`: The main App component with routes setup (`Home`, `History`, `Error`).
    `src/main.jsx`: Entry point for the application where React renders the `App` component.

### TailwindCSS Configuration

This project uses TailwindCSS for utility-first CSS styling. Tailwind is configured in the `tailwind.config.js` file, and the styles are applied globally in `index.css` and `App.css`.

### Routing with React Router

This project uses React Router for client-side routing:

    The home page (`/`) renders the Home component.
    The content history page (`/history`) renders the `History` component.
    The error page (`*`) renders the `Error` component when a route is not found.

### ESLint Configuration

ESLint is used to enforce coding standards and catch potential issues in the codebase. To lint the project, run the following command:
```bash
npm run lint
```
