import { EvidenceTrail } from '../components/EvidenceTrail.tsx'
import { Feature } from '../components/Feature.tsx'
import { ReputationNotices } from '../components/ReputationNotices.tsx'
import { Scene } from '../components/Scene.tsx'
import { SectionHead } from '../components/SectionHead.tsx'
import { SourceList } from '../components/SourceList.tsx'
import { WalletProfile } from '../components/WalletProfile.tsx'

export function ReputationSection() {
  return (
    <section id="reputation" className="section" aria-labelledby="reputation-title">
      <div className="container">
        <div className="rep-top">
          <SectionHead
            id="reputation-title"
            eyebrow="Reputation"
            title="Reputation is more than a number."
            lede={[
              'A wallet tells you what someone holds. Reputation helps you understand how they participate.',
              'Bring together onchain activity, developer contributions, ecosystem involvement, and other verifiable signals to build a more complete picture of participation.',
            ]}
            cta={{ label: 'Explore Reputation', href: 'https://platform.lumenrise.app/reputation' }}
            stack
          />
          <Scene tone="lime" className="rep-scene">
            <ReputationNotices />
          </Scene>
        </div>
        <div className="features features-3">
          <Feature
            title="Multidimensional Profiles"
            text="Go beyond a single score. Explore different dimensions of activity, contribution, and participation."
          >
            <Scene tone="olive" className="feature-scene">
              <WalletProfile />
            </Scene>
          </Feature>
          <Feature
            title="Connected Signals"
            text="Bring together data from Stellar, Base, GitHub, social platforms, and other supported sources."
          >
            <Scene tone="cream" className="feature-scene">
              <SourceList />
            </Scene>
          </Feature>
          <Feature
            title="Verifiable Evidence"
            text="Make reputation understandable and traceable through the signals and evidence behind it."
          >
            <Scene tone="orange" className="feature-scene">
              <EvidenceTrail />
            </Scene>
          </Feature>
        </div>
      </div>
    </section>
  )
}
