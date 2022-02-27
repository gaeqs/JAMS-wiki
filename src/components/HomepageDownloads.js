import React from 'react';
import styles from './HomepageDownloads.module.css';
import Translate from "@docusaurus/core/lib/client/exports/Translate";

const FeatureList = [
    {
        title: 'Windows',
        image: '/img/windows.png',
        download: 'https://github.com/gaeqs/JAMS/releases/download/0.4-BETA-PRE-1/JAMS-0.4.exe',
    },
    {
        title: 'MacOS',
        image: '/img/mac.png',
        download: 'https://github.com/gaeqs/JAMS/releases/download/0.4-BETA-PRE-1/JAMS-macos.zip',
    },
    {
        title: 'Ubuntu',
        image: '/img/ubuntu.png',
        download: 'https://github.com/gaeqs/JAMS/releases/download/0.4-BETA-PRE-1/jams_0.4.BETA.SNAPSHOT-1_amd64.deb',
    },
    {
        title: 'Other',
        image: '/img/java.png',
        download: 'https://github.com/gaeqs/JAMS/releases/download/0.4-BETA-PRE-1/JAMS-0.4.BETA.SNAPSHOT.jar',
    },
];

function Download({title, image, download}) {
    return (
        <div className={['col', styles.downloadImageDiv].join(' ')}>
            <a href={download}>
                <img className={styles.downloadImage} src={image} alt={title}/>
            </a>
        </div>
    )
}

export default function HomepageDownloads() {
    return (
        <section className={styles.downloads}>
            <div className="container">
                <h1 id="downloads">
                    <Translate id="index.downloads.title">Downloads:</Translate>
                </h1>
                <div className='row'>
                    {FeatureList.map((props, idx) => (
                        <Download key={idx} idx={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
