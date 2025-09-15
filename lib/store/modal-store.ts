import { create } from 'zustand'

interface LeaderData {
  id: string
  name: string
  title: string
  image: string
  biography: string
  learnMoreUrl?: string
}

interface ModalState {
  isOpen: boolean
  selectedLeader: LeaderData | null
  openModal: (leader: LeaderData) => void
  closeModal: () => void
}

export const useModalStore = create<ModalState>((set) => ({
  isOpen: false,
  selectedLeader: null,
  openModal: (leader) => set({ isOpen: true, selectedLeader: leader }),
  closeModal: () => set({ isOpen: false, selectedLeader: null }),
}))