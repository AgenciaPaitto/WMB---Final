import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const LoadingScreen: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 800); // Wait for exit animation
    }, 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[100] bg-black flex items-center justify-center flex-col"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <div className="relative w-32 h-32 mb-8">
            <svg viewBox="0 0 100 100" className="w-full h-full stroke-gold-500 fill-none stroke-[1]">
              {/* House Outline */}
              <motion.path
                d="M50 10 L90 40 V90 H10 V40 L50 10 Z"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
              {/* Diamond Overlay morph */}
              <motion.path
                d="M50 5 L95 50 L50 95 L5 50 Z"
                initial={{ pathLength: 0, opacity: 0, scale: 0.5 }}
                animate={{ pathLength: 1, opacity: 0.5, scale: 1 }}
                transition={{ delay: 1, duration: 1.2, ease: "anticipate" }}
                className="stroke-gold-100"
              />
            </svg>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
            className="text-gold-300 font-serif tracking-[0.3em] text-sm text-center"
          >
            WM BUSTAMANTE
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};