'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function AppDownload() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-blue-600 py-20 px-4">
      {/* Perspective Grid Background */}
      <div className="absolute inset-0 overflow-hidden perspective-[1000px]">
        <motion.svg
          className="absolute w-full h-full origin-center"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 1000"
          preserveAspectRatio="xMidYMid slice"
          initial={{ rotateX: 60, scale: 1.5, y: '10%' }}
          animate={{ rotateX: 60, scale: 1.5, y: '10%' }}
        >
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.15 }}
            transition={{ duration: 1 }}
            stroke="currentColor"
            className="text-white"
          >
            {/* Horizontal perspective lines */}
            {[...Array(20)].map((_, i) => (
              <motion.line
                key={`h-${i}`}
                x1="0"
                y1={i * 50}
                x2="1000"
                y2={i * 50}
                strokeWidth="0.5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: i * 0.05 }}
              />
            ))}
            
            {/* Vertical perspective lines */}
            {[...Array(20)].map((_, i) => (
              <motion.line
                key={`v-${i}`}
                x1={i * 50}
                y1="0"
                x2={i * 50}
                y2="1000"
                strokeWidth="0.5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: i * 0.05 }}
              />
            ))}

            {/* Diagonal lines for added depth */}
            {[...Array(40)].map((_, i) => (
              <motion.line
                key={`d-${i}`}
                x1={i * 25}
                y1="0"
                x2={(i * 25) + 500}
                y2="1000"
                strokeWidth="0.25"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 0.5 + i * 0.02 }}
              />
            ))}
          </motion.g>
        </motion.svg>
      </div>

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