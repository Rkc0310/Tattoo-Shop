 
const Services = () => {
    const services = [
        {  
            title: "Custom Tattoos",
            desc: "Unique tattoo designs tailored to your vision.",
            icon: "🖌️"
          
        },
  
     {
       title: "Scar Cover Tattoo",
       desc: "Creative tattoo work to cover scars.",
       icon: "🩹"
    },
     
    {
        title: 'Hygiene First',
        desc: 'Sterile equipment, single-use needles, and a clean studio environment.',
        icon: '🛡️'
    },

    {
        title: 'Expert Artists',
        desc: 'Years of experience and a portfolio that speaks for itself.',
        icon: '🎨'
    },


];

    return (
       <section id="services" className="py-24 bg-black/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px8">
          
          {/* Title */} 
          <div className="text-center mb-16 text-white">
            <h2 className="font-cinzel text-4xl md:text-5xl font-bold mb-4 tracking-wide">SERVICES</h2>
            <p className="font-poppins text-gray-400 mt-4 max-w-xl mx-auto">Professional tattoo services with hygiene and artistic excellence.</p>
            <div className="w-15 h-0.5 bg-red-600 mx-auto mt-4"></div>
         </div>

         {/* Grid */}
         <div className=" grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service,index)=>(

                <div key={index}
                 className=" group bg-zinc-900 border border-white/10 p-8 text-center rounded-lg hover:border-red-500 transition-all duration-300hover:shadow-lg hover:shadow-red-500/50">
                    
                <div className="mb-6"> 
                    <div className="w-14 h-14 bg-red-600/10 border-red-600 flex items-center justify-center group-hover:bg-red-600 transition-colors duration-300">
                        <span className="text-red-600 h-7 w-7  group-hover:text-white transition-colors duration-300">{service.icon}</span>
                    </div>
                </div>
                <h3 className="text-white text-xl font-bold mb-3 ">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.desc}</p>
                </div>
            ))}
         </div>
        </div>
       </section>
    );
}

export default Services;
