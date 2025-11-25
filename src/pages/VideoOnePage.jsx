import NavBar from '../components/NavBar'
import CardSlider from '../components/CardSlider'

const video1Outline = [
  {
    title: "A New Quant Era",
    body: "LFG is building the first modular on-chain quant ecosystem — fast, automated, composable."
  },
  {
    title: "Autonomous Quant Agents",
    body: "Purpose-built AI/quant strategies that generate sustainable volume and yield."
  },
  {
    title: "The LFG Orderbook",
    body: "35+ pairs, precise routing, and clean execution designed for bots."
  },
  {
    title: "Mobile Quant Terminal",
    body: "Trade, automate, monitor bots, and manage vaults from one place."
  },
  {
    title: "Quant Vaults",
    body: "Deposit, earn yield, and benefit from dual-reward mechanisms."
  },
  {
    title: "LFG Money Market",
    body: "Borrow, lend, collateralize — unlock capital efficiency."
  },
  {
    title: "The Modular Quant Economy",
    body: "Users, quants, bots, and liquidity form a self-reinforcing network."
  },
  {
    title: "The Future Is Automated",
    body: "LFG is building the quant layer for everyone."
  }
]

function VideoOnePage() {
  return (
    <div className="page">
      <NavBar />
      <div className="page-content">
        <h1 className="page-title">The LFG Quant Ecosystem</h1>
        <div className="slider-section">
          <p className="slider-instruction">Slide to explore the video outline</p>
          <CardSlider cards={video1Outline} />
        </div>
      </div>
    </div>
  )
}

export default VideoOnePage

