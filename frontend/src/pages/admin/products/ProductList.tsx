export default function ProductList() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-heading2 font-heading text-nike-black">Products</h1>
        <a
          href="/admin/products/new"
          className="rounded-pill bg-nike-black px-6 py-3 text-sm font-medium text-white hover:bg-text-secondary transition-colors"
        >
          Add Product
        </a>
      </div>
    </div>
  )
}
