import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import HomepageDownloads from "../components/HomepageDownloads";
import Translate from "@docusaurus/core/lib/client/exports/Translate";

function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                <img src="/img/favicon.ico"/>
                <h1 className="hero__title">{siteConfig.title}</h1>
                <p className="hero__subtitle">{siteConfig.tagline}</p>
                <div className={styles.buttons}>
                    <Link
                        className="button button--secondary button--lg"
                        to="/docs/intro">
                        <Translate id="index.documentation">Documentation</Translate>
                    </Link>
                    <Link
                        className="button button--secondary button--lg"
                        to="#downloads">
                        <Translate id="index.downloads">Downloads</Translate>
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default function Home() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={`JAMS`}
            description="Just another MIPS simulation">
            <HomepageHeader/>
            <main>
                <HomepageFeatures/>
                <HomepageDownloads/>
            </main>
        </Layout>
    );
}
