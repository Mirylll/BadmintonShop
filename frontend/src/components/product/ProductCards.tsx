import yonexDuoraZStrike from '@/assets/images/rackets/yonex_duora_z_strike.png'
import yonexAstrox100zzKurenai from '@/assets/images/rackets/yonex_astrox_100zz_kurenai.png'
import victorThrusterRyugaMetallic from '@/assets/images/rackets/victor_thruster_ryuga_metallic.png'
import victorArs90KMetallic from '@/assets/images/rackets/victor_ars_90k_metallic.png'

const products = [
  {
    name: 'Yonex Duora Z-Strike',
    image: yonexDuoraZStrike,
    category: 'Vợt cầu lông',
    price: '4.990.000₫',
  },
  {
    name: 'Yonex Astrox 100ZZ Kurenai',
    image: yonexAstrox100zzKurenai,
    category: 'Vợt cầu lông',
    price: '5.790.000₫',
  },
  {
    name: 'Victor Thruster Ryuga Metallic',
    image: victorThrusterRyugaMetallic,
    category: 'Vợt cầu lông',
    price: '4.690.000₫',
  },
  {
    name: 'Victor Auraspeed 90K Metallic',
    image: victorArs90KMetallic,
    category: 'Vợt cầu lông',
    price: '4.390.000₫',
  },
]

export default function ProductCards() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1920px] px-4 md:px-6 lg:px-8 py-8 lg:py-10">
        <div className="flex items-center justify-between mb-6 lg:mb-8">
          <h2 className="text-heading-1 font-heading text-text-primary">
            Best Sellers
          </h2>
          <span className="text-[16px] font-body-medium text-text-secondary hidden md:block">
            Shop All →
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
          {products.map((product) => (
            <a key={product.name} href="#" className="group block bg-white">
              <div className="aspect-[3/4] overflow-hidden bg-white">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-3 lg:mt-4 space-y-1">
                <h3 className="text-[16px] font-body-medium text-text-primary leading-[1.50]">
                  {product.name}
                </h3>
                <p className="text-[14px] font-body-medium text-text-secondary leading-[1.50]">
                  {product.category}
                </p>
                <p className="text-[14px] font-body-medium text-text-secondary leading-[1.50]">
                  {product.price}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
