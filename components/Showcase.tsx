import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { HOUSES } from '../types';
import { Ruler, Home, Check } from 'lucide-react';

export const Showcase: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Transform vertical scroll to horizontal translation
  // The height allows enough scroll distance to move the 4 cards.
  // Increased to 600vh to slow down the scroll for better readability/luxury feel.
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <div id="showcase" className="relative bg-neutral-900">
      <div ref={targetRef} className="relative h-[600vh]">
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          
          {/* Section Header (Absolute positioned to stay visible initially then scroll away if desired, or stay fixed) */}
          <div className="absolute top-12 left-6 md:left-12 z-20 mix-blend-difference pointer-events-none">
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-2">A Coleção Privada</h2>
            <p className="font-sans text-sm tracking-widest uppercase text-neutral-400">Spring Lake, Florida</p>
          </div>

          {/* Horizontal Track */}
          <motion.div style={{ x }} className="flex gap-0">
            {HOUSES.map((house, index) => (
              <div 
                key={house.id}
                className="w-screen h-screen flex-shrink-0 flex items-center justify-center p-6 md:p-12 box-border relative"
              >
                {/* Background Image Parallax Effect */}
                <div className="absolute inset-0 overflow-hidden z-0">
                  <div className="absolute inset-0 bg-[#121212] opacity-80 z-10" />
                  <img 
                    src={house.image_url} 
                    alt={house.model}
                    className="w-full h-full object-cover grayscale opacity-40 transform scale-110"
                  />
                </div>

                <div className="relative z-20 w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
                  
                  {/* Card Image */}
                  <div className="w-full md:w-3/5 aspect-video relative group overflow-hidden border border-gold-500/20 shadow-2xl bg-black">
                     <img 
                      src={house.image_url} 
                      alt={house.model}
                      className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute bottom-0 left-0 bg-black/80 backdrop-blur-sm px-6 py-4 border-t border-gold-500/20">
                      <p className="text-gold-300 font-serif text-xl">{house.price}</p>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="w-full md:w-2/5 space-y-6">
                    <div className="space-y-2">
                      <span className="text-xs font-sans tracking-widest text-gold-500 uppercase">Unidade Limitada {index + 1}/04</span>
                      <h3 className="text-4xl md:text-5xl font-serif text-white">{house.model}</h3>
                      <p className="text-xl text-neutral-400 font-light italic">{house.tagline}</p>
                    </div>

                    <div className="h-px w-20 bg-gold-500/50" />

                    <div className="space-y-4">
                      <div className="flex items-center gap-3 text-neutral-300">
                         <Ruler className="w-5 h-5 text-gold-500" />
                         <span className="font-sans text-sm tracking-wide">{house.specs}</span>
                      </div>
                      
                      <div className="space-y-2">
                        {house.features.map((feat, i) => (
                          <div key={i} className="flex items-center gap-3 text-neutral-400 text-sm">
                            <Check className="w-4 h-4 text-green-500/50" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};