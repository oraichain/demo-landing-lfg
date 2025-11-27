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

const trades = [
  { time: "Nov 23, 6:30 PM", type: "LONG", token: "PYTH", entryPrice: 0.07299, exitPrice: 0.07334, pnl: 883.9182 },
  { time: "Nov 23, 7:15 PM", type: "LONG", token: "DOGE", entryPrice: 0.38234, exitPrice: 0.37120, pnl: -142.56 },
  { time: "Nov 23, 11:45 PM", type: "LONG", token: "CC", entryPrice: 0.07760, exitPrice: 0.07787, pnl: 473.7096 },
  { time: "Nov 24, 12:30 AM", type: "SHORT", token: "TRX", entryPrice: 0.18950, exitPrice: 0.19340, pnl: -78.32 },
  { time: "Nov 26, 5:52 PM", type: "SHORT", token: "RESOLV", entryPrice: 0.10560, exitPrice: 0.10255, pnl: 262.3386 },
  { time: "Nov 23, 8:45 AM", type: "LONG", token: "S", entryPrice: 0.10513, exitPrice: 0.10834, pnl: 253.269 },
  { time: "Nov 22, 8:30 AM", type: "LONG", token: "0G", entryPrice: 1.14590, exitPrice: 1.16970, pnl: 238.9044 },
  { time: "Nov 24, 2:45 PM", type: "SHORT", token: "RENDER", entryPrice: 8.32100, exitPrice: 8.75200, pnl: -165.84 },
  { time: "Nov 26, 5:56 PM", type: "SHORT", token: "GRASS", entryPrice: 0.33715, exitPrice: 0.33264, pnl: 133.9019 },
  { time: "Nov 22, 7:30 AM", type: "SHORT", token: "0G", entryPrice: 1.16530, exitPrice: 1.14470, pnl: 125.3922 },
  { time: "Nov 26, 6:31 PM", type: "LONG", token: "MON", entryPrice: 0.04743, exitPrice: 0.04800, pnl: 120.1503 },
  { time: "Nov 25, 1:20 PM", type: "LONG", token: "ARB", entryPrice: 0.42680, exitPrice: 0.41120, pnl: -95.28 },
  { time: "Nov 23, 11:54 PM", type: "SHORT", token: "XMR", entryPrice: 393.60000, exitPrice: 389.00000, pnl: 116.84 },
  { time: "Nov 22, 8:30 AM", type: "LONG", token: "2Z", entryPrice: 0.14511, exitPrice: 0.14731, pnl: 115.1438 },
  { time: "Nov 26, 9:50 PM", type: "LONG", token: "STBL", entryPrice: 0.06764, exitPrice: 0.06847, pnl: 110.0829 },
  { time: "Nov 25, 3:15 PM", type: "SHORT", token: "ONDO", entryPrice: 1.18340, exitPrice: 1.22920, pnl: -128.95 },
  { time: "Nov 23, 6:0 AM", type: "LONG", token: "GMX", entryPrice: 8.16850, exitPrice: 8.23970, pnl: 108.936 },
  { time: "Nov 22, 10:15 PM", type: "SHORT", token: "PENDLE", entryPrice: 2.16821, exitPrice: 2.14290, pnl: 108.6446 },
  { time: "Nov 22, 7:45 AM", type: "LONG", token: "WLFI", entryPrice: 0.14455, exitPrice: 0.14611, pnl: 107.8428 },
  { time: "Nov 27, 11:20 AM", type: "SHORT", token: "MON", entryPrice: 0.04529, exitPrice: 0.04481, pnl: 106.032 },
  { time: "Nov 24, 4:50 PM", type: "LONG", token: "STRK", entryPrice: 0.61430, exitPrice: 0.59150, pnl: -87.64 },
  { time: "Nov 26, 5:20 PM", type: "SHORT", token: "MON", entryPrice: 0.04644, exitPrice: 0.04595, pnl: 105.5803 },
  { time: "Nov 26, 10:22 PM", type: "SHORT", token: "FARTCOIN", entryPrice: 0.28730, exitPrice: 0.28424, pnl: 105.4782 },
  { time: "Nov 26, 9:55 PM", type: "SHORT", token: "POPCAT", entryPrice: 0.10300, exitPrice: 0.10191, pnl: 104.7599 },
  { time: "Nov 27, 10:56 AM", type: "SHORT", token: "EDEN", entryPrice: 0.07918, exitPrice: 0.07836, pnl: 103.771 },
  { time: "Nov 25, 5:30 PM", type: "LONG", token: "MASK", entryPrice: 6.82100, exitPrice: 6.51230, pnl: -103.92 },
  { time: "Nov 26, 7:58 PM", type: "SHORT", token: "FARTCOIN", entryPrice: 0.28212, exitPrice: 0.27931, pnl: 99.6426 },
  { time: "Nov 24, 2:34 AM", type: "LONG", token: "USELESS", entryPrice: 0.09772, exitPrice: 0.09898, pnl: 97.9146 },
  { time: "Nov 23, 7:43 PM", type: "LONG", token: "TAO", entryPrice: 285.06538, exitPrice: 288.00200, pnl: 95.7339 },
  { time: "Nov 26, 10:29 PM", type: "LONG", token: "MYX", entryPrice: 2.64860, exitPrice: 2.67710, pnl: 95.6175 },
  { time: "Nov 25, 6:45 PM", type: "SHORT", token: "LDO", entryPrice: 2.34560, exitPrice: 2.48920, pnl: -112.55 },
  { time: "Nov 27, 9:54 AM", type: "SHORT", token: "ZEC", entryPrice: 534.87100, exitPrice: 529.31400, pnl: 93.3576 },
  { time: "Nov 26, 10:40 PM", type: "SHORT", token: "WLFI", entryPrice: 0.16271, exitPrice: 0.16104, pnl: 91.349 },
  { time: "Nov 23, 10:56 PM", type: "LONG", token: "FARTCOIN", entryPrice: 0.22859, exitPrice: 0.23123, pnl: 89.9976 },
  { time: "Nov 25, 7:31 PM", type: "SHORT", token: "XPL", entryPrice: 0.21392, exitPrice: 0.21085, pnl: 88.9686 },
  { time: "Nov 26, 2:20 PM", type: "LONG", token: "RUNE", entryPrice: 3.65670, exitPrice: 3.42150, pnl: -98.18 },
  { time: "Nov 26, 11:13 PM", type: "LONG", token: "1000FLOKI", entryPrice: 0.04757, exitPrice: 0.04803, pnl: 88.0245 },
  { time: "Nov 23, 12:22 AM", type: "SHORT", token: "SUI", entryPrice: 1.34050, exitPrice: 1.32830, pnl: 84.6802 },
  { time: "Nov 23, 1:19 PM", type: "LONG", token: "0G", entryPrice: 1.23950, exitPrice: 1.25330, pnl: 83.4624 },
  { time: "Nov 24, 7:15 PM", type: "SHORT", token: "NEAR", entryPrice: 5.88920, exitPrice: 6.03450, pnl: -121.64 },
  { time: "Nov 23, 2:9 PM", type: "SHORT", token: "HYPE", entryPrice: 31.11520, exitPrice: 30.79260, pnl: 80.9726 },
  { time: "Nov 27, 10:0 AM", type: "SHORT", token: "1000PEPE", entryPrice: 0.00471, exitPrice: 0.00467, pnl: 80.6284 },
  { time: "Nov 25, 9:30 PM", type: "LONG", token: "ATOM", entryPrice: 9.43450, exitPrice: 9.15670, pnl: -106.89 },
  { time: "Nov 23, 12:50 PM", type: "LONG", token: "0G", entryPrice: 1.22536, exitPrice: 1.23790, pnl: 79.8274 },
  { time: "Nov 25, 8:17 PM", type: "SHORT", token: "GRASS", entryPrice: 0.38663, exitPrice: 0.38168, pnl: 79.398 },
  { time: "Nov 23, 10:26 AM", type: "SHORT", token: "MET", entryPrice: 0.29584, exitPrice: 0.29307, pnl: 77.7262 },
  { time: "Nov 26, 11:55 PM", type: "SHORT", token: "STBL", entryPrice: 0.06882, exitPrice: 0.06786, pnl: 75.3504 },
  { time: "Nov 26, 1:40 PM", type: "LONG", token: "INJ", entryPrice: 24.7670, exitPrice: 24.1230, pnl: -102.73 },
  { time: "Nov 23, 8:13 PM", type: "SHORT", token: "SPX", entryPrice: 0.48560, exitPrice: 0.48047, pnl: 75.0006 },
  { time: "Nov 26, 10:44 PM", type: "SHORT", token: "APT", entryPrice: 2.18320, exitPrice: 2.15990, pnl: 74.56 },
  { time: "Nov 23, 6:58 PM", type: "SHORT", token: "USELESS", entryPrice: 0.09694, exitPrice: 0.09607, pnl: 74.3763 },
  { time: "Nov 24, 1:36 AM", type: "LONG", token: "LINEA", entryPrice: 0.01008, exitPrice: 0.01020, pnl: 72.947 },
  { time: "Nov 25, 2:20 PM", type: "SHORT", token: "LINK", entryPrice: 16.7230, exitPrice: 17.2340, pnl: -158.45 },
  { time: "Nov 24, 2:26 AM", type: "LONG", token: "WLFI", entryPrice: 0.15030, exitPrice: 0.15248, pnl: 72.3106 },
  { time: "Nov 25, 8:31 PM", type: "SHORT", token: "MON", entryPrice: 0.03909, exitPrice: 0.03864, pnl: 71.3745 },
  { time: "Nov 22, 8:45 AM", type: "SHORT", token: "VIRTUAL", entryPrice: 0.92289, exitPrice: 0.91440, pnl: 69.8727 },
  { time: "Nov 26, 3:50 PM", type: "LONG", token: "UNI", entryPrice: 8.6560, exitPrice: 8.2230, pnl: -131.28 },
  { time: "Nov 27, 9:0 AM", type: "LONG", token: "ETHFI", entryPrice: 0.77483, exitPrice: 0.78080, pnl: 69.3117 },
  { time: "Nov 27, 11:0 AM", type: "LONG", token: "SKY", entryPrice: 0.04678, exitPrice: 0.04710, pnl: 68.2022 },
  { time: "Nov 25, 8:35 PM", type: "SHORT", token: "2Z", entryPrice: 0.12134, exitPrice: 0.12001, pnl: 67.9364 },
  { time: "Nov 25, 8:55 PM", type: "SHORT", token: "MET", entryPrice: 0.34003, exitPrice: 0.33635, pnl: 67.2704 },
  { time: "Nov 24, 5:20 PM", type: "SHORT", token: "AVAX", entryPrice: 30.8740, exitPrice: 31.3320, pnl: -145.73 },
  { time: "Nov 24, 2:18 AM", type: "LONG", token: "ZEC", entryPrice: 599.86200, exitPrice: 607.94700, pnl: 67.1055 },
  { time: "Nov 23, 6:30 PM", type: "LONG", token: "NMR", entryPrice: 10.93010, exitPrice: 11.02420, pnl: 66.9992 },
  { time: "Nov 24, 12:4 AM", type: "LONG", token: "IP", entryPrice: 2.44010, exitPrice: 2.47260, pnl: 66.5275 },
  { time: "Nov 25, 4:45 PM", type: "LONG", token: "SUI", entryPrice: 2.3450, exitPrice: 2.2820, pnl: -89.32 },
  { time: "Nov 23, 10:25 PM", type: "SHORT", token: "HYPE", entryPrice: 30.97390, exitPrice: 30.66530, pnl: 65.7318 },
  { time: "Nov 22, 8:15 PM", type: "LONG", token: "AAVE", entryPrice: 155.62100, exitPrice: 156.63400, pnl: 65.1359 },
  { time: "Nov 26, 7:15 PM", type: "SHORT", token: "ZRO", entryPrice: 1.30390, exitPrice: 1.29442, pnl: 64.7484 },
  { time: "Nov 23, 11:45 PM", type: "LONG", token: "S", entryPrice: 0.10559, exitPrice: 0.10649, pnl: 63.882 },
  { time: "Nov 26, 4:15 PM", type: "LONG", token: "MATIC", entryPrice: 0.5434, exitPrice: 0.5112, pnl: -98.16 },
  { time: "Nov 22, 9:0 AM", type: "LONG", token: "WLFI", entryPrice: 0.14622, exitPrice: 0.14753, pnl: 63.6922 },
  { time: "Nov 27, 12:38 PM", type: "SHORT", token: "PROVE", entryPrice: 0.49357, exitPrice: 0.48815, pnl: 63.143 },
  { time: "Nov 24, 2:9 AM", type: "LONG", token: "HBAR", entryPrice: 0.14820, exitPrice: 0.14979, pnl: 62.2008 },
  { time: "Nov 23, 8:50 PM", type: "LONG", token: "SPX", entryPrice: 0.48354, exitPrice: 0.48916, pnl: 60.415 },
  { time: "Nov 23, 11:46 PM", type: "LONG", token: "IP", entryPrice: 2.51650, exitPrice: 2.53950, pnl: 60.375 },
  { time: "Nov 26, 11:15 PM", type: "SHORT", token: "ZK", entryPrice: 0.03942, exitPrice: 0.03916, pnl: 59.89 },
  { time: "Nov 24, 3:5 AM", type: "LONG", token: "FF", entryPrice: 0.13056, exitPrice: 0.13204, pnl: 59.422 },
  { time: "Nov 25, 3:25 PM", type: "SHORT", token: "BNB", entryPrice: 612.34, exitPrice: 625.78, pnl: -212.56 },
  { time: "Nov 22, 11:29 PM", type: "LONG", token: "IP", entryPrice: 2.24420, exitPrice: 2.26240, pnl: 58.4038 },
  { time: "Nov 26, 11:34 PM", type: "LONG", token: "ADA", entryPrice: 0.41741, exitPrice: 0.42160, pnl: 58.241 },
  { time: "Nov 23, 2:27 PM", type: "SHORT", token: "HYPE", entryPrice: 30.79870, exitPrice: 30.47350, pnl: 58.2108 },
  { time: "Nov 23, 9:15 AM", type: "SHORT", token: "BCH", entryPrice: 549.02100, exitPrice: 542.66200, pnl: 57.8669 },
  { time: "Nov 27, 2:40 AM", type: "LONG", token: "SOL", entryPrice: 142.56, exitPrice: 138.92, pnl: -115.84 },
  { time: "Nov 23, 2:30 PM", type: "SHORT", token: "ASTER", entryPrice: 1.18041, exitPrice: 1.17226, pnl: 57.2945 },
  { time: "Nov 26, 9:15 PM", type: "LONG", token: "DOLO", entryPrice: 0.04872, exitPrice: 0.04903, pnl: 56.6308 },
  { time: "Nov 27, 12:0 AM", type: "LONG", token: "HYPE", entryPrice: 34.17640, exitPrice: 34.37000, pnl: 56.144 },
  { time: "Nov 23, 12:11 PM", type: "SHORT", token: "ZEC", entryPrice: 577.77900, exitPrice: 571.95500, pnl: 55.328 },
  { time: "Nov 24, 6:30 PM", type: "SHORT", token: "XRP", entryPrice: 2.45670, exitPrice: 2.58230, pnl: -176.45 },
  { time: "Nov 22, 11:47 PM", type: "LONG", token: "BCH", entryPrice: 544.78414, exitPrice: 548.64300, pnl: 54.7958 },
  { time: "Nov 26, 9:45 PM", type: "SHORT", token: "VVV", entryPrice: 1.07270, exitPrice: 1.06470, pnl: 54.48 },
  { time: "Nov 23, 12:45 AM", type: "SHORT", token: "HYPE", entryPrice: 31.57950, exitPrice: 31.37260, pnl: 54.4147 },
  { time: "Nov 26, 10:15 PM", type: "LONG", token: "0G", entryPrice: 1.17600, exitPrice: 1.18300, pnl: 53.571 },
  { time: "Nov 25, 5:50 PM", type: "SHORT", token: "DOT", entryPrice: 6.78340, exitPrice: 7.12920, pnl: -134.95 },
  { time: "Nov 23, 5:0 PM", type: "SHORT", token: "LTC", entryPrice: 83.57300, exitPrice: 83.15500, pnl: 53.5458 },
  { time: "Nov 24, 1:15 AM", type: "SHORT", token: "CC", entryPrice: 0.07868, exitPrice: 0.07792, pnl: 53.1468 },
  { time: "Nov 23, 7:56 PM", type: "SHORT", token: "USELESS", entryPrice: 0.09678, exitPrice: 0.09578, pnl: 51.66 },
  { time: "Nov 26, 10:0 PM", type: "SHORT", token: "1000BONK", entryPrice: 0.00950, exitPrice: 0.00942, pnl: 51.4448 },
  { time: "Nov 23, 6:0 AM", type: "LONG", token: "FARTCOIN", entryPrice: 0.21183, exitPrice: 0.21445, pnl: 50.697 },
  { time: "Nov 26, 2:35 PM", type: "SHORT", token: "THETA", entryPrice: 3.24560, exitPrice: 3.48920, pnl: -164.55 },
  { time: "Nov 23, 6:45 PM", type: "LONG", token: "HBAR", entryPrice: 0.13788, exitPrice: 0.13879, pnl: 49.4949 },
  { time: "Nov 23, 6:0 AM", type: "LONG", token: "IP", entryPrice: 2.28850, exitPrice: 2.31580, pnl: 48.8943 },
  { time: "Nov 23, 8:45 AM", type: "LONG", token: "CRV", entryPrice: 0.37378, exitPrice: 0.37704, pnl: 47.9872 },
  { time: "Nov 22, 8:45 AM", type: "SHORT", token: "WLFI", entryPrice: 0.14753, exitPrice: 0.14567, pnl: 47.9136 },
  { time: "Nov 27, 4:20 AM", type: "LONG", token: "FIL", entryPrice: 17.34, exitPrice: 16.78, pnl: -85.92 },
  { time: "Nov 22, 7:45 PM", type: "SHORT", token: "FF", entryPrice: 0.12462, exitPrice: 0.12378, pnl: 47.8884 },
  { time: "Nov 22, 11:15 PM", type: "LONG", token: "BTC", entryPrice: 84271.80000, exitPrice: 84591.90000, pnl: 47.3748 },
  { time: "Nov 23, 10:15 AM", type: "SHORT", token: "DYDX", entryPrice: 0.23716, exitPrice: 0.23501, pnl: 47.1925 },
  { time: "Nov 23, 10:0 PM", type: "SHORT", token: "SKY", entryPrice: 0.04247, exitPrice: 0.04224, pnl: 47.0571 },
  { time: "Nov 26, 11:30 PM", type: "SHORT", token: "CRO", entryPrice: 0.10952, exitPrice: 0.10901, pnl: 46.7109 },
  { time: "Nov 22, 9:0 AM", type: "LONG", token: "SYRUP", entryPrice: 0.29772, exitPrice: 0.30167, pnl: 46.4125 },
  { time: "Nov 22, 7:15 AM", type: "LONG", token: "TAO", entryPrice: 280.06000, exitPrice: 281.87000, pnl: 45.974 },
  { time: "Nov 26, 9:55 PM", type: "SHORT", token: "AVNT", entryPrice: 0.39587, exitPrice: 0.39164, pnl: 45.9378 },
  { time: "Nov 26, 6:30 PM", type: "SHORT", token: "XPL", entryPrice: 0.21486, exitPrice: 0.21376, pnl: 45.606 },
  { time: "Nov 25, 7:15 PM", type: "SHORT", token: "GRT", entryPrice: 0.48230, exitPrice: 0.52150, pnl: -132.84 },
  { time: "Nov 23, 8:15 AM", type: "LONG", token: "TAO", entryPrice: 271.55900, exitPrice: 273.79300, pnl: 45.1268 },
  { time: "Nov 23, 11:30 AM", type: "SHORT", token: "MORPHO", entryPrice: 1.52560, exitPrice: 1.51646, pnl: 44.9655 },
  { time: "Nov 26, 5:2 PM", type: "LONG", token: "ENA", entryPrice: 0.28587, exitPrice: 0.28928, pnl: 44.4323 },
  { time: "Nov 25, 8:37 PM", type: "SHORT", token: "JUP", entryPrice: 0.24725, exitPrice: 0.24466, pnl: 44.0559 },
  { time: "Nov 23, 11:15 PM", type: "SHORT", token: "HYPE", entryPrice: 31.12270, exitPrice: 30.85150, pnl: 43.6632 },
  { time: "Nov 23, 11:32 PM", type: "LONG", token: "LINEA", entryPrice: 0.01031, exitPrice: 0.01044, pnl: 43.3125 },
  { time: "Nov 26, 7:1 PM", type: "SHORT", token: "RESOLV", entryPrice: 0.09488, exitPrice: 0.09283, pnl: 43.1706 },
  { time: "Nov 24, 10:50 PM", type: "LONG", token: "FLOW", entryPrice: 0.82340, exitPrice: 0.78920, pnl: -112.45 },
  { time: "Nov 23, 2:0 PM", type: "LONG", token: "POPCAT", entryPrice: 0.09001, exitPrice: 0.09022, pnl: 41.7696 },
  { time: "Nov 22, 7:15 AM", type: "LONG", token: "PUMP", entryPrice: 0.00274, exitPrice: 0.00278, pnl: 40.816 },
  { time: "Nov 23, 10:0 PM", type: "SHORT", token: "OP", entryPrice: 0.30541, exitPrice: 0.30331, pnl: 39.9 },
  { time: "Nov 22, 9:0 AM", type: "SHORT", token: "0G", entryPrice: 1.17960, exitPrice: 1.17530, pnl: 38.9924 },
  { time: "Nov 26, 11:0 PM", type: "LONG", token: "DOLO", entryPrice: 0.04856, exitPrice: 0.04875, pnl: 38.9654 },
  { time: "Nov 25, 7:4 PM", type: "LONG", token: "MET", entryPrice: 0.32321, exitPrice: 0.32672, pnl: 38.8557 },
  { time: "Nov 25, 8:19 PM", type: "LONG", token: "MON", entryPrice: 0.03831, exitPrice: 0.03879, pnl: 38.8512 },
  { time: "Nov 23, 11:45 PM", type: "LONG", token: "AAVE", entryPrice: 164.71600, exitPrice: 165.99800, pnl: 38.8446 },
  { time: "Nov 23, 1:45 PM", type: "SHORT", token: "PUMP", entryPrice: 0.00272, exitPrice: 0.00270, pnl: 38.8076 },
  { time: "Nov 26, 11:45 PM", type: "LONG", token: "0G", entryPrice: 1.17640, exitPrice: 1.18100, pnl: 38.709 },
  { time: "Nov 27, 10:4 AM", type: "LONG", token: "JUP", entryPrice: 0.25871, exitPrice: 0.26182, pnl: 38.4707 },
];

