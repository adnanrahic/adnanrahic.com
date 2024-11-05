import clsx from "clsx";
import Heading from "@theme/Heading";
import Link from "@docusaurus/Link";
import styles from "./styles.module.css";

const TalksList = [
  {
    title: "WeAreDevelopers World Congress 2024",
    description: <>Observability-driven development with OpenTelemetry</>,
    url: "https://www.wearedevelopers.com/en/videos/1179/startup-presentation-observability-driven-development-with-opentelemetry",
    image: "/img/wad2024.avif",
  },
  {
    title: "FOSDEM 2024",
    description: (
      <>
        Deploy Fast, Without Breaking Things: Level Up APIOps With OpenTelemetry
      </>
    ),
    url: "https://archive.fosdem.org/2024/schedule/event/fosdem-2024-1710-deploy-fast-without-breaking-things-level-up-apiops-with-opentelemetry/",
    image: "/img/fosdem2023.png",
  },
  {
    title: "Network Conference 2023",
    description: (
      <>Distributed Tracing is Awesome, Testing is Not... Until Now</>
    ),
    url: "https://www.networkkonferencija.ba/en/2023/lectures/2922/distributed-tracing-is-awesome-testing-is-not-until-now",
    image: "/img/network23.png",
  },
  {
    title: "Kubernetes Community Days Austria 2023",
    description: (
      <>Distributed Tracing is Awesome, Testing is Not... Until Now</>
    ),
    url: "https://www.youtube.com/watch?v=ih7S-HXdo_Y",
    image: "/img/kcdaut.jpg",
  },
  {
    title: "FOSDEM 2023",
    description: <>Observability-driven development with OpenTelemetry</>,
    url: "https://fosdem.sojourner.rocks/2023/event/14490",
    image: "/img/fosdem2022.png",
  },
  {
    title: "Group By Conf 2021",
    description: <>How to Improve the Performance of Data Warehouses?</>,
    url: "https://www.youtube.com/watch?v=TZSQpYFcQHo",
    image: "/img/groupbyconf2021.jpg",
  },
  {
    title: "WeAreDevelopers JS Congress 2021",
    description: <>Making Data Warehouses fast. A developer's story.</>,
    url: "https://www.wearedevelopers.com/en/videos/302/making-data-warehouses-fast-a-developer-s-story",
    image: "/img/wadjs2021.avif",
  },
  {
    title: "WebCamp Zagreb 2019",
    description: <>Load-Balancing Node.js in Production</>,
    url: "https://www.youtube.com/watch?v=LhFnzcKz2YI",
    image: "/img/webcampzg2.jpg",
  },
  {
    title: "WebCamp Zagreb 2018",
    description: <>Containers vs Serverless from a DevOps standpoint</>,
    url: "https://www.youtube.com/watch?v=p07qT1lc1E8",
    image: "/img/webcampzg1.jpg",
  },
  {
    title: "Budapest JS Meetup 2018",
    description: (
      <>A crash course on Serverless APIs with Express and MongoDB</>
    ),
    image: "/img/budapestjs.jpeg",
  },
  {
    title: "Serverless Vienna Meetup 2018",
    description: (
      <>How to deploy a Node.js app to AWS Lambda using Serverless</>
    ),
    image: "/img/serverlessvienna.jpeg",
  },
  {
    title: "AWS User Group Estonia 2018",
    description: <>Getting started with AWS Lambda and Node.js</>,
    image: "/img/home.jpg",
  },
];

function Talks({ url, title, description, image }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="t__card">
        <div className="card">
          <Link to={url}>
            <div className="card__image">
              <img src={image} alt={title} className="card__img" />
            </div>
            <div className="card__body">
              <div className="text--center padding-vert--md">
                <Heading as="h2">{title}</Heading>
                <p className="text--center text--normal">{description}</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function TalksOverview() {
  return (
    <div>
      <section className={styles.overview}>
        <div className="container">
          <div className="row">
            {TalksList.map((props, idx) => (
              <Talks key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
