'use client'

import { motion } from 'framer-motion'
import { 
  FiClock, 
  FiBell, 
  FiList,
  FiChevronRight 
} from 'react-icons/fi'
import { FaHandshake } from 'react-icons/fa'
import Image from 'next/image'

export default function Wassusection() {
  const features = [
    {
      icon: <FiClock className="w-8 h-8" />,
      title: "근태관리",
      description: "자동화된 근태 확인과 자동별 근무시간 관리",
    },
    {
      icon: <FiBell className="w-8 h-8" />,
      title: "공지사항",
      description: "자동화된 임시 및 긴급 공지사항 관리",
    },
    {
      icon: <FaHandshake className="w-8 h-8" />,
      title: "전자계약",
      description: "보관 및 관리가 쉬워진 전자계약",
    },
    {
      icon: <FiList className="w-8 h-8" />,
      title: "체크리스트",
      description: "한눈에 전달되는 체크 및 관리페이지 공유",
    },
  ]

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
        duration: 0.5,
      },
    },
  }

  return (
    <section className="py-20 px-4 font-sans">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            혁신적인 편리함 <span className="text-blue-600">WATSSUE</span>
          </h2>
          <p className="text-gray-600">쉽고 간편한 수상물건의 업무환경 개선 솔루션</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 bg-transparent gap-12 items-center">
          {/* Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative mx-auto"
          >
            <div className="relative w-[300px] md:w-[380px] mx-auto">
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="rounded-[3rem] overflow-hidden shadow-2xl"
              >
                <Image
                  src="/assets/Wassusectionimg.png"
                  alt="Wassu App Interface"
                  className="w-full h-auto"
                  width={100}
                  height={100}
                />
              </motion.div>
              {/* Decorative elements */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-100 rounded-full opacity-20 blur-3xl" />
            </div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="grid sm:grid-cols-2 gap-6"
          >
            {features.map((feature) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="group relative bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col gap-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                      {feature.title}
                      <FiChevronRight className="w-5 h-5 text-blue-600 group-hover:translate-x-1 transition-transform duration-300" />
                    </h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </div>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-600 rounded-2xl transition-colors duration-300" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}