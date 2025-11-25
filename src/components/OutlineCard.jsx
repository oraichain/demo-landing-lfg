import '../styles/globals.css'

function OutlineCard({ title, body, thumbnail }) {
  return (
    <div className="outline-card">
      {thumbnail && (
        <div className="outline-card-thumbnail">
          <img src={thumbnail} alt={title} />
        </div>
      )}
      <div className="outline-card-content">
        <h3 className="outline-card-title">{title}</h3>
        <p className="outline-card-body">{body}</p>
      </div>
    </div>
  )
}

export default OutlineCard

