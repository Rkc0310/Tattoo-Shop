import {Facebook, Instagram, Twitter} from "lucide-react"

const Footer = () => {
    return (
    <footer className="bg-black border    border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">

            <div className="col-span-1 md:col-span-2"> 
              <h3 className="text-2xl font-bold font-cinzel text-white mb-4">B2 <span className="text-red-600">Artist</span></h3>

              <p className="text-gray-400 font-poppins mb-4">
                Kawardha’s Home for Premium Tattoo Art.
                <br/>
                Where creativity, precision, and passion meet your story.
              </p>

              <div className="flex gap-4">
                 <a href="#" className="w-10 h-10 bg-zinc-900 border border-white/10 flex items-center justify-center hover:border-red-600 hover:bg-red-600 transition-colors">
                <Facebook className="w-5 h-5 text-white" />
              </a>
                <a href="https://www.instagram.com/b2_artist_" className="w-10 h-10 bg-zinc-900 border border-white/10 flex items-center justify-center hover:border-red-600 hover:bg-red-600 transition-colors">
                <Instagram className="w-5 h-5 text-white" />
              </a>
                <a href="#" className="w-10 h-10 bg-zinc-900 border border-white/10 flex items-center justify-center hover:border-red-600 hover:bg-red-600 transition-colors">
                <Twitter className="w-5 h-5 text-white" />
              </a>
              </div>
            </div> 

            {/* Quick Links */}
          <div>
            <h4 className="text-white font-poppins font-bold mb-4 uppercase tracking-wider">Quick  Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 font-poppins hover:text-red-600 transition-colors">Home</a> </li>

              <li><a href="/portfolio" className="text-gray-400 font-poppins hover:text-red-600 transition-colors">Gallary</a> </li>

              <li><a href="/about" className="text-gray-400 font-poppins hover:text-red-600 transition-colors">Artists</a> </li>

              <li><a href="#contact" className="text-gray-400 font-poppins hover:text-red-600 transition-colors">Contact</a> </li>
            </ul>
          </div>

                 {/* Services */}
     <div>
      <h4 className="text-white font-poppins font-bold mb-4 uppercase tracking-wider">Servicess</h4>
        <ul className="space-y-2">
          <li className="text-gray-400 font-poppins">Custom  Tattoos</li>

           <li className="text-gray-400 font-poppins">Cover-ups</li>

            <li className="text-gray-400 font-poppins">Touch-ups</li>
        </ul>
     </div>
  </div>
   

        {/* Bottom Bar */}
   <div className="border-t border-white/10 pt-8 text-center">
    <p className="text-gray-400 text-sm"> © 2025 B2 Artist. All rights reserved. | Privacy Policy | Terms of Service</p>
   </div>

</div>
</footer>
       
    );
}

export default Footer;
