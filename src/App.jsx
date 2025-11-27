import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import VideoOnePage from './pages/VideoOnePage'
import QuantMarketplace from './pages/QuantMarketplace'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/lighter" replace />} />
        <Route path="/lighter" element={<VideoOnePage />} />
        <Route path="/lighter/marketplace" element={<QuantMarketplace />} />
      </Routes>
    </Router>
  )
}

export default App
