'use client'

import { useLocaleStore } from '@/lib/store/locale-store'
import koMessages from '@/messages/ko.json'
import enMessages from '@/messages/en.json'
import ActivityCard from '@/components/ui/activity-card'

export default function ActivityGrid() {
  const { locale } = useLocaleStore()
  
  // Direct access to translation data
  const messages = locale === 'ko' ? koMessages : enMessages
  const pursuitData = messages.academics?.studentLife?.pursuitOfHappiness || {
    activities: {
      sportsMonster1: { title: 'Sports Monster' },
      sportsMonster2: { title: 'Sports Monster' },
      operaTour: { title: 'Opera Tour' },
      bandPerformance: { title: 'Band Performance' },
      shamisenLesson: { title: 'Japan Shamisen lesson' },
      teamActivity: { title: 'Team activity' }
    }
  }

  const activities = [
    {
      id: 'sports-monster-1',
      title: pursuitData.activities?.sportsMonster1?.title || 'Sports Monster',
      image: '/assets/sports-monster-1.png',
      imageAlt: 'Students playing sports behind a fence'
    },
    {
      id: 'sports-monster-2', 
      title: pursuitData.activities?.sportsMonster2?.title || 'Sports Monster',
      image: '/assets/sports-monster-2.png',
      imageAlt: 'Students in green uniforms sitting together'
    },
    {
      id: 'opera-tour',
      title: pursuitData.activities?.operaTour?.title || 'Opera Tour',
      image: '/assets/opera-tour.png',
      imageAlt: 'Students attending an opera performance'
    },
    {
      id: 'band-performance',
      title: pursuitData.activities?.bandPerformance?.title || 'Band Performance',
      image: '/assets/band-performance.png',
      imageAlt: 'Student band performing on stage'
    },
    {
      id: 'shamisen-lesson',
      title: pursuitData.activities?.shamisenLesson?.title || 'Japan Shamisen lesson',
      image: '/assets/shamisen-lesson.png',
      imageAlt: 'Students learning traditional Japanese shamisen'
    },
    {
      id: 'team-activity',
      title: pursuitData.activities?.teamActivity?.title || 'Team activity',
      image: '/assets/team-activity.png',
      imageAlt: 'Students doing team building activities'
    }
  ]

  return (
    <section className="w-full bg-white">
      <div className="max-w-[1440px] mx-auto px-[50px] pb-[100px] mobile:px-6 mobile:pb-16">
        {/* First Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14 justify-items-center">
          {activities.slice(0, 3).map((activity) => (
            <ActivityCard
              key={activity.id}
              title={activity.title}
              image={activity.image}
              imageAlt={activity.imageAlt}
            />
          ))}
        </div>
        
        {/* Second Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center">
          {activities.slice(3, 6).map((activity) => (
            <ActivityCard
              key={activity.id}
              title={activity.title}
              image={activity.image}
              imageAlt={activity.imageAlt}
            />
          ))}
        </div>
      </div>
    </section>
  )
}