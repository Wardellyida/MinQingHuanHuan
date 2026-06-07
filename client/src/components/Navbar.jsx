import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { to: '/', label: '首页', emoji: '🏠' },
  { to: '/gallery', label: '时光相册', emoji: '📷' },
  { to: '/guestbook', label: '寄语留言', emoji: '💌' },
]

export default function Navbar() {
  const { pathname } = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-cream/80 backdrop-blur-lg border-b border-border-cream/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 group">
            <img src="/logos/HH_logo.svg" alt="欢欢幼儿园" className="h-10 w-10 rounded-xl shadow-sm group-hover:scale-110 transition-transform" />
            <span className="font-display text-xl text-deep-brown hidden sm:block">
              欢欢幼儿园
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(({ to, label, emoji }) => (
              <Link
                key={to}
                to={to}
                className={`px-5 py-2 rounded-2xl text-sm font-medium transition-all duration-200 ${
                  pathname === to
                    ? 'bg-warm-wood/15 text-warm-brown'
                    : 'text-soft-brown hover:bg-warm-wood/8 hover:text-deep-brown'
                }`}
              >
                <span className="mr-1.5">{emoji}</span>
                {label}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-xl hover:bg-warm-wood/10 transition-colors"
            aria-label="菜单"
          >
            <svg className="w-6 h-6 text-deep-brown" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden pb-4 border-t border-border-cream/30 animate-fade-in">
            {navLinks.map(({ to, label, emoji }) => (
              <Link
                key={to}
                to={to}
                onClick={() => setMenuOpen(false)}
                className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                  pathname === to
                    ? 'bg-warm-wood/15 text-warm-brown'
                    : 'text-soft-brown hover:bg-warm-wood/8'
                }`}
              >
                <span className="mr-2">{emoji}</span>
                {label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
