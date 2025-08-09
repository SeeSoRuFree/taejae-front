'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useTranslation } from '@/lib/translations'
import { Locale } from '@/lib/types/locale'
import Image from 'next/image'
import { MagnifyingGlassIcon, ChevronDownIcon } from '@heroicons/react/24/solid'
import { motion, AnimatePresence } from 'framer-motion'
import { useLocaleStore } from '@/lib/store/locale-store'

const logoImage = '/assets/logo.png'

interface SubMenuItem {
  href: string
  label: string
  labelKo?: string
}

interface NavItem {
  href: string
  label: string
  subItems?: SubMenuItem[]
}

interface HeaderProps {
  locale: Locale
}

export function Header({ locale }: HeaderProps) {
  const { t } = useTranslation(locale)
  const { setLocale } = useLocaleStore()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [mobileExpandedMenu, setMobileExpandedMenu] = useState<string | null>(null)

  const navItems: NavItem[] = [
    {
      href: '/academics',
      label: 'Academics',
      subItems: [
        {
          href: '/academics/visions-goals',
          label: 'Educational Visions & Goals',
          labelKo: '교육 비전 및 목표',
        },
        { href: '/academics/faculty', label: 'Faculty', labelKo: '교수진' },
        { href: '/academics/programs', label: 'Academic Programs', labelKo: '학사 프로그램' },
        { href: '/academics/learning-methods', label: 'Learning Methods', labelKo: '학습 방법' },
      ],
    },
    { href: '/global-experience', label: 'Global Experience' },
    { href: '/admissions', label: 'Admissions' },
    { href: '/life-at-taejae', label: 'Life at Taejae' },
    { href: '/who-we-are', label: 'Who we are' },
  ]

  const currentLocale = locale === 'ko' ? 'KO' : 'EN'

  const handleLocaleToggle = () => {
    const newLocale = locale === 'ko' ? 'en' : 'ko'
    setLocale(newLocale)
  }

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-48px)] max-w-[1248px]">
      <nav className="bg-white/75 backdrop-blur-[15px] rounded-[36px] shadow-[0_2px_8px_rgba(0,0,0,0.08)] px-8 lg:overflow-visible overflow-hidden">
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
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => item.subItems && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 text-[15px] text-black font-normal pb-1 hover:opacity-70 transition-opacity"
                >
                  {item.label}
                  {item.subItems && (
                    <ChevronDownIcon
                      className={`w-3 h-3 transition-transform ${
                        activeDropdown === item.label ? 'rotate-180' : ''
                      }`}
                    />
                  )}
                </Link>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {item.subItems && activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2, ease: 'easeOut' }}
                      className="absolute top-full -left-12 mt-[13px] w-[240px] bg-white/75 backdrop-blur-[15px] rounded-b-2xl shadow-[0_8px_16px_rgba(0,0,0,0.08)] overflow-hidden z-50"
                    >
                      <div className="py-3">
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className="block px-5 py-2.5 text-[14px] text-gray-700 hover:bg-gray-50 hover:text-black transition-colors"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {locale === 'ko' && subItem.labelKo ? subItem.labelKo : subItem.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Desktop Right Side */}
          <div className="hidden lg:flex items-center gap-8 py-3 pb-2 pl-5">
            <button className="p-0" aria-label="Search">
              <MagnifyingGlassIcon className="w-5 h-5 text-black" />
            </button>
            <button
              onClick={handleLocaleToggle}
              className="text-[15px] font-normal text-black pb-1 hover:opacity-70 transition-opacity"
            >
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
                className="flex flex-col gap-[20px] pt-2 pb-4"
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
                    {item.subItems ? (
                      <div>
                        <button
                          onClick={() =>
                            setMobileExpandedMenu(
                              mobileExpandedMenu === item.label ? null : item.label
                            )
                          }
                          className="flex items-center justify-between w-full text-[15px] text-black font-normal"
                        >
                          {item.label}
                          <ChevronDownIcon
                            className={`w-4 h-4 transition-transform ${
                              mobileExpandedMenu === item.label ? 'rotate-180' : ''
                            }`}
                          />
                        </button>

                        <AnimatePresence>
                          {mobileExpandedMenu === item.label && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              <div className="mt-3 ml-4 space-y-3">
                                {item.subItems.map((subItem) => (
                                  <Link
                                    key={subItem.href}
                                    href={subItem.href}
                                    className="block text-[14px] text-gray-600 hover:text-black transition-colors"
                                    onClick={() => {
                                      setIsMenuOpen(false)
                                      setMobileExpandedMenu(null)
                                    }}
                                  >
                                    {locale === 'ko' && subItem.labelKo
                                      ? subItem.labelKo
                                      : subItem.label}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className="text-[15px] text-black font-normal block"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    )}
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
                  <button
                    onClick={handleLocaleToggle}
                    className="text-[15px] font-normal text-black"
                  >
                    {currentLocale}
                  </button>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
