import React from 'react'

export default function BackgroundDots() {
  return (
    <div className="w-full absolute top-0 -z-40 h-full bg-background">
      <svg width="100%" height="100%" className="absolute top-0 left-0">
        <defs>
          <pattern
            id="dot-pattern"
            x="0"
            y="0"
            width="24"
            height="24"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="8" cy="8" r="0.3" fill="#f2f2f2" />
          </pattern>
        </defs>

        <rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          fill="url(#dot-pattern)"
        />
      </svg>

      <div className="relative z-10">
      </div>
    </div>
  )
}
