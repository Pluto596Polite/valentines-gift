import React, { useState } from 'react'
import '../styles/Card.css'

interface CardProps {
  id: number
  image: string
  title: string
  message: string
  onCardClick: (id: number) => void
}

const Card: React.FC<CardProps> = ({ id, image, title, message, onCardClick }) => {
  const [isFlipped, setIsFlipped] = useState(false)
  const [isClicked, setIsClicked] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 })

  const handleClick = () => {
    setIsFlipped(!isFlipped)
    if (!isFlipped) {
      setIsClicked(true)
      onCardClick(id)
    }
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    setMousePosition({ x, y })
  }

  const handleMouseLeave = () => {
    setMousePosition({ x: 50, y: 50 })
  }

  const tiltX = ((mousePosition.y - 50) / 50) * -6
  const tiltY = ((mousePosition.x - 50) / 50) * 6

  return (
    <div 
      className={`card-container ${isClicked ? 'clicked' : ''}`}
      onClick={handleClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        '--mouse-x': `${mousePosition.x}%`,
        '--mouse-y': `${mousePosition.y}%`,
        '--tilt-x': `${tiltX}deg`,
        '--tilt-y': `${tiltY}deg`,
      } as React.CSSProperties}
    >
      <div className={`card ${isFlipped ? 'flipped' : ''}`}>
        <div className="card-front">
          <div className="card-front-content">
            <div className="heart-decoration">💕</div>
            <p className="card-hint">Click to reveal</p>
          </div>
        </div>
        <div className="card-back">
          <div className="card-image-float">
            <div className="card-image-tilt">
              <img src={image} alt={title} className="card-image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
