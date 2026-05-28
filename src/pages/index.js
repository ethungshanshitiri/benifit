import React from 'react';
import Layout from '@theme/Layout';
import styles from './styles.module.css';

export default function Home() {
  return (
    <Layout
      title="Home"
      description="BeNiFIt explores intrabody nanoscale communication for in vivo biomarker sensing.">
      <main className={styles.home}>
        <div className="container">
          <section className={styles.hero}>
            <div className={styles.heroText}>
              <h1 className={styles.title}>BeNiFIt</h1>
              <p className={styles.summary}>
                Early detection is important for improving outcomes in chronic diseases. Current biomarker analysis still depends heavily on collecting limited samples, processing them outside the body, and waiting for results. This can miss rare early signals when disease related biomarkers are present at very low concentrations.
              </p>
              <p className={styles.summary}>
                BeNiFIt explores whether intrabody nanoscale communication can make in vivo biomarker detection more feasible. Its long term vision is faster, less invasive, and more continuous biomarker monitoring. The fellowship work focused on modelling, simulation, communication design, and reusable research methods.
              </p>
              <img
                className={styles.euLogo}
                src="img/funded-by-eu.png"
                alt="Funded by the European Union"
              />
            </div>
            <figure className={styles.figureWrap}>
              <img
                className={styles.figureImage}
                src="img/BeNiFIt_Abstract.png"
                alt="BeNiFIt graphical abstract showing diagnostic challenges, intrabody nanonetworks, expected impact, and work packages"
              />
            </figure>
          </section>
        </div>
      </main>
    </Layout>
  );
}
