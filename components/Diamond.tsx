import React from 'react';
import { motion } from 'framer-motion';

export const Diamond: React.FC = () => {
  return (
    <div className="relative w-64 h-64 md:w-96 md:h-96 perspective-1000">
      <motion.div
        className="w-full h-full relative preserve-3d"
        animate={{ rotateY: 360, rotateX: 15 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* We construct a wireframe octahedron using CSS borders for a lightweight 3D effect */}
        <div className="absolute top-1/2 left-1/2 w-40 h-40 border border-gold-300/30 -translate-x-1/2 -translate-y-1/2 rotate-45" style={{ transform: 'translate(-50%, -50%) rotateY(0deg) translateZ(50px)' }} />
        <div className="absolute top-1/2 left-1/2 w-40 h-40 border border-gold-300/30 -translate-x-1/2 -translate-y-1/2 rotate-45" style={{ transform: 'translate(-50%, -50%) rotateY(90deg) translateZ(50px)' }} />
        
        {/* Inner glow */}
        <div className="absolute top-1/2 left-1/2 w-20 h-20 bg-gold-500/10 blur-xl rounded-full -translate-x-1/2 -translate-y-1/2" />
        
        {/* Animated Rings for "Particle" effect */}
        <motion.div 
            className="absolute top-1/2 left-1/2 w-60 h-60 border border-gold-100/10 rounded-full -translate-x-1/2 -translate-y-1/2"
            animate={{ rotateZ: -360, scale: [1, 1.1, 1] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
            className="absolute top-1/2 left-1/2 w-72 h-72 border border-dashed border-gold-300/10 rounded-full -translate-x-1/2 -translate-y-1/2"
            animate={{ rotateZ: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>
    </div>
  );
};