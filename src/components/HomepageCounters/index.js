import clsx from "clsx";
import Heading from "@theme/Heading";
import IncrementalCounter from "@site/src/components/IncrementalCounter";
import styles from "./styles.module.css";

export default function HomepageCounters() {
  return (
    <section className={styles.counters}>
      <div className="container">
        <div className="row">
          {/* words written */}
          <div className={clsx("col col--4")}>
            <div className="c__card">
              <div className="card">
                <div className="card__body">
                  <div className="text--center padding-horiz--md">
                    <Heading as="h2">
                      <IncrementalCounter target={100} duration={5000} />
                      K+
                    </Heading>
                    <p className="text--center text--light">Words Written</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* audience */}
          <div className={clsx("col col--4")}>
            <div className="c__card">
              <div className="card">
                <div className="card__body">
                  <div className="text--center padding-horiz--md">
                    <Heading as="h2">
                      <IncrementalCounter target={20} duration={4000} />
                      K+
                    </Heading>
                    <p className="text--center text--light">Audience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* github */}
          <div className={clsx("col col--4")}>
            <div className="c__card">
              <div className="card">
                <div className="card__body">
                  <div className="text--center padding-horiz--md">
                    <Heading as="h2">
                      <IncrementalCounter target={3} duration={3000} />
                      K+
                    </Heading>
                    <p className="text--center text--light">GitHub Stars</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
