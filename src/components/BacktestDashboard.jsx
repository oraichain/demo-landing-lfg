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
          <div className="backtest-team-section">
            <div className="team-profile">
              <div className="team-avatar">
                <div className="avatar-placeholder">Q</div>
              </div>
              <div className="team-info">
                <div className="team-name">Quant Team</div>
                <div className="team-badge">Community Contributor</div>
              </div>
            </div>
          </div>

          <div className="backtest-section">
            <h3 className="backtest-section-title">Backtest Results</h3>
            <div className="backtest-results-grid">
              <div className="backtest-metric-card">
                <span className="metric-label">Win Rate</span>
                <span className={`metric-value-large ${strategy.winRate >= 50 ? 'positive' : 'negative'}`}>
                  {strategy.winRate}%
                </span>
                <span className="metric-breakdown">
                  {strategy.wins}W / {strategy.backtest.losses || (strategy.trades - strategy.wins)}L
                </span>
              </div>
              
              <div className="backtest-metric-card">
                <span className="metric-label">Profit Factor</span>
                <span className="metric-value">{strategy.backtest.profitFactor || 'N/A'}</span>
              </div>
              
              <div className="backtest-metric-card">
                <span className="metric-label">Total Trades</span>
                <span className="metric-value">{strategy.trades}</span>
              </div>
              
              <div className="backtest-metric-card">
                <span className="metric-label">ROI</span>
                <span className="metric-value positive">{strategy.backtest.roi || strategy.backtest.pnlPercent}</span>
              </div>
              
              <div className="backtest-metric-card">
                <span className="metric-label">Avg Win</span>
                <span className="metric-value positive">{strategy.backtest.avgWin || 'N/A'}</span>
              </div>
              
              <div className="backtest-metric-card">
                <span className="metric-label">Avg Loss</span>
                <span className="metric-value negative">{strategy.backtest.avgLoss || 'N/A'}</span>
              </div>
              
              <div className="backtest-metric-card">
                <span className="metric-label">Max Drawdown</span>
                <span className="metric-value negative">{strategy.backtest.maxDrawdown || 'N/A'}</span>
              </div>
              
              <div className="backtest-metric-card">
                <span className="metric-label">Current Drawdown</span>
                <span className="metric-value">{strategy.backtest.currentDrawdown || '0.00%'}</span>
              </div>
              
              <div className="backtest-metric-card">
                <span className="metric-label">Total Profit</span>
                <span className="metric-value positive">{strategy.backtest.totalProfit || 'N/A'}</span>
              </div>
              
              <div className="backtest-metric-card">
                <span className="metric-label">Total Loss</span>
                <span className="metric-value negative">{strategy.backtest.totalLoss || 'N/A'}</span>
              </div>
            </div>
            
            <div className="backtest-pnl-summary">
              <span className="pnl-label">PnL</span>
              <span className="pnl-value positive">
                {strategy.backtest.pnl} ({strategy.backtest.pnlPercent}%)
              </span>
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

