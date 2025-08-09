'use client'

import { Locale } from '@/lib/types/locale'
import { WhatLearnHero } from './academics/what-learn-hero'
import { InnovationFoundations } from './academics/innovation-foundations'
import { FutureConvergence } from './academics/future-convergence'
import { CompetenciesSection } from './academics/competencies-section'

interface WhatLearnProps {
  locale: Locale
}

export function WhatLearn({ locale }: WhatLearnProps) {
  return (
    <div className="w-full">
      <WhatLearnHero locale={locale} />
      <CompetenciesSection locale={locale} />
      <InnovationFoundations locale={locale} />
      <FutureConvergence locale={locale} />
    </div>
  )
}
