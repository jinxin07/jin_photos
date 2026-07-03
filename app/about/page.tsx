'use client';

import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen text-white font-sans flex flex-col relative bg-black">
      
      {/* Background Image Layer */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 select-none pointer-events-none"
        style={{ backgroundImage: "url('/me.jpeg')" }}
      />

      {/* Header */}
      <header className="w-full bg-black/80 backdrop-blur-sm border-b border-white/10 px-8 py-6 flex items-center justify-between z-40 relative">
        <Link href="/" className="text-xl font-medium tracking-widest uppercase">
          Xin Jin
        </Link>
        <nav className="flex items-center gap-8 text-xs font-medium tracking-widest uppercase text-white/80">
          <Link href="/about" className="text-white border-b border-white pb-1">About Me</Link>
          <Link href="/street" className="hover:text-white transition-colors">Street</Link>
          <Link href="/portrait" className="hover:text-white transition-colors">Portraits</Link>
          <Link href="/sport" className="hover:text-white transition-colors">Sports</Link>
          <Link href="/contact" className="hover:text-white transition-colors">Contact Me</Link>
        </nav>
      </header>

      {/* Main Content Workspace */}
      <main className="flex-grow flex items-center justify-center px-4 py-16 relative z-30">
        
        {/* Content Box with 30% Opacity Background */}
        <div className="max-w-2xl w-full bg-black/30 backdrop-blur-md p-12 border border-white/10 rounded-sm">
          
          <h1 className="text-3xl font-light tracking-widest uppercase mb-2 text-center">About Me</h1>
          <div className="w-12 h-[1px] bg-white/30 mx-auto mt-4 mb-8"></div>

          {/* Biographical Text */}
          <div className="space-y-6 text-sm text-white/90 leading-relaxed font-light tracking-wide text-center">
            <p>
              Capturing stories through the lens. 
            </p>
            <p>
                My path in photography started recently, and it instantly clicked. I found a deep passion for freezing what moves in front of me, the raw emotions of people, the split-second intensity of sports, and the distinct vibe of an environment. A photograph is a permanent record of a feeling.            </p>
            <p className="pt-2 text-white/80">
                This is just the start, and the work will only get better. Get in touch for projects, assignments, or creative concepts. Let’s make something lasting.
            </p>
            <p>
              You can explore my ongoing updates and behind-the-scenes content on my{' '}
              <a 
                href="https://instagram.com/echoes.by.nix" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white underline underline-offset-4 hover:text-white/70 transition-colors"
              >
                Instagram
              </a>
              .
            </p>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-8 text-center text-[10px] tracking-widest text-white/30 uppercase border-t border-white/5 relative z-30 bg-black/40">
        &copy; {new Date().getFullYear()} Xin Jin. All rights reserved.
      </footer>

    </div>
  );
}