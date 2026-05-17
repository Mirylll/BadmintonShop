import { useState } from 'react'
import yonexDuoraZStrike from '@/assets/images/rackets/yonex_duora_z_strike.png'
import yonexAstrox100zzKurenai from '@/assets/images/rackets/yonex_astrox_100zz_kurenai.png'
import victorThrusterRyugaMetallic from '@/assets/images/rackets/victor_thruster_ryuga_metallic.png'
import victorArs90KMetallic from '@/assets/images/rackets/victor_ars_90k_metallic.png'

function RefreshIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 4V10H7" />
      <path d="M23 20V14H17" />
      <path d="M20.49 9C19.9828 7.56678 19.1209 6.2854 17.9846 5.27541C16.8482 4.26542 15.4745 3.5606 13.9917 3.22677C12.5089 2.89294 10.9652 2.94153 9.50481 3.36825C8.04437 3.79497 6.71472 4.58533 5.64 5.64L1 10M23 14L18.36 18.36C17.2853 19.4147 15.9556 20.205 14.4952 20.6317C13.0348 21.0585 11.4911 21.1071 10.0083 20.7732C8.52547 20.4394 7.1518 19.7346 6.01544 18.7246C4.87908 17.7146 4.01717 16.4332 3.51 15" />
    </svg>
  )
}

function ArrowLeftIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 12H5" />
      <path d="M12 19L5 12L12 5" />
    </svg>
  )
}

function ArrowRightIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12H19" />
      <path d="M12 5L19 12L12 19" />
    </svg>
  )
}

const rackets = [
  {
    name: 'Yonex Duora Z-Strike',
    image: yonexDuoraZStrike,
    description:
      "The Yonex Duora Z-Strike stands out as one of Yonex's most successful rackets for all-around play, excelling in lightning-fast offensive opportunities that leave opponents on the other side of the court with no time to react.",
    specs: [
      { label: 'Racket Length:', value: '675 mm' },
      { label: 'Playing Style:', value: 'All-round (offensive and defensive)' },
      { label: 'Shaft Flexibility:', value: 'Extra stiff' },
      { label: 'Balance Point:', value: 'Slightly head-heavy' },
      { label: 'Suitable For:', value: 'Singles and doubles' },
      { label: 'Weight:', value: '2U (90-94g), 3U (85-89g)' },
    ],
    sizes: [
      { label: '2UG4', selected: true },
      { label: '3UG5', selected: false },
    ],
  },
  {
    name: 'Yonex Astrox 100ZZ Kurenai',
    image: yonexAstrox100zzKurenai,
    description:
      'The Yonex Astrox 100ZZ Kurenai is the weapon of choice for elite offensive players, engineered for explosive smashes and aggressive net play. Its head-heavy balance and extra stiff shaft deliver maximum power transfer, making it the preferred racket of world-class singles players.',
    specs: [
      { label: 'Racket Length:', value: '675 mm' },
      { label: 'Playing Style:', value: 'Offensive' },
      { label: 'Shaft Flexibility:', value: 'Extra stiff' },
      { label: 'Balance Point:', value: 'Head-heavy' },
      { label: 'Suitable For:', value: 'Singles' },
      { label: 'Weight:', value: '2U (83-87g), 3U (80-84g)' },
    ],
    sizes: [
      { label: '2UG5', selected: true },
      { label: '3UG5', selected: false },
    ],
  },
  {
    name: 'Victor Thruster Ryuga Metallic',
    image: victorThrusterRyugaMetallic,
    description:
      'The Victor Thruster Ryuga Metallic, the weapon of choice for Lee Zii Jia, features innovative Metallic Carbon Fiber technology for explosive power and devastating smashes. Its head-heavy balance and extra stiff shaft deliver unparalleled attacking performance for elite offensive players.',
    specs: [
      { label: 'Racket Length:', value: '675 mm' },
      { label: 'Playing Style:', value: 'Offensive' },
      { label: 'Shaft Flexibility:', value: 'Extra stiff' },
      { label: 'Balance Point:', value: 'Head-heavy' },
      { label: 'Suitable For:', value: 'Singles' },
      { label: 'Weight:', value: '3U (85-89g), 4U (80-84g)' },
    ],
    sizes: [
      { label: '3UG5', selected: true },
      { label: '4UG5', selected: false },
    ],
  },
  {
    name: 'Victor Auraspeed 90K Metallic',
    image: victorArs90KMetallic,
    description:
      'The Victor Auraspeed 90K Metallic is the even-balance speed racket of Anders Antonsen, offering a perfect blend of speed, power, and precision. Its stiff flex ensures accuracy while the Metallic Carbon Fiber frame delivers a unique elastic feel for exceptional control in fast-paced rallies.',
    specs: [
      { label: 'Racket Length:', value: '675 mm' },
      { label: 'Playing Style:', value: 'All-round' },
      { label: 'Shaft Flexibility:', value: 'Stiff' },
      { label: 'Balance Point:', value: 'Even balance' },
      { label: 'Suitable For:', value: 'Singles and doubles' },
      { label: 'Weight:', value: '3U (85-89g), 4U (80-84g)' },
    ],
    sizes: [
      { label: '3UG5', selected: true },
      { label: '4UG5', selected: false },
    ],
  },
]


