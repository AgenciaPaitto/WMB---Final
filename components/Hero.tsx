import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Diamond } from './Diamond';
import { ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background with darker overlay */}
      <div className="absolute inset-0 bg-[#050505]">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1613545325278-f24b0cae1224?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20 grayscale mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-[#121212]" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row items-center justify-between h-full pt-20">
        
        {/* Text Content */}
        <motion.div 
          style={{ y: y1, opacity }}
          className="md:w-1/2 space-y-8 text-center md:text-left"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="font-serif text-4xl md:text-6xl lg:text-7xl leading-tight text-white"
          >
            A Precisão da <span className="text-gold-gradient italic">Joalheria</span>.<br />
            A Solidez do <br />
            <span className="text-gold-gradient">Imobiliário.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="font-sans font-light text-neutral-400 text-lg md:text-xl max-w-lg mx-auto md:mx-0 tracking-wide border-l border-gold-500/30 pl-6"
          >
            Invista nos EUA com o olhar artístico de <br/>
            <span className="text-gold-100 font-medium">Wesley Bustamante</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2 }}
          >
             <button onClick={() => document.getElementById('showcase')?.scrollIntoView({ behavior: 'smooth'})} className="group relative px-8 py-3 bg-transparent border border-gold-500/30 text-gold-100 hover:border-gold-500 hover:text-white transition-all duration-300 uppercase tracking-widest text-xs overflow-hidden">
                <span className="relative z-10">Explore a Coleção</span>
                <div className="absolute inset-0 bg-gold-500/10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
             </button>
          </motion.div>
        </motion.div>

        {/* 3D Element */}
        <motion.div 
          className="md:w-1/2 flex justify-center md:justify-end mt-12 md:mt-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1.5 }}
        >
          <Diamond />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-gold-300/50"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="w-6 h-6" />
      </motion.div>
    </section>
  );
};