import PostCard from "@/components/elements/PostCard";
import styles from "./index.module.scss";

export default function Home() {
  return (
    <main className={styles.container}>
      <div className={styles.banner}>
        <h1>Hi there! welcome to my personal web</h1>
        <p>This is a place to share my personal thoughts</p>
      </div>
      <div className={styles.postsWrapper}>
        <h2>Newest Posts</h2>
        {Array(4)
          .fill(null)
          .map((_, index) => (
            <div key={index} className={styles.postCardWrapper}>
              <PostCard
                url="posts/123"
                title="My first blog post"
                summary="checkout my first blog post"
                thumbnail="/default.jpg"
              />
            </div>
          ))}
      </div>
    </main>
  );
}
