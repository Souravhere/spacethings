"use client"

import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { PieChart, Store, Bike, Calendar, Clock, ArrowRight, Wallet } from 'lucide-react'

export default function AnalyticsDashboard() {
  const [leftRef, leftInView] = useInView({ threshold: 0.2, triggerOnce: true })
  const [centerRef, centerInView] = useInView({ threshold: 0.2, triggerOnce: true })
  const [rightRef, rightInView] = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <section className="relative min-h-screen bg-blue-400 py-20 px-4 md:px-8">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Content Container */}
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2">
            효율적인 매장 운영을 위한 매장관리 Platform
          </h2>
          <p className="text-blue-200 text-lg">통합정산 솔루션</p>
          <p className="text-white text-2xl mt-2 font-bold">&#39;대장부&#39;</p>
        </motion.div>

        {/* Dashboard Cards Container */}
        <div className="relative flex flex-col lg:flex-row items-stretch justify-center gap-8 mt-8">
          {/* Left Panel - Sales Report */}
          <motion.div
            ref={leftRef}
            initial={{ opacity: 0, x: -50 }}
            animate={leftInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-1/3 bg-white rounded-2xl shadow-xl p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex gap-4">
                <button className="px-4 py-2 bg-blue-600 text-white rounded-full">매출</button>
                <button className="px-4 py-2 text-gray-500">정산</button>
              </div>
              <Calendar className="w-6 h-6 text-gray-400" />
            </div>

            <div className="mb-6">
              <p className="text-sm text-gray-500">4월 총 매출</p>
              <p className="text-2xl font-bold text-gray-900">60,700,000원</p>
            </div>

            <div className="space-y-4 mb-8">
              {[
                { label: '카드', amount: '40,000,000', width: 'w-3/4' },
                { label: '현금', amount: '20,000,000', width: 'w-2/4' },
                { label: '기타', amount: '500,000', width: 'w-1/4' },
              ].map((item) => (
                <div key={item.label} className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">{item.label}</span>
                    <span className="text-gray-900 font-medium">{item.amount}</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full">
                    <div className={`h-full bg-blue-600 rounded-full ${item.width}`} />
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t pt-6">
              <div className="grid grid-cols-7 gap-2 text-center text-sm">
                {['일', '월', '화', '수', '목', '금', '토'].map((day) => (
                  <div key={day} className="text-gray-400">{day}</div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-2 mt-2">
                {Array.from({ length: 31 }, (_, i) => (
                  <div
                    key={i}
                    className="aspect-square flex flex-col items-center justify-center text-sm border rounded-lg"
                  >
                    <span className="text-gray-600">{i + 1}</span>
                    <span className="text-xs text-blue-600">2.5M</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Center Panel - Today's Stats */}
          <motion.div
            ref={centerRef}
            initial={{ opacity: 0, y: 50 }}
            animate={centerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-full lg:w-1/3 bg-blue-600 rounded-2xl shadow-xl p-6"
          >
            <div className="space-y-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-blue-100">오늘 총매출은</p>
                  <p className="text-3xl font-bold text-white mt-1">3,506,700</p>
                  <p className="text-sm text-blue-200 mt-1">24.08.02 12:00 기준</p>
                </div>
                <Store className="w-12 h-12 text-white" />
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-blue-700/50 rounded-xl">
                  <div className="flex items-center gap-3">
                    <Store className="w-5 h-5 text-blue-200" />
                    <div>
                      <p className="text-blue-100">오늘 매장</p>
                      <p className="text-lg font-semibold text-white">30건</p>
                    </div>
                  </div>
                  <p className="text-xl font-bold text-white">873,520</p>
                </div>

                <div className="flex items-center justify-between p-4 bg-blue-700/50 rounded-xl">
                  <div className="flex items-center gap-3">
                    <Bike className="w-5 h-5 text-blue-200" />
                    <div>
                      <p className="text-blue-100">오늘 배달팁</p>
                      <p className="text-lg font-semibold text-white">21건</p>
                    </div>
                  </div>
                  <p className="text-xl font-bold text-white">361,200</p>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-white">
                  <p>이제 매출 8월 1일</p>
                  <p>1,000,000</p>
                </div>
                <div className="flex justify-between text-white">
                  <p>이번달 누적 매출</p>
                  <p>30,000,000</p>
                </div>
              </div>

              <div className="pt-4 border-t border-blue-500">
                <button className="flex items-center justify-between w-full text-white group">
                  <span>임금 지세히 확인하세요</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              <div className="flex items-center gap-3 p-4 bg-blue-700/50 rounded-xl">
                <Wallet className="w-6 h-6 text-yellow-300" />
                <div>
                  <p className="text-blue-100">오늘입금 예정</p>
                  <p className="text-xl font-bold text-white">2,520,000원</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Panel - Analytics */}
          <motion.div
            ref={rightRef}
            initial={{ opacity: 0, x: 50 }}
            animate={rightInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="w-full lg:w-1/3 bg-white rounded-2xl shadow-xl p-6"
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-800">판매유형 비교 점유율</h3>
                <PieChart className="w-6 h-6 text-gray-400" />
              </div>

              <div className="aspect-square relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-3/4 h-3/4 rounded-full border-8 border-blue-200 border-t-blue-600 border-r-green-400" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-sm text-gray-500">총 주문</p>
                    <p className="text-2xl font-bold text-gray-900">51건</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-4">배달앱별 비교 점유율</h4>
                  <div className="space-y-2">
                    {[
                      { label: '배달의민족', amount: '46.00%', color: 'bg-blue-400' },
                      { label: '요기요', amount: '40.00%', color: 'bg-red-400' },
                      { label: '쿠팡이츠', amount: '14.00%', color: 'bg-yellow-400' },
                    ].map((item) => (
                      <div key={item.label} className="flex items-center gap-2">
                        <div className={`w-3 h-3 rounded-full ${item.color}`} />
                        <span className="text-sm text-gray-600">{item.label}</span>
                        <span className="text-sm font-medium text-gray-900 ml-auto">{item.amount}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-4">매출관련 시간대 전일 vs 당일 비교</h4>
                  <div className="relative h-40">
                    <div className="absolute bottom-0 left-0 right-0 flex items-end justify-around h-32">
                      {[40, 60, 80, 100].map((height, i) => (
                        <div key={i} className="w-6 bg-blue-600 rounded-t" style={{ height: `${height}%` }} />
                      ))}
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 flex justify-around pt-2 border-t">
                      {['이침', '점심', '오후', '심야'].map((time) => (
                        <span key={time} className="text-sm text-gray-500">{time}</span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-gray-400" />
                    <span className="text-sm text-gray-600">시간대 기준</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mt-2 text-sm text-gray-600">
                    <p>아침 (09:00 ~ 11:00)</p>
                    <p>점심 (11:00 ~ 15:00)</p>
                    <p>저녁 (17:00 ~ 22:00)</p>
                    <p>심야 (22:00 ~ 02:00)</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}