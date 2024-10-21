import Image from "next/image";
import ProjectCard from "@/components/elements/ProjectCard";
import Link from "next/link";
import styles from "./index.module.scss";
import { RepoProps } from "@/types/repo";
import moment from "moment";
import Title from "@/components/elements/Title";

const GithubProjectsPage = (props: RepoProps) => {
  const { repos } = props;

  return (
    <>
      <Title suffix="Projects" />
      <main className={styles.container}>
        <div className={styles.banner}>
          <div className={styles.bannerOverlay}>
            <h1>My Github Projects</h1>
            <p>{`Checkout my Github projects that i've worked on !`}</p>
            <Link
              href="https://github.com/muhamadisro27"
              target="_blank"
              type="button"
            >
              Check out my profile
            </Link>
          </div>
          <Image
            alt=""
            src="/github.webp"
            fill
            objectFit="cover"
            objectPosition="center"
            priority
          />
        </div>
        <div className={styles.contentWrapper}>
          {repos.length > 0 &&
            repos.map(
              ({ id, html_url, full_name, updated_at, description }) => (
                <div key={id} className={styles.projectCardWrapper}>
                  <ProjectCard
                    url={html_url}
                    name={full_name}
                    updatedAt={moment(updated_at).format("DD-MM-YYYY")}
                    summary={description}
                  />
                </div>
              )
            )}
        </div>
      </main>
    </>
  );
};

export default GithubProjectsPage;

export const getStaticProps = async () => {
  const res = await fetch(
    `${process.env.BASE_GH_ENDPOINT}/users/muhamadisro27/repos?type=public&sort=created&direction=desc`
  );

  const data = await res.json();

  return {
    props: {
      repos: data || [],
    },
    revalidate: 60,
  };
};
