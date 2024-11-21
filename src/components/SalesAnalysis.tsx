'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Sun } from 'lucide-react'

const cards = [
  { id: 1, title: '900만원', subtitle: '일평균매출', description: '3개월 일평균' },
  { id: 2, title: '17~18시', subtitle: '바쁜시간대', description: '지난달 분석' },
  { id: 3, title: '토요일', subtitle: '매출이 많은 요일', description: '지난달 분석' },
  { id: 4, title: '80%', subtitle: '배달 매출 비율', description: '지난달 분석' },
  { id: 5, title: '쿠팡이츠 52%', subtitle: '인기 배달앱', description: '지난달 분석' },
  { id: 6, title: '', subtitle: '오늘날씨', description: '', icon: <Sun className="w-10 h-10 text-blue-600" /> }
]

export default function SalesAnalysis() {
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
    <section className="min-h-screen bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 sm:gap-8 gap-2"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {cards.map((card) => (
            <motion.div
              key={card.id}
              className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 relative"
              variants={itemVariants}
            >
              <div className="absolute top-0 left-0 bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
                {card.id}
              </div>
              <div className="flex items-center justify-center mb-4">
                {card.icon || <span className="text-3xl font-bold text-blue-600">{card.title}</span>}
              </div>
              <h2 className="text-xl font-semibold text-blue-600 mb-2 text-center">{card.subtitle}</h2>
              <p className="text-gray-500 text-center">{card.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}