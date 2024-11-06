import clsx from "clsx";
import Heading from "@theme/Heading";
import Link from "@docusaurus/Link";
import styles from "./styles.module.css";
import ReactMarkdown from "react-markdown";

const OverviewMarkdownMap = {
  tracetest: `**Company**: Tracetest.io  
**Actions**:
- **Developed** a comprehensive **DevRel program from scratch**.
- Created a dedicated examples section in the GitHub repository, building and maintaining integrations with partners such as Grafana and OpenSearch.
- Organized launch weeks, marketing campaigns, and expanded documentation to improve user experience.
- Engaged the community by leading workshops, hosting community calls, speaking at major conferences (e.g., FOSDEM and WeAreDevelopers), and writing case studies and blog posts.

**Results**:
- Drove a **400% increase in top-of-funnel traffic**.
- Grew the GitHub repository from **0 to 1.1k+ stars**, significantly enhancing community interest and engagement.`,
  cube: `**Company**: Cube.dev  
  **Actions**:
  - Led and delivered workshops, which collectively garnered **17,000+ views on YouTube**.
  - Authored **12+ technical blog posts** to educate and engage users.
  - Contributed to and expanded documentation with new examples and recipes.
  - Collaborated with Product, DevRel, and Community teams to refine messaging and increase user adoption.
  - Represented Cube at industry conferences (e.g., GroupByConf, WeAreDevelopers) and fostered partnerships with Apollo GraphQL, Retool, and others.

  **Results**:
  - Increased user engagement and adoption through accessible educational content and strategic partnerships.`,
  sematext: `**Company**: Sematext.com  
  **Actions**:
  - Maintained open-source system-level logging and monitoring tools, and published npm modules.
  - Managed Docker, Kubernetes, and Helm configurations.
  - Provided solutions engineering support to assist customers in maximizing product value.
  - Authored an e-book and numerous educational blog posts, directly contributing to product growth.
  - Led documentation management and comprehensive onboarding initiatives to support users from **signup to activation**.
  - Reported directly to the CEO.

  **Results**:
  - Drove notable product growth and user engagement through strategic content and customer support.`,
  dashbird: `**Company**: Dashbird.io  
  **Actions**:
  - Reported directly to the CMO, focusing on enhancing brand visibility within the serverless computing space.
  - Created and published **10+ educational technical blog posts** on AWS Lambda and serverless computing.
  - Presented talks at conferences and meetups, representing Dashbird within the serverless community.

  **Results**:
  - Successfully increased brand awareness and positioned Dashbird as a thought leader in the serverless computing industry.`,
};

const OverviewList = [
  {
    title: "Building a DevRel Program and Community Engagement",
    company: "Tracetest.io",
    url: "https://tracetest.io",
    markdown: OverviewMarkdownMap.tracetest,
  },
  {
    title:
      "Driving User Adoption and Education through Content and Partnerships",
    company: "Cube.dev",
    url: "https://cube.dev",
    markdown: OverviewMarkdownMap.cube,
  },
  {
    title: "Engineering Solutions and Supporting Product Growth",
    company: "Sematext.com",
    url: "https://sematext.com",
    markdown: OverviewMarkdownMap.sematext,
  },
  {
    title: "Building Brand Awareness in Serverless Computing",
    company: "Dashbird.io",
    url: "https://dashbird.io",
    markdown: OverviewMarkdownMap.dashbird,
  },
];

function Overview({ url, title, markdown }) {
  return (
    <div className={clsx("col col--12 col--offset-0")}>
      <div className="gs__card">
        <div className="card">
          <Link to={url}>
            <div className="card__body">
              <div className="text--center padding-horiz--md padding-vert--md">
                <Heading as="h2">{title}</Heading>
                <p className="text--left padding-horiz--md text--normal">
                  <ReactMarkdown>{markdown}</ReactMarkdown>
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
