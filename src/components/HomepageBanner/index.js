import clsx from "clsx";
import styles from "./styles.module.css";

export default function HomepageBanner({ imageUrl }) {
  const backgroundStyle = {
    backgroundImage: `url(${imageUrl})`,
  };

  return (
    <div>
      <section>
        <div className="container">
          <div className="row">
            <div className="col col--12 col--offset-0">
              <div
                className={clsx(styles.overviewImageBg)}
                style={backgroundStyle}
              ></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
