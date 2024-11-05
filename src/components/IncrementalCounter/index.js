import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";

const IncrementalCounter = ({ target, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const incrementTime = Math.floor(duration / target);
    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount < target) {
          return prevCount + 1;
        } else {
          clearInterval(interval);
          return target;
        }
      });
    }, incrementTime);

    return () => clearInterval(interval);
  }, [target, duration]);

  return <span className={styles.counter}>{count}</span>;
};

export default IncrementalCounter;
