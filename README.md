# React + TypeScript + Vite MVC Architecture with Signals

This project demonstrates a minimal setup for React using Vite with TypeScript, implementing an MVC architecture using signals for state management instead of React's built-in state.

## Project Overview

The goal of this project is to create a clean and modular MVC architecture where:
- **Models** handle the application data and business logic.
- **Controllers** act as intermediaries between models and views, managing the flow of data.
- **Views (Components)** render the UI based on the data provided by the models through the controllers, without directly managing state.

### Key Features

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **Vite**: A build tool that provides a faster and leaner development experience for modern web projects.
- **Signals**: Used for state management to ensure reactivity and separation of concerns.

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository**
    ```bash
    git clone https://github.com/KatanMichael/signals-mvc-test.git
    cd signals-mvc-test
    ```

2. **Install dependencies**
    ```bash
    npm install
    ```

3. **Run the development server**
    ```bash
    npm run dev
    ```

The application will be available at `http://localhost:3000`.

## Project Structure

```plaintext
signals-mvc-test/
├── .eslintrc.cjs
├── .gitignore
├── README.md
├── index.html
├── package-lock.json
├── package.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
├── public/
│   └── vite.svg
└── src/
    ├── App.css
    ├── App.tsx
    ├── index.css
    ├── main.tsx
    ├── vite-env.d.ts
    ├── Controllers/
    │   └── CountController.tsx
    ├── Models/
    │   └── CountModel.tsx
    └── assets/
        └── react.svg
