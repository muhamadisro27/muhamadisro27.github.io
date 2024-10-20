import Image from "next/image";
import styles from "./index.module.scss";
import Link from "next/link";
import { PostURL } from "@/types/post";
import useImage from "@/hooks/useImage";

const PostCard: React.FC<PostURL> = (props: PostURL) => {
  const { title, thumbnail, summary, url = "" } = props;

  const image = useImage(thumbnail);

  return (
    <section className={styles.container}>
      <Link href={url}>
        <div className={styles.imageWrapper}>
          <Image src={image} alt="" fill objectFit="cover" quality={80} />
        </div>
        <h3 className={styles.title} title={title}>
          {title}
        </h3>
        <p className={styles.summary}>{summary}</p>
      </Link>
    </section>
  );
};

export default PostCard;
