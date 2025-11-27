import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import OutlineCard from './OutlineCard'
import '../styles/globals.css'

function CardSlider({ cards }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const navigate = useNavigate()
  const isLastCard = currentIndex === cards.length - 1

  const goToNext = () => {
    if (isLastCard) {
      navigate('/lighter/marketplace')
    } else {
      setCurrentIndex((prev) => (prev + 1) % cards.length)
    }
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length)
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowLeft') goToPrevious()
      if (e.key === 'ArrowRight') goToNext()
    }
    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [])

  // Touch/swipe support
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)

  const minSwipeDistance = 50

  const onTouchStart = (e) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance
    if (isLeftSwipe) goToNext()
    if (isRightSwipe) goToPrevious()
  }

  return (
    <div className="presentation-wrapper">
      <div
        className="presentation-container"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <button
          className="presentation-nav presentation-nav-left"
          onClick={goToPrevious}
          aria-label="Previous slide"
        >
          ‹
        </button>

        <div className="presentation-viewport">
          {cards.map((card, index) => {
            const offset = index - currentIndex
            const isActive = offset === 0
            const isLeft = offset < 0
            const isRight = offset > 0

            return (
              <div
                key={index}
                className={`presentation-slide ${
                  isActive ? 'active' :
                  isLeft ? 'left' :
                  isRight ? 'right' : ''
                }`}
                style={{
                  '--offset': offset,
                  '--abs-offset': Math.abs(offset)
                }}
              >
                <OutlineCard
                  title={card.title}
                  body={card.body}
                  thumbnail={card.thumbnail}
                  script={card.script}
                  isActive={isActive}
                  animationType={card.animationType}
                />
              </div>
            )
          })}
        </div>

        <button
          className={`presentation-nav presentation-nav-right ${isLastCard ? 'nav-explore' : ''}`}
          onClick={goToNext}
          aria-label={isLastCard ? "Explore marketplace" : "Next slide"}
        >
          {isLastCard ? 'Explore Marketplace' : '›'}
        </button>
      </div>

      <div className="presentation-indicators">
        {cards.map((_, index) => (
          <button
            key={index}
            className={`presentation-indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="presentation-counter">
        {currentIndex + 1} / {cards.length}
      </div>
    </div>
  )
}

export default CardSlider
