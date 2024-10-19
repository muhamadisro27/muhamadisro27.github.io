import PostCard from "@/components/elements/PostCard";
import styles from "./index.module.scss";
import fetchAll from "@/hooks/useFetch";
import { GetStaticProps } from "next";
import { Post } from "@/types/post";

export default function Home({ posts }: { posts: Post[] }) {
  return (
    <main className={styles.container}>
      <div className={styles.banner}>
        <h1>Hi there! welcome to my personal web</h1>
        <p>This is a place to share my personal thoughts</p>
      </div>
      <div className={styles.postsWrapper}>
        <h2>Newest Posts</h2>

        {posts.length > 0 ? (
          posts.map((post: Post, _) => (
            <div key={post.uuid} className={styles.postCardWrapper}>
              <PostCard
                url={`/posts/${post.slug}`}
                title={post.title}
                summary={post.summary}
                thumbnail={post.thumbnail}
              />
            </div>
          ))
        ) : (
          <p>No posts available at the moment.</p>
        )}
      </div>
    </main>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const { data: posts, error } = await fetchAll("posts", 4);
    if (error) {
      throw new Error(error.message);
    }
    return {
      props: {
        posts,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        posts: [],
      },
    };
  }
};
