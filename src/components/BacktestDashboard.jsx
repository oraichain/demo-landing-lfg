import '../styles/globals.css'

function BacktestDashboard({ strategy, onClose, onJoinWaitlist }) {
  if (!strategy) return null

  const IconComponent = strategy.icon

  return (
    <div className="backtest-overlay" onClick={onClose}>
      <div className="backtest-dashboard" onClick={(e) => e.stopPropagation()}>
        <button className="backtest-close" onClick={onClose}>×</button>
        
        <div className="backtest-header">
          <div className="backtest-icon-wrapper">
            <IconComponent />
          </div>
          <div className="backtest-title-section">
            <h2 className="backtest-strategy-name">{strategy.name}</h2>
            <p className="backtest-strategy-description">{strategy.description}</p>
          </div>
        </div>

        <div className="backtest-content">
          <div className="backtest-section">
            <h3 className="backtest-section-title">Initialization Report</h3>
            <div className="backtest-report">
              <div className="report-item">
                <span className="report-label">Bars loaded:</span>
                <span className="report-value">{strategy.backtest.barsLoaded}</span>
              </div>
              <div className="report-item">
                <span className="report-label">Built bars:</span>
                <span className="report-value">{strategy.backtest.builtBars}</span>
              </div>
              <div className="report-item">
                <span className="report-label">Signals found:</span>
                <span className="report-value">
                  {strategy.backtest.signalsTotal} ({strategy.backtest.signalsLong} long, {strategy.backtest.signalsShort} short)
                </span>
              </div>
            </div>
          </div>

          <div className="backtest-section">
            <h3 className="backtest-section-title">Backtest Results</h3>
            <div className="backtest-results">
              <div className="result-main">
                <div className="result-metric">
                  <span className="metric-label">Win Rate</span>
                  <span className={`metric-value ${strategy.winRate >= 50 ? 'positive' : 'negative'}`}>
                    {strategy.winRate}%
                  </span>
                </div>
                <div className="result-stats">
                  <div className="result-stat">
                    <span className="result-stat-label">Trades:</span>
                    <span className="result-stat-value">{strategy.trades}</span>
                  </div>
                  <div className="result-stat">
                    <span className="result-stat-label">Wins:</span>
                    <span className="result-stat-value positive">{strategy.wins}</span>
                  </div>
                </div>
              </div>
              <div className="result-pnl">
                <span className="pnl-label">PnL</span>
                <span className="pnl-value positive">
                  {strategy.backtest.pnl} ({strategy.backtest.pnlPercent}%)
                </span>
              </div>
            </div>
          </div>

          <div className="backtest-actions">
            <button className="btn-join-waitlist" onClick={onJoinWaitlist}>
              Join Waitlist
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BacktestDashboard

