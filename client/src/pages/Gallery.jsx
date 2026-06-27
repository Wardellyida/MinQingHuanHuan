import { useState, useMemo } from 'react'
import { photos } from '../data/photos'
import PhotoModal from '../components/PhotoModal'

const decades = [
  // { key: 'all', label: '全部', emoji: '📷' },
  { key: '1990s', label: '90年代', emoji: '🌱' },
  { key: '2000s', label: '00年代', emoji: '🌿' },
  { key: '2010s', label: '10年代', emoji: '🌳' },
  { key: '2020s', label: '20年代', emoji: '⭐' },
]

export default function Gallery() {
  const [activeDecade, setActiveDecade] = useState('all')
  const [selectedPhoto, setSelectedPhoto] = useState(null)

  const filteredPhotos = useMemo(() => {
    if (activeDecade === 'all') return photos
    return photos.filter((p) => p.decade === activeDecade)
  }, [activeDecade])

  return (
    <div className="animate-fade-in">
      {/* Header */}
      <section className="py-16 px-4 text-center">
        <h1 className="font-display text-3xl md:text-5xl text-deep-brown mb-4">
          时光相册
        </h1>
        <p className="text-soft-brown max-w-2xl mx-auto text-base md:text-lg">
          翻开这本跨越三十年的相册，每一张照片背后都有一个温暖的故事。点击照片，查看属于那个年代的独家记忆。
        </p>
      </section>

      {/* Decade Filter */}
      <section className="pb-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {decades.map(({ key, label, emoji }) => (
              <button
                key={key}
                onClick={() => setActiveDecade(key)}
                className={`px-5 py-2.5 rounded-2xl text-sm font-medium transition-all duration-300 ${
                  activeDecade === key
                    ? 'bg-warm-wood text-white shadow-soft'
                    : 'bg-white text-soft-brown hover:bg-warm-wood/8 border border-border-cream/50'
                }`}
              >
                <span className="mr-1.5">{emoji}</span>
                {label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Grid */}
      <section className="pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPhotos.map((photo) => (
              <div
                key={photo.id}
                onClick={() => setSelectedPhoto(photo)}
                className="card overflow-hidden cursor-pointer group"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={photo.thumbnail || photo.src}
                    alt={photo.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  {/* <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-medium px-2.5 py-1 bg-warm-wood/10 text-warm-brown rounded-full">
                      {photo.year}
                    </span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-deep-brown group-hover:text-warm-brown transition-colors mb-2">
                    {photo.title}
                  </h3>
                  <p className="text-sm text-soft-brown line-clamp-2 leading-relaxed">
                    {photo.story}
                  </p> */}
                  <div className="mt-3 flex items-center text-xs text-warm-wood/60">
                    <span>点击放大查看</span>
                    <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredPhotos.length === 0 && (
            <div className="text-center py-20">
              <p className="text-6xl mb-4">📭</p>
              <p className="text-soft-brown text-lg">该年代暂无照片</p>
              <p className="text-soft-brown/60 text-sm mt-2">如果你有该年代的照片和故事，欢迎联系我们</p>
            </div>
          )}
        </div>
      </section>

      {/* Photo Modal */}
      {selectedPhoto && (
        <PhotoModal
          photo={selectedPhoto}
          onClose={() => setSelectedPhoto(null)}
        />
      )}
    </div>
  )
}
