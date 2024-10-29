import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import BlogOverview from "@site/src/components/Blog";
import Heading from "@theme/Heading";
import styles from "./index.module.css";

function BlogHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div className={clsx(styles.heroWrapper)}>
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <div className="row">
            <div className="col col--8 col--offset-2">
              <Heading as="h1" className="hero__title">
                Authored 100+ educational & technical content pieces.
              </Heading>
              <p
                className={clsx(
                  "text--center padding-horiz--md hero__subtitle text--light",
                  styles.heroSubtitle
                )}
              >
                Check out my work on either Medium or Dev.to.
              </p>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default function Blog() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description={`${siteConfig.description}`}
    >
      <BlogHeader />
      <main>
        <BlogOverview />
      </main>
    </Layout>
  );
}
