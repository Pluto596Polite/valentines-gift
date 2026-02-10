import React from 'react'
import '../styles/Modal.css'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  image: string
  message: string
  title: string
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, image, message, title }) => {
  if (!isOpen) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>×</button>
        <div className="modal-image-container">
          <img src={image} alt={title} className="modal-image" />
        </div>
        <h2 className="modal-title">{title}</h2>
        <p className="modal-message">{message}</p>
        <button className="close-modal-btn" onClick={onClose}>Close</button>
      </div>
    </div>
  )
}

export default Modal
