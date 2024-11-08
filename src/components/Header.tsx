'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { RiCloseLargeFill } from "react-icons/ri";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import Image from 'next/image'

const navItems = [
  { name: '홈', path: '/' },
  { name: '서비스', path: '/service' },
  { name: '고객지원', path: '/customersupport' },
  { name: '도입문의', path: '/introduction' },
]

export default function UpdatedFloatingNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showHeader, setShowHeader] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const pathname = usePathname()

  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          setShowHeader(false)
        } else {
          setShowHeader(true)
        }
        setLastScrollY(window.scrollY)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <AnimatePresence>
      {showHeader && (
        <motion.header
          className="fixed top-4 transform -translate-x-1/2 bg-white shadow-lg rounded-full z-50 w-[90%] mx-[5%]"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          <div className="container mx-auto px-4 h-16 flex items-center justify-between">
            
            <Link href="/" className="flex items-center">
                <Image
                    src='/assets/headerlogo.png'
                    alt='space things logo'
                    width={240}
                    height={50}
                />
            </Link>
            <div className='flex items-center justify-center gap-3'>
              {/* Here is contact button for the mobile header */}
            {/* <Link href="/contact" className="md:hidden flex items-center">
              <div className="bg-[#005ce6] rounded-full px-3 h-10 flex items-center justify-center">
                <span className="text-white text-base">Contact</span>
              </div>
            </Link> */}
            <motion.button
              className="md:hidden z-20 text-gray-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              whileTap={{ scale: 0.95 }}
            >
              {isMenuOpen ? <RiCloseLargeFill size={28} /> : <HiOutlineMenuAlt3 size={30} />}
            </motion.button>
            </div>
            <nav className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <NavLink key={item.name} href={item.path} isActive={pathname === item.path}>
                  {item.name}
                </NavLink>
              ))}
            </nav>

            <Link href="/contact" className="hidden md:block">
              <motion.div
                className="bg-[#005ce6] text-white px-6 py-2 rounded-full text-sm font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </motion.div>
            </Link>
          </div>

          <AnimatePresence>
            {isMenuOpen && (
              <motion.nav
                className="md:hidden bg-white py-4 fixed top-20 left-0 w-full h-[calc(100vh-80px)] flex flex-col rounded-b-3xl shadow-lg"
                initial={{ y: '-100%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: '-100%', opacity: 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              >
                <motion.div
                  className="flex flex-col space-y-4"
                  initial="closed"
                  animate="open"
                  variants={{
                    closed: { opacity: 0 },
                    open: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
                  }}
                >
                  {navItems.map((item) => (
                    <motion.div
                      key={item.name}
                      variants={{
                        closed: { y: 20, opacity: 0 },
                        open: { y: 0, opacity: 1 },
                      }}
                    >
                      <NavLink href={item.path} isActive={pathname === item.path} mobile>
                        {item.name}
                      </NavLink>
                    </motion.div>
                  ))}
                  <motion.div
                    variants={{
                      closed: { y: 20, opacity: 0 },
                      open: { y: 0, opacity: 1 },
                    }}
                  >
                    <Link href="/contact" className="block text-center bg-[#005ce6] text-white mx-4 my-2 px-6 py-3 rounded-full hover:bg-[#f5ff68ad] transition-colors">
                      Contact Us
                    </Link>
                  </motion.div>
                </motion.div>
              </motion.nav>
            )}
          </AnimatePresence>
        </motion.header>
      )}
    </AnimatePresence>
  )
}

interface NavLinkProps {
  href: string
  isActive: boolean
  children: React.ReactNode
  mobile?: boolean
}

function NavLink({ href, isActive, children, mobile = false }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={`${
        mobile ? 'block py-3 px-4 text-center text-xl' : 'inline-block'
      } relative font-medium transition-colors hover:text-gray-900 text-sm ${
        isActive ? 'text-gray-900' : 'text-gray-600'
      }`}
    >
      {children}
      {isActive && (
        <motion.div
          className="absolute -bottom-1 left-0 w-full h-0.5 bg-gray-900"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </Link>
  )
}