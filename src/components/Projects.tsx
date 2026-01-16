import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";
import medaiImg from "@/assets/medai-project.png";
import vehicareImg from "@/assets/vehicare-project.png";
import VegilaiImg from  "@/assets/VegilAI.png";
import WasteAuctionthumbnail from "@/assets/WasteAuctionthumbnail.png";
import Signlang from "@/assets/Signlang.png";
const projects = [
  {
    title: "Med AI App",
    description: "Comprehensive AI-driven healthcare platform revolutionizing patient care and medical diagnostics.",
    achievements: [
      "Implemented advanced chatbot with natural language processing",
      "Developed telemedicine interface with secure video consultation",
      "Created AI prescription scanning with machine learning validation",
    ],
    technologies: ["React", "Python", "Machine Learning", "WebRTC"],
    image: medaiImg,
  },
  {
    title: "Vehicare",
    description: "Smart Vehicle Safety & Maintenance System leveraging IoT and blockchain technology.",
    achievements: [
      "Integrated IoT sensors for real-time vehicle diagnostics",
      "Blockchain-powered maintenance tracking and verification",
      "Predictive maintenance algorithm development",
    ],
    technologies: ["React Native", "Solidity", "IoT Protocols", "Blockchain"],
    image: vehicareImg,
  },
  {
    title: "Waste Auction — Smart Waste Management & Recycling Platform",
    description: "Smart waste management system used to reuse the waste as Raw material.",
    achievements: [
      "Designed and developed a web-based Waste Auction platform enabling users to sell or auction recyclable waste materials to authorized buyers.",
      "Implemented real-time bidding functionality using Socket.io for dynamic and interactive auctions.",
      "Integrated AI-based waste classification system using TensorFlow / OpenCV to identify types of waste (plastic, metal, glass, organic, etc.) from uploaded images",
    ],
    technologies: ["TensorFlow", "OpenCV ", "real-time bidding functionality", "AI-based waste classification system"],
    image: WasteAuctionthumbnail,
  },
  {
    title: "Vegil-AI Proactive Urban Safety Through AI-Enhanced CCTV  Monitoring",
    description: " AI-powered surveillance system for real-time detection of violent and suspicious human activities (e.g., fighting, assault, or falling) using YOLOv8 and Ultralytics",
    achievements: [
      "Integrated TensorFlow for deep learning–based image and video classification to enhance object recognition accuracy.",
      "Designed and deployed a Flask-based backend server to handle live CCTV stream processing and trigger automated alerts.",
      "Optimized object tracking and motion analysis using OpenCV and DeepSort, achieving high detection precision in dynamic environments.",
    ],
    technologies: ["DeepSort", "OpenCV", "OpenCV", "Ultralytics"],
    image: VegilaiImg,
  },
  {
    title: "SignLang – Smart Sign Language Communication Platform",
    description: "Developed a real-time sign recognition system using Computer Vision and Machine Learning (CNN, Mediapipe, TensorFlow) to detect and translate gestures.",
    achievements: [
      "Implemented bidirectional communication, converting signs to text/speech and text/speech to animated sign avatars for seamless two-way.",
      "Integrated camera-based gesture tracking for accurate recognition with minimal latency.",
      "nhanced inclusivity using Natural Language Processing (NLP) for text and speech understanding.",
    ],
    technologies: ["real-time sign recognition system", "signs to text/speech", "camera-based gesture tracking", "atural Language Processing (NLP)"],
    image: Signlang,
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-20 px-4 md:px-8" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </motion.div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass-card rounded-2xl overflow-hidden hover:neon-glow transition-all duration-300 group"
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative overflow-hidden h-64 md:h-auto">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent"></div>
                </div>
                <div className="p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-3xl font-bold gradient-text">{project.title}</h3>
                      <ExternalLink className="w-6 h-6 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <p className="text-muted-foreground mb-6">{project.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-primary mb-3">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {project.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-secondary mt-1">▹</span>
                            <span className="text-sm text-muted-foreground">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
