'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { FaUserTie, FaTruck, FaCashRegister, FaUserClock, FaStore, FaCalendarCheck, FaUtensils, FaCarrot, FaClipboardList } from 'react-icons/fa'

const categories = [
  {
    title: '직원관리',
    icon: FaUserTie,
    items: ['급여 : 급여 관리', '근태 : 인사 관리 등', '계약 : 직원 계약']
  },
  {
    title: '배달주문',
    icon: FaTruck,
    items: ['주문 : 배달 주문 관리', '비용 : 수수료, 배달 비']
  },
  {
    title: 'POS',
    icon: FaCashRegister,
    items: ['주문 : 매장 식사/포장 주문', '결제 : 주문 결제', '고객 : 멤버십, 기타 서비스', '배달 : 배달주문']
  },
  {
    title: '웨이팅 고객',
    icon: FaUserClock,
    items: ['번호.인원.전화번호', '시간.테이블']
  },
  {
    title: '매장운영',
    icon: FaStore,
    items: ['세무 : 매출, 회계, 자금, 정산', '보험 : 매장 보험 등', '대출 : 매장 운영 자금', '마케팅 : 매장 홍보 등']
  },
  {
    title: '예약 고객',
    icon: FaCalendarCheck,
    items: ['예약 : 날짜, 시간, 인원 성명, 체크', '단골 : 단골고객 관리']
  },
  {
    title: '주방운영',
    icon: FaUtensils,
    items: ['영수증 : 주방 영수증', 'KDS : 주방 운영 시스템']
  },
  {
    title: '식자재',
    icon: FaCarrot,
    items: ['발주 : 식자재 발주', '정산 : 발주 금액 결제', '재고 : 식자재 재고 파악']
  },
  {
    title: '주문',
    icon: FaClipboardList,
    items: ['Table Order', 'Mobile Order', 'Kiosk Order']
  }
]

export default function StoreOperationsDEJANGBU() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section className="min-h-screen bg-blue-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h1 
          className="text-4xl sm:text-5xl font-bold text-blue-600 mb-8 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          복잡한 매장 운영과 비용
        </motion.h1>
        <motion.p 
          className="text-lg text-gray-700 mb-12 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          매장의 매출, 정산, 주문, 직원, 고객 등 다양한 접점에서 발생하는 모든 운영을 관리하기에는
          <span className="text-blue-600 font-semibold"> 많은 시간과 비용</span>이 발생 합니다.
        </motion.p>

        <motion.div 
          className="relative w-full max-w-7xl mx-auto mb-16"
          ref={ref}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/assets/DEJANGBU.png"
            alt="Store Operations"
            width={2000}
            height={2000}
            className="rounded-lg shadow-xl"
          />
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {categories.map((category) => (
            <motion.div
              key={category.title}
              className="bg-white p-6 rounded-lg shadow-lg border border-blue-200"
              variants={itemVariants}
            >
              <div className="flex items-center justify-center mb-4">
                <category.icon className="w-12 h-12 text-blue-600" />
              </div>
              <h2 className="text-xl font-semibold text-blue-600 mb-4 text-center">{category.title}</h2>
              <ul className="space-y-2 text-gray-700">
                {category.items.map((item, idx) => (
                  <li key={idx} className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}