import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const facts = [
  {value: 'MSCA PF', label: 'Horizon Europe fellowship'},
  {value: '101154851', label: 'Grant agreement'},
  {value: '2024 to 2026', label: 'Fellowship period'},
  {value: '2030', label: 'Public record maintained through March 2030'}
];

const objectives = [
  {
    marker: 'O1',
    title: 'In vivo biomarker sensing',
    body:
      'Model biomarker detection by nanomachines moving in blood vessels, with early stage cancer and circulating tumour DNA as the main case study.'
  },
  {
    marker: 'O2',
    title: 'In body to on body communication',
    body:
      'Study magnetic backscatter and passive communication routes that respect severe size, energy, and safety limits inside the body.'
  },
  {
    marker: 'O3',
    title: 'System level simulation',
    body:
      'Connect sensing models, communication models, and design space exploration into reusable simulation methods for future intrabody diagnostics research.'
  }
];

const outcomes = [
  {
    title: 'Vascular detection models',
    body:
      'Adapted simulation workflows explored capillary and microvascular biomarker detection, vessel geometry, flow effects, and cooperative nanomachine sensing.'
  },
  {
    title: 'Magnetic backscatter studies',
    body:
      'The NTNU and Oslo University Hospital secondment supported COMSOL training and weak signal modelling for 13.56 MHz magnetic backscatter links.'
  },
  {
    title: 'Open science path',
    body:
      'A public simulator repository was opened for gradual release of code, documentation, and example cases once the material is stable for reuse.'
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
            <h1 className={styles.title}>
              BeNiFIt explores intrabody nanoscale communication for faster in vivo biomarker sensing
            </h1>
            <p className={styles.subtitle}>
              Led by Dr Ethungshan Shitiri at UPC, BeNiFIt investigated whether nanomachines, passive magnetic communication, and multi scale simulation can support the scientific basis for less invasive and more continuous biomarker monitoring.
            </p>
            <div className={styles.actions}>
              <Link className="button button--primary button--lg" to="/project">
                Read the project record
              </Link>
              <Link className="button button--secondary button--lg" to="/research-outputs">
                See research outputs
              </Link>
            </div>
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
                <p className={styles.kicker}>Original fellowship view</p>
                <h2>A research project at the boundary of nanonetworks and diagnostics</h2>
                <p>
                  The proposal asked whether intrabody nanoscale communication can make in vivo biomarker detection feasible. Its long term vision is earlier detection and more continuous monitoring, while the fellowship itself focused on modelling, simulation, communication design, open science, and training.
                </p>
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
              <p className={styles.kicker}>Scientific objectives</p>
              <h2>Three connected work streams</h2>
              <p>
                The fellowship was structured around sensing, communication, and simulation. These streams remain the best way to read the project record and its outputs.
              </p>
            </div>
            <div className={styles.cardGrid}>
              {objectives.map((objective) => (
                <article key={objective.marker} className={styles.card}>
                  <span className={styles.cardMarker}>{objective.marker}</span>
                  <h3>{objective.title}</h3>
                  <p>{objective.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className="container">
            <div className={styles.sectionIntro}>
              <p className={styles.kicker}>Activities and outcomes</p>
              <h2>What the fellowship produced</h2>
              <p>
                BeNiFIt remained at modelling, simulation, and design analysis maturity. Its value is in methods, publications, training, secondment activity, and reusable foundations for follow on research.
              </p>
            </div>
            <div className={styles.outcomeGrid}>
              {outcomes.map((outcome) => (
                <article key={outcome.title} className={styles.outcomeItem}>
                  <h3>{outcome.title}</h3>
                  <p>{outcome.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.ctaSection}`}>
          <div className="container">
            <div className={styles.ctaBox}>
              <div>
                <p className={styles.kicker}>Public record</p>
                <h2>Follow the outputs, updates, and team behind BeNiFIt</h2>
                <p>
                  The website gathers publications, news, secondment activity, partner context, and links to public code as the project record is maintained after the fellowship.
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
