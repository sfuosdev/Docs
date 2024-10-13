import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Easy to use",
    Svg: require("@site/static/img/2.svg").default,
    description: (
      <>
        Docusaurus is a modern static site generator. It is easy to use and
        allows us to create a documentation tool for current and future
        colleagues.
      </>
    ),
  },
  {
    title: "Easy to learn",
    Svg: require("@site/static/img/3.svg").default,
    description: (
      <>
        Based on user-friendly documentation, students can easily learn the
        important concepts of software development and open-source.
      </>
    ),
  },
  {
    title: "Contributions",
    Svg: require("@site/static/img/4.svg").default,
    description: (
      <>
        Contribute your knowledge to the community for future colleagues who may
        struggle to join the open-source community and projects.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
