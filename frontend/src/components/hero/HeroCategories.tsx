import racketsImg from '@/assets/images/categories/rackets.jpg'
import shirtsImg from '@/assets/images/categories/shirts.jpg'
import shoesImg from '@/assets/images/categories/shoes.jpg'
import shortsImg from '@/assets/images/categories/shorts.jpg'
import skirtsImg from '@/assets/images/categories/skirts.jpg'
import backpacksImg from '@/assets/images/categories/backpacks.jpg'
import accessoriesImg from '@/assets/images/categories/accessories.jpg'
import bagsImg from '@/assets/images/categories/bags.jpg'

export default function HeroCategories() {
  return (
    <section className="bg-white pt-5 lg:pt-6">
      <div className="relative flex w-full h-[500px] overflow-hidden">
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/30 z-10 pointer-events-none" />

        {/* Centered hero text */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center pointer-events-none">
          <h1 className="font-display text-display uppercase text-white leading-[0.90]">
            BADMINTON
          </h1>
          <p className="mt-6 text-[16px] font-body-medium text-white leading-[1.75]">
            Your premium badminton gear store
          </p>
        </div>

        {/* Col 1: Rackets (single) */}
        <div className="flex-1 h-full overflow-hidden">
          <img src={racketsImg} alt="Rackets" className="w-full h-full object-cover" />
        </div>

        {/* Col 2: Shirts (top) + Shoes (bottom) stacked */}
        <div className="flex-1 flex flex-col h-full overflow-hidden">
          <div className="h-1/2 overflow-hidden">
            <img src={shirtsImg} alt="Shirts" className="w-full h-full object-cover" />
          </div>
          <div className="h-1/2 overflow-hidden">
            <img src={shoesImg} alt="Shoes" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Col 3: Shorts (top) + Skirts (bottom) stacked */}
        <div className="flex-1 flex flex-col h-full overflow-hidden">
          <div className="h-1/2 overflow-hidden">
            <img src={shortsImg} alt="Shorts" className="w-full h-full object-cover" />
          </div>
          <div className="h-1/2 overflow-hidden">
            <img src={skirtsImg} alt="Skirts" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Col 4: Backpacks (top) + Accessories (bottom) stacked */}
        <div className="flex-1 flex flex-col h-full overflow-hidden">
          <div className="h-1/2 overflow-hidden">
            <img src={backpacksImg} alt="Backpacks" className="w-full h-full object-cover" />
          </div>
          <div className="h-1/2 overflow-hidden">
            <img src={accessoriesImg} alt="Accessories" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Col 5: Bags (single) */}
        <div className="flex-1 h-full overflow-hidden">
          <img src={bagsImg} alt="Bags" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  )
}
