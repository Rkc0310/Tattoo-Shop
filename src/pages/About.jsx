import React from 'react';
import artistImg from '../assets/vikash.jpg';
import { Instagram } from 'lucide-react';

const About = () => {
  const artists = [
         {
          id:1,
          name:"VIKASH CHANDRAVANSHI",
          image: artistImg,
          speciality: "All Types Custom Tattoos",
          experience: "5+ Years",
          instagram: "@b2_artist_"
         }
  ]
  return (
    <section id ="about" className='p-2 bg-black/60 py-24'>
      <div className='max-w-7xl mx-auto px-5 sm:px-6 lg:px-8'>

        {/* section Header */}
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold text-white font-cinzel mb-4'>
            Meet  Our <span className='text-red-600 font-cinzel'>Artist</span>
          </h2>

          <p className='text-gray-400 text-lg max-w-2xl mx-auto font-poppins'>Passionate artists creating unique tattoos with skill, precision, and creativity</p>
          <div className="w-15 h-0.5 bg-red-600 mx-auto mt-4"></div>
        </div>
       

     {/* Artists Grid*/}
     <div className='max-w-4xl sm:max-w-5xl mx-auto'>
      {artists.map((artist)=>
       <div key={artist.id} 
       className='group bg-black  border border-white/10 overflow-hidden hover:border-red-600/50 transition-all duration-300  '
       >
        <div className='relative aspect-ratio-4/3 overflow-hidden'>
          <img 
          src={artist.image}
          alt={artist.name} 
          className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>
       
       <div className='space-y-2 p-6'> 
        <h3 className='text-white text-2xl font-bold mb-2'>{artist.name}</h3>

        <p className='text-red-600 text-sm uppercase tracking-wide mb-3'>{artist.speciality}</p>

        <div className='flex items-center justify-between pt-4  border-t border-white/10'>
        <span className='text-gray-400 text-sm'>{artist.experience}</span>
        <a 
        href='#'
        className='flex items-center gap-2 text-gray-400 hover:text-red-600 transition-colors text-sm'> 
        
        <Instagram size={16}/>
        <span>{artist.instagram}</span>
        </a>

        </div>
       </div>
       </div>
      )}
     </div>


      </div>
      
    </section>
  );
}

export default About;
