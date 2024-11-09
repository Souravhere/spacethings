"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { FaChartBar, FaClipboardList, FaMobileAlt, FaUsers } from "react-icons/fa";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

// Define types for service and feature card props
interface ServiceCardProps {
  title: string;
  description: string;
  link: string;
  icon: JSX.Element;
}

interface FeatureCardProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

export default function ServicesPage() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        ref={ref}
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <motion.h1
          className="text-4xl font-bold text-center text-gray-900 mb-12"
          variants={itemVariants}
        >
          우리의 <span className="text-blue-600">서비스</span>
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ServiceCard
            title="WATSSUE"
            description="작업 흐름을 간소화하고 우리의 혁신적인 작업 관리 솔루션으로 생산성을 높이세요."
            link="/watssue"
            icon={<FaClipboardList className="text-blue-500 text-4xl mb-4" />}
          />
          <ServiceCard
            title="DEJANGBU"
            description="최첨단 회계 및 예산 관리 도구로 재무 관리를 혁신하세요."
            link="/dejangbu"
            icon={<FaChartBar className="text-green-500 text-4xl mb-4" />}
          />
        </div>

        <motion.h2
          className="text-3xl font-semibold text-center text-gray-800 mt-16 mb-8"
          variants={itemVariants}
        >
          왜 우리 서비스를 선택해야 할까요?
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
        >
          <FeatureCard
            icon={<FaMobileAlt className="text-purple-500 text-3xl" />}
            title="모바일 우선"
            description="어디서나 언제든지 데이터 및 도구에 액세스하세요."
          />
          <FeatureCard
            icon={<FaUsers className="text-indigo-500 text-3xl" />}
            title="협업 지원"
            description="실시간으로 팀과 원활하게 작업하세요."
          />
          <FeatureCard
            icon={<FaChartBar className="text-red-500 text-3xl" />}
            title="데이터 기반"
            description="강력한 분석을 통해 정보에 입각한 결정을 내리세요."
          />
          <FeatureCard
            icon={<FaClipboardList className="text-yellow-500 text-3xl" />}
            title="맞춤형"
            description="귀사의 고유한 요구에 맞게 도구를 조정하세요."
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

function ServiceCard({ title, description, link, icon }: ServiceCardProps) {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg overflow-hidden"
      variants={itemVariants}
    >
      <div className="p-6">
        <div className="flex items-center justify-center">{icon}</div>
        <h3 className="text-2xl font-semibold text-gray-900 text-center mb-2 font-sans">{title}</h3>
        <p className="text-gray-600 text-center mb-4">{description}</p>
        <Link
          href={link}
          className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 font-sans"
        >
          {title} 더 알아보기
        </Link>
      </div>
    </motion.div>
  );
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <motion.div
      className="bg-white rounded-lg shadow p-6 text-center"
      variants={itemVariants}
    >
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
}
