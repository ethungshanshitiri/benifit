import React from 'react';
import Layout from '@theme/Layout';
import styles from './styles.module.css';

export default function Home() {
  return (
    <Layout
      title="Home"
      description="BeNiFIt is a Horizon Europe MSCA Postdoctoral Fellowship on intrabody nanoscale communication for in vivo biomarker sensing.">
      <main className={styles.home}>
        <div className="container">
          <section className={styles.hero}>
            <div className={styles.heroText}>
              <p className={styles.eyebrow}>Horizon Europe MSCA Postdoctoral Fellowship</p>
              <h1 className={styles.title}>BeNiFIt</h1>
              <p className={styles.subtitle}>
                Fully Biocompatible Intrabody Nanoscale Communication System to Foster Novel In Body Diagnostics and Monitoring Systems.
              </p>
              <p className={styles.summary}>
                Led by Dr Ethungshan Shitiri at UPC BarcelonaTech, BeNiFIt studies intrabody nanoscale communication, vascular biomarker sensing, and simulation methods for future in vivo monitoring research.
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
