import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-deep-brown text-cream/80 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/logos/HH_logo.svg" alt="欢欢幼儿园" className="h-10 w-10 rounded-xl" />
              <span className="font-display text-xl text-cream">欢欢幼儿园</span>
            </div>
            <p className="text-sm leading-relaxed text-cream/60">
              1997 — 2026<br />
              福建省闽清县梅溪镇<br />
              三十载童心，终成繁星
            </p>
          </div>

          <div>
            <h4 className="font-medium text-cream mb-4">页面导航</h4>
            <div className="flex flex-col gap-2 text-sm text-cream/60">
              <Link to="/" className="hover:text-cream transition-colors">🏠 首页</Link>
              <Link to="/gallery" className="hover:text-cream transition-colors">📷 时光相册</Link>
              <Link to="/guestbook" className="hover:text-cream transition-colors">💌 寄语留言</Link>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-cream mb-4">关于本站</h4>
            <p className="text-sm leading-relaxed text-cream/60">
              本站为欢欢幼儿园三十周年纪念留存而建。感谢每一位在这里度过童年的孩子，感谢每一位辛勤付出的老师，感谢每一位信任我们的家长。
            </p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-cream/10 text-center text-sm text-cream/40">
           欢欢幼儿园 · 1997 — 2026 · 三十载童心，终成繁星
        </div>
      </div>
    </footer>
  )
}
