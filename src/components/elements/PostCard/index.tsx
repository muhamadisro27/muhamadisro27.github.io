import Image from "next/image";
import styles from "./index.module.scss";
import Link from "next/link";

interface Props {
  title: string;
  summary: string;
  thumbnail: string;
  url: string;
}

const PostCard = (props: Props) => {
  const { title, thumbnail, summary, url } = props;

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
