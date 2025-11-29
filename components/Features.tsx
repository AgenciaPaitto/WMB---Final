import React from 'react';
import { MapPin, TrendingUp, Palmtree } from 'lucide-react';
import { Feature } from '../types';

const featuresData: Feature[] = [
  { icon: "MapPin", title: "Localização", desc: "84 milhas de Orlando. O refúgio perfeito longe do caos, perto da magia." },
  { icon: "TrendingUp", title: "Valorização", desc: "Crescimento populacional de 3.8%. Região em plena ascensão." },
  { icon: "Palmtree", title: "Lazer Completo", desc: "Golfe particular, Quadras de Pickleball, Tênis e Pesca." }
];

const IconMap = {
  MapPin: MapPin,
  TrendingUp: TrendingUp,
  Palmtree: Palmtree
};

export const Features: React.FC = () => {
  return (
    <section className="py-24 bg-[#0A0A0A] border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">O Cenário: Sebring & Spring Lake</h2>
          <div className="w-24 h-px bg-gold-500 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {featuresData.map((f, i) => {
            const Icon = IconMap[f.icon as keyof typeof IconMap];
            return (
              <div key={i} className="group p-8 border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-gold-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                
                <div className="mb-6 inline-flex p-4 rounded-full bg-gold-500/10 text-gold-300 group-hover:text-gold-100 transition-colors">
                  <Icon size={32} strokeWidth={1.5} />
                </div>
                
                <h3 className="font-serif text-xl text-white mb-3">{f.title}</h3>
                <p className="font-sans text-neutral-400 font-light leading-relaxed">
                  {f.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};