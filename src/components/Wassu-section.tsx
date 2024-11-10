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
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        type: "spring",
        stiffness: 100,
      },
    },
  }

  return (
    <section className="py-16 overflow-y-hidden px-4 overflow-x-hidden">
      <div className="w-full mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            혁신적인 편리함 <span className="text-blue-600 font-sans">WATSSUE</span>
          </h2>
          <p className="text-gray-600">쉽고 간편한 수상물건의 업무환경 개선 솔루션</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 bg-transparent gap-16 items-center">
          {/* Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="relative mx-auto"
          >
            <div className="relative w-[260px] md:w-[320px] mx-auto">
              <motion.div
                animate={{
                  y: [0, -12, 0],
                  rotate: [0, 1, 0, -1, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="rounded-[3rem] overflow-hidden shadow-2xl"
              >
                <Image
                  src="/assets/dataimage.png"
                  alt="Wassu App Interface"
                  className="w-full h-auto"
                  width={100}
                  height={100}
                />
              </motion.div>
              {/* Enhanced decorative elements */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.2, 0.3, 0.2],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] bg-blue-100 rounded-full blur-3xl"
              />
            </div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="grid sm:grid-cols-2 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col gap-5">
                  <motion.div 
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                    className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300"
                  >
                    {feature.icon}
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                      {feature.title}
                      <motion.div
                        animate={{
                          x: [0, 5, 0],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.2,
                        }}
                      >
                        <FiChevronRight className="w-5 h-5 text-blue-600" />
                      </motion.div>
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