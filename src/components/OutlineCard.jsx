import '../styles/globals.css'

function OutlineCard({ title, body, thumbnail, script, isActive }) {
  return (
    <div className={`outline-card ${isActive ? 'card-active' : ''}`}>
      {thumbnail && (
        <div className="outline-card-thumbnail">
          <img src={thumbnail} alt={title} />
          <div className="thumbnail-overlay">
            <div className="animated-particles">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="particle" style={{ '--delay': i * 0.1 + 's' }}></div>
              ))}
            </div>
          </div>
        </div>
      )}
      <div className="outline-card-content">
        <h2 className="outline-card-title">
          <span className="title-text">{title}</span>
          <span className="title-glow"></span>
        </h2>
        <p className="outline-card-body">{body}</p>
        {script && (
          <div className="outline-card-script">
            <p className="script-label">Script:</p>
            <p className="script-text">{script}</p>
          </div>
        )}
      </div>
      {isActive && (
        <div className="card-energy-rings">
          <div className="energy-ring ring-1"></div>
          <div className="energy-ring ring-2"></div>
          <div className="energy-ring ring-3"></div>
        </div>
      )}
    </div>
  )
}

export default OutlineCard

