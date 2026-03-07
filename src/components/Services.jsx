 
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
    title: "Tattoo Removal",
    desc: "Professional tattoo removal treatment.",
    icon: "🧴"
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
       <section className="py-20  text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Title */} 
          <div className="text-center mb-16">
            <h2 className="font-cinzel text-4xl font-bold tracking-wide">SERVICES</h2>
            <div className="w-15 h-0.5 bg-amber-400 mx-auto mt-4"></div>
            <p className="font-poppins text-gray-400 mt-4 max-w-xl mx-auto">Professional tattoo services with hygiene and artistic excellence.</p>
         </div>

         {/* Grid */}
         <div className=" grid  md:grid-cols-3 gap-8">
            {services.map((service,index)=>(

                <div key={index}
                 className="border border-gray-700 p-8 text-center rounded-lg hover:border-amber-400  hover:scale-105 transition duration-300 cursor-pointer bg-zinc-900/40 backdrop-blur"
                >
                    <div className="text-4xl mb-4"> {service.icon}</div>

                    <h3 className=" font-cinzel text-xl  font-semibold mb-2">{service.title}</h3>
                     
                     <p className="font-poppins text-amber-400 font-semibold">{service.desc}</p>
                </div>
            ))}
         </div>
        </div>
       </section>
    );
}

export default Services;
