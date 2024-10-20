import { Repo } from "@/types/repo";
import styles from "./index.module.scss";
import Link from "next/link";

const ProjectCard = (props: Repo) => {
  const { name, updatedAt, summary, url } = props;

  return (
    <section className={styles.container}>
      <Link href={url} target="_blank">
        <h3 className={styles.title}>{name}</h3>
        <p className={styles.lastUpdated}>last updated: {updatedAt}</p>
        <p className={styles.summary}>{summary}</p>
      </Link>
    </section>
  );
};

export default ProjectCard;
