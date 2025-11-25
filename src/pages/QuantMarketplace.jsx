import { useState } from 'react'
import NavBar from '../components/NavBar'
import StrategyCard from '../components/StrategyCard'
import BacktestDashboard from '../components/BacktestDashboard'
import {
  MomentumIcon,
  ArbitrageIcon,
  MeanReversionIcon,
  VolatilityIcon,
  TrendFollowingIcon,
  GridTradingIcon,
  MarketMakingIcon,
  ScalpingIcon
} from '../components/StrategyIcons'
import '../styles/globals.css'

const strategies = [
  {
    id: 1,
    name: "Momentum Surge",
    description: "Captures explosive price movements with precision timing",
    type: "Momentum",
    icon: MomentumIcon,
    winRate: 68,
    apr: 245,
    trades: 127,
    wins: 86,
    backtest: {
      barsLoaded: "500 bars (5d 4h of data)",
      builtBars: "500 15m",
      signalsTotal: 500,
      signalsLong: 255,
      signalsShort: 245,
      pnl: "+$12,450.00",
      pnlPercent: "+12.45"
    },
    waitlistUrl: "https://form.typeform.com/to/placeholder"
  },
  {
    id: 2,
    name: "Arbitrage Hunter",
    description: "Exploits price discrepancies across markets instantly",
    type: "Arbitrage",
    icon: ArbitrageIcon,
    winRate: 82,
    apr: 189,
    trades: 94,
    wins: 77,
    backtest: {
      barsLoaded: "500 bars (5d 4h of data)",
      builtBars: "500 15m",
      signalsTotal: 500,
      signalsLong: 255,
      signalsShort: 245,
      pnl: "+$8,920.00",
      pnlPercent: "+8.92"
    },
    waitlistUrl: "https://form.typeform.com/to/placeholder"
  },
  {
    id: 3,
    name: "Mean Reversion Pro",
    description: "Profits from price corrections to historical averages",
    type: "Mean Reversion",
    icon: MeanReversionIcon,
    winRate: 58,
    apr: 156,
    trades: 203,
    wins: 118,
    backtest: {
      barsLoaded: "500 bars (5d 4h of data)",
      builtBars: "500 15m",
      signalsTotal: 500,
      signalsLong: 255,
      signalsShort: 245,
      pnl: "+$15,340.00",
      pnlPercent: "+15.34"
    },
    waitlistUrl: "https://form.typeform.com/to/placeholder"
  },
  {
    id: 4,
    name: "Volatility Vanguard",
    description: "Thrives in high volatility environments",
    type: "Volatility",
    icon: VolatilityIcon,
    winRate: 45,
    apr: 312,
    trades: 89,
    wins: 40,
    backtest: {
      barsLoaded: "500 bars (5d 4h of data)",
      builtBars: "500 15m",
      signalsTotal: 500,
      signalsLong: 255,
      signalsShort: 245,
      pnl: "+$22,180.00",
      pnlPercent: "+22.18"
    },
    waitlistUrl: "https://form.typeform.com/to/placeholder"
  },
  {
    id: 5,
    name: "Trend Tracker",
    description: "Rides strong trends with adaptive position sizing",
    type: "Trend Following",
    icon: TrendFollowingIcon,
    winRate: 52,
    apr: 178,
    trades: 156,
    wins: 81,
    backtest: {
      barsLoaded: "500 bars (5d 4h of data)",
      builtBars: "500 15m",
      signalsTotal: 500,
      signalsLong: 255,
      signalsShort: 245,
      pnl: "+$9,670.00",
      pnlPercent: "+9.67"
    },
    waitlistUrl: "https://form.typeform.com/to/placeholder"
  },
  {
    id: 6,
    name: "Grid Master",
    description: "Systematic grid trading with dynamic levels",
    type: "Grid Trading",
    icon: GridTradingIcon,
    winRate: 71,
    apr: 134,
    trades: 234,
    wins: 166,
    backtest: {
      barsLoaded: "500 bars (5d 4h of data)",
      builtBars: "500 15m",
      signalsTotal: 500,
      signalsLong: 255,
      signalsShort: 245,
      pnl: "+$7,890.00",
      pnlPercent: "+7.89"
    },
    waitlistUrl: "https://form.typeform.com/to/placeholder"
  },
  {
    id: 7,
    name: "Market Maker Elite",
    description: "Provides liquidity while capturing spread profits",
    type: "Market Making",
    icon: MarketMakingIcon,
    winRate: 76,
    apr: 98,
    trades: 312,
    wins: 237,
    backtest: {
      barsLoaded: "500 bars (5d 4h of data)",
      builtBars: "500 15m",
      signalsTotal: 500,
      signalsLong: 255,
      signalsShort: 245,
      pnl: "+$6,540.00",
      pnlPercent: "+6.54"
    },
    waitlistUrl: "https://form.typeform.com/to/placeholder"
  },
  {
    id: 8,
    name: "Scalp King",
    description: "Ultra-fast execution for micro-profit accumulation",
    type: "Scalping",
    icon: ScalpingIcon,
    winRate: 31,
    apr: 445,
    trades: 57,
    wins: 18,
    backtest: {
      barsLoaded: "500 bars (5d 4h of data)",
      builtBars: "500 15m",
      signalsTotal: 500,
      signalsLong: 255,
      signalsShort: 245,
      pnl: "+$5,545.00",
      pnlPercent: "+5.54"
    },
    waitlistUrl: "https://form.typeform.com/to/placeholder"
  }
]

