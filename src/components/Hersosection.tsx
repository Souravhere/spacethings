'use client'

import { motion, useAnimation } from 'framer-motion'
import { useEffect, useState } from 'react'
import { FlipWords } from './ui/flip-words'
import Link from 'next/link'
import { Wifi, MapPin, MessageCircle, Radio, Bluetooth, ChevronRight } from 'lucide-react'

interface Particle {
  x: number
  startY: number
  size: number
  duration: number
  delay: number
  brightness: number
}

interface HexagonProps {
  icon: React.ReactNode
  label: string
  color?: string
  className?: string
  delay?: number
}

const Hexagon = ({ icon, label, color = "bg-blue-300/80", className = "", delay = 0 }: HexagonProps) => {
  const controls = useAnimation()

  useEffect(() => {
    controls.start({
      scale: [0, 1.1, 1],
      rotate: [0, 10, 0],
      transition: { delay, duration: 0.5, ease: "easeOut" }
    })
  }, [controls, delay])

  return (
    <motion.div className={`hexagon group ${className}`} animate={controls}>
      <div className={`hexagon-content ${color} group-hover:scale-105 transition-transform duration-300`}>
        <div className="flex flex-col items-center justify-center gap-1">
          {icon}
          <span className="text-xs font-medium">{label}</span>
        </div>
      </div>
    </motion.div>
  )
}

export default function HeroSection() {
  const [mounted, setMounted] = useState(false)
  const [fallingParticles, setFallingParticles] = useState<Particle[]>([])

  const words = ["Easy", "Everyone", "Empowering", "Growth", "Innovation"]

  useEffect(() => {
    setMounted(true)
    const particles: Particle[] = Array.from({ length: 80 }).map(() => ({
      x: Math.random() * 100,
      startY: -10,
      size: Math.random() * 4 + 1,
      duration: Math.random() * 4 + 3,
      delay: Math.random() * 5,
      brightness: Math.random() * 0.7 + 0.3,
    }))
    setFallingParticles(particles)
  }, [])

  // useEffect(() => {
  //   const handleMouseMove = (e: MouseEvent) => {
  //     // Mouse position logic (if needed in the future)
  //   }

  //   window.addEventListener('mousemove', handleMouseMove)
  //   return () => window.removeEventListener('mousemove', handleMouseMove)
  // }, [])

  if (!mounted) return null

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50 sm:py-0 py-24">
      <div 
        className="absolute inset-0 z-0 opacity-70 pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, rgba(147, 197, 253, 0.3) 0%, rgba(191, 219, 254, 0.4) 50%, rgba(239, 246, 255, 0.3) 100%)'
        }}
      />
      
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {fallingParticles.map((particle, index) => (
          <motion.div
            key={index}
            initial={{ y: particle.startY, x: particle.x + "vw" }}
            animate={{ 
              y: ['0vh', '100vh'],
              x: [particle.x + "vw", (particle.x + (Math.random() * 10 - 5)) + "vw"]
            }}
            transition={{
              y: { duration: particle.duration, delay: particle.delay, repeat: Infinity, ease: "linear" },
              x: { duration: particle.duration, delay: particle.delay, repeat: Infinity, ease: "easeInOut" }
            }}
            style={{
              position: 'absolute',
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

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 sm:gap-12 gap-8 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 sm:text-left text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900">
              <motion.span 
                className="block font-sans" 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                Space Things
              </motion.span>
              <motion.span 
                className="block mt-2 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent" 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <FlipWords words={words} />
              </motion.span>
            </h1>
            <motion.p 
              className="text-xl font-semibold uppercase tracking-wider text-gray-500 font-sans" 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 1, duration: 0.6 }}
            >
              ABOUT SPACE THINGS
            </motion.p>
            <motion.p 
              className="text-base text-gray-700" 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              고정밀 실내측위 단말인 Hybrid Beacon 과 이를 이용한 측위 기술을 개발하여
              유통, 문화, 교통, 안전, 스마트 시티 등 다양한 분야에 측위 시스템을 제공하고 있으며, 
              B2C 모델의 모바일 오더에서 부터 B2B 모델의 시스템 공급까지  
              다양하고 혁신적인 서비스를 고객에게 제공하고 있습니다.
            </motion.p>
            {/* Animated Contact Us Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              <Link href="/contact" passHref>
                <motion.span
                  className="inline-flex items-center px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  문의하기
                  <motion.span
                    className="ml-2"
                    initial={{ x: 0 }}
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                  >
                    <ChevronRight className="w-5 h-5" />
                  </motion.span>
                </motion.span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Content - Hexagonal Grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative sm:mt-0 -mt-20"
          >
            <div className="honeycomb font-sans">
              <div className="honeycomb-center absolute top-1/2 sm:left-[35%] left-[30%] transform -translate-x-1/2 -translate-y-1/2">
                <Hexagon
                  icon={<div className="text-white font-bold text-center">YAP<br/>BEACON</div>}
                  label=""
                  color="bg-gray-800"
                  delay={0.2}
                />
              </div>
              <div className="honeycomb-items">
              <Hexagon 
                icon={<Wifi className="w-6 h-6 text-white" />}
                label="WiFi"
                delay={0.4}
                className="absolute top-0 left-1/4 transform -translate-x-1/2 -translate-y-1/2"
              />
              <Hexagon
                icon={<MapPin className="w-6 h-6 text-white" />}
                label="GPS"
                delay={0.6}
                className="absolute top-1/4 left-3/4 transform -translate-x-1/2 -translate-y-1/2"
              />
              <Hexagon
                icon={<MapPin className="w-6 h-6 text-white" />}
                label="Geo fence"
                delay={0.8}
                className="absolute top-3/4 left-3/4 transform -translate-x-1/2 -translate-y-1/2"
              />
              <Hexagon
                icon={<MessageCircle className="w-6 h-6 text-white" />}
                label="Nearby"
                color="bg-gray-400/80"
                delay={1.0}
                className="absolute top-full left-1/4 transform -translate-x-1/2 -translate-y-1/2"
              />
              <Hexagon
                icon={<Radio className="w-6 h-6 text-white" />}
                label="Ultra sound"
                color="bg-purple-400/80"
                delay={1.2}
                className="absolute top-3/4 left-[-25%] transform -translate-x-1/2 -translate-y-1/2"
              />
              <Hexagon
                icon={<Bluetooth className="w-6 h-6 text-white" />}
                label="BLE"
                color="bg-purple-400/80"
                delay={1.4}
                className="absolute top-1/4 left-[-25%] transform -translate-x-1/2 -translate-y-1/2"
              />
              </div>
            </div>

            {/* Bottom Right Content */}
            <motion.div 
              className="absolute -bottom-20 right-0 text-right mb-4 mr-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.6 }}
            >
              <p className='font-sans font-semibold'>Modular Development</p>
              <p className="text-sm text-gray-600 mb-1">실내/외 측위기술 모듈화</p>
              <p className="text-sm text-gray-600 mb-1">최적의 조건으로 조합 사용 가능한</p>
              <p className="text-sm text-gray-600">위치 인식 융합기술</p>
            </motion.div>

            {/* Legend */}
            <motion.div 
              className="absolute -bottom-20 left-0 flex flex-col gap-2 mb-4 ml-4 font-sans"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 0.6 }}
            >
              <div className="flex items-center gap-2 font-sans">
                <div className="w-3 h-3 rounded-full bg-blue-300"></div>
                <span className="text-sm text-gray-600">Soft Beacon</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-purple-400"></div>
                <span className="text-sm text-gray-600">Hybrid Beacon</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
