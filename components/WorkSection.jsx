'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import ProjectCard from './ProjectCard'

const projects = [
  {
    id:1,
    title: "ForwardSols | Comprehensive MERN and Next.js",
    description: "A real-time, fully integrated web platform with interactive dashboard and robust back-end.",
    highlights: [
      "Next.js & MERN stack",
      "Real-time functionality",
      "Multi-domain integration",
      "Responsive design"
    ],
    image: '/project1.png',
    link: "https://www.forwardsols.com/",
    github: "#",
    tags: ["Full Stack", "Next.js", "MERN"]
  },
  {
    id:2,
    title: "Client Portfolio Website | Next.js MERN Project",
    description: "Cutting-edge portfolio with dynamic content and advanced animations.",
    highlights: [
      "Interactive portfolio",
      "Dynamic content",
      "Advanced animations",
      "Responsive design"
    ],
    image: '/project2.png',
    link: "https://www.forwardsols.com/AwaisSheikh",
    github: "#",
    tags: ["Frontend", "Next.js", "Animation"]
  },
  {
    id:3,
    title: "Event Equation | Event Management Website",
    description: "Feature-rich event management platform with stunning animations.",
    highlights: [
      "Event management",
      "Dynamic portfolio",
      "Testimonial section",
      "Performance optimized"
    ],
    image: '/project3.png',
    link: "https://event-equation.vercel.app",
    github: "#",
    tags: ["Full Stack", "Next.js", "Animation"]
  },
  {
    id:4,
    title: "CarKing – Ultimate Car Buying & Selling Platform",
    description: "Modern platform for car sales with user and admin dashboards.",
    highlights: [
      "User dashboard",
      "Admin controls",
      "Advanced search",
      "Secure transactions"
    ],
    image: '/project4.png',
    link: "https://purecar.co.uk/",
    github: "#",
    tags: ["Full Stack", "MERN", "E-commerce"]
  },
  {
    id:5,
    title: "Elegant Timepiece - Premium Watch Store",
    description: "Luxury Shopify theme for watch retail with live chat support. Password is 1.",
    highlights: [
      "Shopify theme",
      "Live chat",
      "SEO optimized",
      "Premium design"
    ],
    image: '/project5.png',
    link: "https://timevo-theme.myshopify.com/",
    github: "#",
    tags: ["Frontend", "Shopify", "E-commerce"]
  },
  {
    id:6,
    title: "Ali Hassan | Portfolio",
    description: "Modern portfolio showcasing skills, projects and blog.",
    highlights: [
      "Interactive UI",
      "Skills showcase",
      "Project gallery",
      "Functional contact"
    ],
    image: '/project7.png',
    link: "https://alihassan-website.vercel.app/",
    github: "#",
    tags: ["Frontend", "React", "Portfolio"]
  },
  {
    id:7,
    title: "Baroque-Style | E-commerce Website",
    description: "Baroque-inspired React e-commerce platform with elegant design.",
    highlights: [
      "Themed design",
      "Multi-page",
      "Responsive",
      "E-commerce"
    ],
    image: '/project6.png',
    link: "https://baroque-red.vercel.app/",
    github: "#",
    tags: ["Frontend", "React", "E-commerce"]
  }
]

export default function WorkSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const item = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section
      id="work"
      ref={ref}
      className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={container}
        >
          <motion.div variants={item} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-100 dark:to-gray-300">
              My <span className="text-rose-500 dark:text-rose-400">Projects</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Here are some of my selected works. Each project represents unique challenges and creative solutions.
            </p>
          </motion.div>

          <motion.div
            variants={item}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          >
            {projects.slice(0, 7).map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}