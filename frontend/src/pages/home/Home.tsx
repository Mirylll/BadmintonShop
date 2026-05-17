import HeroCategories from '@/components/hero/HeroCategories'
import ProductCards from '@/components/product/ProductCards'
import FeaturedRackets from '@/components/product/FeaturedRackets'

export default function Home() {
  return (
    <div>
      <HeroCategories />
      <FeaturedRackets />
      <ProductCards />
    </div>
  )
}
