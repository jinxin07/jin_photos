export default function Portfolio() {
  return (
    <div className="min-h-screen flex flex-col bg-[#1a1a1a] text-white font-sans">
      
      {/* Navigation */}
      <header className="w-full py-8 px-6 flex flex-col md:flex-row justify-between items-center absolute top-0 z-50">
        <div className="text-xl tracking-[0.2em] font-light mb-6 md:mb-0 uppercase">
          Xin Jin <span className="font-bold"> </span>
        </div>
        <nav className="flex flex-wrap justify-center gap-6 text-xs md:text-sm font-medium tracking-widest uppercase">
          <a href="#about" className="hover:text-gray-400 transition-colors">About Me</a>
          <a href="#street" className="hover:text-gray-400 transition-colors">Street</a>
          <a href="#portrait" className="hover:text-gray-400 transition-colors">Portraits</a>
          <a href="#sport" className="hover:text-gray-400 transition-colors">Sports</a>
          <a href="#contact" className="hover:text-gray-400 transition-colors">Contact Me</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section 
        id="home" 
        className="relative h-screen w-full flex flex-col items-center justify-center text-center"
        style={{
          backgroundImage: "url('/background-image.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        {/* Dark overlay to ensure text remains readable */}
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        
        <div className="relative z-10 flex flex-col items-center gap-6 px-4">
          <h1 className="text-4xl md:text-6xl font-light tracking-[0.15em] uppercase">
            Photography by: <span className="font-bold"><br></br>Xin Jin<br></br></span>
          </h1>
          <p className="text-sm md:text-base tracking-[0.2em] uppercase text-neutral-300">
            <br></br>Documenting the rhythm of the streets, the energy of competitive sports, and the quiet stories told through portraits.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="w-full py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          
          <div className="flex flex-col gap-4 group cursor-pointer" id="street">
            <div className="aspect-[2/3] overflow-hidden bg-neutral-900">
              <img 
                src="/street-placeholder.jpg" 
                alt="Street Photography" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <h3 className="text-lg font-medium tracking-wide">Street</h3>
          </div>

          <div className="flex flex-col gap-4 group cursor-pointer" id="portrait">
            <div className="aspect-[2/3] overflow-hidden bg-neutral-900">
              <img 
                src="/portrait-placeholder.jpg" 
                alt="Portrait Photography" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <h3 className="text-lg font-medium tracking-wide">Portraits</h3>
          </div>

          <div className="flex flex-col gap-4 group cursor-pointer" id="sport">
            <div className="aspect-[2/3] overflow-hidden bg-neutral-900">
              <img 
                src="/sport-placeholder.jpg" 
                alt="Sports Photography" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <h3 className="text-lg font-medium tracking-wide">Sports</h3>
          </div>

        </div>
      </section>

      {/* Footer Section */}
      <footer id="contact" className="w-full bg-[#111111] pt-20 pb-8 px-6 mt-auto">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 text-sm text-neutral-400">
          
          <div>
            <h4 className="text-white text-lg mb-6 uppercase tracking-widest">General</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-white transition-colors">Light Theme</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Prices</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Downloads</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sitemap</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-lg mb-6 uppercase tracking-widest">Legal</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-white transition-colors">Imprint</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookie Settings</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-lg mb-6 uppercase tracking-widest">Products</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-white transition-colors">Vouchers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Wall Calendar</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Photo API</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-lg mb-6 uppercase tracking-widest">Links</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-white transition-colors">Instagram: @echoes.by.nix</a></li>
              <li><a href="#" className="hover:text-white transition-colors">www.jin.pt</a></li>
            </ul>
          </div>

        </div>

        <div className="max-w-7xl mx-auto text-center border-t border-neutral-800 pt-8 text-neutral-500 text-sm">
          <p>&copy; Xin Jin Photography, 2026</p>
          <p className="mt-2">Designed and developed by Xin Jin.</p>
        </div>
      </footer>

    </div>
  );
}