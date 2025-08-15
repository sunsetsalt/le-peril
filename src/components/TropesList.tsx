import React from 'react';
import { motion } from 'framer-motion';
import { Users, Search, Scale, Crown, Zap } from 'lucide-react';

const TropesList = () => {
  const tropes = [
    {
      title: 'Dystopian New Adult',
      icon: Crown,
      description: 'Coming of age in a world gone wrong'
    },
    {
      title: 'Found Family',
      icon: Users,
      description: 'Bonds forged in the fires of rebellion'
    },
    {
      title: 'Self-discovery Quest',
      icon: Search,
      description: 'Finding truth in a world of lies'
    },
    {
      title: 'Ethical Dilemmas',
      icon: Scale,
      description: 'When right and wrong blur together'
    },
    {
      title: 'Political Stakes',
      icon: Zap,
      description: 'The fate of society hangs in the balance'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
      {tropes.map((trope, index) => (
        <motion.div
          key={trope.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true }}
          whileHover={{ 
            scale: 1.05,
            y: -5 
          }}
          className="group relative p-6 bg-black/40 backdrop-blur-sm rounded-lg border border-red-900/30 hover:border-red-700/50 transition-all duration-300 cursor-pointer"
        >
          {/* Glow effect on hover */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-orange-600/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            whileHover={{ scale: 1.02 }}
          />
          
          <div className="relative z-10">
            <div className="flex items-center justify-center mb-4">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="p-3 bg-gradient-to-br from-red-600/20 to-orange-600/20 rounded-full"
              >
                <trope.icon className="w-8 h-8 text-red-500 group-hover:text-red-400 transition-colors" />
              </motion.div>
            </div>
            
            <h3 className="text-lg font-semibold text-white mb-2 text-center group-hover:text-red-100 transition-colors">
              {trope.title}
            </h3>
            
            <p className="text-sm text-gray-400 text-center group-hover:text-gray-300 transition-colors">
              {trope.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default TropesList;