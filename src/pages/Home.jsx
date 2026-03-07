import { Link } from 'react-router-dom'
import Services from '../components/Services'
import RecentTattoo from '../components/RecentTattoo'

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
      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">

        {/* ✅ FIXED DARK OVERLAY */}
        <div className="absolute inset-0"></div>

        {/* Content */}
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">

          <p className=" font-poppins text-amber-500/90 text-sm uppercase tracking-[0.3em] mb-4 font-medium">
            Premium Tattoo Artistry
          </p>

          <h1  className='font-cinzel text-4xl sm:text-5xl md:text-6xl font-bold text-stone-100 mb-6'>
            Where <span className="text-amber-500">Art</span> Meets Skin
          </h1>

          <p className=" font-poppins text-lg sm:text-xl text-stone-400 max-w-2xl mx-auto mb-10">
            Custom designs, professional artists, and a commitment to quality.
            Your vision, our canvas.
          </p>

          {/* CTA Buttons */}
          <div className=" font-poppins font-medium flex flex-col sm:flex-row gap-4 justify-center items-center">

            <Link
              to="/appointment"
              className="w-full sm:w-auto bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold px-8 py-4 rounded-lg transition-all duration-200 shadow-lg shadow-amber-600/25 hover:shadow-amber-500/30"
            >
              Book Appointment
            </Link>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-8 py-4 rounded-lg transition-all duration-200"
            >
              Chat on WhatsApp
            </a>

          </div>
        </div>
      </section>

      <RecentTattoo/>
       <Services/>


    
    </>
  )
}