import { useRef, useState, useEffect } from 'react'
import OutlineCard from './OutlineCard'
import '../styles/globals.css'

function CardSlider({ cards }) {
  const sliderRef = useRef(null)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)

  const checkScrollPosition = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current
      setShowLeftArrow(scrollLeft > 0)
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  useEffect(() => {
    const slider = sliderRef.current
    if (slider) {
      checkScrollPosition()
      slider.addEventListener('scroll', checkScrollPosition)
      window.addEventListener('resize', checkScrollPosition)
      return () => {
        slider.removeEventListener('scroll', checkScrollPosition)
        window.removeEventListener('resize', checkScrollPosition)
      }
    }
  }, [cards])

  const scroll = (direction) => {
    if (sliderRef.current) {
      const cardWidth = sliderRef.current.children[0]?.offsetWidth || 320
      const scrollAmount = cardWidth + 16 // card width + gap
      sliderRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className="card-slider-wrapper">
      {showLeftArrow && (
        <button 
          className="card-slider-arrow card-slider-arrow-left"
          onClick={() => scroll('left')}
          aria-label="Scroll left"
        >
          ‹
        </button>
      )}
      <div className="card-slider" ref={sliderRef}>
        {cards.map((card, index) => (
          <OutlineCard
            key={index}
            title={card.title}
            body={card.body}
            thumbnail={card.thumbnail}
          />
        ))}
      </div>
      {showRightArrow && (
        <button 
          className="card-slider-arrow card-slider-arrow-right"
          onClick={() => scroll('right')}
          aria-label="Scroll right"
        >
          ›
        </button>
      )}
    </div>
  )
}

export default CardSlider

