import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  icon: string;
  description: ReactNode;
  link: string;
};

// Content mapped to EveryX Project Requirements
const FeatureList: FeatureItem[] = [
  {
    title: 'Core Concepts',
    icon: '🧠',
    link: '/docs/core-concepts', // Ensure this folder exists in /docs/
    description: (
      <>
        Deep dive into Crowd-Priced Pools, Liquidity Logic, and how EveryX 
        differs from traditional order books.
      </>
    ),
  },
  {
    title: 'Trading Guide',
    icon: '📈',
    link: '/docs/trading-guide',
    description: (
      <>
        Learn to place trades, manage positions with Stop-Loss, and use 
        leverage effectively on the platform.
      </>
    ),
  },
  {
    title: 'Platform Mechanics',
    icon: '⚙️',
    link: '/docs/platform-mechanics',
    description: (
      <>
        Technical breakdown of Event Lifecycles (Upcoming → Resolution) 
        and settlement fees.
      </>
    ),
  },
  {
    title: 'Developer API',
    icon: '🔌',
    link: '/docs/api',
    description: (
      <>
        Integrate directly with the EveryX settlement layer. 
        Reference for contracts and endpoints.
      </>
    ),
  },
];

function Feature({title, icon, description, link}: FeatureItem) {
  return (
    <Link to={link} className={styles.featureCard}>
      <div className={styles.featureHeader}>
        <span className={styles.featureIcon}>{icon}</span>
        <Heading as="h3" className={styles.featureTitle}>{title}</Heading>
      </div>
      <p className={styles.featureDescription}>{description}</p>
      <div className={styles.featureFooter}>
        Read Guide <span className={styles.arrow}>&rarr;</span>
      </div>
    </Link>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          Developer Resources
        </Heading>
        <p className={styles.sectionSubtitle}>
          Everything you need to build and trade on EveryX.
        </p>
        <div className={styles.featureGrid}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}