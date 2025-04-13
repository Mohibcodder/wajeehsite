'use client'
import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'

export default function HeroSection() {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "backOut"
      }
    }
  }

  const floatingVariants = {
    float: {
      y: [-10, 10],
      transition: {
        y: {
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }
      }
    }
  }

  return (
    <section 
      ref={ref}
      className="relative pt-32 pb-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-rose-400/10 rounded-full filter blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-400/10 rounded-full filter blur-3xl animate-float"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="flex flex-col md:flex-row items-center"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <div className="md:w-1/2 mb-10 md:mb-0">
            <motion.div variants={itemVariants}>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-500 dark:from-rose-400 dark:to-pink-400">Wajeeh ul Hassan</span>
              </h1>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 bg-gradient-to-r from-gray-600 to-gray-800 dark:from-gray-300 dark:to-gray-100 text-transparent bg-clip-text">
                Creative Designer & Developer
              </h2>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <p className="text-lg mb-8 text-gray-600 dark:text-gray-300 max-w-lg">
                I craft immersive digital experiences that blend stunning design with cutting-edge technology to help brands stand out in the digital landscape.
              </p>
            </motion.div>
            
            <motion.div 
              className="flex flex-wrap gap-4"
              variants={itemVariants}
            >
              <Link 
                href="/work" 
                className="px-8 py-3.5 bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-rose-500/30 flex items-center gap-2"
              >
                <span>View My Work</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
              <Link 
                href="/contact" 
                className="px-8 py-3.5 border-2 border-gray-800 dark:border-gray-200 text-gray-800 dark:text-gray-200 hover:bg-gray-800 hover:text-white dark:hover:bg-gray-200 dark:hover:text-gray-800 font-medium rounded-lg transition-all duration-300 flex items-center gap-2"
              >
                <span>Contact Me</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </Link>
            </motion.div>
          </div>
          
          <motion.div 
            className="md:w-1/2 flex justify-center"
            variants={imageVariants}
          >
            <motion.div 
              className="relative w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-rose-500/30 dark:border-rose-400/30 shadow-2xl"
              animate="float"
              variants={floatingVariants}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-rose-500/20 to-pink-500/20 dark:from-rose-400/20 dark:to-pink-400/20"></div>
              <img 
                src="/waje.jpg" 
                alt="Wajeeh ul Hassan"
                className="w-full h-full object-cover relative z-10"
              />
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full shadow-[0_0_40px_15px_rgba(244,63,94,0.3)] dark:shadow-[0_0_40px_15px_rgba(251,113,133,0.3)]"></div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
      >
        <div className="animate-bounce w-6 h-10 border-2 border-gray-400 dark:border-gray-300 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-gray-400 dark:bg-gray-300 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  )
}