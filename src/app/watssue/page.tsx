'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { 
  FiClock, 
  FiBell, 
  FiFileText, 
  FiCheckSquare, 
  FiDollarSign, 
  FiCalendar,
  FiDownload,
  FiCheck,
  FiArrowRight
} from 'react-icons/fi'

export default function Component() {
  const features = [
    { icon: <FiClock className="w-6 h-6" />, title: "근태관리", description: "근태&근무 시간 확인" },
    { icon: <FiBell className="w-6 h-6" />, title: "공지사항", description: "자동화된 회사 건물 공지사항 전달" },
    { icon: <FiFileText className="w-6 h-6" />, title: "전자계약", description: "보관 및 관리가 용이한 전자계약" },
    { icon: <FiCheckSquare className="w-6 h-6" />, title: "체크리스트", description: "항복별 진행상황 체크 및 공유" },
    { icon: <FiDollarSign className="w-6 h-6" />, title: "급여정산", description: "자동화된 근태 및 급여 확인" },
    { icon: <FiCalendar className="w-6 h-6" />, title: "스케줄 관리", description: "외부/연장 근무 등 스케줄 관리" }
  ]

  const benefits = [
    "직업 만족도 향상으로 인한 매출 증대 효과",
    "업무 및 조직에 대한 만족감 강화 효과",
    "조직 분위기 단합 효과",
    "현명한 근무 환경 조성 효과"
  ]

  const mainFeatures = [
    {
      title: "급여 정산",
      description: "모든 직장에서 가장 중요한 급여 관리를 더욱 똑똑하게!\n급여 명세서도 직접 발급할 수 있어 편리해요",
      tags: ["급여확인", "입금내역", "급여 명세서"],
      icon: <FiDollarSign className="w-8 h-8" />
    },
    {
      title: "근태 관리",
      description: "자동화된 근태관리로 더욱 빠르고 철저하게!\n직원별 근무시간 / 근태확인이 쉬워 관리하기 쉬워요",
      tags: ["근태확인", "야근확인", "지각확인"],
      icon: <FiClock className="w-8 h-8" />
    },
    {
      title: "스케줄 관리",
      description: "외부 출장, 연장 근무, 휴가 등 알아보기 쉽게!\n팀별, 직원별 스케줄 확인이 용이해 헷갈리지 않아요",
      tags: ["출장확인", "연장내역", "휴가확인"],
      icon: <FiCalendar className="w-8 h-8" />
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-10">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                업무를 쉽고 편하게<br />
                <span className="text-blue-600 font-sans">WATSSUE</span>
              </h1>
              <div className="flex gap-4 mb-8">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors"
                >
                  도입문의
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-white text-blue-600 rounded-full font-semibold border-2 border-blue-600 hover:bg-blue-50 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <FiDownload /> 다운로드
                  </span>
                </motion.button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 relative"
            >
              <div className="relative w-[300px] md:w-[400px] mx-auto">
                <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-500 rounded-full opacity-20 blur-3xl" />
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Image
                    src="/assets/careimage.jpg"
                    width={300}
                    height={600}
                    alt="Watssue App Interface"
                    className="rounded-3xl shadow-2xl"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 font-sans">ALL IN ONE</h2>
            <p className="text-xl text-gray-600">업무 환경 개선 어플</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-4">
                  {feature.icon}
                </div>
                <h3 className="font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">모두가 만족하는 업무 자동화!</h2>
            <p className="text-xl text-gray-600"><span className='font-sans'>WATSSUE</span> 도입시 얻을 수 있는 기대 효과</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-lg"
              >
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 flex-shrink-0">
                  <FiCheck className="w-5 h-5" />
                </div>
                <p className="text-gray-700">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4"><span className='font-sans'>WATSSUE</span> 주요 기능</h2>
            <p className="text-xl text-gray-600">WATSSUE의 주요 기능을 미리 체험해보세요</p>
          </motion.div>

          <div className="space-y-8">
            {mainFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="group p-8 bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-all"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                      {feature.title}
                      <FiArrowRight className="w-5 h-5 text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>
                    <p className="text-gray-600 whitespace-pre-line mb-4">{feature.description}</p>
                    <div className="flex gap-2 flex-wrap">
                      {feature.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}