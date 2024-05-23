import React from "react";
import styles from "./Hero.module.css"
import { getImageUrl } from "../../utils";

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Andi</h1>
                <p className={styles.description}>I'm a front-end developer with 2 years of experience using React ad NodeJS. Reach out if you'd like to learn more!</p>
                <a className={styles.contactBtn} href="mailto:a.djur_12@hotmail.com">Contact Me</a>
            </div>
            <img src={getImageUrl("heroImage.png")} alt="Hero image of me" className={styles.heroImg} />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    )
}