function QuantMarketplace() {
  const [selectedStrategy, setSelectedStrategy] = useState(null)
  const [showBacktest, setShowBacktest] = useState(false)

  const handleStrategyClick = (strategy) => {
    setSelectedStrategy(strategy)
    setShowBacktest(true)
  }

  const handleCloseBacktest = () => {
    setShowBacktest(false)
    setSelectedStrategy(null)
  }

  const handleJoinWaitlist = () => {
    if (selectedStrategy?.waitlistUrl) {
      window.open(selectedStrategy.waitlistUrl, '_blank')
    }
  }

  return (
    <div className="page">
      <NavBar />
      <div className="page-content">
        <h1 className="page-title">Quant Marketplace</h1>
        
        <div className="marketplace-hero">
          <a href="https://mainnet.lfg.land/vault" className="vault-banner" target="_blank" rel="noopener noreferrer">
            <div className="vault-banner-content">
              <div className="vault-banner-left">
                <div className="vault-logo">LFG</div>
                <div className="vault-banner-text">
                  <h2 className="vault-banner-title">LFGVault</h2>
                  <p className="vault-banner-subtitle">Click to view vault details</p>
                </div>
              </div>
              <div className="vault-banner-right">
                <div className="vault-banner-stats">
                  <div className="vault-stat">
                    <div className="vault-stat-label">Est. APR</div>
                    <div className="vault-stat-value positive">505%</div>
                  </div>
                  <div className="vault-stat">
                    <div className="vault-stat-label">TVL</div>
                    <div className="vault-stat-value">$6,918,599</div>
                  </div>
                  <div className="vault-stat">
                    <div className="vault-stat-label">All-time P&L</div>
                    <div className="vault-stat-value positive">$2,531,495</div>
                  </div>
                </div>
                <div className="vault-banner-arrow">→</div>
              </div>
            </div>
          </a>
        </div>
        
        <div className="strategies-section">
          <h2 className="strategies-section-title">Available Strategies</h2>
          <div className="strategies-grid">
            {strategies.map((strategy) => (
              <StrategyCard
                key={strategy.id}
                strategy={strategy}
                onClick={() => handleStrategyClick(strategy)}
              />
            ))}
          </div>
        </div>
      </div>

      {showBacktest && (
        <BacktestDashboard
          strategy={selectedStrategy}
          onClose={handleCloseBacktest}
          onJoinWaitlist={handleJoinWaitlist}
        />
      )}
    </div>
  )
}

export default QuantMarketplace

