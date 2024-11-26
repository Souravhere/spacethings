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
      title: <span>혁신적인 편리함을 제공하는 <span className='text-blue-600'>자동 출퇴근 체크</span> 서비스</span>,
      points: [
        "모바일 단말기 휴대만으로 근무지 도착 시점에 간단하게 출근체크 완료",
        "자동 출근 기능을 활용해 앱을 찾아 체크하는 불편함 감소",
        "일괄 퇴근 기능을 활용해 설정된 퇴근시간에 자동으로 퇴근체크 완료"
      ],
      icon: <FiClock className="w-6 h-6" />
    },
    {
      number: "2",
      title: <span>복잡한 <span className='text-blue-600'>계약서 / 급여</span> 를 누구나 쉽게 관리</span>,
      points: [
        "급여 정산 관리 불일치 해결",
        "전자 계약을 통해 간편한 계약 관리",
        "각종수당( 주휴, 야간, 연장, 휴일)자동 계산 ",
        "시급,일급,아르바이트,프리랜서 별 근무 지원"
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

