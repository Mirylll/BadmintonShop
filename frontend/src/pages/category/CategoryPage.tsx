import { Link } from 'react-router-dom'

const categoryNames: Record<string, string> = {
  rackets: 'Rackets',
  shoes: 'Shoes',
  shirts: 'Shirts',
  shorts: 'Shorts',
  skirts: 'Skirts',
  bags: 'Bags',
  backpacks: 'Backpacks',
  accessories: 'Accessories',
}

interface Props {
  category?: string
}

export default function CategoryPage({ category }: Props) {
  const title = category ? categoryNames[category] ?? category.replace(/-/g, ' ') : 'Category'

  return (
    <div className="mx-auto max-w-[1920px] px-4 py-8 md:px-6 lg:px-8">
      <h1 className="text-heading1 font-heading text-nike-black">{title}</h1>
      <p className="mt-4 text-text-secondary font-body text-[16px]">
        Browse our collection of {title.toLowerCase()}.
      </p>
      <Link
        to="/shop"
        className="mt-6 inline-block text-text-primary font-body-medium underline hover:text-text-secondary transition-colors"
      >
        View all products →
      </Link>
    </div>
  )
}
