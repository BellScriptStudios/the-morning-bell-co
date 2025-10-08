import styles from "../styles/AboutSection.module.css";

export default function AboutSection() {
  return (
    <section id="about" className={styles.section}>
      <h2 className={styles.title}>About The Morning Bell Co.</h2>

      <p className={styles.lead}>
        Established in 2025, The Morning Bell Co. was built on a belief that
        creativity and innovation can redefine what’s possible. We invest in
        ventures that inspire progress and make a meaningful mark on the world
        around them.
      </p>

      <p className={styles.mission}>
        Our mission is to nurture and grow businesses that align with our values
        of integrity, innovation, and impact. We believe in the power of ideas
        to transform industries and improve lives, and we are committed to
        supporting ventures that share this vision.
      </p>

      <div className={styles.valuesGrid} role="list">
        <div className={styles.valueCard} role="listitem">
          <h3 className={styles.valueTitle}>Clarity</h3>
          <p className={styles.valueText}>
            We believe in transparent communication and clear goals to foster
            trust and collaboration.
          </p>
        </div>
        <div className={styles.valueCard} role="listitem">
          <h3 className={styles.valueTitle}>Creativity</h3>
          <p className={styles.valueText}>
            Innovation is at the heart of what we do. We encourage
            out-of-the-box thinking to drive progress.
          </p>
        </div>
        <div className={styles.valueCard} role="listitem">
          <h3 className={styles.valueTitle}>Commitment</h3>
          <p className={styles.valueText}>
            We are dedicated to the success of our ventures and the positive
            impact they can make.
          </p>
        </div>
        <div className={styles.valueCard} role="listitem">
          <h3 className={styles.valueTitle}>Integrity</h3>
          <p className={styles.valueText}>
            We uphold the highest standards of honesty and ethics in all our
            dealings.
          </p>
        </div>
        <div className={styles.valueCard} role="listitem">
          <h3 className={styles.valueTitle}>Community</h3>
          <p className={styles.valueText}>
            We strive to build strong relationships and contribute positively to
            the communities we serve.
          </p>
        </div>
        <div className={styles.valueCard} role="listitem">
          <h3 className={styles.valueTitle}>Growth</h3>
          <p className={styles.valueText}>
            We are committed to continuous learning and development—both for our
            ventures and ourselves.
          </p>
        </div>
      </div>

      <div className={styles.divider} />

      <p className={styles.context}>
        As a parent company, The Morning Bell Co. provides strategic guidance,
        resources, and support to its ventures, helping them navigate challenges
        and seize opportunities in their respective markets. Our portfolio
        includes a diverse range of businesses, each with its own unique
        strengths and potential for growth. Together, we are building a future
        where innovation and creativity lead the way to a better tomorrow.
      </p>
    </section>
  );
}