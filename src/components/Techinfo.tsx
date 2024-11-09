'use client'

import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  FaWifi, 
  FaMapMarkerAlt, 
  FaGlobeAsia,
  FaSignInAlt,
  FaSync,
  FaFileExport,
  FaSatelliteDish,
  FaBroadcastTower
} from 'react-icons/fa'
import { IoMdRadio } from 'react-icons/io'

export default function Techinfo() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: false, amount: 0.2 })
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8])

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  }

  return (
    <motion.div
      ref={containerRef}
      style={{ opacity, scale }}
      className="min-h-screen w-full font-sans bg-gradient-to-b from-blue-100 to-blue-200 py-20 px-4"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">BEACON TECH</h2>
          <p className="text-blue-500 text-lg">공간정보 분석 기반의 데이터 지장 솔루션</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Hybrid Beacon Card */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative bg-white rounded-3xl p-8 overflow-hidden group shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            {/* Animated SVG Background */}
            <div className="absolute inset-0 opacity-5">
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
                className="w-full h-full"
              >
                <IoMdRadio className="w-full h-full text-blue-500" />
              </motion.div>
            </div>

            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-blue-600 mb-6">Hybrid Beacon</h3>
              <div className="space-y-4 text-sm text-gray-600 mb-8">
                <p>- Bluetooth 4.2 + SOUND (통합) : 확산되는 Bluetooth와 SOUND 솔루션</p>
                <p>- SOUND Beacon : Bluetooth 신호도 커버 되지 기능</p>
              </div>
              <ul className="space-y-4">
                <motion.li 
                  className="flex items-center gap-3 text-blue-600"
                  whileHover={{ x: 5, color: "#2563EB" }}
                >
                  <FaMapMarkerAlt className="w-5 h-5" />
                  <span>LBS 실외 측위 기술</span>
                </motion.li>
                <motion.li 
                  className="flex items-center gap-3 text-blue-600"
                  whileHover={{ x: 5, color: "#2563EB" }}
                >
                  <FaSatelliteDish className="w-5 h-5" />
                  <span>GPS 기능</span>
                </motion.li>
                <motion.li 
                  className="flex items-center gap-3 text-blue-600"
                  whileHover={{ x: 5, color: "#2563EB" }}
                >
                  <FaGlobeAsia className="w-5 h-5" />
                  <span>Geo Fence</span>
                </motion.li>
              </ul>
            </div>
          </motion.div>

          {/* BLE Only Card */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative bg-white rounded-3xl p-8 overflow-hidden group shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            {/* Animated SVG Background */}
            <div className="absolute inset-0 opacity-5">
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, -360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="w-full h-full"
              >
                <FaBroadcastTower className="w-full h-full text-blue-500" />
              </motion.div>
            </div>

            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-blue-600 mb-6">BLE Only</h3>
              <div className="space-y-4 text-sm text-gray-600 mb-8">
                <p>- Bluetooth 앱 사용과 Beacon 사용 통합</p>
                <p>- 알림형 위치 정보 : 관심 지점을 [매장 근접 여부 확인 통지]</p>
                <p>- Spam 알림 유형 : 좌표 구분 이력을 통계</p>
              </div>
              <ul className="space-y-4">
                <motion.li 
                  className="flex items-center gap-3 text-blue-600"
                  whileHover={{ x: 5, color: "#2563EB" }}
                >
                  <FaMapMarkerAlt className="w-5 h-5" />
                  <span>LBS 실내 측위 기술</span>
                </motion.li>
                <motion.li 
                  className="flex items-center gap-3 text-blue-600"
                  whileHover={{ x: 5, color: "#2563EB" }}
                >
                  <IoMdRadio className="w-5 h-5" />
                  <span>Ultra Sound</span>
                </motion.li>
                <motion.li 
                  className="flex items-center gap-3 text-blue-600"
                  whileHover={{ x: 5, color: "#2563EB" }}
                >
                  <FaBroadcastTower className="w-5 h-5" />
                  <span>BLE Beacon</span>
                </motion.li>
                <motion.li 
                  className="flex items-center gap-3 text-blue-600"
                  whileHover={{ x: 5, color: "#2563EB" }}
                >
                  <FaWifi className="w-5 h-5" />
                  <span>Wi-Fi</span>
                </motion.li>
              </ul>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mt-16 text-blue-600"
        >
          <p className="mb-8">공간 정보 분석이 가능하여 회원 정보, 주문 정보 등과 연계한 다양한 CRM 데이터 측적 가능</p>
          <div className="flex justify-center sm:gap-28 gap-16">
            {['진입', '체류', '이탈'].map((text, index) => (
              <motion.div
                key={text}
                whileHover={{ scale: 1.1 }}
                className="flex flex-col items-center gap-2"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center shadow-lg"
                >
                  {index === 0 && <FaSignInAlt className="w-8 h-8 text-white" />}
                  {index === 1 && <FaSync className="w-8 h-8 text-white" />}
                  {index === 2 && <FaFileExport className="w-8 h-8 text-white" />}
                </motion.div>
                <span className="font-medium">{text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}