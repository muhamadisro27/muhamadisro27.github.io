import PostCard from "@/components/elements/PostCard";
import styles from "./index.module.scss";

const PostPage = () => {
  return (
    <main className={styles.container}>
      <div className={styles.banner}>
        <h1>All Blog Posts</h1>
        <p>A list of all my past blog posts</p>
      </div>

      <div>
        <input
          className={styles.search}
          type="text"
          placeholder="Search posts by title"
        />
      </div>
      <div>
        {Array(12)
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
};

export default PostPage;
