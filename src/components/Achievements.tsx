import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Award } from "lucide-react";

const achievements = [
  {
    title: "INNOTHON",
    award: "Jurie Award",
    description: "Recognition for innovative hackathon project",
    icon: Trophy,
  },
  {
    title: "INNOCOM",
    award: "Jurie Award",
    description: "Excellence in communication and innovation",
    icon: Award,
  },
  {
    title: "MATHZONE",
    award: "3rd Prize",
    description: "Mathematical problem-solving competition",
    icon: Trophy,
  },
];

const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="achievements" className="py-20 px-4 md:px-8" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Awards & <span className="gradient-text">Achievements</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="glass-card p-8 rounded-2xl text-center hover:neon-glow-secondary transition-all duration-300 group"
              >
                <motion.div
                  className="inline-block mb-4"
                  animate={{ 
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    repeatDelay: 3
                  }}
                >
                  <Icon className="w-16 h-16 text-secondary group-hover:text-primary transition-colors" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-2 gradient-text">{achievement.title}</h3>
                <p className="text-xl text-primary font-semibold mb-3">{achievement.award}</p>
                <p className="text-muted-foreground">{achievement.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
