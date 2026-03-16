export default function Contact() {
  
  // WhatsApp setup
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '919302966172'
  const whatsappMessage = encodeURIComponent(
    "Hi! I'd like to book a tattoo appointment or ask a question."
  )
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`


  const googleMapsEmbedSrc =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3699.1636811421945!2d81.2304869!3d22.005038499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a29c1128c89a1b5%3A0x5cd4f8f04494a89d!2sB2%20ARTIST%20TATTOO%20SHOP!5e0!3m2!1sen!2sin!4v1772640644926!5m2!1sen!2sin" 

  const googleMapsPlaceUrl =
    'https://www.google.com/maps/place/B2+ARTIST+TATTOO+SHOP/@22.0050385,81.2304869,17z'

  const googleMapsDirectionsUrl =
    'https://www.google.com/maps/dir/?api=1&destination=22.0050385,81.2304869'


  return (
    <section id="contact" className="py-16 px-4 ">
      <div className="max-w-6xl mx-auto space-y-10">
       
        {/* Heading */}
        <header className="text-center space-y-3 mt-5">
          <p className="text-red-600 font-popins text-xs uppercase tracking-[0.3em] font-medium">
            Contact
          </p>
          <h1 className="font-cinzel text-3xl md:text-4xl font-bold text-stone-100">
            Visit B2 ARTIST TATTOO SHOP
          </h1>
          <p className="font-poppins text-stone-400 max-w-2xl mx-auto text-sm md:text-base">
            Reach out to plan your next piece, ask questions, or walk in for a
            consultation. We recommend booking a slot so we can give you our
            full attention.
          </p>
          <div className="w-15 h-0.5 bg-red-600 mx-auto mt-4"></div>
        </header>


        {/* Info + Actions */}
        <div className="grid  grid-cols-1  md:grid-cols-2  gap-12 ">
          {/* Contact details */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className=" font-cinzel  text-lg font-semibold text-stone-100">
                Studio Details
              </h2>
              <p className=" font-poppins text-sm text-stone-400">
                B2 ARTIST TATTOO SHOP
                <br />
               B2 ARTIST TATTOO SHOP, Lohara Road, near Awasthi Mobile Shop
                <br />
                Kawardha Chhattisgarh 491995
              </p>
            </div>


            <div className="space-y-1 text-sm text-stone-300">
              <p>
                <span className="text-red-600 font-medium">Phone:</span>{' '}
                <a href="tel:+917489076641" className="hover:text-red-500">
                  +91 74890 76641
                </a>
              </p>
              <p>
                <span className="text-red-600 font-medium">Email:</span>{' '}
                <a
                  href="mailto:chandravanshib274@gmail.com"
                  className="hover:text-red-500"
                >
                  chandravanshib274@gmail.com
                </a>
              </p>
            </div>


            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 border-2  rounded-lg text-white text-sm font-semibold    hover:bg-white hover:text-black transition-colors"
              >
                <span>Chat on WhatsApp</span>
              </a>
              <a
                href={googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-red-600 hover:bg-red-500 text-stone-950 text-sm font-semibold transition-colors"
              >
                <span>Navigate to Studio</span>
              </a>
            </div>

            <a
              href={googleMapsPlaceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-xs text-blue-400 hover:text-blue-600 transition-colors"
            >
              View full location on Google Maps
            </a>
          </div>


          {/* Google Map embed */}
          <div className="rounded-2xl overflow-hidden border border-stone-800 bg-stone-900">
            <div className="relative w-full pt-[60%]">
              
              <iframe
                title="InkArt Studio Location"
                src={googleMapsEmbedSrc}
                style={{
                  border: 0,
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

