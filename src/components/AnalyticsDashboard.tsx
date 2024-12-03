"use client"

import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { PieChart, Store, Bike, Calendar, Clock, ArrowRight, Wallet } from 'lucide-react'

export default function AnalyticsDashboard() {
  const [leftRef, leftInView] = useInView({ threshold: 0.2, triggerOnce: true })
  const [centerRef, centerInView] = useInView({ threshold: 0.2, triggerOnce: true })
  const [rightRef, rightInView] = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <section className="relative min-h-screen bg-blue-400 py-20 px-4 md:px-8 overflow-x-hidden">
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
            효율적인 매장 운영을 위한 매장관리 <span className='uppercase font-sans'>Platform</span>
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
            
          </motion.div>

          {/* Center Panel - Today's Stats */}
          <motion.div
            ref={centerRef}
            initial={{ opacity: 0, y: 50 }}
            animate={centerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-full lg:w-1/3 bg-blue-600 rounded-2xl shadow-xl p-6"
          >

          </motion.div>

          {/* Right Panel - Analytics */}
          <motion.div
            ref={rightRef}
            initial={{ opacity: 0, x: 50 }}
            animate={rightInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="w-full lg:w-1/3 bg-white rounded-2xl shadow-xl p-6"
          >

          </motion.div>
        </div>
      </div>
    </section>
  )
}