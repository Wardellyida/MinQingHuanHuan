export default function MessageCard({ message }) {
  const colors = [
    'border-l-rose-200 bg-rose-50/40',
    'border-l-amber-200 bg-amber-50/40',
    'border-l-emerald-200 bg-emerald-50/40',
    'border-l-sky-200 bg-sky-50/40',
    'border-l-violet-200 bg-violet-50/40',
    'border-l-orange-200 bg-orange-50/40',
  ]

  const colorClass = colors[message.id % colors.length]

  return (
    <div className={`card p-5 border-l-4 ${colorClass} animate-slide-up`}>
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-warm-wood/15 flex items-center justify-center font-display text-lg text-warm-brown">
            {message.name.charAt(0)}
          </div>
          <div>
            <h4 className="font-medium text-deep-brown">{message.name}</h4>
            <span className="text-xs text-warm-wood bg-warm-wood/10 px-2 py-0.5 rounded-full">
              {message.graduation_year}届
            </span>
          </div>
        </div>
        <time className="text-xs text-soft-brown/60">
          {new Date(message.created_at).toLocaleDateString('zh-CN', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </time>
      </div>
      <p className="text-sm text-soft-brown leading-relaxed">
        {message.content}
      </p>
    </div>
  )
}
