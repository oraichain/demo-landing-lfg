import '../styles/globals.css'

function StrategyCard({ strategy, onClick }) {
  const IconComponent = strategy.icon
  
  return (
    <div className="strategy-card" onClick={onClick}>
      <div className="strategy-card-header">
        <div className="strategy-icon-wrapper">
          <IconComponent />
        </div>
        <div className="strategy-card-title-section">
          <h3 className="strategy-name">{strategy.name}</h3>
          <p className="strategy-description">{strategy.description}</p>
        </div>
      </div>
      <div className="strategy-card-stats">
        <div className="strategy-stat">
          <span className="stat-label">Win Rate</span>
          <span className={`stat-value ${strategy.winRate >= 50 ? 'positive' : 'negative'}`}>
            {strategy.winRate}%
          </span>
        </div>
        <div className="strategy-stat">
          <span className="stat-label">APR</span>
          <span className="stat-value positive">{strategy.apr}%</span>
        </div>
        <div className="strategy-stat">
          <span className="stat-label">Trades</span>
          <span className="stat-value">{strategy.trades}</span>
        </div>
      </div>
      <div className="strategy-card-footer">
        <span className="strategy-type">{strategy.type}</span>
        <span className="strategy-arrow">→</span>
      </div>
    </div>
  )
}

export default StrategyCard

