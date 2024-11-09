'use client'

import { motion } from 'framer-motion'
import { FiCalendar, FiDollarSign, FiClock, FiPieChart } from 'react-icons/fi'
import Image from 'next/image'

export default function Caresection() {
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
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            SMB용 모바일 <span className="text-blue-600 font-sans">ALL-CARE</span> 서비스
          </h2>
          <p className="text-gray-600">손쉬운 방법의 근태, 급여 관리 ALL-CARE 솔루션</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Features List */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="space-y-12"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.number}
                variants={itemVariants}
                className="relative"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex gap-6 p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center text-amber-600">
                    {feature.icon}
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold flex items-center gap-2">
                      <span className="text-2xl text-amber-500">{feature.number}</span>
                      {feature.title}
                      <span className="text-blue-600">{feature.titleHighlight}</span>
                    </h3>
                    <ul className="space-y-2">
                      {feature.points.map((point, i) => (
                        <li key={i} className="text-gray-600 text-sm flex items-start gap-2">
                          <span className="text-amber-500 mt-1">-</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-[300px] md:w-[380px] mx-auto">
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 1, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="rounded-[3rem] overflow-hidden shadow-2xl"
              >
                <Image
                  src="/assets/careimage.jpg"
                  alt="All-Care App Interface"
                  className="w-full h-auto"
                  width={100}
                  height={100}
                />
              </motion.div>
              {/* Decorative elements */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-amber-100 rounded-full opacity-20 blur-3xl" />
              
              {/* Floating icons */}
              <motion.div
                animate={{
                  y: [-20, 0, -20],
                  x: [-10, 10, -10],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-20 -right-8 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-amber-500"
              >
                <FiCalendar className="w-6 h-6" />
              </motion.div>
              
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  x: [10, -10, 10],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute bottom-20 -left-8 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-amber-500"
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