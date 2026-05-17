import { useState } from 'react'

const navLinks = [
  { label: 'Rackets', path: '/rackets' },
  { label: 'Shoes', path: '/shoes' },
  { label: 'Shirts', path: '/shirts' },
  { label: 'Shorts', path: '/shorts' },
  { label: 'Skirts', path: '/skirts' },
  { label: 'Bags', path: '/bags' },
  { label: 'Backpacks', path: '/backpacks' },
  { label: 'Accessories', path: '/accessories' },
]


function SearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#707072" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <path d="M21 21L16.65 16.65" />
    </svg>
  )
}

function CartIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 2L3 6V20C3 20.5304 3.21071 21.0391 3.58579 21.4142C3.96086 21.7893 4.46957 22 5 22H19C19.5304 22 20.0391 21.7893 20.4142 21.4142C20.7893 21.0391 21 20.5304 21 20V6L18 2H6Z" />
      <path d="M3 6H21" />
      <path d="M16 10C16 11.0609 15.5786 12.0783 14.8284 12.8284C14.0783 13.5786 13.0609 14 12 14C10.9391 14 9.92172 13.5786 9.17157 12.8284C8.42143 12.0783 8 11.0609 8 10" />
    </svg>
  )
}

function UserIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" />
      <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" />
    </svg>
  )
}

function HamburgerIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#111111" strokeWidth="1.5" strokeLinecap="round">
      <path d="M3 6H21" />
      <path d="M3 12H21" />
      <path d="M3 18H21" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#111111" strokeWidth="1.5" strokeLinecap="round">
      <path d="M18 6L6 18" />
      <path d="M6 6L18 18" />
    </svg>
  )
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white">
      {/* Promo banner */}
      <div className="bg-nike-black py-[3px] text-center">
        <p className="text-[12px] font-body-medium text-white leading-[1.50]">
          Free shipping on orders over $50
        </p>
      </div>

      {/* Main nav */}
      <nav className="mx-auto flex h-[60px] max-w-[1920px] items-center justify-between px-4 md:px-6 lg:px-8">
        {/* Left: Logo */}
        <a href="/" className="flex items-center gap-2 shrink-0">
          <img src="/logo.svg" alt="Badminton Store" className="h-10 w-7" />
          <span className="text-[18px] font-bold text-text-primary tracking-[0.02em]">
            Miruri Shop
          </span>
        </a>

        {/* Center: Nav links */}
        <div className="hidden nav:flex items-center justify-center gap-5 xl:gap-6 flex-1 mx-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.path}
              className="text-[16px] font-body-medium text-text-primary whitespace-nowrap hover:text-text-secondary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right: Search + Icons */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Search */}
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search"
              className="w-[160px] xl:w-[220px] bg-light-gray rounded-input-search pl-4 pr-10 py-[7px] text-[16px] font-body text-text-primary placeholder-text-secondary outline-none focus:border focus:border-border-active focus:ring-2 focus:ring-[rgba(39,93,197,1)] transition-all"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
              <SearchIcon />
            </div>
          </div>

          {/* Cart */}
          <button className="p-[6px] rounded-full hover:bg-light-gray transition-colors" aria-label="Cart">
            <CartIcon />
          </button>

          {/* User */}
          <button className="p-[6px] rounded-full hover:bg-light-gray transition-colors" aria-label="Account">
            <UserIcon />
          </button>

          {/* Hamburger */}
          <button
            className="nav:hidden p-[6px] rounded-full hover:bg-light-gray transition-colors"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Menu"
          >
            <HamburgerIcon />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      {mobileMenuOpen && (
        <div className="nav:hidden fixed inset-0 z-50 bg-white flex flex-col">
          <div className="flex items-center justify-end px-4 h-[60px]">
            <button
              className="p-[6px] rounded-full hover:bg-light-gray transition-colors"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <CloseIcon />
            </button>
          </div>
          <div className="flex flex-col items-center justify-center flex-1 gap-8 px-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.path}
                className="text-[24px] font-heading text-text-primary hover:text-text-secondary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