export default function FeaturedRackets() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const racket = rackets[currentIndex]

  const goPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? rackets.length - 1 : prev - 1))
  }

  const goNext = () => {
    setCurrentIndex((prev) => (prev === rackets.length - 1 ? 0 : prev + 1))
  }

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1920px] px-4 md:px-6 lg:px-8 pt-8 lg:pt-10 pb-5 lg:pb-[30px]">
        {/* Section title */}
        <h2 className="text-heading-1 font-heading text-text-primary mb-6 lg:mb-8">
          Featured Rackets
        </h2>

        {/* 3-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1.4fr_1.3fr] gap-6 lg:gap-4 xl:gap-6">
          {/* LEFT COLUMN: Specs */}
          <div className="flex flex-col justify-between">
            <div>
              {/* Product name */}
              <h3 className="text-heading-2 font-heading text-text-primary mb-4">
                {racket.name}
              </h3>

              {/* Spec list */}
              <div className="space-y-3">
                {racket.specs.map((spec) => (
                  <div key={spec.label} className="flex flex-col">
                    <span className="text-[16px] font-body-medium text-text-primary leading-[1.75]">
                      {spec.label}
                    </span>
                    <span className="text-[16px] font-body text-text-secondary leading-[1.75]">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Size selector */}
            <div className="mt-4">
              <p className="text-[14px] font-body-medium text-text-secondary mb-3 leading-[1.50]">
                Select Size
              </p>
              <div className="flex gap-3">
                {racket.sizes.map((size) => (
                  <button
                    key={size.label}
                    className={
                      size.selected
                        ? 'bg-nike-black text-white rounded-pill px-6 py-3 text-[16px] font-body-medium leading-[1.50] transition-colors hover:bg-text-secondary focus:outline-none focus:ring-2 focus:ring-[rgba(39,93,197,1)]'
                        : 'bg-transparent text-text-primary border-[1.5px] border-border-secondary rounded-pill px-6 py-3 text-[16px] font-body-medium leading-[1.50] transition-colors hover:border-border-primary hover:bg-hover-gray focus:outline-none focus:ring-2 focus:ring-[rgba(39,93,197,1)]'
                    }
                  >
                    {size.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* CENTER COLUMN: Product Image */}
          <div className="flex flex-col h-full">
            <div className="flex-1 flex items-center justify-center w-full min-h-0">
              <div className="w-full max-w-[360px] aspect-[3/4]">
                <img
                  src={racket.image}
                  alt={racket.name}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Refresh icon buttons */}
            <div className="flex items-center justify-center gap-3 mt-2 shrink-0">
              <button className="bg-light-gray rounded-full p-[6px] hover:bg-hover-gray transition-colors focus:outline-none focus:ring-2 focus:ring-[rgba(39,93,197,1)]" aria-label="Rotate left">
                <RefreshIcon />
              </button>
              <button className="bg-light-gray rounded-full p-[6px] hover:bg-hover-gray transition-colors focus:outline-none focus:ring-2 focus:ring-[rgba(39,93,197,1)]" aria-label="Rotate right">
                <div className="scale-x-[-1]">
                  <RefreshIcon />
                </div>
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN: Description + Arrows */}
          <div className="flex flex-col justify-end">
            <div>
              <p className="text-[16px] font-body text-text-secondary leading-[1.75]">
                {racket.description}
              </p>
            </div>
            <div className="flex items-center gap-3 mt-4 self-end">
              <button
                className="bg-light-gray rounded-full p-[10px] hover:bg-hover-gray transition-colors focus:outline-none focus:ring-2 focus:ring-[rgba(39,93,197,1)]"
                aria-label="Previous"
                onClick={goPrev}
              >
                <ArrowLeftIcon />
              </button>
              <button
                className="bg-light-gray rounded-full p-[10px] hover:bg-hover-gray transition-colors focus:outline-none focus:ring-2 focus:ring-[rgba(39,93,197,1)]"
                aria-label="Next"
                onClick={goNext}
              >
                <ArrowRightIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
