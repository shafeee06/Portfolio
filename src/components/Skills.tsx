import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  { name: "React", level: 95, color: "primary" },
  { name: "JavaScript", level: 90, color: "secondary" },
  { name: "HTML/CSS", level: 95, color: "primary" },
  { name: "Python", level: 85, color: "secondary" },
  { name: "Java", level: 80, color: "primary" },
  { name: "C/C++", level: 75, color: "secondary" },
  { name: "UI/UX Design", level: 90, color: "primary" },
  { name: "AI Integration", level: 85, color: "secondary" },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20 px-4 md:px-8 bg-gradient-to-b from-transparent via-card/20 to-transparent" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card p-6 rounded-xl hover:neon-glow transition-all duration-300"
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-xl font-semibold">{skill.name}</h3>
                <span className={`text-${skill.color} font-bold`}>{skill.level}%</span>
              </div>
              <div className="relative h-3 bg-muted rounded-full overflow-hidden">
                <motion.div
                  className={`absolute top-0 left-0 h-full bg-gradient-to-r ${
                    skill.color === "primary"
                      ? "from-primary to-primary/70"
                      : "from-secondary to-secondary/70"
                  } rounded-full`}
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 flex flex-wrap justify-center gap-4"
        >
          {["Responsive Design", "Agile Development", "Version Control", "Team Collaboration"].map((tag, index) => (
            <span
              key={tag}
              className="glass-card px-6 py-3 rounded-full text-sm font-medium hover:neon-glow-secondary transition-all duration-300 cursor-default"
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
