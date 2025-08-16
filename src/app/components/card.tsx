import React from "react"
import Image from "next/image";
import styles from "./Card.module.css";

type CardProps = {
    title: string;
    description: string;
    image: string;
    link: string;
};

export default function Card({ title, description, image, link }: CardProps ) {
    return (
        <div className={styles.card}>
            {image && (
                <div className={styles.imageWrap}>
                    <Image
                        src={image}
                        alt={title}
                        width={400}
                        height={250}
                        className={styles.image}
                    />
                </div>
            )}
            <div className={styles.content}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>
                {link && (
                    <a href={link} className={styles.link}>
                        Learn more →
                    </a>
                )}
            </div>
        </div>
    );
}