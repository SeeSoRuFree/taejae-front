'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useTranslation } from '@/lib/translations'
import { Locale } from '@/lib/types/locale'
import Image from 'next/image'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import { motion, AnimatePresence } from 'framer-motion'

const logoImage = 'http://localhost:3845/assets/708729a14c37be3a865bcf50aa8e44b8ba0cd8b5.png'

interface HeaderProps {
  locale: Locale
}

export function Header({ locale }: HeaderProps) {
  const { t } = useTranslation(locale)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { href: '/academics', label: 'Academics' },
    { href: '/global-experience', label: 'Global Experience' },
    { href: '/admissions', label: 'Admissions' },
    { href: '/life-at-taejae', label: 'Life at Taejae' },
    { href: '/who-we-are', label: 'Who we are' },
  ]

  const currentLocale = locale === 'ko' ? 'KO' : 'EN'

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-48px)] max-w-[1440px]">
      <nav className="bg-white/75 backdrop-blur-[15px] rounded-[36px] shadow-[0_2px_8px_rgba(0,0,0,0.08)] px-8 overflow-hidden">
        {/* Main Navigation Bar */}
        <div className="flex items-center justify-between h-[56px]">
          <Link href="/" className="flex items-center shrink-0 py-[9px] pb-3 pr-5">
            <Image
              src={logoImage}
              alt="Taejae University"
              width={127}
              height={34}
              className="object-contain"
              quality={100}
              priority
              unoptimized
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-center flex-1 gap-[50px] py-3 pb-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[15px] text-black font-normal pb-1 hover:opacity-70 transition-opacity"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop Right Side */}
          <div className="hidden lg:flex items-center gap-8 py-3 pb-2 pl-5">
            <button className="p-0" aria-label="Search">
              <MagnifyingGlassIcon className="w-5 h-5 text-black" />
            </button>
            <button className="text-[15px] font-normal text-black pb-1 hover:opacity-70 transition-opacity">
              {currentLocale}
            </button>
          </div>

          {/* Tablet/Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-[34px] py-3 pb-[10px] pl-5">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[15px] font-normal text-black pb-1 hover:opacity-70 transition-opacity"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? 'Close' : 'Menu'}
            </button>
          </div>
        </div>

        {/* Mobile Expanded Menu - Part of the same nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="lg:hidden overflow-hidden"
            >
              <motion.div
                className="flex flex-col gap-[26px] pt-2 pb-4"
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              >
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                  >
                    <Link
                      href={item.href}
                      className="text-[15px] text-black font-normal block"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}

                {/* Mobile Bottom Actions */}
                <motion.div
                  className="flex items-center justify-end gap-8 pt-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.25, duration: 0.3 }}
                >
                  <button className="p-0" aria-label="Search">
                    <MagnifyingGlassIcon className="w-5 h-5 text-black" />
                  </button>
                  <button className="text-[15px] font-normal text-black">{currentLocale}</button>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
