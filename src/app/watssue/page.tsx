'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { 
  FiClock, 
  FiBell, 
  FiFileText, 
  FiCheckSquare, 
  FiDollarSign, 
  FiCalendar,
} from 'react-icons/fi'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import Appdownload from '@/components/Appdownload'
import TestimonialsSection from '@/components/TestimonialsSection'

export default function Component() {
  const features = [
    { icon: <FiClock className="w-12 h-12" />, title: "근태관리", description: "근태&근무 시간 확인", bg:"bg-[#00a4e6]" },
    { icon: <FiBell className="w-12 h-12" />, title: "공지사항", description: "자동화된 회사 건물 공지사항 전달", bg:"bg-[#45caff]"  },
    { icon: <FiFileText className="w-12 h-12" />, title: "전자계약", description: "보관 및 관리가 용이한 전자계약", bg:"bg-[#00e6de]"  },
    { icon: <FiCheckSquare className="w-12 h-12" />, title: "체크리스트", description: "항복별 진행상황 체크 및 공유", bg:"bg-[#4c8ae6]"  },
    { icon: <FiDollarSign className="w-12 h-12" />, title: "급여정산", description: "자동화된 근태 및 급여 확인", bg:"bg-[#7eacf1]"  },
    { icon: <FiCalendar className="w-12 h-12" />, title: "스케줄 관리", description: "외부/연장 근무 등 스케줄 관리", bg:"bg-[#b0c3ff]"  }
  ]

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/4 hidden lg:block"
          >
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, -2, 0, 2, 0],
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
                alt="Watssue App Interface Left"
                className="w-full h-auto"
              />
            </motion.div>
          </motion.div>

          {/* Center Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              손 쉬운 방법의 근태, 급여 관리
              <br />
              <span className='font-sans text-blue-600'>ALL CARE</span> 솔루션
              <br />
              <span className="text-blue-600 font-sans py-4 ">WATSSUE</span>
            </h1>
            <div className="flex justify-center gap-4">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors text-lg"
                >
                  도입문의
                </motion.button>
              </Link>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/4  lg:block"
          >
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
                src="/assets/dataimage.png"
                width={300}
                height={600}
                alt="Watssue App Interface Right"
                className="w-full h-auto"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-1/2 -left-1/2 w-full h-full bg-blue-200 rounded-full opacity-10"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-purple-200 rounded-full opacity-10"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
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
            <h2 className="text-4xl font-bold mb-4 font-sans">ALL-CARE <span className='text-blue-600'>WATSSUE</span></h2>
            {/* <p className="text-xl text-gray-600">업무 환경 개선 어플</p> */}
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className={`${feature.bg} text-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all`}
              >
                <div className="w-16 h-16 bg-transparent rounded-xl flex items-center justify-center text-white mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
            {/* New Top Section */}
            <section className="py-12 px-4 bg-white h-fit">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="md:w-1/2"
            >
              <Image
                src="/assets/2.png"
                width={400}
                height={400}
                alt="Work Satisfaction"
                className="w-full"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="md:w-1/2"
            >
              <h2 className="text-2xl font-bold mb-6">모두가 만족하는 업무 자동화!</h2>
              <div className="space-y-3">
                <p className="flex items-center gap-2">
                  <span className="text-blue-500">✓</span>
                  직업 만족도 향상으로 인한 매출 증대 효과
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-blue-500">✓</span>
                  업무 및 조직에 대한 만족감 강화 효과
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-blue-500">✓</span>
                  조직 분위기 단합 효과
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-blue-500">✓</span>
                  현명한 근무 환경 조성 효과
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Solutions Section */}
<section className="py-20 px-4">
  <div className="max-w-6xl mx-auto space-y-24">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="text-center mb-16"
    >
      <h2 className="text-3xl font-bold mb-4"><span className='font-sans'>WATSSUE</span> 주요 기능</h2>
      <p className="text-xl text-gray-600"><span className='font-sans'>WATSSUE</span>의 주요 기능을 미리 체험해보세요</p>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col md:flex-row items-center gap-12"
    >
      <div className="md:w-1/2">
        <Image
          src="/assets/cal.png"
          width={500}
          height={300}
          alt="급여 정산"
          className="rounded-2xl shadow-lg"
        />
      </div>
      <div className="md:w-1/2 space-y-4">
        <h3 className="text-2xl font-bold">급여 정산</h3>
        <p className="text-gray-800 font-medium">모든 직장에서 가장 중요한 급여 관리를 더욱 똑똑하게!</p>
        <p className="text-gray-600">급여 명세서도 직접 발급할 수 있어 편리해요</p>
        <div className="flex gap-2 flex-wrap">
          {["#급여확인", "#입금내역", "#급여 명세서"].map(tag => (
            <span key={tag} className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">
              {tag}
            </span>
          ))}
        </div>
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
          src="/assets/time.png"
          width={500}
          height={300}
          alt="근태 관리"
          className="rounded-2xl shadow-lg"
        />
      </div>
      <div className="md:w-1/2 space-y-4">
        <h3 className="text-2xl font-bold">근태 관리</h3>
        <p className="text-gray-800 font-medium">자동화된 근태관리로 더욱 빠르고 철저하게!</p>
        <p className="text-gray-600">직원별 근무시간 / 근태확인이 쉬워 관리하기 쉬워요</p>
        <div className="flex gap-2 flex-wrap">
          {["#근태확인", "#야근확인", "#지각확인"].map(tag => (
            <span key={tag} className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">
              {tag}
            </span>
          ))}
        </div>
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
          src="/assets/worklife.png"
          width={500}
          height={300}
          alt="스케줄 관리"
          className="rounded-2xl shadow-lg"
        />
      </div>
      <div className="md:w-1/2 space-y-4">
        <h3 className="text-2xl font-bold">스케줄 관리</h3>
        <p className="text-gray-800 font-medium">외부 출장, 연장 근무, 휴가 등 알아보기 쉽게!</p>
        <p className="text-gray-600">팀별, 직원별 스케줄 확인이 용이해 헷갈리지 않아요</p>
        <div className="flex gap-2 flex-wrap">
          {["#출장확인", "#연장내역", "#휴가확인"].map(tag => (
            <span key={tag} className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  </div>
</section>
      {/* Testimonials Section */}
          {/* this is the Testimonial Section */}
      <div className='w-full bg-gradient-to-b from-blue-50 to-white py-10'>
      <h2 className="text-3xl md:text-4xl font-bold text-center">
            <span className="font-sans text-blue-600">WATSSUE</span> 도입 후기
          </h2>
          <p className="text-gray-600 text-lg text-center">
            를 먼저 사용해본 사람들의 리뷰를 모아모아!
          </p>
      <TestimonialsSection/>
      </div>
      <Appdownload/>
    </div>
  )
}