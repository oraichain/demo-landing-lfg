import { Link, useLocation } from 'react-router-dom'
import '../styles/globals.css'

function NavBar() {
  const location = useLocation()

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/video-1" className="navbar-logo">
          LFG
        </Link>
        <div className="navbar-links">
          <Link 
            to="/video-1" 
            className={`navbar-link ${location.pathname === '/video-1' ? 'active' : ''}`}
          >
            Video 1
          </Link>
          <Link 
            to="/video-2" 
            className={`navbar-link ${location.pathname === '/video-2' ? 'active' : ''}`}
          >
            Video 2
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default NavBar

