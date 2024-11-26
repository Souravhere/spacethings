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

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 pb-32 px-4">
        <div className="mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col lg:flex-row items-center gap-12"
          >
            <div className="lg:w-1/2">
              <h1 className="text-3xl md:text-4xl font-bold mb-8 sm:text-left text-center">
              효율적인 매장 운영을 위한 매장관리 <span className='text-blue-600 font-sans uppercase'>Platform </span> 
              통합정산 솔루션<br />
                <span className="text-blue-600 font-sans">대장부</span>
              </h1>
              <div className="flex gap-4 sm:justify-start justify-center">
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full px-8 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors"
                  >
                    도입문의
                  </motion.button>
                </Link>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="lg:w-1/2"
            >
              <Image
                src="/assets/appshow.png"
                width={600}
                height={400}
                alt="Dejangbu Multi-device Preview"
                className="w-full h-auto"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>
      <StoreOperationsDEJANGBU/>
      <SalesAnalysis/>
      <StoreOperation/>
      {/* this is the Testimonial Section */}
      <div className='w-full bg-gradient-to-b from-blue-50 to-white py-10'>
      <h2 className="text-3xl md:text-4xl font-bold text-center">
            <span className="font-sans text-blue-600">DEJANGBU</span> 도입 후기
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