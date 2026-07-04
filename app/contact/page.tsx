'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch('https://formspree.io/f/xeebvzzr', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmitStatus('success');
        (e.target as HTMLFormElement).reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen text-white font-sans flex flex-col relative bg-black">
      
      {/* Background Image Layer */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 select-none pointer-events-none"
        style={{ backgroundImage: "url('/contact_image.jpeg')" }}
      />

      {/* Header */}
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

      {/* Contact Content Area */}
      <main className="flex-grow flex items-center justify-center px-4 py-16 relative z-30">
        <div className="max-w-xl w-full bg-black/75 backdrop-blur-md p-10 border border-white/10 rounded-sm flex flex-col md:flex-row gap-12">
          
          {/* Left Side: Traditional Details */}
          <div className="w-full md:w-1/2 space-y-6 text-sm">
            <h1 className="text-2xl font-light tracking-widest uppercase border-b border-white/10 pb-4">Contact</h1>
            <div className="flex flex-col gap-1">
              <span className="text-white/40 text-[10px] uppercase tracking-widest">Email</span>
              <a href="mailto:photography@jin.pt" className="hover:text-white/70 transition-colors break-all">photography@jin.pt</a>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-white/40 text-[10px] uppercase tracking-widest">Instagram</span>
              <a href="https://instagram.com/echoes.by.nix" target="_blank" rel="noopener noreferrer" className="hover:text-white/70 transition-colors">@echoes.by.nix</a>
            </div>
          </div>

          {/* Right Side: Interactive Form Element */}
          <div className="w-full md:w-1/2">
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-white/40 mb-1">Your Name</label>
                <input 
                  type="text" 
                  name="name" 
                  required 
                  className="w-full bg-zinc-900/80 border border-white/10 rounded-sm p-2.5 text-white focus:outline-none focus:border-white/40 transition-colors"
                />
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-widest text-white/40 mb-1">Email Address</label>
                <input 
                  type="email" 
                  name="email" 
                  required 
                  className="w-full bg-zinc-900/80 border border-white/10 rounded-sm p-2.5 text-white focus:outline-none focus:border-white/40 transition-colors"
                />
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-widest text-white/40 mb-1">Message</label>
                <textarea 
                  name="message" 
                  rows={4} 
                  required 
                  className="w-full bg-zinc-900/80 border border-white/10 rounded-sm p-2.5 text-white focus:outline-none focus:border-white/40 transition-colors resize-none"
                />
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-white text-black py-2.5 font-medium tracking-widest uppercase hover:bg-neutral-200 transition-colors disabled:bg-neutral-600 disabled:text-neutral-400"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {submitStatus === 'success' && (
                <p className="text-emerald-400 text-center tracking-wide mt-2">✕ Message sent successfully!</p>
              )}
              {submitStatus === 'error' && (
                <p className="text-rose-400 text-center tracking-wide mt-2">✕ Something went wrong. Try again.</p>
              )}

            </form>
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