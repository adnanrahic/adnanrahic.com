import clsx from "clsx";
import Heading from "@theme/Heading";
import Link from "@docusaurus/Link";
import styles from "./styles.module.css";

const BlogList = [
  {
    title: "Medium",
    url: "https://medium.com/@adnanrahic",
    description: <>5.1k Followers</>,
  },
  {
    title: "Dev.to",
    url: "https://dev.to/adnanrahic",
    description: <>12.8k Followers</>,
  },
  {
    title: "Node.js Monitoring E-Book",
    url: "https://sematext.com/resources/nodejs-monitoring-ebook/",
    description: <>My first-ever published book.</>,
  },
  {
    title: "Serverless JavaScript Video Course",
    url: "https://www.amazon.com/Serverless-JavaScript-by-Example/dp/B07F3C97B9",
    description: <>My first-ever published video course.</>,
  },
];

function Blog({ url, title, description }) {
  return (
    <div className={clsx("col col--6 col--offset-0")}>
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

export default function BlogOverview() {
  return (
    <div>
      <section className={styles.overview}>
        <div className="container">
          <div className="row">
            {BlogList.map((props, idx) => (
              <Blog key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
