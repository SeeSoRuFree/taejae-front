'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useTranslation } from '@/lib/translations'
import { Locale } from '@/lib/types/locale'
import { MAX_CONTENT_WIDTH } from '@/lib/constants/layout'

interface FooterProps {
  locale: Locale
}

export function Footer({ locale }: FooterProps) {
  const { t } = useTranslation(locale)

  return (
    <footer className="bg-black text-white pt-[30px] pb-[80px] px-[15px]">
      <div className="mx-auto" style={{ maxWidth: `${MAX_CONTENT_WIDTH}px` }}>
        {/* Desktop Layout */}
        <div className="hidden md:flex flex-col gap-[127px]">
          <div className="flex flex-row items-start justify-start w-full">
            {/* Left section - Logo and contact info */}
            <div className="flex flex-col gap-[16px] max-w-[625px] grow">
              <div
                className="w-[100px] h-[100px] bg-cover bg-center shrink-0 brightness-0 invert"
                style={{ backgroundImage: "url('/assets/footer-logo.png')" }}
              />
              <div className="flex flex-col gap-[62px] w-full">
                <div className="flex flex-col gap-[30px] w-full">
                  <div className="flex flex-col gap-[10px] w-full">
                    <div className="text-[15px] font-['Instrument_Sans'] font-normal text-white tracking-[-0.75px] leading-[1]">
                      <p className="mb-0">22-8 Changdeokgung 5-gil, Jongro-gu</p>
                      <p>Seoul 03051</p>
                    </div>
                  </div>
                  <div className="text-[15px] font-['Instrument_Sans'] font-normal text-white tracking-[-0.75px] leading-[1] underline">
                    info@taejae.co.kr
                  </div>
                </div>
                <div className="flex flex-col gap-[30px] w-full">
                  <div className="text-[15px] font-['Instrument_Sans'] font-normal text-white tracking-[-0.75px] leading-[1]">
                    Copyright
                  </div>
                </div>
              </div>
            </div>

            {/* Right section - Links */}
            <div className="flex flex-row justify-between grow min-h-[1px] min-w-[1px]">
              {/* First column */}
              <div className="flex flex-col gap-[62px] grow min-h-[1px] min-w-[1px]">
                <div className="flex flex-col gap-[10px] text-white">
                  <div className="text-[15px] font-['Instrument_Sans'] font-normal tracking-[-0.75px] leading-[1]">
                    <Link href="/disclaimer" className="hover:text-gray-300 transition-colors">
                      Disclaimer
                    </Link>
                  </div>
                  <div className="text-[15px] font-['Instrument_Sans'] font-normal tracking-[-0.75px] leading-[1]">
                    <Link href="/privacy" className="hover:text-gray-300 transition-colors">
                      Privacy Policy
                    </Link>
                  </div>
                  <div className="text-[15px] font-['Instrument_Sans'] font-normal tracking-[-0.75px] leading-[1]">
                    <Link href="/report" className="hover:text-gray-300 transition-colors">
                      Report Issues
                    </Link>
                  </div>
                  <div className="text-[15px] font-['Instrument_Sans'] font-normal tracking-[-0.75px] leading-[1]">
                    <Link href="/feedback" className="hover:text-gray-300 transition-colors">
                      Feedbacks
                    </Link>
                  </div>
                </div>
              </div>

              {/* Second column */}
              <div className="flex flex-col gap-[62px] grow min-h-[1px] min-w-[1px]">
                <div className="flex flex-col gap-[10px] text-white">
                  <div className="text-[15px] font-['Instrument_Sans'] font-normal tracking-[-0.75px] leading-[1]">
                    <Link href="/resources" className="hover:text-gray-300 transition-colors">
                      Resources
                    </Link>
                  </div>
                  <div className="text-[15px] font-['Instrument_Sans'] font-normal tracking-[-0.75px] leading-[1]">
                    <Link href="/help" className="hover:text-gray-300 transition-colors">
                      Help
                    </Link>
                  </div>
                  <div className="text-[15px] font-['Instrument_Sans'] font-normal tracking-[-0.75px] leading-[1]">
                    <Link href="/recruitment" className="hover:text-gray-300 transition-colors">
                      Recruitment
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden flex flex-col gap-[32px]">
          {/* Logo and contact section */}
          <div className="flex flex-col gap-[16px] w-full">
            <div
              className="w-[100px] h-[100px] bg-cover bg-center shrink-0 brightness-0 invert"
              style={{ backgroundImage: "url('/assets/footer-logo.png')" }}
            />
            <div className="flex flex-col gap-[30px] w-full">
              <div className="flex flex-col gap-[10px] w-full">
                <div className="text-[15px] font-['Instrument_Sans'] font-normal text-white tracking-[-0.75px] leading-[1]">
                  <p className="mb-0">22-8 Changdeokgung 5-gil, Jongro-gu</p>
                  <p>Seoul 03051</p>
                </div>
              </div>
              <div className="text-[15px] font-['Instrument_Sans'] font-normal text-white tracking-[-0.75px] leading-[1]">
                info@taejae.co.kr
              </div>
            </div>
          </div>

          {/* Links section */}
          <div className="flex flex-row gap-[60px] w-full">
            {/* First column */}
            <div className="flex flex-col gap-[10px] text-white">
              <div className="text-[15px] font-['Instrument_Sans'] font-normal tracking-[-0.75px] leading-[1]">
                <Link href="/disclaimer">Disclaimer</Link>
              </div>
              <div className="text-[15px] font-['Instrument_Sans'] font-normal tracking-[-0.75px] leading-[1]">
                <Link href="/privacy">Privacy Policy</Link>
              </div>
              <div className="text-[15px] font-['Instrument_Sans'] font-normal tracking-[-0.75px] leading-[1]">
                <Link href="/report">Report Issues</Link>
              </div>
              <div className="text-[15px] font-['Instrument_Sans'] font-normal tracking-[-0.75px] leading-[1]">
                <Link href="/feedback">Feedbacks</Link>
              </div>
            </div>

            {/* Second column */}
            <div className="flex flex-col gap-[10px] text-white">
              <div className="text-[15px] font-['Instrument_Sans'] font-normal tracking-[-0.75px] leading-[1]">
                <Link href="/resources">Resources</Link>
              </div>
              <div className="text-[15px] font-['Instrument_Sans'] font-normal tracking-[-0.75px] leading-[1]">
                <Link href="/help">Help</Link>
              </div>
              <div className="text-[15px] font-['Instrument_Sans'] font-normal tracking-[-0.75px] leading-[1]">
                <Link href="/recruitment">Recruitment</Link>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="flex flex-col gap-[30px] w-full">
            <div className="text-[15px] font-['Instrument_Sans'] font-normal text-white tracking-[-0.75px] leading-[1]">
              Copyright
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
