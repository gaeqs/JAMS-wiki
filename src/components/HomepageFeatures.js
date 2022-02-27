import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import Translate from "@docusaurus/core/lib/client/exports/Translate";

const FeatureList = [
    {
        title: <Translate id="index.feature.title.easyToUse">Easy to Use</Translate>,
        image: '/img/JAMS-1.png',
        description: (
            <Translate id="index.feature.message.easyToUse">
                JAMS was designed using modern technologies, making it easy to use for beginners.
            </Translate>
        ),
    },
    {
        title: <Translate id="index.feature.title.powerfulSimulator">Powerful simulator</Translate>,
        image: '/img/JAMS-2.png',
        description: (
            <Translate id="index.feature.message.powerfulSimulator">
                Look into every aspect of your execution using a powerful and customizable simulator.
            </Translate>
        ),
    },
    {
        title:  <Translate id="index.feature.title.fullyCustomizable">Fully customizable</Translate>,
        image: '/img/JAMS-3.png',
        description: (
            <Translate id="index.feature.message.fullyCustomizable">
                JAMS is fully customizable, allowing you to create new themes, translations and plugins.
            </Translate>
        ),
    },
];

function FeatureImage({image, title}) {
    return (
        <div className={clsx('col col--8')}>
            <div className="text--center">
                <img className={styles.featureSvg} alt={title} src={image}/>
            </div>
        </div>
    )
}

function FeatureTitle({title, description}) {
    return (
        <div className="col col--4 text--center padding-horiz--md">
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}

function Feature({idx, image, title, description}) {
    if ((idx & 1) === 0) {
        return (
            <div className="row row--align-center margin-top--lg">
                <FeatureImage image={image} title={title}/>
                <FeatureTitle title={title} description={description}/>
            </div>
        );
    } else {
        return (
            <div className="row row--align-center margin-top--lg">
                <FeatureTitle title={title} description={description}/>
                <FeatureImage image={image} title={title}/>
            </div>
        )
    }
}

export default function HomepageFeatures() {
    return (
        <section className={styles.features}>
            <div className="container">
                {FeatureList.map((props, idx) => (
                    <Feature key={idx} idx={idx} {...props} />
                ))}
            </div>
        </section>
    );
}
