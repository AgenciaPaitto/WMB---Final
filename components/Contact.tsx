import React from 'react';
import { motion } from 'framer-motion';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-[#121212] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-4xl">
        <div className="text-center mb-12 space-y-4">
          <h2 className="font-serif text-3xl md:text-5xl text-white">Uma oportunidade rara não espera.</h2>
          <p className="font-sans text-neutral-400 font-light tracking-wide">Agende uma consultoria privada com a equipe Bustamante.</p>
        </div>

        <form className="space-y-12 bg-white/5 p-12 backdrop-blur-sm border border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="group">
              <input 
                type="text" 
                placeholder="Nome Completo" 
                className="w-full bg-transparent border-b border-neutral-700 py-3 text-white placeholder-neutral-600 focus:outline-none focus:border-gold-500 transition-colors duration-300 font-sans"
              />
            </div>
            <div className="group">
              <input 
                type="text" 
                placeholder="WhatsApp" 
                className="w-full bg-transparent border-b border-neutral-700 py-3 text-white placeholder-neutral-600 focus:outline-none focus:border-gold-500 transition-colors duration-300 font-sans"
              />
            </div>
          </div>
          <div className="group">
             <input 
                type="email" 
                placeholder="Email Corporativo" 
                className="w-full bg-transparent border-b border-neutral-700 py-3 text-white placeholder-neutral-600 focus:outline-none focus:border-gold-500 transition-colors duration-300 font-sans"
              />
          </div>

          <div className="flex flex-col items-center gap-4 pt-4">
            <button className="bg-gold-500 hover:bg-gold-300 text-black font-serif font-bold py-4 px-12 uppercase tracking-[0.2em] transition-all duration-300 transform hover:scale-105 w-full md:w-auto">
              Solicitar Acesso
            </button>
            <span className="text-xs text-gold-500/80 tracking-widest uppercase animate-pulse">Apenas 3 unidades disponíveis nesta fase</span>
          </div>
        </form>
      </div>
    </section>
  );
};