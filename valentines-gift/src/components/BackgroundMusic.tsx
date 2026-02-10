import { useEffect, useRef, useState } from 'react'
import '../styles/BackgroundMusic.css'

const BackgroundMusic: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  useEffect(() => {
    const audio = audioRef.current
    if (audio) {
      audio.volume = 0.3 // Set to 30% volume
    }
  }, [])

  return (
    <div className="background-music">
      <audio 
        ref={audioRef} 
        loop
        src="/song.mp3"
      />
      <button 
        className="music-button" 
        onClick={togglePlay}
        aria-label={isPlaying ? 'Pause music' : 'Play music'}
      >
        {isPlaying ? '⏸️' : '▶️'}
      </button>
      <button 
        className="mute-button" 
        onClick={toggleMute}
        aria-label={isMuted ? 'Unmute music' : 'Mute music'}
      >
        {isMuted ? '🔇' : '🔊'}
      </button>
    </div>
  )
}

export default BackgroundMusic
