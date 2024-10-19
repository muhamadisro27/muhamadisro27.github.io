import Image from "next/image";
import styles from "./index.module.scss";
import Link from "next/link";
import { PostURL } from "@/types/post";

const PostCard = (props: PostURL) => {
  const { title, thumbnail, summary, url = "" } = props;

  return (
    <section className={styles.container}>
      <Link href={url}>
        <div className={styles.imageWrapper}>
          <Image src={thumbnail} alt="" fill objectFit="cover" quality={80} />
        </div>
        <h3>{title}</h3>
        <p className={styles.summary}>{summary}</p>
      </Link>
    </section>
  );
};

export default PostCard;
