import { AUCTION_CLEARING_INDEX, AUCTION_DEMAND } from '../data/launch-steps.ts'
import { FlowProgressCard } from './FlowProgressCard.tsx'
import { FlowTermsCard } from './FlowTermsCard.tsx'
import { Float } from './Float.tsx'
import { Pill } from './Pill.tsx'

export function AuctionFlow({ open }: { open: boolean }) {
  const clearX = 10 + AUCTION_CLEARING_INDEX * 16 - 2.5
  return (
    <>
      <FlowTermsCard
        symbol="TIDE"
        name="Tidepool"
        terms={[
          ['Tokens offered', '20,000,000'],
          ['Reserve price', '0.0100 XLM'],
          ['Window', '48 hours'],
          ['Bid access', open ? 'Open to everyone' : 'Equal for eligible'],
        ]}
      />
      <FlowProgressCard
        title="Bidding"
        status="Open"
        figure="412 bids"
        of="ends in 2d 4h"
        progress={0.58}
        foot="58% of the window elapsed · 286 bidders"
      />
      <Float order={2} className="flow-card">
        <div className="float-head">
          <span className="font-medium">Demand by bid price</span>
          <Pill>0.0215 XLM</Pill>
        </div>
        <svg className="flow-chart" viewBox="0 0 240 112" role="img" aria-label="Bids grouped by price, with the clearing price marked.">
          <path d="M8 104H232" className="axis" />
          {AUCTION_DEMAND.map((demand, i) => (
            <rect
              key={i}
              x={10 + i * 16}
              y={(104 - demand * 86).toFixed(1)}
              width="11"
              height={(demand * 86).toFixed(1)}
              rx="2"
              className={i >= AUCTION_CLEARING_INDEX ? 'won' : 'bid'}
            />
          ))}
          <path d={`M${clearX} 8V104`} className="clear" />
        </svg>
        <p className="flow-foot">Bids at or above the line clear</p>
      </Float>
    </>
  )
}
