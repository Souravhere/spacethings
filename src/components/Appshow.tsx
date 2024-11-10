"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaCheckCircle, FaClock, FaCalendarAlt, FaMoneyBillWave, FaBuilding } from "react-icons/fa";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const mainFeatures = [
  {
    icon: <FaMoneyBillWave className="text-2xl" />,
    title: "급여 정산",
    description: "모든 직장에서 가장 중요한 급여 관리를 더욱 똑똑하게!",
    detail: "급여 명세서도 직접 발급할 수 있어 편리해요",
  },
  {
    icon: <FaClock className="text-2xl" />,
    title: "근태 관리",
    description: "자동화된 근태관리로 더욱 빠르고 철저하게!",
    detail: "직원별 근무시간 / 근태확인이 쉬워 관리하기 쉬워요",
  },
  {
    icon: <FaCalendarAlt className="text-2xl" />,
    title: "스케줄 관리",
    description: "외부 출장, 연장 근무, 휴가 등 알아보기 쉽게!",
    detail: "팀별, 직원별 스케줄 확인이 용이해 헷갈리지 않아요",
  },
];

export default function Appshowcomp() {
  return (
    <section className="relative w-full min-h-screen bg-white overflow-hidden px-4 py-16 md:py-24">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 space-y-4"
        >
          <h1 className="text-2xl md:text-4xl font-bold">
            <span className="text-blue-500 font-sans">ALL IN ONE</span> 업무 환경 개선 어플
          </h1>
          <p className="text-sm md:text-base text-gray-600 max-w-3xl mx-auto">
            모두가 만족하는 업무 자동화!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full h-[600px] lg:h-[700px]"
          >
            <Image
              src="/assets/1.png"
              alt="WATSSUE Interface"
              fill
              className="object-contain"
              priority
            />
          </motion.div>

          {/* Right side - Features */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            
            {/* Main Features */}
            {mainFeatures.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 space-y-4"
              >
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-blue-50 rounded-lg text-blue-600">
                    {feature.icon}
                  </div>
                  <h3 className="font-bold text-xl">{feature.title}</h3>
                </div>
                
                <p className="text-gray-700">{feature.description}</p>
                <p className="text-gray-600">{feature.detail}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}