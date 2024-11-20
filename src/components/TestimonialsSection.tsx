'use client'

import { motion, useAnimation } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay, EffectCoverflow } from 'swiper/modules'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'

const testimonials = [
  {
    title: "매장운영에만 집중할 수 있어요!",
    content: "일반서 데이터를 점검해주고 효율화 수 있게 해줘서 매장운영에 시간을 더 쓸 수 있어서 좋아요!",
    image: "/placeholder.svg?height=80&width=80",
    author: "카페 대표님"
  },
  {
    title: "데이터 관리가 편해졌어요",
    content: "매출, 재고, 직원 관리까지 한 번에 볼 수 있어서 매장 운영이 한결 수월해졌습니다.",
    image: "/placeholder.svg?height=80&width=80",
    author: "레스토랑 대표님"
  },
  {
    title: "효율적인 매장 관리",
    content: "실시간으로 매장 상황을 파악할 수 있어서 신속한 의사결정이 가능해졌어요.",
    image: "/placeholder.svg?height=80&width=80",
    author: "베이커리 대표님"
  },
  {
    title: "직원 관리가 쉬워졌어요",
    content: "근태관리부터 급여계산까지 자동화되어서 인력 관리가 한결 수월해졌습니다.",
    image: "/placeholder.svg?height=80&width=80",
    author: "프랜차이즈 점장님"
  }
]

export default function TestimonialsSection() {
  const [swiper, setSwiper] = useState<any>(null)
  const controls = useAnimation()

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 })
  }, [controls])

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5" />
      
      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="font-sans text-blue-600">DEJANGBU</span> 도입 후기
          </h2>
          <p className="text-gray-600 text-lg">
            <span className="font-sans">DEJANGBU</span>를 쓰고 계신 대표님들의 후기
          </p>
        </motion.div>

        <div className="relative">
          <Swiper
            modules={[Pagination, Autoplay, EffectCoverflow]}
            spaceBetween={30}
            slidesPerView={1}
            effect="coverflow"
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            pagination={{
              clickable: true,
              bulletActiveClass: 'swiper-pagination-bullet-active !bg-blue-600',
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            onSwiper={setSwiper}
            className="pb-16"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-2xl shadow-lg h-full flex flex-col"
                >
                  <div className="mb-6 flex items-center justify-center">
                    <div className="relative w-20 h-20 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.author}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-center">
                    {testimonial.title}
                  </h3>
                  <p className="text-gray-600 text-center flex-grow">
                    {testimonial.content}
                  </p>
                  <p className="text-blue-600 font-medium text-center mt-4">
                    {testimonial.author}
                  </p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            onClick={() => swiper?.slidePrev()}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors hidden md:block"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
            <span className="sr-only">Previous slide</span>
          </button>

          <button
            onClick={() => swiper?.slideNext()}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors hidden md:block"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
            <span className="sr-only">Next slide</span>
          </button>
        </div>
      </div>
    </section>
  )
}