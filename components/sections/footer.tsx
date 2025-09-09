'use client'

import { useTranslation } from '@/lib/translations'
import { Locale } from '@/lib/types/locale'

const imgFooterLogo = "http://localhost:3845/assets/7b8f3d479e63dfb67f8b5b688ff18ef11e6e0a79.png"
const imgFacebookIcon = "http://localhost:3845/assets/1945d79ea40ad6782925adfa883d841d7e7e9d16.svg"
const imgInstagramIcon = "http://localhost:3845/assets/1a3f987200b9edafe1a2614bebb6c69447fe1888.svg"
const imgLinkedinIcon = "http://localhost:3845/assets/aa892b36d14b32256c0a9afd553b96531b03b536.svg"

interface FooterProps {
  locale: Locale
}

export function Footer({ locale }: FooterProps) {
  const { t } = useTranslation(locale)

  const footerLinks = [
    { label: 'Academy info', href: '/academy' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Recruitment', href: '/recruitment' }
  ]

  const socialLinks = [
    { icon: imgFacebookIcon, href: 'https://facebook.com/taejaeuniv', label: 'Facebook' },
    { icon: imgInstagramIcon, href: 'https://instagram.com/taejaeuniv', label: 'Instagram' },
    { icon: imgLinkedinIcon, href: 'https://linkedin.com/company/taejaeuniv', label: 'LinkedIn' }
  ]

  return (
    <footer className="bg-[#545454] p-12 w-full">
      <div className="max-w-[1920px] mx-auto">
        <div className="flex items-start justify-between w-full">
          {/* Left Content */}
          <div className="flex flex-col gap-10 items-start justify-start">
            {/* Logo */}
            <div 
              className="bg-center bg-cover bg-no-repeat h-12 w-[150px] brightness-0 invert"
              style={{ backgroundImage: `url('${imgFooterLogo}')` }}
            />

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
                    {index < footerLinks.length - 1 && (
                      <div className="bg-[#888888] h-3 w-px" />
                    )}
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
                <img alt="" className="block max-w-none w-full h-full" src={social.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}