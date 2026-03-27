import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const pillars = [
  {
    title: 'In vivo sensing',
    body:
      'Model how biomarkers and nanomachines move in the bloodstream, quantify the conditions for reliable detection, and study cooperative sensing to reduce false readings.'
  },
  {
    title: 'In to on body communication',
    body:
      'Develop a near-field magnetic communication architecture that keeps the nanomachine footprint tiny, respects safety constraints, and relies on passive or near-zero-energy signalling.'
  },
  {
    title: 'System-level simulator',
    body:
      'Build an open-source multi-scale simulator that joins sensing, channels, antennas, and gateway behaviour into one design-space exploration framework.'
  }
];

const metrics = [
  {value: '1000X', label: 'Target reduction in diagnostic turnaround'},
  {value: '>95%', label: 'Target detection accuracy'},
  {value: '<2 μm', label: 'Target nanomachine dimension'},
  {value: '~0 J', label: 'Target transmit energy through passive communication'}
];

export default function Home() {
  return (
    <Layout
      title="Home"
      description="BeNiFIt explores intrabody nanoscale communication for in vivo biomarker sensing in the bloodstream.">
      <header className={styles.hero}>
        <div className="container">
          <div className={styles.heroGrid}>
            <div>
              <h1 className={styles.title}>
                Towards real-time in vivo biomarker sensing through intrabody nanoscale communication
              </h1>
              <p className={styles.subtitle}>
                BeNiFIt studies how nanoscale biosensing, passive magnetic communication, and system-level modelling can be brought together to reduce diagnostic delay and support minimally invasive monitoring in the bloodstream.
              </p>
              <div className={styles.actions}>
                <Link className="button button--primary button--lg" to="/project">
                  Explore the project
                </Link>
                <Link className="button button--secondary button--lg" to="/research-outputs">
                  View research outputs
                </Link>
              </div>
            </div>
            <div className={styles.heroArtWrap}>
              <img className={styles.heroArt} src="img/BeNiFIt_Abstract.png" alt="" />
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className={styles.section}>
          <div className="container">
            <div className={styles.sectionIntro}>
              <h2>Why BeNiFIt matters</h2>
              <p>
                Today, biomarker analysis still depends heavily on drawing samples, processing them outside the body, and waiting for results. BeNiFIt asks whether the sensing event can be moved closer to where biomarkers actually circulate, and whether the resulting signal can be read from outside the body fast enough to make continuous or near-real-time monitoring plausible.
              </p>
            </div>
            <div className={styles.metricGrid}>
              {metrics.map((metric) => (
                <article key={metric.label} className={styles.metricCard}>
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.altSection}`}>
          <div className="container">
            <div className={styles.sectionIntro}>
              <h2>Project pillars</h2>
              <p>
                The project is organised around three tightly linked research pillars that connect biomarker dynamics, nanomachine design, and gateway-level interpretation.
              </p>
            </div>
            <div className={styles.cardGrid}>
              {pillars.map((pillar) => (
                <article key={pillar.title} className={styles.card}>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className="container">
            <div className={styles.pathway}>
              <div>
                <p className={styles.pathwayLabel}>Core pathway</p>
                <h2>From biomarker event to external readout</h2>
                <p>
                  BeNiFIt follows the full pathway rather than treating sensing and communication as isolated problems. The project starts with biomarker motion and biosensor interaction in blood, moves through sensing-enabled communication on the nanomachine, and ends at an on-body gateway that interprets the returned signal.
                </p>
              </div>
              <ol className={styles.pathwaySteps}>
                <li>Biomarkers circulate in a noisy blood environment</li>
                <li>Nanomachines detect target events with functionalized biosensors</li>
                <li>The sensing event alters the communication state of the nanomachine</li>
                <li>An on-body gateway interrogates and interprets the returned signal</li>
                <li>A multi-scale simulator helps compare designs and quantify tradeoffs</li>
              </ol>
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.ctaSection}`}>
          <div className="container">
            <div className={styles.ctaBox}>
              <div>
                <h2>Open science and public engagement</h2>
                <p>
                  For more details, please go to News and media.
                </p>
              </div>
              <div className={styles.ctaLinks}>
                  <Link className="button button--outline button--primary" to="/news">
                  News and media
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