const strategies = [
  {
    id: 1,
    name: "Momentum Surge",
    description: "Captures explosive price movements with precision timing",
    type: "Momentum",
    icon: MomentumIcon,
    winRate: 74,
    apr: 245,
    trades: 324,
    wins: 14,
    chartPath: "M 0,60 L 20,55 L 40,45 L 60,35 L 80,25 L 100,20 L 120,15 L 140,10 L 160,8 L 180,5 L 200,3 L 200,80 L 0,80 Z",
    chartDots: [{x: 40, y: 45}, {x: 100, y: 20}, {x: 180, y: 5}],
    backtest: {
      barsLoaded: "500 bars (5d 4h of data)",
      builtBars: "500 15m",
      signalsTotal: 19,
      signalsLong: 11,
      signalsShort: 8,
      pnl: "+$2,548.12",
      pnlPercent: "+2.55",
      profitFactor: "5.17",
      avgWin: "$225.65",
      avgLoss: "$122.19",
      maxDrawdown: "0.06%",
      currentDrawdown: "0.00%",
      totalProfit: "$3,159.07",
      totalLoss: "$610.95",
      roi: "+2.55%",
      losses: 5,
      startDate: "Nov 22, 2024",
      endDate: "Nov 26, 2024",
      trades: trades.slice(0, 19)
    },
   waitlistUrl: "https://forms.gle/pD7HCqCQGZcCUyQK8"
  },
  {
    id: 2,
    name: "Arbitrage Hunter",
    description: "Exploits price discrepancies across markets instantly",
    type: "Arbitrage",
    icon: ArbitrageIcon,
    winRate: 79,
    apr: 189,
    trades: 85,
    wins: 15,
    chartPath: "M 0,40 L 25,38 L 50,40 L 75,38 L 100,40 L 125,38 L 150,40 L 175,38 L 200,40 L 200,80 L 0,80 Z",
    chartDots: [{x: 50, y: 40}, {x: 100, y: 40}, {x: 150, y: 40}],
    backtest: {
      barsLoaded: "500 bars (5d 4h of data)",
      builtBars: "500 15m",
      signalsTotal: 19,
      signalsLong: 9,
      signalsShort: 10,
      pnl: "+$1,026.05",
      pnlPercent: "+1.03",
      profitFactor: "3.55",
      avgWin: "$95.22",
      avgLoss: "$100.57",
      maxDrawdown: "0.08%",
      currentDrawdown: "0.00%",
      totalProfit: "$1,428.34",
      totalLoss: "$402.29",
      roi: "+1.03%",
      losses: 4,
      startDate: "Nov 23, 2024",
      endDate: "Nov 27, 2024",
      trades: trades.slice(20, 39)
    },
   waitlistUrl: "https://forms.gle/pD7HCqCQGZcCUyQK8"
  },
  {
    id: 3,
    name: "Mean Reversion Pro",
    description: "Profits from price corrections to historical averages",
    type: "Mean Reversion",
    icon: MeanReversionIcon,
    winRate: 79,
    apr: 156,
    trades: 250,
    wins: 15,
    chartPath: "M 0,50 L 30,30 L 60,50 L 90,30 L 120,50 L 150,30 L 180,50 L 200,40 L 200,80 L 0,80 Z",
    chartDots: [{x: 30, y: 30}, {x: 90, y: 30}, {x: 150, y: 30}],
    backtest: {
      barsLoaded: "500 bars (5d 4h of data)",
      builtBars: "500 15m",
      signalsTotal: 19,
      signalsLong: 8,
      signalsShort: 11,
      pnl: "+$622.51",
      pnlPercent: "+0.62",
      profitFactor: "2.25",
      avgWin: "$74.79",
      avgLoss: "$124.84",
      maxDrawdown: "0.12%",
      currentDrawdown: "0.00%",
      totalProfit: "$1,121.86",
      totalLoss: "$499.35",
      roi: "+0.62%",
      losses: 4,
      startDate: "Nov 22, 2024",
      endDate: "Nov 27, 2024",
      trades: trades.slice(40, 59)
    },
   waitlistUrl: "https://forms.gle/pD7HCqCQGZcCUyQK8"
  },
  {
    id: 4,
    name: "Volatility Vanguard",
    description: "Thrives in high volatility environments",
    type: "Volatility",
    icon: VolatilityIcon,
    winRate: 79,
    apr: 312,
    trades: 178,
    wins: 15,
    chartPath: "M 0,40 L 20,60 L 40,20 L 60,70 L 80,10 L 100,65 L 120,25 L 140,55 L 160,15 L 180,50 L 200,30 L 200,80 L 0,80 Z",
    chartDots: [{x: 40, y: 20}, {x: 80, y: 10}, {x: 160, y: 15}],
    backtest: {
      barsLoaded: "500 bars (5d 4h of data)",
      builtBars: "500 15m",
      signalsTotal: 19,
      signalsLong: 12,
      signalsShort: 7,
      pnl: "+$410.77",
      pnlPercent: "+0.41",
      profitFactor: "1.75",
      avgWin: "$63.77",
      avgLoss: "$136.44",
      maxDrawdown: "0.15%",
      currentDrawdown: "0.00%",
      totalProfit: "$956.54",
      totalLoss: "$545.77",
      roi: "+0.41%",
      losses: 4,
      startDate: "Nov 22, 2024",
      endDate: "Nov 27, 2024",
      trades: trades.slice(60, 79)
    },
   waitlistUrl: "https://forms.gle/pD7HCqCQGZcCUyQK8"
  },
  {
    id: 5,
    name: "Trend Tracker",
    description: "Rides strong trends with adaptive position sizing",
    type: "Trend Following",
    icon: TrendFollowingIcon,
    winRate: 84,
    apr: 178,
    trades: 54,
    wins: 16,
    chartPath: "M 0,70 L 25,65 L 50,55 L 75,45 L 100,35 L 125,25 L 150,20 L 175,15 L 200,10 L 200,80 L 0,80 Z",
    chartDots: [{x: 50, y: 55}, {x: 100, y: 35}, {x: 175, y: 15}],
    backtest: {
      barsLoaded: "500 bars (5d 4h of data)",
      builtBars: "500 15m",
      signalsTotal: 19,
      signalsLong: 7,
      signalsShort: 12,
      pnl: "+$450.23",
      pnlPercent: "+0.45",
      profitFactor: "2.05",
      avgWin: "$54.84",
      avgLoss: "$142.41",
      maxDrawdown: "0.10%",
      currentDrawdown: "0.00%",
      totalProfit: "$877.47",
      totalLoss: "$427.24",
      roi: "+0.45%",
      losses: 3,
      startDate: "Nov 22, 2024",
      endDate: "Nov 26, 2024",
      trades: trades.slice(80, 99)
    },
   waitlistUrl: "https://forms.gle/pD7HCqCQGZcCUyQK8"
  },
  {
    id: 6,
    name: "Grid Master",
    description: "Systematic grid trading with dynamic levels",
    type: "Grid Trading",
    icon: GridTradingIcon,
    winRate: 89,
    apr: 134,
    trades: 512,
    wins: 17,
    chartPath: "M 0,50 L 25,45 L 50,50 L 75,45 L 100,50 L 125,45 L 150,50 L 175,45 L 200,50 L 200,80 L 0,80 Z",
    chartDots: [{x: 25, y: 45}, {x: 75, y: 45}, {x: 125, y: 45}],
    backtest: {
      barsLoaded: "500 bars (5d 4h of data)",
      builtBars: "500 15m",
      signalsTotal: 19,
      signalsLong: 9,
      signalsShort: 10,
      pnl: "+$574.26",
      pnlPercent: "+0.57",
      profitFactor: "3.63",
      avgWin: "$46.65",
      avgLoss: "$109.38",
      maxDrawdown: "0.05%",
      currentDrawdown: "0.00%",
      totalProfit: "$793.02",
      totalLoss: "$218.76",
      roi: "+0.57%",
      losses: 2,
      startDate: "Nov 22, 2024",
      endDate: "Nov 27, 2024",
      trades: trades.slice(100, 119)
    },
   waitlistUrl: "https://forms.gle/pD7HCqCQGZcCUyQK8"
  },
  {
    id: 7,
    name: "Market Maker Elite",
    description: "Provides liquidity while capturing spread profits",
    type: "Market Making",
    icon: MarketMakingIcon,
    winRate: 84,
    apr: 98,
    trades: 345,
    wins: 16,
    chartPath: "M 0,50 L 30,48 L 60,50 L 90,48 L 120,50 L 150,48 L 180,50 L 200,49 L 200,80 L 0,80 Z",
    chartDots: [{x: 30, y: 48}, {x: 90, y: 48}, {x: 150, y: 48}],
    backtest: {
      barsLoaded: "500 bars (5d 4h of data)",
      builtBars: "500 15m",
      signalsTotal: 19,
      signalsLong: 11,
      signalsShort: 8,
      pnl: "+$552.09",
      pnlPercent: "+0.55",
      profitFactor: "2.29",
      avgWin: "$61.17",
      avgLoss: "$142.19",
      maxDrawdown: "0.04%",
      currentDrawdown: "0.00%",
      totalProfit: "$978.65",
      totalLoss: "$426.56",
      roi: "+0.55%",
      losses: 3,
      startDate: "Nov 22, 2024",
      endDate: "Nov 27, 2024",
      trades: trades.slice(66, 85)
    },
   waitlistUrl: "https://forms.gle/pD7HCqCQGZcCUyQK8"
  },
  {
    id: 8,
    name: "Scalp King",
    description: "Ultra-fast execution for micro-profit accumulation",
    type: "Scalping",
    icon: ScalpingIcon,
    winRate: 79,
    apr: 445,
    trades: 423,
    wins: 15,
    chartPath: "M 0,50 L 15,48 L 30,52 L 45,47 L 60,53 L 75,46 L 90,54 L 105,45 L 120,55 L 135,44 L 150,56 L 165,43 L 180,57 L 200,42 L 200,80 L 0,80 Z",
    chartDots: [{x: 30, y: 52}, {x: 90, y: 54}, {x: 150, y: 56}],
    backtest: {
      barsLoaded: "500 bars (5d 4h of data)",
      builtBars: "500 15m",
      signalsTotal: 19,
      signalsLong: 8,
      signalsShort: 11,
      pnl: "+$205.44",
      pnlPercent: "+0.21",
      profitFactor: "1.37",
      avgWin: "$51.15",
      avgLoss: "$140.47",
      maxDrawdown: "0.06%",
      currentDrawdown: "0.00%",
      totalProfit: "$767.31",
      totalLoss: "$561.87",
      roi: "+0.21%",
      losses: 4,
      startDate: "Nov 22, 2024",
      endDate: "Nov 26, 2024",
      trades: trades.slice(88, 107)
    },
   waitlistUrl: "https://forms.gle/pD7HCqCQGZcCUyQK8"
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
                    <div className="vault-stat-label">TVL</div>
                    <div className="vault-stat-value positive">$11,195</div>
                  </div>
                  <div className="vault-stat">
                    <div className="vault-stat-label">Total Volume</div>
                    <div className="vault-stat-value">$30M</div>
                  </div>
                  <div className="vault-stat">
                    <div className="vault-stat-label">Points</div>
                    <div className="vault-stat-value positive">6</div>
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
