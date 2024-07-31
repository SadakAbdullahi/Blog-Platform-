# Blog Platform

## Project Overview

This project is a simple blog platform built using React.js and Vite. It allows users to register, log in, create blog posts, and view individual posts. The application uses React Context for state management and basic in-memory storage for blog posts and user authentication.

## Features

- **Routing**
  - React Router for navigation between different pages.
  - Routes:
    - `/`: Home page displaying a list of blog posts.
    - `/login`: Login page for user authentication.
    - `/register`: Registration page for new users.
    - `/create`: Page for creating a new blog post.
    - `/post/:id`: Detailed view of a specific blog post.

- **State Management**
  - Utilizes React hooks (`useState`, `useEffect`, `useContext`) for managing component-level state.
  - Context API for managing global state for authentication and blog posts.

- **Components**
  - Functional components for better readability and maintainability.
  - Key components: `NavBar`, `Home`, `Login`, `Register`, `CreatePost`, `ContactUs`.

- **Dynamic Data**
  - Mock API integration for simulating data handling. Blog posts are managed using `BlogContext`.

- **Form Handling**
  - Includes forms for user interaction:
    - Login form for authentication.
    - Registration form for new users.
    - Create post form for adding new blog posts.

- **Styling**
  - Tailwind CSS for styling, ensuring a modern and responsive design.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/SadakAbdullahi/Blog-Platform-
   cd blog-platform
