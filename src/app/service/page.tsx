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
    description: "최신 보안 기술로 데이터를 안전하게 보호하고 관리합니다.",
  },
  {
    icon: <FaTools className="text-blue-600 text-4xl mb-4" />,
    title: "커스터마이징 옵션",
    description: "각 비즈니스에 맞춘 커스터마이징 서비스를 제공합니다.",
  },
  {
    icon: <MdSpeed className="text-blue-600 text-4xl mb-4" />,
    title: "빠른 성능",
    description: "최적화된 성능으로 원활한 사용자 경험을 제공합니다.",
  },
  {
    icon: <FaRobot className="text-blue-600 text-4xl mb-4" />,
    title: "자동화",
    description: "자동화 시스템으로 업무 효율을 높이고 리소스를 절감합니다.",
  },
  {
    icon: <MdMobileFriendly className="text-blue-600 text-4xl mb-4" />,
    title: "모바일 호환성",
    description: "모든 기기에서 사용할 수 있도록 모바일 친화적인 인터페이스를 제공합니다.",
  },
  {
    icon: <FaChartLine className="text-blue-600 text-4xl mb-4" />,
    title: "데이터 분석",
    description: "데이터 분석을 통해 비즈니스 인사이트를 제공합니다.",
  },
  {
    icon: <MdUpdate className="text-blue-600 text-4xl mb-4" />,
    title: "자동 업데이트",
    description: "최신 버전으로 자동 업데이트를 지원합니다.",
  },
  {
    icon: <FaUserShield className="text-blue-600 text-4xl mb-4" />,
    title: "사용자 보호",
    description: "사용자 보호 기능을 강화하여 안전한 서비스를 보장합니다.",
  },
];

export default function ServicesPage() {
  return (
    <div></div>
  );
}

type ServiceCardProps = {
  icon: JSX.Element;
  title: string;
  description: string;
};


