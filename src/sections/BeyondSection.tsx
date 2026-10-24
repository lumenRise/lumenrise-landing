import { AccessWidget } from '../components/AccessWidget.tsx'
import { ClaimsWidget } from '../components/ClaimsWidget.tsx'
import { Feature } from '../components/Feature.tsx'
import { MomentumWidget } from '../components/MomentumWidget.tsx'
import { Scene } from '../components/Scene.tsx'
import { SectionHead } from '../components/SectionHead.tsx'
import { VoteWidget } from '../components/VoteWidget.tsx'

export function BeyondSection() {
  return (
    <section id="beyond" className="section" aria-labelledby="beyond-title">
      <div className="container">
        <SectionHead
          id="beyond-title"
          eyebrow="More Than a Launchpad"
          title="Reputation that goes further."
          lede={[
            'The same infrastructure that powers launch eligibility can support participation, rewards, and access across the Stellar ecosystem.',
          ]}
          cta={{ label: 'Build with Reputation', href: 'https://platform.lumenrise.app/developers' }}
        />
        <div className="features features-4">
          <Feature
            title="Airdrops & Rewards"
            text="Reward users based on participation, contribution, and custom eligibility criteria."
          >
            <Scene tone="lime" className="feature-scene use-scene">
              <ClaimsWidget />
            </Scene>
          </Feature>
          <Feature title="Governance" text="Define participation requirements using reputation and verifiable activity.">
            <Scene tone="cream" className="feature-scene use-scene">
              <VoteWidget />
            </Scene>
          </Feature>
          <Feature
            title="Access Control"
            text="Create reputation-based access rules for applications, communities, and exclusive opportunities."
          >
            <Scene tone="olive" className="feature-scene use-scene">
              <AccessWidget />
            </Scene>
          </Feature>
          <Feature
            title="Ecosystem Incentives"
            text="Recognize meaningful contributions and build incentive programs around verifiable participation."
          >
            <Scene tone="orange" className="feature-scene use-scene">
              <MomentumWidget />
            </Scene>
          </Feature>
        </div>
      </div>
    </section>
  )
}
