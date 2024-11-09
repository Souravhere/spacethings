"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function Appshowcomp() {
  return (
    <section className="relative w-full sm:min-h-screen h-fit bg-white overflow-hidden px-4 py-12 md:py-24">
      <div className="container mx-auto max-w-6xl">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 space-y-4"
        >
          <h1 className="text-2xl md:text-4xl font-bold">
          매장 경영의{" "}
            <span className="text-blue-500"><span className="font-sans">NEW</span> 패러다임 </span> <span className="font-sans">DEJANGBU</span>
          </h1>
          <p className="text-sm md:text-base text-gray-600 max-w-3xl mx-auto">
            혁신적인 솔루션으로 운영 효율성을 극대화하는 대항부는 고객 경험을 향상시켜 비즈니스 성장을 지원
          </p>
        </motion.div>

        {/* Single Large Image */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative w-full max-w-4xl mx-auto"
        >
          <Image
            src="/assets/appshow.png"
            alt="New Paradigm Interface"
            width={1200}
            height={800}
            className="w-full h-auto"
            priority
          />
        </motion.div>
      </div>

      {/* Background Gradient */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-50 pointer-events-none" /> */}
    </section>
  )
}