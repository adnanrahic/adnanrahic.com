import React from "react";
import styles from "./styles.module.css";

const GetInTouch = () => {
  return (
    <div className={styles.cta_container}>
      <div className={styles.cta_image}>
        <img
          src="/img/adnan.jpg" // Replace with your image URL
          alt="Profile"
        />
      </div>
      <div className={styles.cta_content}>
        <h2>Get in Touch</h2>
        <p>
          If you'd like to connect or have any questions, feel free to reach
          out!
        </p>
        <a
          href="mailto:adnanrahic.dev@gmail.com"
          className="button button--outline button--primary button--lg"
        >
          Let's Connect 🤝
        </a>
      </div>
    </div>
  );
};

export default GetInTouch;
