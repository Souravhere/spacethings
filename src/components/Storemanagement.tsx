'use client'

import { motion } from 'framer-motion'
import { 
  FiSettings, 
  FiTruck, 
  FiTrendingUp, 
  FiDollarSign 
} from 'react-icons/fi'

export default function Storemanagement() {
  const features = [
    {
      icon: <FiSettings className="w-8 h-8" />,
      title: "운영관리",
      description: [
        "우리의 솔루션은 매장 운영을 혁신하고, 주요 및 결제 기능으로 고객 편의를 극대화 합니다.",
        "다양한 주문 처리를 효율적으로 관리하여, 식자재 구매 연동과 작업 관리를 하고 맞춤 솔루션도 높입니다."
      ]
    },
    {
      icon: <FiTruck className="w-8 h-8" />,
      title: "배달관리",
      description: [
        "우리의 솔루션은 총 매출, 취소율 매출, 배달 앱 정산 내역 등을 간편하게 관리됩니다.",
        "표준, 수수료 내역을 분명하게 파악해 운영 효율성을 극대화 합니다."
      ]
    },
    {
      icon: <FiTrendingUp className="w-8 h-8" />,
      title: "매출관리",
      description: [
        "우리의 솔루션은 통합 매출 내역을 통해 전체 본사 상권을 한눈에 파악 할 수 있습니다.",
        "카드 매출 내역 및 배달 앱 매출 내역을 상세히 분석해 비즈니스 운영을 최적화 합니다."
      ]
    },
    {
      icon: <FiDollarSign className="w-8 h-8" />,
      title: "정산관리",
      description: [
        "정산 결제내역을 통해 카드 정산 내역과 배달 앱 정산 내역을 쉽게 관리할 수 있습니다.",
        "정산 결제를 정확하게 관리하고 매장 운용을 효율적으로 분석하는데 도움을 줍니다."
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section className="py-20 px-4 bg-white relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50 opacity-50" />

      <div className="max-w-4xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            더 쉽고 편한 <span className="text-blue-600">매장 운영 & 관리</span>
          </h2>
          <p className="text-gray-600">
            주문, 매출, 배달 데이터를 분석 및 활용해 스마트한 매장관리 솔루션을 제공하는 프드테크 기술
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="space-y-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="relative"
            >
              <div className="flex gap-6 p-6 bg-white rounded-2xl hover:shadow-xl transition-all duration-300">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                    {feature.icon}
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-gray-900">
                    {feature.title}
                  </h3>
                  <div className="space-y-1">
                    {feature.description.map((line, i) => (
                      <p key={i} className="text-gray-600 text-sm">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
              {index !== features.length - 1 && (
                <motion.div 
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="absolute -bottom-4 left-24 right-4 h-px bg-gray-200"
                />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-20 -right-20 w-64 h-64 bg-blue-100 rounded-full opacity-20 blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [360, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-100 rounded-full opacity-20 blur-3xl"
      />
    </section>
  )
}