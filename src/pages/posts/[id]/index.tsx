import Image from "next/image";
import styles from "./index.module.scss";

const DetailPostPage = () => {
  return (
    <main className={styles.container}>
      <div className={styles.banner}>
        <div className={styles.bannerOverlay}>
          <h1>Hi there! welcome to my personal web</h1>
          <p>This is a place to share my personal thoughts</p>
        </div>
        <Image alt="" src="/default.jpg" fill objectFit="cover" />
      </div>
      <div className={styles.contentWrapper}>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
    </main>
  );
};

export default DetailPostPage;
