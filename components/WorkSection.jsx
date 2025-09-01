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
    link: "https://forward-sol.vercel.app/",
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
    link: "https://forward-sol.vercel.app/AwaisSheikh",
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
  },
  {
    id:8,
    title: "Techspectrum | Company Website",
    description: "Corporate tech website offering services and blogs for digital growth.",
    highlights: [
      "Blogs",
      "Responsive",
      "Multi-pages",
      "Company"
    ],
    image: '/project8.jpg',
    link: "https://techspectrumsolution.com/",
    github: "#",
    tags: ["Frontend", "React", "E-commerce"]
  },
  {
    id:9,
    title: "Maxies Bridal Ecommerce",
    description: "Modern e-commerce platform for maxis and bridal clothes with admin dashboard.",
    highlights: [
      "E-commerce",
      "Multi-pages",
      "Responsive design",
      "Product"
    ],
    image: '/project9.jpg',
    link: "https://ecommerce-saad.vercel.app/",
    github: "#",
    tags: ["Frontend", "React", "E-commerce"]
  },
  {
    id:10,
    title: "Resume Solutions Marketplace",
    description: "Website to buy editable and non-editable resumes with CMS support.",
    highlights: [
      "Themed design",
      "Multi-page",
      "Responsive",
      "E-commerce"
    ],
    image: '/project10.jpg',
    link: "https://myresume-seven-mocha.vercel.app/",
    github: "#",
    tags: ["Frontend", "React", "E-commerce"]
  },
  {
    id:11,
    title: "Hammad Abbasi Portfolio",
    description: "Simple and elegant portfolio with animations and EmailJS contact form.",
    highlights: [
      "Themed design",
      "Multi-page",
      "Responsive",
      "E-commerce"
    ],
    image: '/project11.jpg',
    link: "https://hammadsite.vercel.app/",
    github: "#",
    tags: ["Frontend", "React", "E-commerce"]
  },
  {
    id:12,
    title: "Orange Sphere Corporate",
    description: "Unique design website with light and dark mode for tech services.",
    highlights: [
      "Themed design",
      "Multi-page",
      "Responsive",
      "E-commerce"
    ],
    image: '/project12.jpg',
    link: "https://sphere-orange.vercel.app/",
    github: "#",
    tags: ["Frontend", "React", "E-commerce"]
  },
  {
    id:13,
    title: "Figma to Nextjs",
    description: "Website converted from Figma design to Next.js with pixel-perfect accuracy.",
    highlights: [
      "Themed design",
      "Multi-page",
      "Responsive",
      "E-commerce"
    ],
    image: '/project13.jpg',
    link: "https://kyubi-umber.vercel.app/",
    github: "#",
    tags: ["Frontend", "React", "E-commerce"]
  },
  {
    id:14,
    title: "AI Chatbot Assistant",
    description: "Simple and efficient AI chatbot integrated with Gemini AI for smart assistance.",
    highlights: [
      "Themed design",
      "Multi-page",
      "Responsive",
      "E-commerce"
    ],
    image: '/project14.jpg',
    link: "https://ai-powered-chatbot-alpha.vercel.app/",
    github: "#",
    tags: ["Frontend", "React", "E-commerce"]
  },
  {
    id:15,
    title: "Tiles Website Shop",
    description: "Offering a wide variety of premium tiles to elevate the style, durability, and functionality of your home or commercial space",
    highlights: [
      "Themed design",
      "Multi-page",
      "Responsive",
      "E-commerce"
    ],
    image: '/project15.jpg',
    link: "https://tiles-website-shop.vercel.app/",
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
            {projects.slice(0, 15).map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}