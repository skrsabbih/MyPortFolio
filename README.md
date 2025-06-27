# Professional Portfolio

A fullstack professional portfolio web application built using Laravel, Filament, React, and Tailwind CSS.

This project showcases personal and professional details, skills, and projects. It features a modern React-based frontend and an admin dashboard built with Filament for content management. The backend provides RESTful APIs using Laravel.

## Tech Stack

- Laravel 10 (Backend)
- FilamentPHP (Admin Panel)
- React.js (Frontend)
- Tailwind CSS (Styling)
- REST API (Frontend-Backend Communication)

## Project Structure

Professional_Portfolio/
├── portfolio_backend/      → Laravel + Filament (API + Admin)
└── portfolio_frontend/     → React + Tailwind (UI)

## Features

- Admin dashboard with Filament
- Responsive frontend layout
- About Me, Projects, Skills, and Contact sections
- API-based data handling
- Clean and modular codebase

## Installation

Clone the repository:

git clone https://github.com/skrsabbih/MyPortFolio.git
cd MyPortFolio

Backend setup (Laravel):

cd portfolio_backend
cp .env.example .env
composer install
php artisan key:generate
php artisan migrate
php artisan serve

Make sure your .env file is configured correctly with database credentials.

Frontend setup (React):

cd ../portfolio_frontend
npm install
npm run dev

## Author

Sabbih  
your-email@example.com  
https://your-portfolio-site.com

## License

This project is licensed under the MIT License.
