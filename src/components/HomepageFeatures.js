import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
          JAMS was designed using modern technologies, making it easy to use for beginners.
      </>
    ),
  },
  {
    title: 'Fully customizable',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
          JAMS is fully customizable, allowing you to create new themes, translations and plugins.
      </>
    ),
  },
  {
    title: 'Powerful simulator',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
          Look into every aspect of your execution using a powerful and customizable simulator.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
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
