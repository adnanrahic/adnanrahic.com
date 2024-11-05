import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import TalksOverview from "@site/src/components/Talks";
import Heading from "@theme/Heading";
import styles from "./index.module.css";

function TalksHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div className={clsx(styles.heroWrapper)}>
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <div className="row">
            <div className="col col--8 col--offset-2">
              <Heading as="h1" className="hero__title">
                Presented 12+ conference talks around the globe.
              </Heading>
              <p
                className={clsx(
                  "text--center padding-horiz--md hero__subtitle text--light",
                  styles.heroSubtitle
                )}
              >
                I've been helping developer communities embrace healthy DevOps
                practices since 2016.
              </p>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default function Talks() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from @adnanrahic's talks!`}
      description={`${siteConfig.tagline}`}
    >
      <TalksHeader />
      <main>
        <TalksOverview />
      </main>
    </Layout>
  );
}
