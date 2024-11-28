'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import 'swiper/css'
import 'swiper/css/pagination'
import Appdownload from '@/components/Appdownload'
import TestimonialsSection from '@/components/TestimonialsSection'
import StoreOperation from '@/components/StoreOperation'
import StoreOperationsDEJANGBU from '@/components/StoreOperationsDEJANGBU'
import SalesAnalysis from '@/components/SalesAnalysis'

export default function dejangbupage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const fadeInScale = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-b from-white to-blue-200 text-white overflow-hidden">
        {/* <div className="absolute inset-0 z-0">
          <Image
            src="/assets/hero-bg.jpg"
            alt="Background"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div> */}
        <div className="max-w-[1500px] mx-auto px-4 py-20 relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={itemVariants} className="space-y-8 sm:text-left text-center">
              {/* <motion.div 
                variants={fadeInScale}
                className="inline-block px-6 py-2 rounded-full border border-gray-400 text-black text-sm font-medium"
              >
                도 버는 사장님들만의 필수앱
              </motion.div> */}
              <motion.h1 
                variants={itemVariants}
                className="text-5xl md:text-6xl font-bold leading-tight"
              >
                <span className="text-blue-600">대장부</span>
              </motion.h1>
              <motion.div variants={itemVariants} className="space-y-6">
                <p className="text-xl md:text-2xl text-gray-900">
                효율적인 매장 운영을 위한 매장관리 <span className="text-blue-400 font-sans">Platform</span>
                </p>
                <p className="text-lg md:text-xl text-gray-900">
                통합정산 솔루션 
                {/* <span className="text-blue-400 font-sans">&#34;대장부&#34;</span> */}
                </p>
              </motion.div>
              <div className="flex gap-4 sm:justify-start justify-center">
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors"
                  >
                    도입문의
                  </motion.button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInScale}
              className="relative"
            >
              <motion.div
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                transition={{
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 2,
                  ease: "easeInOut",
                }}
              >
                <Image
                  src="/assets/appshow.png"
                  width={600}
                  height={800}
                  alt="Dejangbu App Interface"
                  className="w-full h-auto drop-shadow-2xl"
                  priority
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <StoreOperationsDEJANGBU/>
      <StoreOperation/>
      <SalesAnalysis/>
      
      <div className='w-full bg-gradient-to-b from-blue-50 to-white py-10'>
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          <span className="font-sans text-blue-600 uppercase">DAEJANGBU</span> 도입 후기
        </h2>
        <p className="text-gray-600 text-lg text-center">
          <span className="font-sans">DEJANGBU</span>를 쓰고 계신 대표님들의 후기
        </p>
        <TestimonialsSection/>
      </div>
      <Appdownload/>
    </div>
  )
}

