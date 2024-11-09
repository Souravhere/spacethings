'use client'

import Appdownload from '@/components/Appdownload'
import Slider from '@/components/Slider'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { 
  FiBarChart2, 
  FiTruck, 
  FiDollarSign, 
  FiPieChart,
  FiDatabase,
  FiUsers,
  FiTrendingUp,
  FiDownload
} from 'react-icons/fi'

export default function Component() {
  const features = [
    { icon: <FiBarChart2 className="w-6 h-6" />, title: "운영관리" },
    { icon: <FiTruck className="w-6 h-6" />, title: "배달관리" },
    { icon: <FiDollarSign className="w-6 h-6" />, title: "매출관리" },
    { icon: <FiPieChart className="w-6 h-6" />, title: "정산관리" },
  ]

  const benefits = [
    {
      icon: <FiDatabase className="w-8 h-8" />,
      title: "데이터 분석",
      description: "매장 운영에 필요한 주문, 매출, 배달 데이터를 따로 정리하지 않아도 자동으로 정리해줍니다."
    },
    {
      icon: <FiUsers className="w-8 h-8" />,
      title: "매장 관리",
      description: "고객들의 반응을 모아 요약해주고 개선점을 반영할 수 있게 매장 관리를 도와줍니다."
    },
    {
      icon: <FiTrendingUp className="w-8 h-8" />,
      title: "솔루션 제공",
      description: "더 나은 서비스를 제공하고 싶은 대표님들을 위해 데이터 분석을 통해 솔루션을 제공합니다."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-10">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              더 똑똑한 매장 경영!<br />
              <span className="text-blue-600 font-sans">DEJANGBU</span>
            </h1>
            <div className="flex justify-center gap-4 mb-12">
              <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors"
              >
                도입문의
              </motion.button>
              </Link>
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
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <Image
              src="/assets/appshow.png"
              width={1200}
              height={600}
              alt="Dejangbu App Mockups"
            />
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4"><span className='font-sans'>DEJANGBU</span> 주요 기능</h2>
            <p className="text-gray-600"><span className='font-sans'>DEJANGBU</span> 주요 기능 알아보기</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
                  {feature.icon}
                </div>
                <h3 className="font-semibold">{feature.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              매장 경영의 NEW 패러다임
            </h2>
            <p className="text-xl mb-8">
              주문, 예약, 결제, 웨이팅, 단골 관리를 모두 장부 하나로 해결!<br />
              IT 기술을 활용해 더욱 효율적이고 간편한 매장 운영을 지원합니다.
            </p>
            <p className="text-lg mb-8">
              복잡한 매장 운영은 쉽게, 비용은 절감해보세요.
            </p>
            <Link href="/introduction">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-white text-blue-600 rounded-full font-semibold hover:bg-blue-50 transition-colors"
            >
              도입하러 가기
            </motion.button>            
            </Link>
          </motion.div>
        </div>
      </section>
      <Slider/>
      <Appdownload/>
    </div>
  )
}