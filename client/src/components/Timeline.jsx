import { useState } from 'react'
import { timelineEvents } from '../data/timeline'

export default function Timeline() {
  const [expandedYear, setExpandedYear] = useState(null)

  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-warm-wood/40 via-warm-wood/20 to-transparent transform md:-translate-x-px" />

      <div className="space-y-8 md:space-y-12">
        {timelineEvents.map((event, index) => {
          const isEven = index % 2 === 0
          const isExpanded = expandedYear === event.year

          return (
            <div
              key={event.year}
              className={`relative flex flex-col md:flex-row items-start gap-4 md:gap-0 ${
                isEven ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Dot on timeline */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-warm-wood rounded-full border-4 border-cream shadow-soft transform -translate-x-1/2 z-10 mt-1.5" />

              {/* Content card */}
              <div
                className={`ml-10 md:ml-0 md:w-[calc(50%-2rem)] ${
                  isEven ? 'md:pr-12' : 'md:pl-12'
                }`}
              >
                <div
                  onClick={() => setExpandedYear(isExpanded ? null : event.year)}
                  className="card p-5 cursor-pointer group"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-3xl">{event.icon}</span>
                    <div>
                      <span className="font-serif text-2xl font-bold text-warm-wood">
                        {event.year}
                      </span>
                      <h3 className="font-serif text-lg font-bold text-deep-brown group-hover:text-warm-brown transition-colors">
                        {event.title}
                      </h3>
                    </div>
                  </div>

                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      isExpanded ? 'max-h-96 opacity-100 mt-3' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="text-sm text-soft-brown leading-relaxed pt-2 border-t border-border-cream/50">
                      {event.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-end mt-2">
                    <span className="text-xs text-warm-wood/60">
                      {isExpanded ? '收起 ▲' : '展开 ▼'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
