import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Developer Relations 🤝",
    description: (
      <>
        Crafting and executing DevRel programs from the ground up by creating
        code integrations and examples, designing product decks, writing case
        studies, and crafting blog posts.
      </>
    ),
  },
  {
    title: "Product Marketing 🚀",
    description: (
      <>
        Leading dev tool marketing campaigns, collaborating closely with
        engineering and product teams to refine GTM product vision and messaging
        to drive user adoption.
      </>
    ),
  },
  {
    title: "Product Growth 📈",
    description: (
      <>
        Experience collaborating with C-level executives, growth engineering,
        and product teams to successfully grow products from the ground up and
        set them apart in the market.
      </>
    ),
  },
];

function Feature({ title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="hf__card">
        <div className="card">
          <div className="card__body">
            <div className="text--center padding-horiz--md">
              <Heading as="h2">{title}</Heading>
              <p className="text--center padding-horiz--md text--normal">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
