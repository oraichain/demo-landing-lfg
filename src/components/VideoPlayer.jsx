import { useEffect, useRef } from 'react'
import '../styles/globals.css'

function VideoPlayer({ src, poster }) {
  const videoRef = useRef(null)

  // Pause video on unmount (route change)
  useEffect(() => {
    return () => {
      if (videoRef.current) {
        videoRef.current.pause()
      }
    }
  }, [])

  return (
    <div className="video-player-container">
      <video
        ref={videoRef}
        className="video-player"
        src={src}
        poster={poster}
        controls
        playsInline
        preload="metadata"
      >
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

export default VideoPlayer

