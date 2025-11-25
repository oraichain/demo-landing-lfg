import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import VideoOnePage from './pages/VideoOnePage'
import VideoTwoPage from './pages/VideoTwoPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/video-1" replace />} />
        <Route path="/video-1" element={<VideoOnePage />} />
        <Route path="/video-2" element={<VideoTwoPage />} />
      </Routes>
    </Router>
  )
}

export default App

