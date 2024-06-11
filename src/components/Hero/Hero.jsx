import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className='heroTitle'>Hi, I'm Andi</h1>
                <p className={styles.description}>
                    I am a front-end developer skilled in React and Node.js, committed to crafting responsive and dynamic web applications. Reach out if you'd like to learn more!</p>
                <a className={styles.contactBtn} href="mailto:a.djur_12@hotmail.com">
                    Contact Me
                </a>
            </div>
            <img
                src={getImageUrl("hero/deskAvatar.png")}
                alt="Hero image of me"
                className={styles.heroImg}
            />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    );
};
