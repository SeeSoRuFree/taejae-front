'use client'

import Image from 'next/image'

export function EuropeGrandTourImage() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-[1440px] mx-auto">
        {/* 이미지 컨테이너 - 피그마 디자인과 동일한 구조 */}
        <div className="relative w-full h-[450px] mobile:h-[300px] tablet:h-[380px] overflow-hidden">
          {/* 배경 이미지 - 전체적인 분위기 연출 */}
          <div 
            className="absolute left-[-10px] top-[-698px] w-[1460px] h-[2140px] bg-center bg-cover bg-no-repeat mobile:left-[-5px] mobile:top-[-400px] mobile:w-[110%] mobile:h-[1200px] tablet:left-[-8px] tablet:top-[-550px] tablet:w-[105%] tablet:h-[1600px]"
            style={{
              backgroundImage: `url('/assets/europe-grand-tour-bg.png')`
            }}
          />
          
          {/* 메인 이미지 - 중앙 정렬 및 적절한 크기 조정 */}
          <div 
            className="absolute left-0 w-full h-[631px] bg-no-repeat mobile:h-[400px] tablet:h-[500px]"
            style={{
              top: 'calc(50% - 144.5px)',
              backgroundImage: `url('/assets/europe-grand-tour-main.png')`,
              backgroundPosition: '50.02% 0%',
              backgroundSize: '100.01% 107.92%'
            }}
          />
        </div>
      </div>
    </section>
  )
}
