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

  const handleClick = () => {
    setIsFlipped(!isFlipped)
    if (!isFlipped) {
      onCardClick(id)
    }
  }

  return (
    <div className="card-container" onClick={handleClick}>
      <div className={`card ${isFlipped ? 'flipped' : ''}`}>
        <div className="card-front">
          <div className="heart-decoration">💕</div>
          <p className="card-hint">Click to reveal</p>
        </div>
        <div className="card-back">
          <img src={image} alt={title} className="card-image" />
        </div>
      </div>
    </div>
  )
}

export default Card
