import { useState } from 'react'
import Card from './components/Card'
import Modal from './components/Modal'
import './App.css'
import GradientBackgroundAnimation from './components/GradientBackgroundAnimation'
import CursorTrail from './components/CursorTrail'
import BackgroundMusic from './components/BackgroundMusic'
import img1 from './assets/20250108_152618.jpg'
import img2 from './assets/20250215_124732.jpg'
import img3 from './assets/20250215_140807.jpg'
import img4 from './assets/20250311_181909.jpg'
import img5 from './assets/20250719_132704.jpg'
import img6 from './assets/20250719_194851.jpg'

interface CardData {
  id: number
  image: string
  title: string
  message: string
}

const cardsData: CardData[] = [
  {
    id: 1,
    image: img1,
    title: 'My Love',
    message: 'Every moment with you is a treasure. You make my heart skip a beat! 💕'
  },
  {
    id: 2,
    image: img3,
    title: 'Forever',
    message: 'I want to spend forever making you smile and creating beautiful memories together. 💕'
  },
  {
    id: 3,
    image: img6,
    title: 'You & Me',
    message: 'With you, I found my perfect match. You complete me in every way possible. 💕'
  },
  {
    id: 4,
    image: img4,
    title: 'My Heart',
    message: 'You are the love of my life, my best friend, and my soulmate. Happy Valentine\'s Day! 💕'
  },
  {
    id: 5,
    image: img2,
    title: 'Always You',
    message: 'No matter what, my heart always chooses you. You are my everything. 💕'
  },
  {
    id: 6,
    image: img5,
    title: 'Together',
    message: 'Every day with you is a new adventure. Thank you for being my Valentine! 💕'
  }
]

function App() {
  const [selectedCard, setSelectedCard] = useState<CardData | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [showFooterMessage, setShowFooterMessage] = useState(false)

  const handleCardClick = (cardId: number) => {
    const card = cardsData.find(c => c.id === cardId)
    if (card) {
      setSelectedCard(card)
      setIsModalOpen(true)
    }
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedCard(null)
  }

  

  return (
    <div className="app">
      
      <GradientBackgroundAnimation />
      <CursorTrail />
      <BackgroundMusic />
      
      <header className="header">
        <h1 className="title">
          Happy Valentine's Day
        </h1>
        <p className="subtitle">
          <span className="subtitle-word subtitle-word-1">Click</span>
          <span className="subtitle-word subtitle-word-2">op</span>
          <span className="subtitle-word subtitle-word-3">die</span>
          <span className="subtitle-word subtitle-word-4">cards</span>
          <span className="subtitle-word subtitle-word-5">om</span>
          <span className="subtitle-word subtitle-word-6">dit</span>
          <span className="subtitle-word subtitle-word-7">om</span>
          <span className="subtitle-word subtitle-word-8">te</span>
          <span className="subtitle-word subtitle-word-9">draai</span>
        </p>
      </header>

      <main className="cards-grid">
        {cardsData.map(card => (
          <Card
            key={card.id}
            id={card.id}
            image={card.image}
            title={card.title}
            message={card.message}
            onCardClick={handleCardClick}
          />
        ))}
      </main>

      <button 
        className="reveal-button" 
        onClick={() => setShowFooterMessage(true)}
        disabled={showFooterMessage}
      >
        {showFooterMessage ? '❤️' : 'Click for a Special Message ❤️'}
      </button>

      {selectedCard && (
        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          image={selectedCard.image}
          title={selectedCard.title}
          message={selectedCard.message}
        />
      )}

      <footer className="footer">
        {showFooterMessage ? (
          <p className="footer-message">
            <span className="footer-word footer-word-1">Made</span>
            <span className="footer-word footer-word-2">with</span>
            <span className="footer-word footer-word-3">❤️</span>
            <span className="footer-word footer-word-4">for</span>
            <span className="footer-word footer-word-5">You</span>
          </p>
        ) : (
          <p style={{ opacity: 0 }}>Made with ❤️ for You</p>
        )}
      </footer>
    </div>
  )
}

export default App
