'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function SportsGalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Update these strings to match the exact names of the files inside public/Sports/
  // Match letter casing (e.g., .jpg vs .JPG) identically to avoid production 404 errors
  const photos = [
    '/Sports/P1045724.jpg',    
    '/Sports/P1034810.JPG',
    '/Sports/DSCF2268.JPG',
    '/Sports/DSCF1774.JPG',    
    '/Sports/DSCF2306.JPG',
    '/Sports/DSCF4265.JPG',
    '/Sports/DSCF4642.JPG',
    '/Sports/DSCF4999.JPG',
    '/Sports/P1067052 (3).jpg',    
    '/Sports/P1045196.JPG',
    '/Sports/P1045497.JPG',
    '/Sports/P1045795.jpg',
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans flex flex-col">
      
      {/* Header (Matches image_4a06bf.jpg Layout) */}
      <header className="w-full bg-black/90 backdrop-blur-sm border-b border-white/10 px-8 py-6 flex items-center justify-between z-40">
        <Link href="/" className="text-xl font-medium tracking-widest uppercase">
          Xin Jin
        </Link>
        <nav className="flex items-center gap-8 text-xs font-medium tracking-widest uppercase text-white/80">
          <Link href="/about" className="hover:text-white transition-colors">About Me</Link>
          <Link href="/street" className="hover:text-white transition-colors">Street</Link>
          <Link href="/portrait" className="hover:text-white transition-colors">Portraits</Link>
          <Link href="/sport" className="text-white border-b border-white pb-1">Sports</Link>
          <Link href="/contact" className="hover:text-white transition-colors">Contact Me</Link>
        </nav>
      </header>

      {/* Main Grid Workspace (Preserves Original Uncropped Photo Ratios) */}
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
                alt={`Sports gallery image ${index + 1}`}
                className="w-full h-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-500 ease-in-out scale-100 group-hover:scale-102"
              />
            </div>
          ))}
        </div>
      </main>

      {/* Interactive Lightbox Popup Modal */}
      {selectedImage && (
        <div 
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 cursor-zoom-out"
        >
          <div className="relative max-w-5xl max-h-[85vh] w-full h-full flex items-center justify-center">
            <img
              src={selectedImage}
              alt="Expanded sports preview"
              className="max-w-full max-h-full object-contain cursor-default border border-white/10 select-none"
              onClick={(e) => e.stopPropagation()} 
            />
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