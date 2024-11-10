"use client";
import React, { useState, ChangeEvent } from "react";
import { motion } from "framer-motion";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    companyName: "",
    service: "DEJANGBU",
    message: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const mailToLink = `mailto:support@spacethings.co.kr?subject=문의: ${formData.service}&body=이름: ${formData.name}%0A이메일: ${formData.email}%0A회사명: ${formData.companyName}%0A서비스: ${formData.service}%0A내용: ${formData.message}`;

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  return (
    <div className="bg-gray-50 text-gray-800 py-24">
      <motion.div
        className="text-center py-16 bg-gradient-to-b from-blue-700 to-blue-500 text-white px-4"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <h1 className="text-4xl font-extrabold mb-4">문의하기</h1>
        <p className="text-lg mb-4">
          <span className="font-sans">Space Things</span> 와 함께 더 나은 미래를 만들어 보세요. 우리는 항상 귀하의 성공을 돕기 위해 준비되어 있습니다.
        </p>
        <p className="text-sm text-blue-200">
          아래 양식을 통해 문의 내용을 보내주시면 신속히 답변드리겠습니다.
        </p>
      </motion.div>

      <motion.section
        className="max-w-2xl mx-auto px-6 py-8"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.form
          className="bg-white shadow-lg rounded-lg p-8 space-y-6"
          variants={fadeInUp}
        >
          <div className="text-center mb-4">
            <h2 className="text-2xl font-semibold text-blue-700">연락처 정보</h2>
            <p className="text-gray-600">
              회사와 프로젝트에 대해 알려주세요. 어떤 도움이 필요하신지 궁금합니다!
            </p>
          </div>

          <div>
            <label htmlFor="name" className="block font-bold mb-1">
              이름
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="성함을 입력하세요"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block font-bold mb-1">
              이메일
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="이메일 주소를 입력하세요"
              required
            />
          </div>

          <div>
            <label htmlFor="companyName" className="block font-bold mb-1">
              회사명 / 서비스명
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="회사 또는 서비스명을 입력하세요"
              required
            />
          </div>

          <div>
            <label htmlFor="service" className="block font-bold mb-1">
              서비스 선택
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="DEJANGBU">DEJANGBU</option>
              <option value="WATSSUE">WATSSUE</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block font-bold mb-1">
              문의 내용
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="문의하실 내용을 입력하세요"
              required
              rows={5}
            />
          </div>

          <div className="text-center mt-6">
            <a
              href={mailToLink}
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-bold transition-all duration-200 inline-block"
            >
              메일 보내기
            </a>
          </div>
        </motion.form>
      </motion.section>

      <motion.div
        className="bg-blue-600 text-white text-center py-16 mt-12 px-4"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <h2 className="text-3xl font-bold mb-4">고객 지원에 대한 자세한 안내</h2>
        <p className="text-lg mb-6 font-sans">
          저희 서비스와 함께 하는 동안 어려움이 있으신가요? 언제든지 도움을 드릴 준비가 되어 있습니다.
        </p>
        <p className="text-sm mb-4 text-blue-300">
          Space Things의 고객 지원팀은 항상 신속하고 신뢰성 있는 답변을 제공해 드리기 위해 최선을 다하고 있습니다.
        </p>
      </motion.div>
    </div>
  );
};

export default ContactPage;
