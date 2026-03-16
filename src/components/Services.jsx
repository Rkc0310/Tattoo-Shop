import { Brush, Shield, Palette, Bandage } from "lucide-react";

const Services = () => {

  const services = [
    {
      title: "Custom Tattoos",
      desc: "Create your own tattoo design anything you imagine, we bring it to life.",
      icon: Brush
    },

    {
      title: "Scar Cover Tattoo",
      desc: "Give your old tattoo a new life with a fresh and unique style.",
      icon: Bandage
    },

    {
      title: "Hygiene First",
      desc: "We follow stricthygiene standards using single-use needles clean environment for your safety",
      icon: Shield
    },

    {
      title: "Expert Artists",
      desc: "Experienced artists dedicated to delivering high-quality tattoos with creativity and precision.",
      icon: Palette
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-black via-zinc-950 to-black">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Title */}
        <div className="text-center mb-16 text-white">

          <h2 className="font-cinzel text-4xl md:text-5xl font-bold tracking-widest">
            Our <span className="text-red-500">Services</span>
          </h2>

          <p className="font-poppins text-gray-400 mt-4 max-w-xl mx-auto">
            Professional tattoo services with hygiene and artistic excellence.
          </p>

          <div className="w-16 h-[2px] bg-red-600 mx-auto mt-4"></div>

        </div>


        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {services.map((service, index) => {

            const Icon = service.icon;

            return (
              <div
                key={index}
                className="group bg-zinc-900/80 backdrop-blur border border-white/10 p-8 text-center rounded-2xl hover:-translate-y-2 hover:border-red-500 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,0,0,0.2)]"
              >

                {/* Icon */}
                <div className="mb-6">

                  <div className="w-16 h-16 mx-auto bg-red-600/10 border border-red-600/20 rounded-xl flex items-center justify-center group-hover:bg-red-600 transition-all duration-300">

                    <Icon className="w-7 h-7 text-red-500 group-hover:text-white transition-colors duration-300" />

                  </div>

                </div>

                {/* Title */}
                <h3 className="text-white text-xl font-semibold mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.desc}
                </p>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
};

export default Services;