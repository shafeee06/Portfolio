import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "Novitech",
    role: "Data Analytics, ML & AI Intern",
    description: "Worked on machine learning models and AI-driven analytics solutions",
    period: "2024",
  },
  {
    company: "VCodez",
    role: "Machine Learning Intern",
    description: "Developed and implemented machine learning algorithms and models for real-world applications",
    period: "2024",
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-20 px-4 md:px-8 bg-gradient-to-b from-transparent via-card/20 to-transparent" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary via-secondary to-primary"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } flex-col md:gap-8`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background neon-glow"></div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ml-8 md:ml-0 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="glass-card p-6 rounded-xl hover:neon-glow transition-all duration-300"
                  >
                    <div className="flex items-center gap-2 mb-2 justify-start md:justify-start">
                      <Briefcase className="w-5 h-5 text-primary" />
                      <span className="text-sm text-secondary font-semibold">{exp.period}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2 gradient-text">{exp.company}</h3>
                    <p className="text-lg text-primary mb-2">{exp.role}</p>
                    <p className="text-muted-foreground">{exp.description}</p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
