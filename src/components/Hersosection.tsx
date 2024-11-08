'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { FlipWords } from './ui/flip-words'

export default function Hersosection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })

  const words = ["innovative", "empowering", "transformative", "visionary"];
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight })
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('resize', handleResize)

    // Initial size
    handleResize()

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background SVG with gradient */}
      <svg
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="gradient" cx="50%" cy="50%" r="70%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#1e90ff" />
          </radialGradient>
          <filter id="blur">
            <feGaussianBlur stdDeviation="40" />
          </filter>
        </defs>
        <motion.rect
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            x: mousePosition.x * 0.02,
            y: mousePosition.y * 0.02,
          }}
          transition={{ duration: 0.5 }}
          width="100%"
          height="100%"
          fill="url(#gradient)"
          filter="url(#blur)"
        />
      </svg>

      {/* Particles */}
      {windowSize.width > 0 &&
        Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-white/30"
            initial={{
              x: Math.random() * windowSize.width,
              y: Math.random() * windowSize.height,
              opacity: 0,
            }}
            animate={{
              y: [null, -20],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

      {/* Content */}
      <div className="relative flex min-h-screen items-center justify-center px-4">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
          >
            <span className="block">당신의 성장을 위한 선택</span>{' '}
            {/* <span className="mt-2 block text-blue-600 font-sans">GROWTH</span> */}
            <FlipWords words={words} /> <br />
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8 text-lg text-gray-600 sm:text-xl"
          >
            이제는 누구나, 언제, 어디서든 간편하게 업무환경을 개설할 수 있습니다
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-8 text-sm font-medium uppercase font-sans tracking-wider text-gray-500"
          >
            EASY TO OPERATION
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link href="/contact">
              <button className="rounded-full bg-blue-600 px-8 py-3 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2">
                도입문의
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}