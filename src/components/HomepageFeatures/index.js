import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'All VATSIM services in one place',
    Svg: require('@site/static/img/undraw_product_tour_re_8bai.svg').default,
    description: (
      <>
        No more looking at different API docs, Discord chats, and OSS libraries.
        We&apos;ve centralized all of our public services into one place.
      </>
    ),
  },
  {
    title: 'Always up to date',
    Svg: require('@site/static/img/undraw_maintenance_re_59vn.svg').default,
    description: (
      <>
        Can&apos;t remember if that API endpoint is still valid? We&apos;ve
        filled our docs with the latest and greatest from VATSIM.
      </>
    ),
  },
  {
    title: 'Everything you need to get started',
    Svg: require('@site/static/img/undraw_programming_re_kg9v.svg').default,
    description: (
      <>
        Everything you need to integrate with our public APIs is here. From
        documentation to code samples, we&apos;ve got you covered.
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
