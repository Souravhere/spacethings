'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const Loader: React.FC = () => {
  const [isMounted, setIsMounted] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    setIsMounted(true)
    const timer = setTimeout(() => {
      setLoading(false)
    }, 4000)

    return () => clearTimeout(timer)
  }, [])

  // Text animation variants
  const strokeVariants = {
    hidden: { pathLength: 0 },
    visible: {
      pathLength: 1,
      transition: {
        duration: 1.5,
        ease: "easeInOut"
      }
    }
  }

  const fillVariants = {
    hidden: { fillOpacity: 0 },
    visible: {
      fillOpacity: 1,
      transition: {
        duration: 0.8,
        delay: 1.5,
        ease: "easeInOut"
      }
    }
  }

  // Image animation variants
  const imageVariants = {
    hidden: (direction: number) => ({
      x: direction * 100 + 'vw',
      rotate: direction * 0,
      opacity: 0
    }),
    visible: (direction: number) => ({
      x: direction * 20 + 'vw',
      rotate: direction * -45,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        rotate: { duration: 1, ease: "easeOut" },
        opacity: { duration: 0.5, ease: "easeIn" }
      }
    }),
    exit: {
      y: -50,
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    }
  }

  // Don't render until mounted on client
  if (!isMounted) return null

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-blue-100 overflow-hidden"
        >
          <div className='sm:flex hidden'>
                      {/* Left Image */}
          <motion.div
            className="absolute left-0 top-[10%] -translate-y-1/3 sm:w-[350px] w-[270px] h-fit overflow-hidden"
            variants={imageVariants}
            custom={-1}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <Image
              src="/assets/careimage.png"
              alt="Left decorative image"
              width={400}
              height={300}
              className="w-full h-full object-cover object-left rounded-xl"
            />
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="absolute right-0 top-[10%] -translate-y-1/2 sm:w-[350px] w-[270px] h-fit overflow-hidden"
            variants={imageVariants}
            custom={1}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <Image
              src="/assets/dataimage.png"
              alt="Right decorative image"
              width={400}
              height={300}
              className="w-full h-full object-cover object-right rounded-xl"
            />
          </motion.div>

          </div>
          {/* Text Animation with sequential stroke and fill */}
          <svg className="w-full h-auto max-w-lg font-sans relative z-10" viewBox="0 0 400 200">
            {/* DEJANGBU text */}
            <motion.text
              x="50%"
              y="40%"
              textAnchor="middle"
              dominantBaseline="middle"
              fill="none"
              stroke="#3B82F6"
              strokeWidth="2"
              fontSize="48"
              fontWeight="bold"
              variants={strokeVariants}
              initial="hidden"
              animate="visible"
            >
              DEJANGBU
            </motion.text>
            <motion.text
              x="50%"
              y="40%"
              textAnchor="middle"
              dominantBaseline="middle"
              fill="#3B82F6"
              fontSize="48"
              fontWeight="bold"
              variants={fillVariants}
              initial="hidden"
              animate="visible"
            >
              DEJANGBU
            </motion.text>

            {/* WATSSUE text */}
            <motion.text
              x="50%"
              y="70%"
              textAnchor="middle"
              dominantBaseline="middle"
              fill="none"
              stroke="#3B82F6"
              strokeWidth="2"
              fontSize="48"
              fontWeight="bold"
              variants={strokeVariants}
              initial="hidden"
              animate="visible"
            >
              WATSSUE
            </motion.text>
            <motion.text
              x="50%"
              y="70%"
              textAnchor="middle"
              dominantBaseline="middle"
              fill="#3B82F6"
              fontSize="48"
              fontWeight="bold"
              variants={fillVariants}
              initial="hidden"
              animate="visible"
            >
              WATSSUE
            </motion.text>
          </svg>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Loader

