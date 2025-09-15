import { Metadata } from 'next'
import { PageLayout } from '@/components/layout/page-layout'
import GovernanceHero from '@/components/sections/about-taejae/governance-hero'
import BoardMembersGrid from '@/components/sections/about-taejae/board-members-grid'

export const metadata: Metadata = {
  title: 'Governance - Board of Trustees | Taejae University',
  description: 'Meet the distinguished members of Taejae University Board of Trustees who guide our institution with wisdom and vision.',
}

export default function GovernancePage() {
  return (
    <PageLayout>
      <GovernanceHero />
      <BoardMembersGrid />
    </PageLayout>
  )
}
