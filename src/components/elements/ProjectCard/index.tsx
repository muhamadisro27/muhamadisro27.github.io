import styles from "./index.module.scss";
import Link from "next/link";

interface Props {
  title: string;
  summary: string;
  date: string;
  url: string;
}

const ProjectCard = (props: Props) => {
  const { title, summary, date, url } = props;

  return (
    <section className={styles.container}>
      <Link href={url}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.lastUpdated}>last updated: {date}</p>
        <p className={styles.summary}>{summary}</p>
      </Link>
    </section>
  );
};

export default ProjectCard;
