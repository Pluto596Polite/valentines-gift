import { useEffect, useRef, useState } from 'react'

const STEP_LIFETIME_MS = 2000
const STEP_DISTANCE = 55

interface Step {
  id: number
  x: number
  y: number
  angle: number
  side: 'left' | 'right'
}

const CursorTrail: React.FC = () => {
  const [steps, setSteps] = useState<Step[]>([])
  const lastStep = useRef<{ x: number; y: number } | null>(null)
  const side = useRef<'left' | 'right'>('left')
  const nextId = useRef(0)

  useEffect(() => {
    const handleMove = (event: PointerEvent) => {
      const current = { x: event.clientX, y: event.clientY }
      if (!lastStep.current) {
        lastStep.current = current
        return
      }

      const newSteps: Step[] = []

      while (true) {
        const dx = current.x - lastStep.current.x
        const dy = current.y - lastStep.current.y
        const distance = Math.hypot(dx, dy)
        if (distance < STEP_DISTANCE) {
          break
        }

        const angle = (Math.atan2(dy, dx) * 180) / Math.PI + 90
        const unitX = dx / distance
        const unitY = dy / distance
        const nextX = lastStep.current.x + unitX * STEP_DISTANCE
        const nextY = lastStep.current.y + unitY * STEP_DISTANCE
        const nextSide = side.current === 'left' ? 'right' : 'left'
        side.current = nextSide
        lastStep.current = { x: nextX, y: nextY }

        const newStep: Step = {
          id: nextId.current,
          x: nextX,
          y: nextY,
          angle,
          side: nextSide,
        }
        nextId.current += 1
        newSteps.push(newStep)
      }

      if (newSteps.length > 0) {
        setSteps(prev => [...prev, ...newSteps])
        newSteps.forEach(step => {
          window.setTimeout(() => {
            setSteps(prev => prev.filter(entry => entry.id !== step.id))
          }, STEP_LIFETIME_MS)
        })
      }
    }

    window.addEventListener('pointermove', handleMove)

    return () => {
      window.removeEventListener('pointermove', handleMove)
    }
  }, [])

  return (
    <div className="cursor-trail" aria-hidden="true">
      {steps.map((step, index) => {
        const length = 20 + (index % 3) * 2
        const width = 11 + (index % 2)
        const offset = step.side === 'left' ? -12 : 12
        const lean = step.side === 'left' ? -7 : 7
        return (
          <span
            key={`cursor-step-${step.id}`}
            className="cursor-step"
            style={{
              '--trail-x': `${step.x}px`,
              '--trail-y': `${step.y}px`,
              '--trail-length': `${length}px`,
              '--trail-width': `${width}px`,
              '--trail-angle': `${step.angle}deg`,
              '--trail-offset': `${offset}px`,
              '--trail-lean': `${lean}deg`,
            } as React.CSSProperties}
          />
        )
      })}
    </div>
  )
}

export default CursorTrail
