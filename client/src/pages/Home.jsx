import { Link } from 'react-router-dom'
import Timeline from '../components/Timeline'

export default function Home() {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-amber-100/60 via-cream to-cream" />
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-soft-pink/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-soft-green/20 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-warm-wood/10 rounded-full blur-2xl" />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <img
              src="/logos/HH_logo.svg"
              alt="欢欢幼儿园"
              className="w-24 h-24 md:w-32 md:h-32 rounded-3xl shadow-soft-lg"
            />
          </div>

          {/* Main title */}
          <h1 className="font-display text-3xl md:text-5xl lg:text-6xl text-deep-brown mb-4 leading-tight">
            欢欢幼儿园
          </h1>

          <h2 className="font-serif text-xl md:text-3xl lg:text-4xl font-bold text-warm-brown mb-6">
            三十载童心，终成繁星
          </h2>

          <p className="text-soft-brown max-w-2xl mx-auto mb-10 text-base md:text-lg leading-relaxed">
            1997年初，欢欢幼儿园在闽清县梅溪镇悄然诞生。近三十年来，她用爱与温暖陪伴了一代又一代孩子的童年。
            今天，虽然她即将完成历史使命，但每一颗从这里飞出的"小星星"，都将在各自的天空中继续闪耀。
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/gallery" className="btn-primary flex items-center gap-2 text-base">
              <span>📷</span>
              浏览时光相册
            </Link>
            <Link
              to="/guestbook"
              className="px-8 py-3 rounded-2xl font-medium border-2 border-warm-wood/30 text-warm-brown hover:bg-warm-wood/5 transition-all duration-300 flex items-center gap-2 text-base"
            >
              <span>💌</span>
              留下你的寄语
            </Link>
          </div>

          {/* Scroll hint */}
          <div className="mt-16 animate-bounce">
            <svg className="w-6 h-6 mx-auto text-warm-wood/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="card p-8 md:p-12">
            <p className="font-serif text-2xl md:text-3xl text-deep-brown leading-relaxed mb-4">
              "每一个孩子都是一颗星星"
            </p>
            <p className="text-soft-brown leading-relaxed">
              三十年，足够一棵小树长成参天大树；三十年，足够一个孩子从蹒跚学步到为人父母。
              欢欢幼儿园的三十年，是无数个温暖的早晨、无数首童谣、无数张笑脸编织成的故事。
            </p>
            <div className="decorative-line mt-8" />
            <p className="text-warm-wood/70 text-sm font-medium mt-4">
              1997 — 2026 · 福建省闽清县梅溪镇
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-transparent via-amber-50/30 to-transparent">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">
              ⏳ 三十年故事时间轴
            </h2>
            <p className="text-soft-brown/70 text-sm">
              点击每个年份卡片，展开查看详细故事
            </p>
          </div>

          <Timeline />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="card p-10 bg-gradient-to-br from-soft-pink/20 via-cream to-soft-green/10">
            <p className="font-display text-2xl md:text-3xl text-deep-brown mb-4">
              你是否也曾是欢欢的一员？
            </p>
            <p className="text-soft-brown mb-8">
              如果你曾在欢欢幼儿园度过美好的童年时光，请在留言墙留下你的名字和回忆，让这份温暖永远保存下去。
            </p>
            <Link to="/guestbook" className="btn-primary inline-flex items-center gap-2">
              <span>✍️</span>
              写下你的寄语
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
