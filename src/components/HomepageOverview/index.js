import clsx from "clsx";
import Heading from "@theme/Heading";
import Link from "@docusaurus/Link";
import styles from "./styles.module.css";

const OverviewList = [
  {
    title: "Tracetest.io",
    url: "https://tracetest.io",
    description: (
      <>
        At Tracetest, I developed a DevRel program from scratch that drove a
        400% increase in top-of-funnel traffic and grew our GitHub repository
        from 0 to over 1.1k ⭐️. Key initiatives included creating a dedicated
        examples section in Tracetest's open-source GitHub repository, where I
        built and maintained integrations with partners like Grafana and
        OpenSearch. I also organized launch weeks and marketing campaigns,
        managed and expanded documentation, spoke at major conferences (such as
        FOSDEM and WeAreDevelopers), led workshops and community calls, wrote
        case studies, and authored blog posts to engage and educate our
        community.
      </>
    ),
  },
  {
    title: "Cube.dev",
    url: "https://cube.dev",
    description: (
      <>
        At Cube, I led and delivered multiple workshops, garnering over 17,000
        views on YouTube, and authored 12+ in-depth technical blog posts. I
        contributed to the maintenance and expansion of our documentation by
        adding new examples and recipes, collaborating closely with Product,
        DevRel, and Community leadership to refine messaging and drive user
        adoption. My role also included speaking at conferences like GroupByConf
        and WeAreDevelopers, as well as fostering strategic partnerships with
        integration partners such as Apollo GraphQL, Retool, and others.
      </>
    ),
  },
  {
    title: "Sematext.com",
    url: "https://sematext.com",
    description: (
      <>
        At Sematext, I achieved some of my most notable DevRel engineering
        milestones, maintaining open-source system-level logging and monitoring
        tools, publishing npm modules, and managing Docker, Kubernetes, and Helm
        configurations. I also provided solutions engineering support to help
        existing customers succeed with the product. In addition, I authored an
        e-book and numerous educational blog posts that fueled significant
        product growth, reporting directly to the CEO. I managed documentation
        and led comprehensive onboarding initiatives, guiding users from signup
        to activation.
      </>
    ),
  },
  {
    title: "Dashbird.io",
    url: "https://dashbird.io",
    description: (
      <>
        At Dashbird, I reported to the CMO, and helped grow brand awareness in
        the serverless computing space. I crafted and published 10+ educational
        technical blog posts about AWS Lambda and serverless computing, and
        presented multiple talks at conferences and meetups.
      </>
    ),
  },
];

function Overview({ url, title, description }) {
  return (
    <div className={clsx("col col--12 col--offset-0")}>
      <div className="gs__card">
        <div className="card">
          <Link to={url}>
            <div className="card__body">
              <div className="text--center padding-horiz--md padding-vert--md">
                <Heading as="h2">{title}</Heading>
                <p className="text--center padding-horiz--md text--normal">
                  {description}
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function HomepageOverview() {
  return (
    <div>
      <section className={styles.overview}>
        <div className="container">
          <div className="text--center padding-horiz--md">
            <Heading as="h2" className={styles.overviewHeading}>
              What I've done...
            </Heading>
            <p className="text--center padding-horiz--md hero__subtitle text--light">
              Crafted DevRel programs and GTM growth
            </p>
          </div>
          <div className="row">
            {OverviewList.map((props, idx) => (
              <Overview key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
