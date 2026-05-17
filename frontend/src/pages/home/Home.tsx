import Hero from '@/components/hero/Hero'
import ProductCards from '@/components/product/ProductCards'
import FeaturedRackets from '@/components/product/FeaturedRackets'

export default function Home() {
  return (
    <div>
      <Hero />
      <FeaturedRackets />
      <ProductCards />
    </div>
  )
}
