import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export const Bio: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="bio" ref={ref} className="py-24 md:py-32 bg-[#121212] relative overflow-hidden">
      {/* Decorative Blueprint lines */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 left-0 w-full h-px bg-gold-500" />
        <div className="absolute bottom-20 left-0 w-full h-px bg-gold-500" />
        <div className="absolute top-0 left-1/3 w-px h-full bg-gold-500" />
      </div>

      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-16">
        {/* Image */}
        <motion.div 
          className="w-full md:w-5/12 relative"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="relative aspect-[3/4] overflow-hidden border border-gold-500/20">
            <img 
              src="http://wmbustamanteinvestments.com/wp-content/uploads/2025/11/Wesley-Bustamante.jpg" 
              alt="Wesley Bustamante" 
              className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-700 ease-in-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#121212] to-transparent opacity-60" />
          </div>
          {/* Floating frame effect */}
          <div className="absolute -bottom-4 -right-4 w-full h-full border border-gold-500/10 -z-10" />
        </motion.div>

        {/* Content */}
        <motion.div 
          className="w-full md:w-7/12 space-y-8"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <h2 className="font-serif text-3xl md:text-5xl text-gold-gradient">O Visionário</h2>
          
          <div className="space-y-6 font-sans font-light text-neutral-300 leading-relaxed text-lg">
            <p>
              <strong className="text-white font-medium">Wesley Bustamante</strong> não apenas constrói; ele assina. 
              Com uma carreira dedicada a criar joias exclusivas para presidentes e celebridades, 
              Wesley aplica a mesma obsessão milimétrica na seleção e construção de imóveis de alto padrão nos EUA.
            </p>
            <p className="border-l-2 border-gold-500/40 pl-6 italic text-neutral-400">
              "Do micro detalhe de um diamante ao macro projeto de uma residência."
            </p>
          </div>

          <div className="pt-8">
            <span className="font-script text-5xl md:text-6xl text-gold-100 block transform -rotate-2">
              Wesley Bustamante
            </span>
            <span className="text-xs uppercase tracking-[0.3em] text-neutral-500 mt-2 block ml-4">
              CEO & Founder
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};