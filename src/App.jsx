import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Appointment from './pages/Appointment'
import AdminPortfolio from './pages/AdminPortfolio'
import { Analytics } from "@vercel/analytics/react"


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: '/portfolio', element: <Portfolio /> },
      { path: '/appointment', element: <Appointment /> },
      { path: '/admin/portfolio', element: <AdminPortfolio /> },
    ],
  },
])

export default function App() {
  return 
  <div> 
     <RouterProvider router={router}/>
      <Analytics />
  </div>
  
 
   
}
