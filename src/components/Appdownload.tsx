'use client'

import { motion } from 'framer-motion'
import { FiSmartphone, FiZap, FiTrendingUp, FiUsers } from 'react-icons/fi'
import Image from 'next/image'

export default function Appdownload() {
  const floatingIcons = [
    { Icon: FiSmartphone, delay: 0 },
    { Icon: FiZap, delay: 0.2 },
    { Icon: FiTrendingUp, delay: 0.4 },
    { Icon: FiUsers, delay: 0.6 },
  ]

  return (
    <section className="py-20 px-4 bg-white overflow-hidden relative">
      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            혁신의 기회, <span className='text-blue-600'>지금 바로 사용해보세요</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            관리 프로세스를 간소화하고 고객 경험을 향상시켜 효율성을 높여보세요
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 relative"
          >
            <Image
              src="/assets/Appdownload.jpg"
              width={300}
              height={600}
              alt="App Screenshot"
              className="mx-auto rounded-3xl shadow-2xl"
            />
            {floatingIcons.map(({ Icon, delay }, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: delay,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  repeatDelay: 2
                }}
                className={`absolute w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg text-blue-500
                  ${index === 0 ? 'top-10 left-7' : ''}
                  ${index === 1 ? 'top-1/4 right-7' : ''}
                  ${index === 2 ? 'bottom-1/4 left-7' : ''}
                  ${index === 3 ? 'bottom-10 right-7' : ''}
                `}
              >
                <Icon className="w-6 h-6" />
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-800">앱 기능</h3>
            <ul className="space-y-4">
              {['실시간 데이터 분석', '효율적인 재고 관리', '고객 관계 관리 (CRM)', '직원 일정 관리'].map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center space-x-3 text-gray-700"
                >
                  <FiZap className="flex-shrink-0 w-5 h-5 text-blue-500" />
                  <span>{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <p className="text-xl font-semibold text-gray-800 mb-6">지금 다운로드하세요</p>
          <div className="flex flex-row justify-center items-center gap-4">
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="sm:w-48 w-40"
            >
              <Image
                src="/assets/appstorebadges.png"
                width={200}
                height={60}
                alt="Download on the App Store"
                className="rounded-lg shadow-md"
              />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="sm:w-48 w-40"
            >
              <Image
                src="/assets/googleplaybadge.png"
                width={200}
                height={90}
                alt="Get it on Google Play"
                className="rounded-lg shadow-md"
              />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}