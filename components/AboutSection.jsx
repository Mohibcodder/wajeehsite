'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function AboutSection() {
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const skills = [
    { name: 'UI/UX Design', level: 90 },
    { name: 'Web Development', level: 85 },
    { name: 'Mobile Design', level: 80 },
    { name: 'Brand Identity', level: 75 },
    { name: 'Frontend Development', level: 88 },
    { name: 'Motion Design', level: 70 }
  ]

  return (
    <section 
      id="about" 
      ref={ref}
      className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={container}
          className="flex flex-col lg:flex-row gap-12 items-center"
        >
          {/* Image Section */}
          <motion.div 
            variants={item}
            className="lg:w-1/2 relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute -inset-4 bg-gradient-to-r from-rose-400 to-pink-500 rounded-2xl blur-lg opacity-30 dark:opacity-20 animate-rotate"></div>
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl border border-gray-100 dark:border-gray-700">
                <img 
                  src="/waje.jpg" 
                  alt="Wajeeh ul Hassan"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg border border-gray-100 dark:border-gray-700">
                <div className="bg-gradient-to-r from-rose-500 to-pink-500 p-3 rounded-full text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div 
            variants={item}
            className="lg:w-1/2"
          >
            <motion.h2 
              variants={item}
              className="text-4xl md:text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-100 dark:to-gray-300"
            >
              About <span className="text-rose-500 dark:text-rose-400">Me</span>
            </motion.h2>

            <motion.p 
              variants={item}
              className="text-lg mb-6 text-gray-600 dark:text-gray-300"
            >
              I'm a passionate designer and developer with over 5 years of experience creating digital products that are both beautiful and functional.
            </motion.p>

            <motion.p 
              variants={item}
              className="text-lg mb-8 text-gray-600 dark:text-gray-300"
            >
              My approach combines creative design with technical expertise to deliver solutions that not only look great but also perform exceptionally well across all platforms.
            </motion.p>

            <motion.div variants={item}>
              <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">My Skills</h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index} className="relative">
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-gray-500 dark:text-gray-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                        className="h-2.5 rounded-full bg-gradient-to-r from-rose-500 to-pink-500"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              variants={item}
              className="mt-10"
            >
              <a 
                href="/resume.pdf" 
                download
                className="inline-flex items-center px-6 py-3.5 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 transition-all duration-300 hover:shadow-lg hover:shadow-rose-500/30"
              >
                Download Resume
                <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 -mr-1 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}