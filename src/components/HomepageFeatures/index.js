import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Our Scope',
    Svg: require('@site/static/img/scope.svg').default,
    description: (
      <>
        We <a href="docs/about#our-focus">focus on AI plugins</a> — skills and MCP servers — for the Multi-Mission Algorithm and Analysis Platform.
      </>
    ),
  },
  {
    title: 'Community Based',
    Svg: require('@site/static/img/community.svg').default,
    description: (
      <>
        <p>We solicit ideas and contributions from the MAAP community and deliver AI plugins back to our users.</p>
      </>
    ),
  },
  {
    title: 'Open Source',
    Svg: require('@site/static/img/iterative.svg').default,
    description: (
      <>
        We develop AI plugins as open source. We iteratively improve them through tickets and pull requests.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
