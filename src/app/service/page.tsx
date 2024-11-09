"use client";

import { motion } from "framer-motion";
import { FaUserShield, FaTools, FaChartLine, FaRobot } from "react-icons/fa";
import { MdSecurity, MdSpeed, MdMobileFriendly, MdUpdate } from "react-icons/md";

type ServiceInfo = {
  icon: JSX.Element;
  title: string;
  description: string;
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 },
  },
};

const serviceData: ServiceInfo[] = [
  {
    icon: <MdSecurity className="text-blue-600 text-4xl mb-4" />,
    title: "데이터 보안",
    description: "최신 <span class='text-blue-600'>보안</span> 기술로 데이터를 안전하게 보호하고 관리합니다.",
  },
  {
    icon: <FaTools className="text-blue-600 text-4xl mb-4" />,
    title: "커스터마이징 옵션",
    description: "각 비즈니스에 맞춘 <span class='text-blue-600'>커스터마이징</span> 서비스를 제공합니다.",
  },
  {
    icon: <MdSpeed className="text-blue-600 text-4xl mb-4" />,
    title: "빠른 성능",
    description: "최적화된 <span class='text-blue-600'>성능</span>으로 원활한 사용자 경험을 제공합니다.",
  },
  {
    icon: <FaRobot className="text-blue-600 text-4xl mb-4" />,
    title: "자동화",
    description: "<span class='text-blue-600'>자동화</span> 시스템으로 업무 효율을 높이고 리소스를 절감합니다.",
  },
  {
    icon: <MdMobileFriendly className="text-blue-600 text-4xl mb-4" />,
    title: "모바일 호환성",
    description: "모든 기기에서 사용할 수 있도록 <span class='text-blue-600'>모바일</span> 친화적인 인터페이스를 제공합니다.",
  },
  {
    icon: <FaChartLine className="text-blue-600 text-4xl mb-4" />,
    title: "데이터 분석",
    description: "<span class='text-blue-600'>데이터 분석</span>을 통해 비즈니스 인사이트를 제공합니다.",
  },
  {
    icon: <MdUpdate className="text-blue-600 text-4xl mb-4" />,
    title: "자동 업데이트",
    description: "최신 버전으로 자동 <span class='text-blue-600'>업데이트</span>를 지원합니다.",
  },
  {
    icon: <FaUserShield className="text-blue-600 text-4xl mb-4" />,
    title: "사용자 보호",
    description: "<span class='text-blue-600'>사용자 보호</span> 기능을 강화하여 안전한 서비스를 보장합니다.",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white py-16 px-4 mt-10 sm:px-6 lg:px-8">
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.h1
          className="text-4xl font-bold text-center text-gray-800 mb-10"
          variants={itemVariants}
        >
          우리의 <span className="text-blue-600">서비스</span>를 만나보세요
        </motion.h1>

        <motion.p
          className="text-lg text-center text-gray-600 mb-16"
          variants={itemVariants}
        >
          Space Things는 혁신적인 <span className="text-blue-600">솔루션</span>과 고품질 <span className="text-blue-600">서비스</span>를 통해 비즈니스 성장을 지원합니다.
          고객의 요구에 맞춘 다양한 기능을 제공하여 운영 효율성을 극대화하고, 안전하고 안정적인 서비스를 제공합니다.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
        >
          {serviceData.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

type ServiceCardProps = {
  icon: JSX.Element;
  title: string;
  description: string;
};

function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg p-6 text-center"
      variants={itemVariants}
      whileHover={{ scale: 1.05 }}
    >
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-2xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p
        className="text-gray-600"
        dangerouslySetInnerHTML={{ __html: description }}
      />
      <ServicesPage/>
    </motion.div>    
  );
}
