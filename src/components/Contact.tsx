import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, Linkedin, Github, Instagram, GithubIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "7200399628",
    href: "tel:7200399628",
  },
  {
    icon: Mail,
    label: "Email",
    value: "shawafkhan007@gmail.com",
    href: "mailto:shawafkhan007@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/shawaf-khan007",
    href: "https://linkedin.com/in/shawaf-khan007",
  },
  {
    icon: GithubIcon,
    label: "Github",
    value: "github.com/shawaaaf",
    href: "https://github.com/shawaaaf",
  },
];

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-20 px-4 md:px-8 bg-gradient-to-b from-transparent via-card/20 to-transparent" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Let's collaborate and create something amazing together
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.a
                  key={info.label}
                  href={info.href}
                  target={info.label === "LinkedIn" ? "_blank" : undefined}
                  rel={info.label === "LinkedIn" ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="glass-card p-6 rounded-xl flex items-center gap-4 hover:neon-glow transition-all duration-300 group"
                >
                  <div className="p-3 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg group-hover:from-primary/30 group-hover:to-secondary/30 transition-all">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    <p className="text-lg font-medium">{info.value}</p>
                  </div>
                </motion.a>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass-card p-8 rounded-2xl neon-glow-secondary"
          >
            <h3 className="text-2xl font-bold mb-6 gradient-text">Let's Create Together</h3>
            <p className="text-muted-foreground mb-6">
              I'm always excited to work on innovative projects and collaborate with talented individuals. 
              Whether you have a project in mind or just want to connect, feel free to reach out!
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                <span className="text-sm text-muted-foreground">Available for freelance projects</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-secondary rounded-full animate-pulse"></span>
                <span className="text-sm text-muted-foreground">Open to collaboration opportunities</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                <span className="text-sm text-muted-foreground">Interested in full-time roles</span>
              </div>
            </div>
            <div className="mt-8 flex gap-4">
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-lg px-8"
                asChild
>
                <a href="/SHAWAFKHAN(FINAL)RESUME.pdf" download="ShawafKhanA_Resume">
                  Download Resume
                </a>
                </Button>

            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground mb-4">Connect with me on social media</p>
          <div className="flex justify-center gap-4">
            <a href="#" className="p-3 glass-card rounded-full hover:neon-glow transition-all duration-300">
              <Github className="w-6 h-6 text-primary" />
            </a>
            <a href="https://linkedin.com/in/shawaf-khan007" target="_blank" rel="noopener noreferrer" className="p-3 glass-card rounded-full hover:neon-glow transition-all duration-300">
              <Linkedin className="w-6 h-6 text-primary" />
            </a>
            <a href="#" className="p-3 glass-card rounded-full hover:neon-glow transition-all duration-300">
              <Instagram className="w-6 h-6 text-primary" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
