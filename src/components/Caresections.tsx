'use client'

import { motion, useInView, useAnimation } from 'framer-motion'
import { FiDollarSign, FiClock } from 'react-icons/fi'
import Image from 'next/image'
import { useRef, useEffect } from 'react'

export default function CareSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

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
    <section ref={sectionRef} className="py-16 md:py-24 px-4 bg-white w-full">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className='font-sans'>SMB</span>용 모바일{" "}
            <span className="text-blue-600 font-sans">ALL-CARE</span> 서비스
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            손쉬운 방법의 근태, 급여 관리 ALL-CARE 솔루션
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="flex flex-col md:flex-row justify-center items-center gap-6 mb-16"
        >
          <motion.div variants={itemVariants} className="w-full md:w-1/4">
            <Image
              src='/assets/dataimage.png'
              alt="Care Image 1"
              width={300}
              height={400}
              className="rounded-lg shadow-md object-cover w-full h-fit"
            />
          </motion.div>
          <motion.div variants={itemVariants} className="w-full md:w-1/4">
            <Image
              src='/assets/Appdownload.jpg'
              alt="Care Image 2"
              width={400}
              height={500}
              className="rounded-lg shadow-md object-cover sm:scale-105 scale-100 w-full h-fit"
            />
          </motion.div>
          <motion.div variants={itemVariants} className="w-full md:w-1/4">
            <Image
              src='/assets/careimage.png'
              alt="Care Image 3"
              width={300}
              height={400}
              className="rounded-lg shadow-md object-cover w-full h-fit"
            />
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.number}
              variants={itemVariants}
              className="bg-white shadow-md rounded-lg p-6"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-600">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    <span className="text-amber-500 mr-2">{feature.number}</span>
                    <span className="break-keep">{feature.title}</span>
                    <span className="text-blue-600 break-keep">{feature.titleHighlight}</span>
                  </h3>
                  <ul className="space-y-2">
                    {feature.points.map((point, i) => (
                      <li
                        key={i}
                        className="text-gray-600 text-sm flex items-start gap-2"
                      >
                        <span className="text-amber-500 mt-1 flex-shrink-0">-</span>
                        <span className="break-keep">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

