import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const facts = [
  {value: 'MSCA PF', label: 'Horizon Europe fellowship'},
  {value: 'April 2024 to March 2026', label: 'Project period'},
  {value: 'UPC BarcelonaTech', label: 'Host institution'},
  {value: 'March 2030', label: 'Maintained updates'}
];

const focusAreas = [
  {
    marker: 'O1',
    title: 'Biomarker sensing',
    body:
      'Models for nanomachines moving through vascular environments and detecting low concentration biomarkers.'
  },
  {
    marker: 'O2',
    title: 'Passive communication',
    body:
      'Study of in body to on body communication routes under size, energy, and safety constraints.'
  },
  {
    marker: 'O3',
    title: 'Simulation methods',
    body:
      'Reusable simulation workflows connecting sensing, communication, and design space exploration.'
  }
];

export default function Home() {
  return (
    <Layout
      title="Home"
      description="BeNiFIt is a Horizon Europe MSCA Postdoctoral Fellowship on intrabody nanoscale communication for in vivo biomarker sensing.">
      <header className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <p className={styles.eyebrow}>Horizon Europe MSCA Postdoctoral Fellowship</p>
            <h1 className={styles.title}>BeNiFIt</h1>
            <p className={styles.subtitle}>
              Fully Biocompatible Intrabody Nanoscale Communication System to Foster Novel In Body Diagnostics and Monitoring Systems.
            </p>
            <p className={styles.summary}>
              Led by Dr Ethungshan Shitiri at UPC BarcelonaTech, the project studied nanomachines, passive magnetic communication, and multi scale simulation for future in vivo biomarker sensing research.
            </p>
            <div className={styles.actions}>
              <Link className="button button--primary" to="/project">
                Project
              </Link>
              <Link className="button button--secondary" to="/research-outputs">
                Research outputs
              </Link>
            </div>
            <img
              className={styles.euLogo}
              src="img/funded-by-eu.png"
              alt="Funded by the European Union"
            />
          </div>
        </div>
      </header>

      <main>
        <section className={styles.factBand} aria-label="Project facts">
          <div className="container">
            <div className={styles.factGrid}>
              {facts.map((fact) => (
                <article key={fact.label} className={styles.factItem}>
                  <strong>{fact.value}</strong>
                  <span>{fact.label}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className="container">
            <div className={styles.splitSection}>
              <div className={styles.sectionIntro}>
                <p className={styles.kicker}>Project overview</p>
                <h2>Nanonetworks for in vivo biomarker sensing</h2>
                <p>
                  BeNiFIt explored whether the sensing event can move closer to where biomarkers circulate. The work remained at modelling, simulation, and design analysis maturity, with contributions in vascular detection models, passive communication studies, and reusable simulation methods.
                </p>
                <div className={styles.textLinks}>
                  <Link to="/news">News</Link>
                  <Link to="/team-contact">Team and contact</Link>
                </div>
              </div>
              <figure className={styles.figureWrap}>
                <img
                  className={styles.figureImage}
                  src="img/BeNiFIt_Abstract.png"
                  alt="BeNiFIt graphical abstract showing diagnostic challenges, intrabody nanonetworks, expected impact, and work packages"
                />
                <figcaption>BeNiFIt graphical abstract</figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.altSection}`}>
          <div className="container">
            <div className={styles.sectionIntro}>
              <p className={styles.kicker}>Project focus</p>
              <h2>Three connected work streams</h2>
            </div>
            <div className={styles.cardGrid}>
              {focusAreas.map((area) => (
                <article key={area.marker} className={styles.card}>
                  <span className={styles.cardMarker}>{area.marker}</span>
                  <h3>{area.title}</h3>
                  <p>{area.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.ctaSection}`}>
          <div className="container">
            <div className={styles.ctaBox}>
              <div>
                <p className={styles.kicker}>Outputs and updates</p>
                <h2>Follow publications, software, activities, and team information</h2>
                <p>
                  The site is maintained for project outputs and follow on updates.
                </p>
              </div>
              <div className={styles.ctaLinks}>
                <Link className="button button--primary" to="/news">
                  News and media
                </Link>
                <Link className="button button--outline button--primary" to="/team-contact">
                  Team and contact
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
