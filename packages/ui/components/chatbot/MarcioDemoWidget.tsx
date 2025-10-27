'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface MarcioDemoWidgetProps {
  primaryColor: string;
  accentColor: string;
  greeting: string;
  version: 'v1' | 'v2' | 'v3';
}

export function MarcioDemoWidget({
  primaryColor,
  accentColor,
  greeting,
  version
}: MarcioDemoWidgetProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // Auto-popup após 10 segundos (apenas uma vez)
    const timer = setTimeout(() => {
      if (!hasShown) {
        setIsVisible(true);
        setHasShown(true);
      }
    }, 10000); // 10 segundos

    return () => clearTimeout(timer);
  }, [hasShown]);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.9 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="fixed bottom-6 right-6 z-50 w-[340px] max-w-[90vw] md:w-[340px] bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden"
        >
          {/* Header */}
          <div
            className="p-4 flex items-center justify-between text-white"
            style={{ backgroundColor: primaryColor }}
          >
            <div className="flex items-center space-x-3">
              {/* Avatar */}
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-3xl">
                👷
              </div>
              {/* Info */}
              <div>
                <div className="font-bold text-lg">Márcio da Obra</div>
                <div className="text-xs opacity-90">Assistente Virtual</div>
              </div>
            </div>
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="hover:bg-white/10 p-1 rounded-lg transition-colors"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Message Content */}
          <div className="p-6">
            {/* Chat Bubble */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="bg-gray-100 dark:bg-gray-700 rounded-2xl rounded-tl-none p-4 shadow-sm"
            >
              <p className="text-gray-800 dark:text-gray-100 text-sm leading-relaxed">
                {greeting}
              </p>
            </motion.div>

            {/* Badge/Tag */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-4 text-center"
            >
              <span
                className="inline-block px-4 py-2 rounded-full text-xs font-semibold text-white"
                style={{ backgroundColor: accentColor }}
              >
                🚀 Em desenvolvimento
              </span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
