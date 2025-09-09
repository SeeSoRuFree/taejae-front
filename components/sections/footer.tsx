'use client'

import { useTranslation } from '@/lib/translations'
import { Locale } from '@/lib/types/locale'
import Image from 'next/image'

const imgFooterLogo = '/images/footer-logo.png'
const imgFacebookIcon = '/images/facebook-icon.svg'
const imgInstagramIcon = '/images/instagram-icon.svg'
const imgLinkedinIcon = '/images/linkedin-icon.svg'

interface FooterProps {
  locale: Locale
}

export function Footer({ locale }: FooterProps) {
  const { t } = useTranslation(locale)

  const footerLinks = [
    { label: 'Academy info', href: '/academy' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Recruitment', href: '/recruitment' },
  ]

  const socialLinks = [
    { icon: imgFacebookIcon, href: 'https://facebook.com/taejaeuniv', label: 'Facebook' },
    { icon: imgInstagramIcon, href: 'https://instagram.com/taejaeuniv', label: 'Instagram' },
    { icon: imgLinkedinIcon, href: 'https://linkedin.com/company/taejaeuniv', label: 'LinkedIn' },
  ]

  return (
    <footer className="bg-[#545454] p-12 w-full">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex items-start justify-between w-full">
          {/* Left Content */}
          <div className="flex flex-col gap-10 items-start justify-start">
            {/* Logo */}
            <div className="h-12 w-[150px] relative brightness-0 invert">
              <Image
                src={imgFooterLogo}
                alt="Taejae University Logo"
                fill
                className="object-contain"
                sizes="150px"
              />
            </div>

            {/* Links and Contact Info */}
            <div className="flex flex-col gap-1.5 items-start justify-start">
              {/* Footer Links */}
              <div className="flex gap-2 items-center justify-start w-full">
                {footerLinks.map((link, index) => (
                  <div key={link.href} className="flex gap-2 items-center">
                    <a
                      href={link.href}
                      className="font-inter font-medium text-[15px] leading-[1.5] tracking-[-0.3px] text-white whitespace-nowrap hover:text-gray-300 transition-colors"
                    >
                      {link.label}
                    </a>
                    {index < footerLinks.length - 1 && <div className="bg-[#888888] h-3 w-px" />}
                  </div>
                ))}
              </div>

              {/* Contact Info */}
              <div className="flex gap-2 items-center justify-start w-full">
                <div className="font-inter font-normal text-[12px] leading-[1.5] tracking-[-0.36px] text-[#888888] whitespace-nowrap">
                  22-8 Changdeokgung 5-gil, Jongro-gu, Seoul 03051
                </div>
                <div className="bg-[#888888] h-2.5 w-px" />
                <div className="font-inter font-normal text-[12px] leading-[1.5] tracking-[-0.36px] text-[#888888] whitespace-nowrap">
                  info@taejae.co.kr
                </div>
              </div>

              {/* Copyright */}
              <div className="font-inter font-normal text-[12px] leading-[1.5] tracking-[-0.36px] text-[#888888] w-full">
                Copyright 2025 Taejae University All Rights Reserved.
              </div>
            </div>
          </div>

          {/* Right Content - SNS Icons */}
          <div className="flex gap-4 h-8 items-start justify-end">
            {socialLinks.map((social) => (
              <a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 hover:opacity-70 transition-opacity"
                aria-label={social.label}
              >
                <Image
                  alt=""
                  className="block w-full h-full"
                  src={social.icon}
                  width={32}
                  height={32}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
