import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 px-4 md:px-8" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8 rounded-2xl neon-glow"
          >
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-5 h-5 text-primary" />
              <p className="text-muted-foreground">Chennai, India</p>
            </div>
            <p className="text-lg leading-relaxed mb-6">
              I'm deeply passionate about front-end development and design, constantly seeking opportunities to refine my skills. I enjoy exploring new technologies to create user-focused experiences that make real-world impact.
            </p>
            <div className="space-y-4">
              <div className="border-l-2 border-primary pl-4">
                <h3 className="text-xl font-semibold text-primary mb-2">Education</h3>
                <p className="text-muted-foreground">B.Tech in Computer Science</p>
              </div>
              <div className="border-l-2 border-secondary pl-4">
                <h3 className="text-xl font-semibold text-secondary mb-2">Focus Areas</h3>
                <p className="text-muted-foreground">Front-End Development, UI/UX Design, AI Integration</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="glass-card p-6 rounded-xl border-l-4 border-primary">
              <h3 className="text-2xl font-semibold mb-2 text-primary">Vision</h3>
              <p className="text-muted-foreground">
                To bridge the gap between innovative technology and intuitive design, creating digital experiences that empower users and drive meaningful change.
              </p>
            </div>
            <div className="glass-card p-6 rounded-xl border-l-4 border-secondary">
              <h3 className="text-2xl font-semibold mb-2 text-secondary">Approach</h3>
              <p className="text-muted-foreground">
                Combining technical expertise with creative problem-solving to deliver solutions that are not just functional, but delightful to use.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
