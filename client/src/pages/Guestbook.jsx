import { useState, useEffect, useCallback } from 'react'
import MessageCard from '../components/MessageCard'

export default function Guestbook() {
  const [messages, setMessages] = useState([])
  const [loading, setLoading] = useState(true)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [successMsg, setSuccessMsg] = useState('')

  const [form, setForm] = useState({
    name: '',
    graduation_year: '',
    content: '',
  })

  const fetchMessages = useCallback(async () => {
    try {
      const res = await fetch('/api/messages')
      const data = await res.json()
      setMessages(data)
    } catch {
      // silently fail
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchMessages()
  }, [fetchMessages])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setSuccessMsg('')

    if (!form.name.trim() || !form.graduation_year || !form.content.trim()) {
      setError('请填写所有字段')
      return
    }

    const year = parseInt(form.graduation_year)
    if (year < 1997 || year > 2026) {
      setError('毕业年份需在 1997-2026 之间')
      return
    }

    setSubmitting(true)
    try {
      const res = await fetch('/api/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || '提交失败')
      }

      setForm({ name: '', graduation_year: '', content: '' })
      setSuccessMsg('感谢你的留言！你的回忆已被珍藏。')
      fetchMessages()
    } catch (err) {
      setError(err.message || '提交失败，请稍后再试')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="animate-fade-in">
      {/* Header */}
      <section className="py-16 px-4 text-center">
        <h1 className="font-display text-3xl md:text-5xl text-deep-brown mb-4">
          寄语留言墙
        </h1>
        <p className="text-soft-brown max-w-2xl mx-auto text-base md:text-lg">
          无论你离开多久，欢欢幼儿园永远是你童年记忆中最温暖的一页。
          留下你的名字和寄语，让这份思念汇聚成属于我们的"繁星墙"。
        </p>
      </section>

      {/* Form Section */}
      <section className="pb-12 px-4">
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="card p-6 md:p-8 space-y-5">
            <h3 className="font-serif text-xl font-bold text-deep-brown text-center mb-2">
              ✍️ 写下你的想念
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-soft-brown mb-1.5">
                  你的名字
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="如：小明"
                  className="w-full px-4 py-3 rounded-2xl border border-border-cream bg-cream text-deep-brown placeholder:text-soft-brown/40 focus:outline-none focus:ring-2 focus:ring-warm-wood/30 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-soft-brown mb-1.5">
                  毕业年份
                </label>
                <select
                  value={form.graduation_year}
                  onChange={(e) => setForm({ ...form, graduation_year: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl border border-border-cream bg-cream text-deep-brown focus:outline-none focus:ring-2 focus:ring-warm-wood/30 transition-all appearance-none"
                >
                  <option value="">请选择毕业年份</option>
                  {Array.from({ length: 30 }, (_, i) => 1997 + i).map((y) => (
                    <option key={y} value={y}>
                      {y} 届
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-soft-brown mb-1.5">
                你想说的话
              </label>
              <textarea
                value={form.content}
                onChange={(e) => setForm({ ...form, content: e.target.value })}
                placeholder="写下你对幼儿园的回忆、感谢或祝福..."
                rows={4}
                maxLength={500}
                className="w-full px-4 py-3 rounded-2xl border border-border-cream bg-cream text-deep-brown placeholder:text-soft-brown/40 focus:outline-none focus:ring-2 focus:ring-warm-wood/30 transition-all resize-none"
              />
              <div className="flex justify-between items-center mt-1">
                <span className="text-xs text-soft-brown/50">{form.content.length}/500</span>
              </div>
            </div>

            {error && (
              <div className="text-sm text-red-500 bg-red-50 px-4 py-2.5 rounded-2xl">
                {error}
              </div>
            )}

            {successMsg && (
              <div className="text-sm text-emerald-600 bg-emerald-50 px-4 py-2.5 rounded-2xl">
                {successMsg}
              </div>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="btn-primary w-full text-center flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {submitting ? (
                <>
                  <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  提交中...
                </>
              ) : (
                <>
                  <span>💌</span>
                  留下寄语
                </>
              )}
            </button>
          </form>
        </div>
      </section>

      {/* Decorative separator */}
      <div className="decorative-line max-w-4xl mx-auto" />

      {/* Messages Wall */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="section-title mb-2">🌟 繁星墙</h2>
            <p className="text-soft-brown/70 text-sm">
              {messages.length > 0
                ? `已有 ${messages.length} 位毕业生留下了他们的回忆`
                : '暂无留言，来做第一个留下寄语的人吧'}
            </p>
          </div>

          {loading ? (
            <div className="text-center py-20">
              <div className="inline-flex items-center gap-2 text-soft-brown/60">
                <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                加载中...
              </div>
            </div>
          ) : messages.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-6xl mb-4">💌</p>
              <p className="text-soft-brown text-lg">还没有人留言</p>
              <p className="text-soft-brown/60 text-sm mt-2">成为第一个留下寄语的人吧！</p>
            </div>
          ) : (
            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
              {messages.map((msg) => (
                <div key={msg.id} className="break-inside-avoid">
                  <MessageCard message={msg} />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
