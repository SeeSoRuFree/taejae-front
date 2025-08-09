import { FC } from 'react'

interface SquadMemberCardProps {
  name: string
  classYear: string
  image: string
  topic: string
}

export const SquadMemberCard: FC<SquadMemberCardProps> = ({ name, classYear, image, topic }) => {
  return (
    <div className="cursor-pointer flex-none w-[262px]">
      <div className="flex flex-col gap-4">
        <div className="relative overflow-hidden rounded-[24px]">
          <div
            className="aspect-square rounded-[24px] bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
          />
        </div>
        <div className="flex flex-col gap-2 px-1">
          <div>
            <h3 className="text-xl font-['Instrument_Sans'] font-medium text-black">{name}</h3>
            <p className="text-base text-gray-600 font-['Instrument_Sans']">{classYear}</p>
          </div>
          <p className="text-sm leading-[1.4] font-['Instrument_Sans'] text-gray-800">{topic}</p>
        </div>
      </div>
    </div>
  )
}
