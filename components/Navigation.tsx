import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

export const Navigation: React.FC = () => {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
        setHidden(true);
    } else {
        setHidden(false);
    }
  });

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav 
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#121212]/80 backdrop-blur-md border-b border-white/5 py-4"
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#" onClick={(e) => scrollToSection(e, 'hero')} className="font-serif text-gold-300 font-bold tracking-widest text-lg">WMB</a>
        <div className="hidden md:flex gap-8 font-sans text-xs tracking-widest uppercase text-neutral-400">
            <a href="#bio" onClick={(e) => scrollToSection(e, 'bio')} className="hover:text-gold-500 transition-colors">A Marca</a>
            <a href="#showcase" onClick={(e) => scrollToSection(e, 'showcase')} className="hover:text-gold-500 transition-colors">Coleção</a>
            <a href="#trust" onClick={(e) => scrollToSection(e, 'trust')} className="hover:text-gold-500 transition-colors">Investimento</a>
            <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="hover:text-gold-500 transition-colors">Contato</a>
        </div>
        <button className="md:hidden text-gold-500">Menu</button>
      </div>
    </motion.nav>
  );
};