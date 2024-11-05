import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import HomepageOverview from "@site/src/components/HomepageOverview";
import HomepageBanner from "@site/src/components/HomepageBanner";
import HomepageCounters from "@site/src/components/HomepageCounters";
import GetInTouch from "@site/src/components/GetInTouch";

import Heading from "@theme/Heading";
import styles from "./index.module.css";

function HomepageButtons() {
  return (
    <div className={styles.buttons}>
      <Link
        className="button button--secondary button--lg"
        to="https://bento.me/adnanrahic"
      >
        Social 🎥
      </Link>
      <Link
        className="button button--outline button--secondary button--lg"
        to="/blog"
      >
        Blog 📚
      </Link>
    </div>
  );
}

function HomepageHeader() {
  return (
    <div className={clsx(styles.heroWrapper)}>
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <div className="row">
            <div className="col col--8 col--offset-2">
              <Heading as="h1" className="hero__title">
                Hi! <br />
                I'm Adnan Rahić
              </Heading>
              <p
                className={clsx(
                  "text--center padding-horiz--md hero__subtitle text--light",
                  styles.heroSubtitle
                )}
              >
                I help developer-first companies grow for a living, craft code,
                and share knowledge at events across the globe. I've been
                helping products build DevRel programs since 2018.
              </p>
              <HomepageCounters />
              <GetInTouch />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`Welcome!`} description={`${siteConfig.tagline}`}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <HomepageBanner imageUrl="/img/home.png" />
        <HomepageOverview />
        <GetInTouch />
      </main>
    </Layout>
  );
}
