'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import React, { useRef, useState } from 'react'

export default function AppDownload() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacityBg = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.5, 0.3])

  const [formData, setFormData] = useState({ name: '', email: '', inquiryType: '', messages: [''] })
  const [status, setStatus] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleMessageChange = (index: number, value: string) => {
    const updatedMessages = [...formData.messages]
    updatedMessages[index] = value
    setFormData((prev) => ({ ...prev, messages: updatedMessages }))
  }

  const addMessageField = () => {
    setFormData((prev) => ({ ...prev, messages: [...prev.messages, ''] }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const response = await fetch('https://formspree.io/f/xyzyvejr', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', inquiryType: '', messages: [''] })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section ref={sectionRef} className="relative sm:min-h-[50vh] h-fit flex items-center justify-center overflow-hidden bg-blue-600 py-20 px-4">
      <motion.div
        className="absolute inset-0 overflow-hidden"
        style={{ y: yBg, opacity: opacityBg }}
      >
        <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 100">
          <defs>
            <pattern id="smallGrid" width="2" height="2" patternUnits="userSpaceOnUse">
              <path d="M 2 0 L 0 0 0 2" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" />
            </pattern>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <rect width="10" height="10" fill="url(#smallGrid)" />
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </motion.div>

      <div className="relative z-10 mx-auto text-center space-y-8">
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
          className="space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="이름"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md bg-white text-blue-600"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="이메일"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md bg-white text-blue-600"
            required
          />
          <select
            name="inquiryType"
            value={formData.inquiryType}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md bg-white text-blue-600"
            required
          >
            <option value="">문의 유형 선택</option>
            <option value="서비스 문의">서비스 문의</option>
            <option value="기술 지원">기술 지원</option>
            <option value="일반 문의">일반 문의</option>
          </select>
          {formData.messages.map((message, index) => (
            <input
              key={index}
              type="text"
              placeholder={`메시지 ${index + 1}`}
              value={message}
              onChange={(e) => handleMessageChange(index, e.target.value)}
              className="w-full px-4 py-2 rounded-md bg-white text-blue-600"
              required
            />
          ))}
          <button
            type="button"
            onClick={addMessageField}
            className="w-full px-4 py-2 bg-blue-500 text-white rounded-md"
          >
            메시지 추가
          </button>
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.9)' }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full px-8 py-3 bg-white text-blue-600 rounded-full text-lg font-semibold transition-colors"
          >
            문의 보내기
          </motion.button>
        </motion.form>

        {status === 'success' && <p className="text-green-400">성공적으로 보냈습니다!</p>}
        {status === 'error' && <p className="text-red-500">문제가 발생했습니다. 다시 시도해주세요.</p>}
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-blue-600/50 to-transparent pointer-events-none" />
    </section>
  )
}
