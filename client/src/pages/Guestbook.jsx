import GiscusComment from '../components/GiscusComment'

export default function Guestbook() {
  return (
    <div className="animate-fade-in">
      {/* Header */}
      <section className="py-16 px-4 text-center">
        <h1 className="font-display text-3xl md:text-5xl text-deep-brown mb-4">
          寄语留言墙
        </h1>
        <p className="text-soft-brown max-w-2xl mx-auto text-base md:text-lg">
          无论你离开多久，欢欢幼儿园永远是你童年记忆中最温暖的一页。
          在下方留下你的名字和寄语，让这份思念汇聚成属于我们的"繁星墙"。
        </p>
      </section>

      {/* Giscus 评论区 */}
      <section className="pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <GiscusComment />
        </div>
      </section>
    </div>
  )
}
