'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import { 
  FiBarChart2, 
  FiTruck, 
  FiDollarSign, 
  FiPieChart,
  FiArrowRight
} from 'react-icons/fi'

import 'swiper/css'
import 'swiper/css/pagination'
import Appdownload from '@/components/Appdownload'

export default function Component() {
  const features = [
    { icon: <FiBarChart2 className="w-8 h-8" />, title: "운영관리" },
    { icon: <FiTruck className="w-8 h-8" />, title: "배달관리" },
    { icon: <FiDollarSign className="w-8 h-8" />, title: "매출관리" },
    { icon: <FiPieChart className="w-8 h-8" />, title: "정산관리" },
  ]

  const testimonials = [
    {
      title: "매장운영에만 집중할 수 있어요!",
      content: "알아서 데이터를 정리해주고 응용할 수 있게 해줘서 매장운영에 시간을 더 쏟을 수 있어서 좋아요!"
    },
    {
      title: "급여관리가 편해졌어요",
      content: "직원들의 급여 관리와 정산이 자동으로 되어서 시간이 많이 절약됩니다."
    },
    {
      title: "효율적인 매장 관리",
      content: "한눈에 모든 데이터를 확인할 수 있어 매장 운영이 훨씬 수월해졌어요."
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-24 pb-32 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col lg:flex-row items-center gap-12"
          >
            <div className="lg:w-1/2">
              <h1 className="text-3xl md:text-4xl font-bold mb-8">
              효율적인 매장 운영을 위한 매장관리 <span className='text-blue-600 font-sans uppercase'>Platform </span> 
              통합정산 솔루션<br />
                <span className="text-blue-600 font-sans">대장부</span>
              </h1>
              <div className="flex gap-4">
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors"
                  >
                    도입문의
                  </motion.button>
                </Link>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="lg:w-1/2"
            >
              <Image
                src="/assets/appshow.png"
                width={600}
                height={400}
                alt="Dejangbu Multi-device Preview"
                className="w-full h-auto"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4"><span className='font-sans'>DEJANGBU</span> 주요 기능</h2>
            <p className="text-gray-600"><span className='font-sans'>DEJANGBU</span>의 주요 기능을 알아보세요</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all text-center"
              >
                <div className="w-20 h-20 mx-auto bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold">{feature.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto space-y-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row items-center gap-12"
          >
            <div className="md:w-1/2">
              <Image
                src="/assets/data.png"
                width={500}
                height={300}
                alt="Data Analysis"
                className="rounded-2xl shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-4">데이터 분석</h3>
              <p className="text-gray-600">매장 운영에 필요한 주문, 매출, 배달 데이터를 따로 정리하지 않아도 자동으로 정리해줍니다.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row-reverse items-center gap-12"
          >
            <div className="md:w-1/2">
              <Image
                src="/assets/store.png"
                width={500}
                height={300}
                alt="Store Management"
                className="rounded-2xl shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-4">매장 관리</h3>
              <p className="text-gray-600">고객들의 반응을 모아 요약해주고 개선점을 반영할 수 있게 매장 관리를 도와줍니다.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row items-center gap-12"
          >
            <div className="md:w-1/2">
              <Image
                src="/assets/solution.png"
                width={500}
                height={300}
                alt="Solution Provision"
                className="rounded-2xl shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-4">솔루션 제공</h3>
              <p className="text-gray-600">더 나은 서비스를 제공하고 싶은 대표님들을 위해 데이터 분석을 통해 솔루션을 제공합니다.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-4 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4"><span className='font-sans'>DEJANGBU</span> 도입 후기</h2>
            <p className="text-gray-600"><span className='font-sans'>DEJANGBU</span>를 쓰고 계신 대표님들의 후기</p>
          </motion.div>

          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="pb-12"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-2xl shadow-lg h-full"
                >
                  <h3 className="text-xl font-bold mb-4">{testimonial.title}</h3>
                  <p className="text-gray-600">{testimonial.content}</p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      <Appdownload/>
    </div>
  )
}