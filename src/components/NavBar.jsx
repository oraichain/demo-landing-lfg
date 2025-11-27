import { Link, useLocation } from 'react-router-dom'
import '../styles/globals.css'

function NavBar() {
  const location = useLocation()

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          LFG
        </Link>
        <div className="navbar-links">
          <Link
            to="/"
            className={`navbar-link ${location.pathname === '/' ? 'active' : ''}`}
          >
            Overview
          </Link>
          <Link
            to="/marketplace"
            className={`navbar-link ${location.pathname === '/marketplace' ? 'active' : ''}`}
          >
            Marketplace
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
