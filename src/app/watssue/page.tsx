'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import { 
  FiClock, 
  FiBell, 
  FiFileText, 
  FiCheckSquare, 
  FiDollarSign, 
  FiCalendar,
  FiDownload,
} from 'react-icons/fi'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import Appdownload from '@/components/Appdownload'

export default function Component() {
  const features = [
    { icon: <FiClock className="w-8 h-8" />, title: "근태관리", description: "근태&근무 시간 확인" },
    { icon: <FiBell className="w-8 h-8" />, title: "공지사항", description: "자동화된 회사 건물 공지사항 전달" },
    { icon: <FiFileText className="w-8 h-8" />, title: "전자계약", description: "보관 및 관리가 용이한 전자계약" },
    { icon: <FiCheckSquare className="w-8 h-8" />, title: "체크리스트", description: "항복별 진행상황 체크 및 공유" },
    { icon: <FiDollarSign className="w-8 h-8" />, title: "급여정산", description: "자동화된 근태 및 급여 확인" },
    { icon: <FiCalendar className="w-8 h-8" />, title: "스케줄 관리", description: "외부/연장 근무 등 스케줄 관리" }
  ]

  const testimonials = [
    {
      title: "급여관리가 너무 편해요!",
      content: "WATSSUE를 사용하고 나서는 월급이 적게 들어온 건 아닌지 걱정하지 않아도 된다는게 제일 좋아요! 급여 명세서도 빠르게 받아볼 수 있어서 답답하지 않아요."
    },
    {
      title: "근태관리가 쉬워졌어요",
      content: "직원들의 근태를 한눈에 확인할 수 있어서 관리가 훨씬 수월해졌어요. 자동화된 시스템 덕분에 실수도 줄었답니다."
    },
    {
      title: "업무 효율이 높아졌어요",
      content: "스케줄 관리부터 급여정산까지 한 번에 처리할 수 있어서 업무 시간이 많이 단축되었어요. 정말 추천합니다!"
    }
  ]

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative pt-24 pb-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 text-center lg:text-left"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                업무를 쉽고 편하게<br />
                <span className="text-blue-600 font-sans">WATSSUE</span>
              </h1>
              <div className="flex justify-center lg:justify-start gap-4">
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
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 relative"
            >
              <div className="relative">
                <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-blue-600 rounded-full opacity-20 blur-3xl" />
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 2, 0, -2, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Image
                    src="/assets/careimage.png"
                    width={300}
                    height={600}
                    alt="Watssue App Interface"
                    className="relative z-10 mx-auto"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid Section */}
      <section className="py-20 px-4">
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
                whileHover={{ scale: 1.02 }}
                className="p-8 bg-gradient-to-br from-[#E3F2FD] to-white rounded-2xl shadow-lg hover:shadow-xl transition-all"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Features Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4"><span className='font-sans'>WATSSUE</span> 주요 기능</h2>
            <p className="text-xl text-gray-600"><span className='font-sans'>WATSSUE</span>의 주요 기능을 미리 체험해보세요</p>
          </motion.div>

          <div className="space-y-12">
            {[
              { image: "/assets/cal.png", title: "급여 정산", description: "모든 직장에서 가장 중요한 급여 관리를 더욱 똑똑하게!", tags: ["#급여확인", "#급여내역", "#급여 명세서"] },
              { image: "/assets/time.png", title: "근태 관리", description: "자동화된 근태관리로 더욱 빠르고 철저하게!", tags: ["#근태확인", "#야근확인", "#지각확인"] },
              { image: "/assets/worklife.png", title: "스케줄 관리", description: "외부 출장, 연장 근무, 휴가 등 알아보기 쉽게!", tags: ["#출장확인", "#연장내역", "#휴가확인"] }
            ].map((feature) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col md:flex-row gap-8 items-center"
              >
                <div className="md:w-1/2">
                  <Image
                    src={feature.image}
                    width={600}
                    height={400}
                    alt={feature.title}
                    className="rounded-2xl shadow-lg"
                  />
                </div>
                <div className="md:w-1/2 space-y-4">
                  <h3 className="text-2xl font-bold">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                  <div className="flex gap-2 flex-wrap">
                    {feature.tags.map(tag => (
                      <span key={tag} className="px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4"><span className='font-sans'>WATSSUE</span> 도입 후기</h2>
            <p className="text-xl text-gray-600"><span className='font-sans'>WATSSUE</span>를 먼저 사용해본 사람들의 리뷰를 모아모아!</p>
          </motion.div>

          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            loop
            className="pb-12"
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
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