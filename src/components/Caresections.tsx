'use client'

import { motion, useInView } from 'framer-motion'
import { FiCalendar, FiDollarSign, FiClock, FiPieChart } from 'react-icons/fi'
import Image from 'next/image'
import { useRef } from 'react'

export default function Caresection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true })

  const features = [
    {
      number: "1",
      title: "혁신적인 편리함 제공, ",
      titleHighlight: "자동 출퇴근 체크 서비스",
      points: [
        "모바일 단말기 통계만으로 근무자 도착 시점에 간단하게 출근체크 완료",
        "자동 출근 기능을 활용한 직원 참여 체크하는 편리한 감수",
        "일별 취근 기능을 통해여 실정된 월근시간에 자동으로 퇴근체크 완료"
      ],
      icon: <FiClock className="w-6 h-6" />
    },
    {
      number: "2",
      title: "복잡한 업무를 누구나 쉽게, ",
      titleHighlight: "계약서 & 급여률 관리",
      points: [
        "급여 정산 관련 불편함 해결",
        "전자 계약을 통해 가입형 계약 관리",
        "시급, 일급, 프리랜서형 근무 지원 및 건승 수당 (주휴, 야간, 연장) 자동 계산"
      ],
      icon: <FiDollarSign className="w-6 h-6" />
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        type: "spring",
        stiffness: 100,
      },
    },
  }

  return (
    <section ref={sectionRef} className="py-16 md:py-20 px-4 bg-white w-full overflow-x-hidden">
      <div className="w-full max-w-7xl overflow-hidden mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
            <span className='font-sans'>SMB</span>용 모바일 <span className="text-blue-600 font-sans">ALL-CARE</span> 서비스
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">손쉬운 방법의 근태, 급여 관리 ALL-CARE 솔루션</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Features List - Hidden on mobile initially */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8 md:space-y-16 order-2 lg:order-1"
          >
            {features.map((feature) => (
              <motion.div
                key={feature.number}
                variants={itemVariants}
                className="relative"
              >
                <motion.div
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                  className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 p-6 md:p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <motion.div 
                    className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 bg-amber-100 rounded-xl flex items-center justify-center text-amber-600 mx-auto sm:mx-0"
                  >
                    {feature.icon}
                  </motion.div>
                  <div className="space-y-3 md:space-y-4">
                    <h3 className="text-lg md:text-xl font-bold flex flex-wrap items-center gap-2 justify-center sm:justify-start">
                      <span className="text-xl md:text-2xl text-amber-500">{feature.number}</span>
                      <span className="break-keep">{feature.title}</span>
                      <span className="text-blue-600 break-keep">{feature.titleHighlight}</span>
                    </h3>
                    <ul className="space-y-2 md:space-y-3">
                      {feature.points.map((point, i) => (
                        <li
                          key={i}
                          className="text-gray-600 text-sm flex items-start gap-2 md:gap-3"
                        >
                          <span className="text-amber-500 mt-1 flex-shrink-0">-</span>
                          <span className="break-keep">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Phone Mockup - Show first on mobile */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="relative order-1 lg:order-2 mb-8 lg:mb-0"
          >
            <div className="relative w-[240px] sm:w-[260px] md:w-[320px] mx-auto">
              <motion.div
                animate={isInView ? {
                  y: [0, -12, 0],
                  rotate: [0, 1, 0, -1, 0],
                } : {}}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="rounded-[3rem] overflow-hidden shadow-xl"
              >
                <Image
                  src="/assets/careimage.png"
                  alt="All-Care App Interface"
                  className="w-full h-auto"
                  width={640}
                  height={1280}
                  quality={100}
                />
              </motion.div>
              
              {/* Decorative elements */}
              <motion.div
                animate={isInView ? {
                  scale: [1, 1.1, 1],
                  opacity: [0.2, 0.3, 0.2],
                } : {}}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] bg-amber-100 rounded-full blur-3xl"
              />
              
              {/* Floating icons - Hide on mobile */}
              <motion.div
                animate={isInView ? {
                  y: [-20, 0, -20],
                  x: [-10, 10, -10],
                  rotate: [0, 10, -10, 0],
                } : {}}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="hidden md:flex absolute top-20 -right-8 w-12 h-12 md:w-14 md:h-14 bg-white rounded-full shadow-lg items-center justify-center text-amber-500"
              >
                <FiCalendar className="w-6 h-6" />
              </motion.div>
              
              <motion.div
                animate={isInView ? {
                  y: [0, -20, 0],
                  x: [10, -10, 10],
                  rotate: [0, -10, 10, 0],
                } : {}}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="hidden md:flex absolute bottom-20 -left-8 w-12 h-12 md:w-14 md:h-14 bg-white rounded-full shadow-lg items-center justify-center text-amber-500"
              >
                <FiPieChart className="w-6 h-6" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}