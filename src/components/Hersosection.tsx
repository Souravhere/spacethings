'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { FlipWords } from './ui/flip-words'

// Define types
interface Particle {
  x: number
  startY: number
  size: number
  duration: number
  delay: number
  brightness: number
}

interface MousePosition {
  x: number
  y: number
}

export default function HeroSection() {
  const [mounted, setMounted] = useState(false)
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 })
  const [fallingParticles, setFallingParticles] = useState<Particle[]>([])

  const words = ["Easy", "Everyone", "Empowering", "Growth", "Innovation"]

  useEffect(() => {
    setMounted(true)
    // Generate particles only after component is mounted on client
    const particles: Particle[] = Array.from({ length: 80 }).map(() => ({
      x: 50 + Math.random() * 50,
      startY: -10,
      size: Math.random() * 4 + 1,
      duration: Math.random() * 4 + 3,
      delay: Math.random() * 5,
      brightness: Math.random() * 0.7 + 0.3,
    }))
    setFallingParticles(particles)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  if (!mounted) {
    return null // Return null on server-side and initial client-side render
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div 
        className="absolute inset-0 z-0 opacity-70 pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, rgba(147, 197, 253, 0.3) 0%, rgba(191, 219, 254, 0.4) 50%, rgba(239, 246, 255, 0.3) 100%)'
        }}
      />
      {/* Falling Particles */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {fallingParticles.map((particle, index) => (
          <motion.div
            key={index}
            initial={{ y: particle.startY }}
            animate={{ y: '100vh' }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              position: 'absolute',
              top: 0,
              left: `${particle.x}vw`,
              width: particle.size,
              height: particle.size,
              backgroundColor: `rgba(255, 255, 255, ${particle.brightness})`,
              borderRadius: '50%',
              opacity: 0.7,
              filter: `brightness(${particle.brightness})`,
            }}
          />
        ))}
      </div>

      <motion.div className="absolute right-0 w-3/4 h-full z-0">
        <motion.div
          className="absolute top-1/2 right-0 w-[1600px] h-[1600px] -translate-y-1/2 translate-x-1/4"
          animate={{
            x: mousePosition.x * 0.03,
            y: mousePosition.y * 0.03,
          }}
          transition={{
            type: "spring",
            stiffness: 40,
            damping: 30,
          }}
        >
          <div className="absolute inset-0 bg-blue-500/40 rounded-full blur-[100px] transform scale-100 animate-pulse" />
          <div className="absolute inset-0 bg-cyan-400/50 rounded-full blur-[130px] transform scale-75 animate-pulse" />
          <div className="absolute inset-0 bg-indigo-300/30 rounded-full blur-[180px] transform scale-125 animate-pulse" />
        </motion.div>
      </motion.div>

      <div className="absolute right-0 sm:w-[70%] w-full h-full overflow-hidden">
        <svg className="absolute h-full w-full opacity-95" viewBox="0 0 800 800" preserveAspectRatio="xMaxYMid slice">
          <defs>
            <radialGradient id="bright-gradient" cx="75%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#93C5FD" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#60A5FA" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.2" />
            </radialGradient>
          </defs>
          <motion.g
            animate={{
              x: mousePosition.x * 0.02,
              y: mousePosition.y * 0.02,
            }}
            transition={{
              type: "spring",
              stiffness: 30,
              damping: 40
            }}
          >
            {[...Array(12)].map((_, i) => (
              <motion.circle
                key={i}
                cx="600"
                cy="400"
                r={500 - (i * 35)}
                fill="url(#bright-gradient)"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 0.9 - (i * 0.1),
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 3 + i * 0.2,
                  delay: i * 0.1,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            ))}
          </motion.g>
        </svg>
      </div>

      <div className="relative z-10 text-center max-w-2xl mx-auto px-4 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900">
            <motion.span className="block" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
              당신의 성장을 위한 선택
            </motion.span>
            <motion.span className="block mt-2 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
              <FlipWords words={words} />
            </motion.span>
          </h1>
          <motion.p className="text-lg md:text-xl text-gray-600 max-w-2xl" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
            이제는 누구나, 언제, 어디서든 간편하게 업무환경을 개설할 수 있습니다
          </motion.p>
          <motion.p className="text-sm font-medium uppercase tracking-wider text-gray-500 font-sans" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
            EASY TO OPERATION
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
            <Link href="/contact">
              <motion.button
                className="rounded-full bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 px-8 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-blue-400/50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(59, 130, 246, 0.6)' }}
                whileTap={{ scale: 0.95 }}
              >
                도입문의
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}