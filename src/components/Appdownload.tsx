'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import React, { useRef } from 'react'

export default function AppDownload() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacityBg = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.5, 0.3])

  return (
    <section ref={sectionRef} className="relative sm:min-h-[50vh] h-fit flex items-center justify-center overflow-hidden bg-blue-600 py-20 px-4">
      {/* Animated Square Mesh Background */}
      <motion.div 
        className="absolute inset-0 overflow-hidden"
        style={{ y: yBg, opacity: opacityBg }}
      >
        <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 100">
          <defs>
            <pattern id="smallGrid" width="2" height="2" patternUnits="userSpaceOnUse">
              <path d="M 2 0 L 0 0 0 2" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5"/>
            </pattern>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <rect width="10" height="10" fill="url(#smallGrid)"/>
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </motion.div>

      <div className="relative z-10 mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white"
          >
            혁신의 기회, 지금 바로 사용해보세요
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto"
          >
            관리 프로세스를 간소화하고 고객 경험을 향상시켜 효율성을 높여보세요
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.9)' }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 px-8 py-3 bg-white text-blue-600 rounded-full text-lg font-semibold transition-colors"
              >
                문의하기
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-600/50 to-transparent pointer-events-none" />
    </section>
  )
}