import { Outlet} from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col text-stone-100">
      {/*Navbar */}
      <Header />

      {/* Page Content (Outlet = where child routes render) */}
      <main className="flex-1">
      <Outlet />
      </main>


      {/* Footer */}
      <Footer/>
    </div>
  )
}
