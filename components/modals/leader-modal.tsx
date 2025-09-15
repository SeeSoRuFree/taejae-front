'use client'

import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useModalStore } from '@/lib/store/modal-store'

export default function LeaderModal() {
  const { isOpen, selectedLeader, closeModal } = useModalStore()

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, closeModal])

  if (!selectedLeader) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="relative bg-white max-w-[1138px] w-full max-h-[90vh] overflow-y-auto m-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute right-6 top-6 z-10 size-12 hover:bg-gray-100 rounded-full transition-colors flex items-center justify-center"
              aria-label="Close modal"
            >
              <Image
                src="/assets/close-modal-icon.svg"
                alt="Close"
                width={48}
                height={48}
                className="size-full"
              />
            </button>

            {/* Title Section */}
            <div className="box-border flex items-start justify-start px-[50px] py-2.5 pt-[60px] mobile:px-6 mobile:pt-12">
              <div className="flex flex-col gap-3 grow items-start justify-start relative">
                <h1 
                  id="modal-title"
                  className="font-eb-garamond font-normal text-black text-[48px] leading-[1.1] tracking-[-0.96px] w-full mobile:text-3xl"
                >
                  {selectedLeader.name}
                </h1>
                <h2 className="font-eb-garamond font-normal text-black text-[24px] leading-[1.1] tracking-[-0.48px] w-full mobile:text-xl">
                  {selectedLeader.title}
                </h2>
              </div>
            </div>

            {/* Main Content Section */}
            <div className="flex gap-10 items-start justify-start px-[50px] pt-[60px] pb-[50px] mobile:flex-col mobile:px-6 mobile:pt-8 mobile:pb-8 mobile:gap-6">
              {/* Profile Image */}
              <div className="bg-[rgba(17,17,17,0.2)] h-[227px] shrink-0 w-[363px] bg-center bg-cover mobile:w-full mobile:h-[200px]">
                <Image
                  src={selectedLeader.image}
                  alt={selectedLeader.name}
                  width={363}
                  height={227}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text Content */}
              <div className="flex flex-col gap-14 items-start justify-center max-w-[635px] relative mobile:max-w-none">
                <div className="flex flex-col gap-4 items-start justify-start relative">
                  <div className="font-rethink-sans font-normal leading-[1.5] relative text-[#111111] text-[20px] tracking-[-0.6px] mobile:text-lg">
                    <div dangerouslySetInnerHTML={{ __html: selectedLeader.biography }} />
                  </div>
                </div>

                {/* Learn More Button */}
                {selectedLeader.learnMoreUrl && (
                  <div className="bg-[#111111] relative rounded-[50px] shrink-0">
                    <a
                      href={selectedLeader.learnMoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="box-border flex flex-col items-center justify-center overflow-clip px-[22px] py-2.5 relative"
                    >
                      <span className="font-rethink-sans font-medium leading-[1.5] relative shrink-0 text-[15px] text-white tracking-[-0.3px]">
                        Learn more
                      </span>
                    </a>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}