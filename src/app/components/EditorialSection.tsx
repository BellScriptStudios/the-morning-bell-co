import styles from '../styles/EditorialSection.module.css';

export default function EditorialSection() {
    return (
        <section className={styles.editorial}>
          <div className={styles.editorialInner}>
            <p className={styles.editorialKicker}>Our Philosophy</p>
            <h2 className={styles.editorialTitle}>We build for clarity, not just momentum.</h2>
            <div className={styles.editorialBody}>
              <p className={styles.editorialText}>
                At The Morning Bell Co., we see innovation as something that’s sustained—not sprinted.
                Strong ventures are built on clear systems, thoughtful design, and operational discipline.
              </p>

              <p className={styles.editorialText}>
                Our role is to support the work behind the scenes: the infrastructure, patterns, 
                and decisions that make growth repeatable. We support ideas that are built to 
                last, and in the structures that help them stay that way.
              </p>
            </div>
          </div>
        </section>
    )
}