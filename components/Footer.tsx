import React from 'react';
import { Instagram, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12 border-t border-white/10">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
        
        <div className="text-center md:text-left">
          <h3 className="font-serif text-gold-100 text-lg mb-2">WM Bustamante Investments</h3>
          <p className="font-sans text-neutral-500 text-xs tracking-wider">© 2024. Handcrafted for High-End Living.</p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-6 font-sans text-sm text-neutral-400">
          <a href="tel:+19549958274" className="hover:text-gold-500 transition-colors">+1 (954) 995-8274</a>
          <span className="hidden md:inline text-neutral-700">|</span>
          <a href="tel:+5511992927262" className="hover:text-gold-500 transition-colors">+55 11 99292-7262</a>
        </div>

        <div className="flex items-center gap-4 text-gold-500">
           <a href="#" className="hover:text-white transition-colors"><Instagram size={20} /></a>
           <a href="#" className="hover:text-white transition-colors"><Linkedin size={20} /></a>
        </div>
      </div>
    </footer>
  );
};