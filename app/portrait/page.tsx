'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function GallerySubPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Replace placeholders with your real asset paths (8-10 images)
const photos = [
    '/Portraits/DSCF1587.JPG',
    '/Portraits/DSCF1541.JPG',
    '/Portraits/DSCF3620.JPG',
    '/Portraits/P1045065.jpg',
    '/Portraits/DSCF6336.JPG',
    '/Portraits/DSCF3632.JPG',
    '/Portraits/P1023150.jpg',
    '/Portraits/P1045356.jpg',
    '/Portraits/P1012823.jpg',
    '/Portraits/P1032933.jpg',
    '/Portraits/DSCF3546.JPG',    
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans flex flex-col">
      
      {/* Header (Matches image_4a06bf.jpg Layout) */}
        <header className="w-full bg-black/80 backdrop-blur-sm border-b border-white/10 px-4 md:px-8 py-6 flex flex-col sm:flex-row gap-4 items-center justify-between z-40 relative">
        <Link href="/" className="text-xl font-medium tracking-widest uppercase whitespace-nowrap">
            Xin Jin
        </Link>
        <nav className="flex items-center justify-center flex-wrap gap-x-4 gap-y-2 md:gap-8 text-[10px] sm:text-xs font-medium tracking-widest uppercase text-white/80">
            <Link href="/about" className="hover:text-white transition-colors">About Me</Link>
            <Link href="/street" className="hover:text-white transition-colors">Street</Link>
            <Link href="/portrait" className="hover:text-white transition-colors">Portraits</Link>
            <Link href="/sport" className="hover:text-white transition-colors">Sports</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact Me</Link>
        </nav>
        </header>
    {/* Main Grid Workspace (Preserves Original Photo Ratios) */}
      <main className="flex-grow w-full px-4 py-12 max-w-[1600px] mx-auto">
        <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4 [column-fill:_balance]">
          {photos.map((src, index) => (
            <div 
              key={index}
              onClick={() => setSelectedImage(src)}
              className="break-inside-avoid overflow-hidden bg-neutral-900 cursor-pointer border border-white/5 group"
            >
              <img
                src={src}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-500 ease-in-out scale-100 group-hover:scale-102"
              />
            </div>
          ))}
        </div>
      </main>

      {/* Interactive Lightbox Popup Modal (Matches image_4a0d49.jpg overlay) */}
      {selectedImage && (
        <div 
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 cursor-zoom-out animate-fade-in"
        >
          <div className="relative max-w-5xl max-h-[85vh] w-full h-full flex items-center justify-center">
            <img
              src={selectedImage}
              alt="Expanded preview"
              className="max-w-full max-h-full object-contain cursor-default border border-white/10 select-none"
              onClick={(e) => e.stopPropagation()} // Prevents closing when clicking the image itself
            />
            
            {/* Close Hint Button Indicator */}
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute -top-10 right-0 text-white/60 hover:text-white text-xs tracking-widest uppercase transition-colors"
            >
              Close ✕
            </button>
          </div>
        </div>
      )}

      {/* Simple Global Footer */}
      <footer className="w-full py-8 text-center text-[10px] tracking-widest text-white/30 uppercase border-t border-white/5">
        &copy; {new Date().getFullYear()} Xin Jin. All rights reserved.
      </footer>

    </div>
  );
}