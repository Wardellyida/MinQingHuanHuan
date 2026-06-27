import { useEffect, useCallback } from 'react'

export default function PhotoModal({ photo, onClose }) {
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'Escape') onClose()
    },
    [onClose]
  )

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [handleKeyDown])

  if (!photo) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-backdrop bg-deep-brown/60 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative max-w-3xl w-full max-h-[90vh] overflow-y-auto bg-warm-white rounded-3xl shadow-soft-lg animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-cream/90 hover:bg-cream rounded-full flex items-center justify-center text-deep-brown shadow-soft transition-all hover:scale-110"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="aspect-[4/3] overflow-hidden rounded-t-3xl">
          <img
            src={photo.src}
            alt={photo.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-6 md:p-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-medium px-3 py-1 bg-warm-wood/10 text-warm-brown rounded-full">
              {photo.year}
            </span>
            <h3 className="font-serif text-2xl font-bold text-deep-brown">
              {photo.title}
            </h3>
          </div>
          {/* TODO: 待补充故事详情 */}
          {/* <p className="text-soft-brown leading-relaxed text-base">
            {photo.story}
          </p> */}
        </div>
      </div>
    </div>
  )
}
