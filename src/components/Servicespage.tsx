"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { FaChartBar, FaClipboardList, FaMobileAlt, FaUsers, FaArrowRight } from "react-icons/fa";
import Image from "next/image";

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

const cardHoverVariants = {
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.3,
    },
  },
};

interface ServiceCardProps {
  title: string;
  description: string;
  link: string;
  icon: JSX.Element;
  imageSrc: string;
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
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 py-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        ref={ref}
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <motion.div 
          className="text-center mb-16"
          variants={itemVariants}
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-4 font-sans">
          SPACE THINGS
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            혁신적인 솔루션으로 당신의 비즈니스를 한 단계 발전시키세요
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <ServiceCard
            title="WATSSUE"
            description="작업 흐름을 간소화하고 우리의 혁신적인 작업 관리 솔루션으로 생산성을 높이세요. 실시간 협업, 작업 추적, 자동화된 워크플로우를 통해 팀의 효율성을 극대화하세요."
            link="/watssue"
            icon={<FaClipboardList className="text-blue-500 text-4xl mb-4" />}
            imageSrc="/assets/worklife.png"
          />
          <ServiceCard
            title="DEJANGBU"
            description="최첨단 회계 및 예산 관리 도구로 재무 관리를 혁신하세요. 실시간 재무 추적, 예산 계획, 지출 분석을 통해 재무 의사 결정을 최적화하세요."
            link="/dejangbu"
            icon={<FaChartBar className="text-green-500 text-4xl mb-4" />}
            imageSrc="/assets/cal.png"
          />
        </div>

        <motion.h2
          className="text-3xl font-semibold text-center text-gray-800 mb-12"
          variants={itemVariants}
        >
          왜 우리 서비스를 선택해야 할까요?
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
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

function ServiceCard({ title, description, link, icon, imageSrc }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="bg-white rounded-xl shadow-xl overflow-hidden transform transition-all duration-300"
      variants={itemVariants}
      whileHover={cardHoverVariants.hover}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="relative">
        <Image
          src={imageSrc}
          alt={title}
          className="w-full h-48 object-cover"
          width={100}
          height={100}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
      <div className="p-8">
        <div className="flex items-center justify-center mb-4">{icon}</div>
        <h3 className="text-2xl font-bold text-gray-900 text-center mb-4 font-sans">{title}</h3>
        <p className="text-gray-600 text-center mb-6">{description}</p>
        <Link
          href={link}
          className="group flex items-center justify-center w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
        >
          <span className="mr-2 font-sans">{title} 더 알아보기</span>
          <FaArrowRight className={`transform transition-transform duration-300 ${isHovered ? 'translate-x-2' : ''}`} />
        </Link>
      </div>
    </motion.div>
  );
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300"
      variants={itemVariants}
      whileHover={{ y: -5 }}
    >
      <div className="flex justify-center mb-6">
        <div className="p-4 bg-blue-50 rounded-full">{icon}</div>
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
}
