 Tattoo Shop Portfolio Website
A modern tattoo shop portfolio website built with **React, Tailwind CSS, and Appwrite**.  
This platform allows tattoo artists to showcase their work and manage their tattoo gallery through a simple admin system.

Live Demo
https://your-vercel-link.vercel.app

  Features
- Responsive modern UI
- Tattoo gallery showcasing designs
- Dynamic data fetching from Appwrite database
- Admin panel for adding tattoo designs
- Authentication system for secure access
- Fast frontend built with React + Vite

 🛠 Tech Stack
Frontend
- HTML
- JavaScript
- React (Vite)
- Tailwind CSS

Backend / Database
- Appwrite

Deployment
- Vercel

 📂 BasiC Project Structure
src/
│
├── components/
│   ├── Navbar.jsx
│   ├──Servicess.jsx
│   ├── RecentTattoo.jsx
│   ├── Footer.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── Portfolio.jsx
│   ├── About.jsx
│   ├── Contact.jsx
│   ├── Appointment.jsx
│ 
├── appwrite/
│   ├── client.js
│
├── App.jsx
└── main.jsx


Create .env file and add:
VITE_APPWRITE_ENDPOINT=
VITE_APPWRITE_PROJECT_ID=
VITE_DATABASE_ID=
VITE_COLLECTION_ID=
