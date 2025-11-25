import { useState } from 'react'
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

// Helper function to generate sample trades
const generateTrades = (totalTrades, wins, avgWin, avgLoss) => {
  const trades = []
  const winCount = wins
  const lossCount = totalTrades - wins
  
  // Generate timestamps over 5 days
  const startDate = new Date('2024-01-01T00:00:00')
  const endDate = new Date('2024-01-06T00:00:00')
  const timeDiff = endDate - startDate
  
  for (let i = 0; i < totalTrades; i++) {
    const isWin = i < winCount
    const pnl = isWin 
      ? parseFloat(avgWin.replace('$', '').replace(',', '')) + (Math.random() * 200 - 100)
      : -parseFloat(avgLoss.replace('$', '').replace(',', '')) - (Math.random() * 50)
    
    const timestamp = new Date(startDate.getTime() + (timeDiff * i / totalTrades))
    const timeStr = timestamp.toLocaleString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      hour: '2-digit', 
      minute: '2-digit' 
    })
    
    const entryPrice = 45000 + (Math.random() * 5000)
    const exitPrice = entryPrice + (pnl / 0.1) // Assuming 0.1 BTC position
    
    trades.push({
      timestamp: timeStr,
      type: Math.random() > 0.5 ? 'LONG' : 'SHORT',
      entry: `$${entryPrice.toFixed(2)}`,
      exit: `$${exitPrice.toFixed(2)}`,
      pnl: `$${pnl.toFixed(2)}`
    })
  }
  
  // Sort by timestamp (most recent first)
  return trades.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
}

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
    chartPath: "M 0,60 L 20,55 L 40,45 L 60,35 L 80,25 L 100,20 L 120,15 L 140,10 L 160,8 L 180,5 L 200,3 L 200,80 L 0,80 Z",
    chartDots: [{x: 40, y: 45}, {x: 100, y: 20}, {x: 180, y: 5}],
    backtest: {
      barsLoaded: "500 bars (5d 4h of data)",
      builtBars: "500 15m",
      signalsTotal: 500,
      signalsLong: 255,
      signalsShort: 245,
      pnl: "+$12,450.00",
      pnlPercent: "+12.45",
      profitFactor: 14.37,
      avgWin: "$1,888.24",
      avgLoss: "$131.38",
      maxDrawdown: "0.06%",
      currentDrawdown: "0.00%",
      totalProfit: "$13,217.67",
      totalLoss: "$919.63",
      roi: "+12.30%",
      losses: 41,
      startDate: "Jan 1, 2024",
      endDate: "Jan 6, 2024",
      trades: generateTrades(127, 86, "$1,888.24", "$131.38")
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
    chartPath: "M 0,40 L 25,38 L 50,40 L 75,38 L 100,40 L 125,38 L 150,40 L 175,38 L 200,40 L 200,80 L 0,80 Z",
    chartDots: [{x: 50, y: 40}, {x: 100, y: 40}, {x: 150, y: 40}],
    backtest: {
      barsLoaded: "500 bars (5d 4h of data)",
      builtBars: "500 15m",
      signalsTotal: 500,
      signalsLong: 255,
      signalsShort: 245,
      pnl: "+$8,920.00",
      pnlPercent: "+8.92",
      profitFactor: 12.45,
      avgWin: "$1,245.60",
      avgLoss: "$98.20",
      maxDrawdown: "0.08%",
      currentDrawdown: "0.00%",
      totalProfit: "$9,591.20",
      totalLoss: "$671.20",
      roi: "+8.92%",
      losses: 17,
      startDate: "Jan 1, 2024",
      endDate: "Jan 6, 2024",
      trades: generateTrades(94, 77, "$1,245.60", "$98.20")
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
    chartPath: "M 0,50 L 30,30 L 60,50 L 90,30 L 120,50 L 150,30 L 180,50 L 200,40 L 200,80 L 0,80 Z",
    chartDots: [{x: 30, y: 30}, {x: 90, y: 30}, {x: 150, y: 30}],
    backtest: {
      barsLoaded: "500 bars (5d 4h of data)",
      builtBars: "500 15m",
      signalsTotal: 500,
      signalsLong: 255,
      signalsShort: 245,
      pnl: "+$15,340.00",
      pnlPercent: "+15.34",
      profitFactor: 8.92,
      avgWin: "$892.50",
      avgLoss: "$145.30",
      maxDrawdown: "0.12%",
      currentDrawdown: "0.00%",
      totalProfit: "$15,315.00",
      totalLoss: "$1,975.00",
      roi: "+15.34%",
      losses: 85,
      startDate: "Jan 1, 2024",
      endDate: "Jan 6, 2024",
      trades: generateTrades(203, 118, "$892.50", "$145.30")
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
    chartPath: "M 0,40 L 20,60 L 40,20 L 60,70 L 80,10 L 100,65 L 120,25 L 140,55 L 160,15 L 180,50 L 200,30 L 200,80 L 0,80 Z",
    chartDots: [{x: 40, y: 20}, {x: 80, y: 10}, {x: 160, y: 15}],
    backtest: {
      barsLoaded: "500 bars (5d 4h of data)",
      builtBars: "500 15m",
      signalsTotal: 500,
      signalsLong: 255,
      signalsShort: 245,
      pnl: "+$22,180.00",
      pnlPercent: "+22.18",
      profitFactor: 18.75,
      avgWin: "$2,218.00",
      avgLoss: "$118.40",
      maxDrawdown: "0.15%",
      currentDrawdown: "0.00%",
      totalProfit: "$22,180.00",
      totalLoss: "$1,183.20",
      roi: "+22.18%",
      losses: 49,
      startDate: "Jan 1, 2024",
      endDate: "Jan 6, 2024",
      trades: generateTrades(89, 40, "$2,218.00", "$118.40")
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
    chartPath: "M 0,70 L 25,65 L 50,55 L 75,45 L 100,35 L 125,25 L 150,20 L 175,15 L 200,10 L 200,80 L 0,80 Z",
    chartDots: [{x: 50, y: 55}, {x: 100, y: 35}, {x: 175, y: 15}],
    backtest: {
      barsLoaded: "500 bars (5d 4h of data)",
      builtBars: "500 15m",
      signalsTotal: 500,
      signalsLong: 255,
      signalsShort: 245,
      pnl: "+$9,670.00",
      pnlPercent: "+9.67",
      profitFactor: 6.25,
      avgWin: "$645.33",
      avgLoss: "$103.20",
      maxDrawdown: "0.10%",
      currentDrawdown: "0.00%",
      totalProfit: "$9,670.00",
      totalLoss: "$1,547.20",
      roi: "+9.67%",
      losses: 75,
      startDate: "Jan 1, 2024",
      endDate: "Jan 6, 2024",
      trades: generateTrades(156, 81, "$645.33", "$103.20")
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
    chartPath: "M 0,50 L 25,45 L 50,50 L 75,45 L 100,50 L 125,45 L 150,50 L 175,45 L 200,50 L 200,80 L 0,80 Z",
    chartDots: [{x: 25, y: 45}, {x: 75, y: 45}, {x: 125, y: 45}],
    backtest: {
      barsLoaded: "500 bars (5d 4h of data)",
      builtBars: "500 15m",
      signalsTotal: 500,
      signalsLong: 255,
      signalsShort: 245,
      pnl: "+$7,890.00",
      pnlPercent: "+7.89",
      profitFactor: 5.42,
      avgWin: "$387.50",
      avgLoss: "$71.50",
      maxDrawdown: "0.05%",
      currentDrawdown: "0.00%",
      totalProfit: "$7,890.00",
      totalLoss: "$1,455.00",
      roi: "+7.89%",
      losses: 68,
      startDate: "Jan 1, 2024",
      endDate: "Jan 6, 2024",
      trades: generateTrades(234, 166, "$387.50", "$71.50")
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
    chartPath: "M 0,50 L 30,48 L 60,50 L 90,48 L 120,50 L 150,48 L 180,50 L 200,49 L 200,80 L 0,80 Z",
    chartDots: [{x: 30, y: 48}, {x: 90, y: 48}, {x: 150, y: 48}],
    backtest: {
      barsLoaded: "500 bars (5d 4h of data)",
      builtBars: "500 15m",
      signalsTotal: 500,
      signalsLong: 255,
      signalsShort: 245,
      pnl: "+$6,540.00",
      pnlPercent: "+6.54",
      profitFactor: 4.18,
      avgWin: "$234.50",
      avgLoss: "$56.10",
      maxDrawdown: "0.04%",
      currentDrawdown: "0.00%",
      totalProfit: "$6,540.00",
      totalLoss: "$1,565.40",
      roi: "+6.54%",
      losses: 75,
      startDate: "Jan 1, 2024",
      endDate: "Jan 6, 2024",
      trades: generateTrades(312, 237, "$234.50", "$56.10")
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
    chartPath: "M 0,50 L 15,48 L 30,52 L 45,47 L 60,53 L 75,46 L 90,54 L 105,45 L 120,55 L 135,44 L 150,56 L 165,43 L 180,57 L 200,42 L 200,80 L 0,80 Z",
    chartDots: [{x: 30, y: 52}, {x: 90, y: 54}, {x: 150, y: 56}],
    backtest: {
      barsLoaded: "500 bars (5d 4h of data)",
      builtBars: "500 15m",
      signalsTotal: 500,
      signalsLong: 255,
      signalsShort: 245,
      pnl: "+$5,545.00",
      pnlPercent: "+5.54",
      profitFactor: 3.25,
      avgWin: "$1,888.24",
      avgLoss: "$580.80",
      maxDrawdown: "0.06%",
      currentDrawdown: "0.00%",
      totalProfit: "$13,217.67",
      totalLoss: "$4,067.52",
      roi: "+5.54%",
      losses: 39,
      startDate: "Jan 1, 2024",
      endDate: "Jan 6, 2024",
      trades: generateTrades(57, 18, "$1,888.24", "$580.80")
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
      <div className="page-content">
        <h1 className="page-title">Welcome to the Quant Terminal by LFG</h1>
        
        <div className="marketplace-hero">
          <a href="https://mainnet.lfg.land/vault" className="vault-banner" target="_blank" rel="noopener noreferrer">
            <div className="vault-banner-content">
              <div className="vault-banner-left">
                <div className="vault-logo">LFG</div>
                <div className="vault-banner-text">
                  <h2 className="vault-banner-title">Experience our top strategies on Lighter.xyz</h2>
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

