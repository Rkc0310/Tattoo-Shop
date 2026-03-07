import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import About from './pages/About'
import Contact from './pages/Contact'
import Appointment from './pages/Appointment'
import AdminPortfolio from './pages/AdminPortfolio'

// Define all routes - we'll add more pages one by one
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'portfolio', element: <Portfolio /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
      { path: 'appointment', element: <Appointment /> },
      { path: 'admin/portfolio', element: <AdminPortfolio /> },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
