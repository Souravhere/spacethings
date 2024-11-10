"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Appdownload() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <section className="py-10 px-4 bg-white overflow-hidden relative">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/30 to-blue-100/20" />

      <motion.div
        className="max-w-6xl mx-auto relative"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Text Content */}
        <motion.div variants={itemVariants} className="text-center sm:mb-10 mb-3 h-fit">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            <span className="font-sans">혁신의 기회, </span> <span className="text-blue-600">지금 바로 사용해보세요</span>
          </h2>
          <p className="text-center font-semibold mt-2 text-gray-600">관리 프로세스를 간소화하고 고객 경험을 향상시켜 효율성을 높여보세요</p>
        </motion.div>

        {/* Phone Mockups Container */}
        <motion.div
          variants={itemVariants}
          className="relative w-full max-w-2xl mx-auto"
        >
          {/* White overlay/shadow effect */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md h-40 bg-gradient-to-t from-white via-white to-transparent" />

          {/* Phone mockups */}
          <motion.div 
            className="relative z-10 flex justify-center items-center"
            initial={{ y: 40 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, type: "spring", bounce: 0.3 }}
          >
            <div className="relative w-full h-[400px] md:h-[500px] sm:-mb-20 -mb-28">
              <Image
                src="/assets/ctasection.png"
                alt="WHATSSUE App Mockup"
                fill
                className="object-contain"
                priority
              />
            </div>
          </motion.div>
        </motion.div>

        {/* App Store Badges */}
        <motion.div 
          variants={itemVariants}
          className="text-center mt-8 relative z-20"
        >
          <div className="flex flex-row justify-center items-center gap-4">
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-36 md:w-40"
            >
              <Image
                src="/assets/appstorebadges.png"
                width={160}
                height={48}
                alt="Download on the App Store"
                className="rounded-lg"
              />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-36 md:w-40"
            >
              <Image
                src="/assets/googleplaybadge.png"
                width={160}
                height={48}
                alt="Get it on Google Play"
                className="rounded-lg"
              />
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}