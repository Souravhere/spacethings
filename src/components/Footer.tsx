"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { FaInstagram, FaLinkedinIn } from "react-icons/fa"
import { PiTelegramLogo } from "react-icons/pi";
import Image from "next/image"

const footerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.5, 
      staggerChildren: 0.1 
    } 
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

export default function Footer() {
  return (
    <motion.footer 
      className="bg-white text-gray-800 py-12 border-t border-gray-200"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={footerVariants}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <motion.div variants={itemVariants} className="space-y-4">
            <Link href="/">
                <Image
                    src="/assets/headerlogo2.png"
                    alt="Logo"
                    width={60}
                    height={60}
                />
            </Link>
            <p className="text-sm text-gray-600">
              우리의 혁신적인 솔루션으로 여러분들은 스마트 기기를 사용해
              실시간으로 작업을 관리하고 협업을 원활하게 진행할 수 있습니다.
            </p>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-semibold text-blue-600">서비스</h3>
            <ul className="space-y-2">
              <li><Link href="/dejangbu" className="hover:text-blue-600 transition-colors font-sans">DEJANGBU</Link></li>
              <li><Link href="/watssue" className="hover:text-blue-600 transition-colors font-sans">WATSSUE</Link></li>
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-semibold text-blue-600">회사소개</h3>
            <ul className="space-y-2">
              <li><Link href="/mission" className="hover:text-blue-600 transition-colors">미션</Link></li>
              <li><Link href="/vision" className="hover:text-blue-600 transition-colors">비전</Link></li>
              <li><Link href="/careers" className="hover:text-blue-600 transition-colors">채용</Link></li>
            </ul>
          </motion.div>

          {/* Customer Service */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-semibold text-blue-600">고객센터</h3>
            <ul className="space-y-2">
              <li><Link href="/service" className="hover:text-blue-600 transition-colors">서비스</Link></li>
              <li><Link href="/customersupport" className="hover:text-blue-600 transition-colors">고객 지원</Link></li>
              <li><Link href="/introduction" className="hover:text-blue-600 transition-colors">소개</Link></li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          variants={itemVariants}
          className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-sm text-gray-600 font-sans">&copy; 2024 Space Things. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">

            <Link href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                <PiTelegramLogo />
            </Link>
            <Link href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                <FaInstagram />
            </Link>
            <Link href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                <FaLinkedinIn />
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  )
}