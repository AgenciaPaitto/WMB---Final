import React from 'react';
import { ShieldCheck } from 'lucide-react';

const points = [
  "Acesso 24h às câmeras da obra (Transparência Total)",
  "Garantia de 1º ano de aluguel pago pela Construtora",
  "Abertura de conta PJ nos EUA com depósito de apenas U$100",
  "Estruturação de LLC para eficiência fiscal e sucessória"
];

export const Trust: React.FC = () => {
  return (
    <section id="trust" className="py-20 bg-neutral-900 border-y border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif text-3xl text-white mb-6">Segurança & <br/><span className="text-gold-gradient">Transparência</span></h2>
            <div className="space-y-6">
              {points.map((point, idx) => (
                <div key={idx} className="flex items-start gap-4 group">
                  <div className="mt-1 p-1 rounded-full border border-gold-500/30 text-gold-500 group-hover:bg-gold-500 group-hover:text-black transition-all duration-300">
                    <ShieldCheck size={16} />
                  </div>
                  <p className="font-sans text-neutral-300 font-light">{point}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-64 md:h-full min-h-[300px] border border-gold-500/10 bg-[url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center grayscale opacity-60">
             <div className="absolute inset-0 bg-black/40" />
             <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-serif text-5xl text-white/10 rotate-90 md:rotate-0 tracking-widest">TRUST</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};