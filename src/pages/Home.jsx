import { Link } from 'react-router-dom'
import Services from '../components/Services'
import RecentTattoo from '../components/RecentTattoo'
import About from '../pages/About'
import Contact from '../pages/Contact'

export default function Home() {

  // WhatsApp setup
  const whatsappNumber =
    import.meta.env.VITE_WHATSAPP_NUMBER || '919302955172'

  const whatsappMessage = encodeURIComponent(
    "Hi! I'm interested in your tattoo services."
  )

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

  return (
    <>
      <section id='home' className="relative min-h-screen  flex  items-center overflow-hidden  bg-cover bg-center">

        {/* Content */}
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">

          <p className=" font-poppins text-red-600 text-sm uppercase tracking-[0.3em] mb-4 font-medium">
           B2-Artist Tattoo Studio
          </p>

          <h1  className='font-cinzel text-4xl sm:text-5xl md:text-6xl font-bold text-stone-100 mb-6'>
           Crafting Art <span className="text-red-600">That Lives</span> With You Forever
          </h1>

          <p className=" font-poppins text-lg sm:text-xl text-stone-400 max-w-2xl mx-auto mb-10">
           Premium custom designs and elite craftsmanship. Where true art meets skin.
          </p>

          {/* CTA Buttons */}
          <div className=" font-poppins font-medium flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/appointment"
              className="w-full sm:w-auto bg-red-600 hover:bg-red-500 text-stone-950 font-bold px-8 py-4 rounded-lg transition-all duration-200 shadow-lg shadow-amber-600/25 hover:shadow-amber-500/30"
            >
              Book Appointment
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className=" border-2 border-white borderw-full sm:w-auto flex items-center justify-center gap-2  hover:bg-white hover:text-black  text-white font-bold px-8 py-4 rounded-lg transition-all duration-200"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
      <RecentTattoo/>
       <Services/>
       <About/>
       <Contact/>
    </>
  )
}