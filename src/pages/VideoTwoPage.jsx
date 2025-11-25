import NavBar from '../components/NavBar'
import CardSlider from '../components/CardSlider'

const video2Outline = [
  {
    title: "Utility With Purpose",
    body: "The LFG token isn't passive — it powers the entire quant stack."
  },
  {
    title: "Vault Access",
    body: "Token-gated access to top-performing quant vaults."
  },
  {
    title: "Quant Agent Licensing",
    body: "Use LFG to unlock, customize, and deploy agents."
  },
  {
    title: "Orderbook Staking",
    body: "Stake to earn fees from execution flow."
  },
  {
    title: "Collateral & Borrowing",
    body: "Use LFG to borrow, lend, and lever your quant stack."
  },
  {
    title: "Ecosystem Alignment",
    body: "A unified token powering users, quants, and liquidity."
  },
  {
    title: "The Quant Layer of the Future",
    body: "LFG ties the entire on-chain quant economy together."
  }
]

function VideoTwoPage() {
  return (
    <div className="page">
      <NavBar />
      <div className="page-content">
        <h1 className="page-title">Why the LFG Token Matters</h1>
        <div className="slider-section">
          <p className="slider-instruction">Slide to explore the video outline</p>
          <CardSlider cards={video2Outline} />
        </div>
      </div>
    </div>
  )
}

export default VideoTwoPage

