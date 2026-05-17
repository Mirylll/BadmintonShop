export default function CategoryList() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-heading2 font-heading text-nike-black">Categories</h1>
        <a
          href="/admin/categories/new"
          className="rounded-pill bg-nike-black px-6 py-3 text-sm font-medium text-white hover:bg-text-secondary transition-colors"
        >
          Add Category
        </a>
      </div>
    </div>
  )
}
