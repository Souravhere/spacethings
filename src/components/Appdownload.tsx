'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef, useState } from 'react';
import { FaCheckCircle } from "react-icons/fa";

export default function AppDownload() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacityBg = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.5, 0.3]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiryType: '',
    messages: [''],
  });
  const [status, setStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleMessageChange = (index: number, value: string) => {
    const updatedMessages = [...formData.messages];
    updatedMessages[index] = value;
    setFormData((prev) => ({ ...prev, messages: updatedMessages }));
  };

  const addMessageField = () => {
    setFormData((prev) => ({ ...prev, messages: [...prev.messages, ''] }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      // const response = await fetch('https://formspree.io/f/xyzyvejr', {
      const response = await fetch('https://formspree.io/f/mzzbqnrz', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', inquiryType: '', messages: [''] });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative sm:min-h-[50vh] h-fit flex items-center justify-center overflow-hidden bg-blue-600 py-20 px-4"
    >
      <motion.div
        className="absolute inset-0 overflow-hidden"
        style={{ y: yBg, opacity: opacityBg }}
      >
        <svg
          className="absolute w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 100"
        >
          <defs>
            <pattern id="smallGrid" width="2" height="2" patternUnits="userSpaceOnUse">
              <path
                d="M 2 0 L 0 0 0 2"
                fill="none"
                stroke="rgba(255,255,255,0.08)"
                strokeWidth="0.5"
              />
            </pattern>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <rect width="10" height="10" fill="url(#smallGrid)" />
              <path
                d="M 10 0 L 0 0 0 10"
                fill="none"
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </motion.div>

      <div className="relative z-10 mx-auto text-center space-y-8">
        {status === 'success' ? (
          <div className="flex flex-col items-center space-y-4">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-green-500 text-6xl"
            >
              <FaCheckCircle size={55} />
            </motion.div>
            <p className="text-white text-xl font-semibold font-sans">
              Your inquiry has been submitted! We will contact you soon.
            </p>
          </div>
        ) : (
          <>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white"
            >
              혁신의 기회, 지금 바로 사용해보세요
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto"
            >
              관리 프로세스를 간소화하고 고객 경험을 향상시켜 효율성을 높여보세요
            </motion.p>

            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              onSubmit={handleSubmit}
              className="space-y-4 bg-white p-6 rounded-lg shadow-lg"
            >
              <input
                type="text"
                name="name"
                placeholder="이름"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md bg-gray-100 text-blue-600 font-sans"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="이메일"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md bg-gray-100 text-blue-600 font-sans"
                required
              />
              <select
                name="inquiryType"
                value={formData.inquiryType}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md bg-gray-100 text-blue-600 font-sans"
                required
              >
                <option value="">문의 유형 선택</option>
                <option value="서비스 문의">서비스 문의</option>
                <option value="기술 지원">기술 지원</option>
                <option value="일반 문의">일반 문의</option>
              </select>
              {/* {formData.messages.map((message, index) => (
                <input
                  key={index}
                  type="text"
                  placeholder={`메시지 ${index + 1}`}
                  value={message}
                  onChange={(e) => handleMessageChange(index, e.target.value)}
                  className="w-full px-4 py-2 rounded-md bg-gray-100 text-blue-600 font-sans"
                  required
                />
              ))}
              <button
                type="button"
                onClick={addMessageField}
                className="w-full px-4 py-2 bg-blue-500 text-white rounded-md"
              >
                메시지 추가
              </button> */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full px-8 py-3 bg-blue-600 text-white rounded-full text-lg font-semibold transition-colors font-sans"
                disabled={isLoading}
              >
                {isLoading ? 'Sending...' : '문의 보내기'}
              </motion.button>
            </motion.form>
          </>
        )}
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-blue-600/50 to-transparent pointer-events-none" />
    </section>
  );
}
