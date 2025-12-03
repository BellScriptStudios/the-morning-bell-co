import styles from "../styles/MissionSection.module.css";

export default function MissionSection(){
    return (
        <section className={styles.mission} id="approach">
            <div className={styles.missionInner}>
                <div className={styles.missionIntro}>
                    <p className={styles.missionKicker}>Our Approach</p>
                    <h2 className={styles.missionTitle}>
                        We build with structure, clarity, and a long-term vision.
                    </h2>
                    <p className={styles.missionDesc}>
                        The Morning Bell Co. brings an interdisciplinary lens to every venture.  
                        We focus on building clear, scalable systems where technology,design, and 
                        operations work together to support long-term growth andmeaningful impact.
                    </p>
                </div>

                <div className={styles.missionValues}>
                    <ul className={styles.valuesList}>

                        <li className={styles.valueItem}>
                        <span className={styles.valueLabel}>Systems thinking</span>
                        <span className={styles.valueText}>
                            We design from the infrastructure up, so 
                            ventures can grow without losing clarity.
                         </span>
                        </li>

                        <li className={styles.valueItem}>
                        <span className={styles.valueLabel}>Operational clarity</span>
                        <span className={styles.valueText}>
                            We prioritize structure, documentation, 
                            and simplicity in how things run.
                        </span>
                        </li>

                        <li className={styles.valueItem}>
                            <span className={styles.valueLabel}>Collaborative build</span>
                            <span className={styles.valueText}>We work alongside partners and teams, not above them.</span>
                        </li>

                        <li className={styles.valueItem}>
                            <span className={styles.valueLabel}>Long-term stewardship</span>
                            <span className={styles.valueText}>We make decisions with durability, not quick wins, in mind.</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}