import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  shape: 'circle' | 'square' | 'triangle';
}

const AnimatedBackground = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const generateParticles = () => {
      const newParticles: Particle[] = [];
      for (let i = 0; i < 50; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 4 + 1,
          duration: Math.random() * 20 + 15,
          delay: Math.random() * 5,
          shape: ['circle', 'square', 'triangle'][Math.floor(Math.random() * 3)] as 'circle' | 'square' | 'triangle',
        });
      }
      setParticles(newParticles);
    };

    generateParticles();
  }, []);

  const getShapeClass = (shape: string, size: number) => {
    const baseClasses = "absolute";
    switch (shape) {
      case 'circle':
        return `${baseClasses} rounded-full`;
      case 'square':
        return `${baseClasses} rounded-sm rotate-45`;
      case 'triangle':
        return `${baseClasses} rounded-sm`;
      default:
        return `${baseClasses} rounded-full`;
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((particle) => {
        const colorClass = particle.id % 3 === 0 ? 'bg-primary' : particle.id % 3 === 1 ? 'bg-secondary' : 'bg-accent';
        const glowClass = particle.size > 3 ? 'neon-glow' : '';
        const shapeClass = getShapeClass(particle.shape, particle.size);
        
        return (
          <motion.div
            key={particle.id}
            className={`${shapeClass} ${colorClass} ${glowClass}`}
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            initial={{ 
              opacity: 0,
              scale: 0,
            }}
            animate={{
              opacity: [0, 0.6, 0.8, 0.6, 0],
              scale: [0, 1, 1, 1, 0],
              x: [0, Math.random() * 100 - 50, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, Math.random() * 100 - 50, 0],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        );
      })}
      
      {/* Additional floating geometric shapes */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={`geo-${i}`}
          className="absolute border-2"
          style={{
            width: `${Math.random() * 40 + 20}px`,
            height: `${Math.random() * 40 + 20}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            borderColor: i % 2 === 0 ? 'hsl(var(--primary) / 0.2)' : 'hsl(var(--secondary) / 0.2)',
          }}
          animate={{
            rotate: [0, 360],
            x: [0, Math.random() * 50 - 25],
            y: [0, Math.random() * 50 - 25],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: Math.random() * 30 + 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;
