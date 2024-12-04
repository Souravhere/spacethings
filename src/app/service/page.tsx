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
}

export default function ServicesPage() {
  return (
    <div></div>
  );
}


