export default function AdminTopbar() {
  return (
    <header className="flex h-16 items-center justify-between border-b border-border-secondary bg-white px-6">
      <h2 className="text-lg font-medium text-text-primary">Admin</h2>
      <div className="flex items-center gap-4">
        <button className="rounded-pill bg-nike-black px-4 py-2 text-sm font-medium text-white hover:bg-text-secondary transition-colors">
          Logout
        </button>
      </div>
    </header>
  )
}
