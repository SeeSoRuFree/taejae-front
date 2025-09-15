'use client'

import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

interface BoardMemberData {
  id: string
  name: string
  role: string
  image: string
  current: string[]
  past: string[]
}

interface BoardMemberModalProps {
  isOpen: boolean
  member: BoardMemberData | null
  onClose: () => void
}

export default function BoardMemberModal({ isOpen, member, onClose }: BoardMemberModalProps) {
  // Handle ESC key to close modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
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
  }, [isOpen, onClose])

  if (!member) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="relative bg-white max-w-[800px] w-full max-h-[90vh] overflow-y-auto m-4 p-[50px] mobile:p-6"
            role="dialog"
            aria-modal="true"
            aria-labelledby="board-modal-title"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
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

            {/* Content Layout */}
            <div className="flex gap-14 items-start justify-start relative w-full mobile:flex-col mobile:gap-8">
              {/* Profile Image */}
              <div className="flex flex-col gap-10 items-start justify-start relative shrink-0">
                <div className="bg-[rgba(17,17,17,0.2)] h-[164px] shrink-0 w-[166px] bg-center bg-cover mobile:w-full mobile:h-[150px]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={166}
                    height={164}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Text Content */}
              <div className="basis-0 flex grow items-start justify-start min-h-px min-w-px relative">
                <div className="basis-0 flex flex-col gap-8 grow items-start justify-start min-h-px min-w-px relative">
                  {/* Name and Role */}
                  <div className="flex flex-col gap-1 items-start justify-start leading-[0] relative w-full">
                    <h1 
                      id="board-modal-title"
                      className="font-eb-garamond font-bold relative text-[#111111] text-[30px] tracking-[-0.6px] w-full leading-[1.3] mobile:text-2xl"
                    >
                      {member.name}
                    </h1>
                    <p className="font-rethink-sans font-normal relative text-black text-[16px] tracking-[-0.48px] w-full leading-[1.5] mobile:text-sm">
                      {member.role}
                    </p>
                  </div>

                  {/* Current Section */}
                  <div className="flex flex-col gap-2 items-start justify-start leading-[0] relative w-full">
                    <div className="inline-grid place-items-start relative w-full">
                      <div className="font-eb-garamond font-bold leading-[1.5] relative text-[#111111] text-[20px] mobile:text-lg">
                        CURRENT
                      </div>
                      <div className="bg-black h-px w-[72px] mt-1" />
                    </div>
                    <div className="font-rethink-sans font-normal relative text-[#111111] text-[16px] tracking-[-0.48px] w-full mobile:text-sm">
                      <ul className="list-disc ml-6 space-y-1">
                        {member.current.map((item, index) => (
                          <li key={index} className="leading-[1.5]">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Past Section */}
                  <div className="flex flex-col gap-2 items-start justify-start leading-[0] relative w-full">
                    <div className="inline-grid place-items-start relative w-full">
                      <div className="font-eb-garamond font-bold leading-[1.5] relative text-[#111111] text-[20px] mobile:text-lg">
                        PAST
                      </div>
                      <div className="bg-black h-px w-[35px] mt-1" />
                    </div>
                    <div className="font-rethink-sans font-normal relative text-[#111111] text-[16px] tracking-[-0.48px] w-full mobile:text-sm">
                      <ul className="list-disc ml-6 space-y-1">
                        {member.past.map((item, index) => (
                          <li key={index} className="leading-[1.5]">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}