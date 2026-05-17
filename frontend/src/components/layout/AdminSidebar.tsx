import { NavLink } from 'react-router-dom'

const navItems = [
  { to: '/admin/dashboard', label: 'Dashboard' },
  { to: '/admin/products', label: 'Products' },
  { to: '/admin/orders', label: 'Orders' },
  { to: '/admin/categories', label: 'Categories' },
  { to: '/admin/users', label: 'Users' },
  { to: '/admin/chat', label: 'AI Chat' },
]

export default function AdminSidebar() {
  return (
    <aside className="flex w-64 flex-col bg-nike-black text-white">
      <div className="flex h-16 items-center justify-center border-b border-dark-hover">
        <span className="text-lg font-bold">Admin Panel</span>
      </div>
      <nav className="flex-1 space-y-1 p-4">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `block rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-white/10 text-white'
                  : 'text-text-disabled hover:bg-white/5 hover:text-white'
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
      <div className="border-t border-dark-hover p-4">
        <a href="/" className="text-sm text-text-disabled hover:text-white transition-colors">
          ← Back to Store
        </a>
      </div>
    </aside>
  )
}
