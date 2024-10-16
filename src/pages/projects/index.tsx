import Image from "next/image";
import ProjectCard from "@/components/elements/ProjectCard";
import Link from "next/link";
import styles from "./index.module.scss";

const GithubProjectsPage = () => {
  return (
    <main className={styles.container}>
      <div className={styles.banner}>
        <div className={styles.bannerOverlay}>
          <h1>My Github Projects</h1>
          <p>Checkout my Github projects that i've worked on !</p>
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
        />
      </div>
      <div className={styles.contentWrapper}>
        {Array(10)
          .fill(null)
          .map((_, index) => (
            <div key={index} className={styles.projectCardWrapper}>
              <ProjectCard
                url="https://github.com/muhamadisro27"
                title="First Repo"
                date="12 Nov 2023"
                summary="Lorem ipsum dolor sit amet, consectetur"
              />
            </div>
          ))}
      </div>
    </main>
  );
};

export default GithubProjectsPage;
