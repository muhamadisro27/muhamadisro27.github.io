import PostCard from "@/components/elements/PostCard";
import styles from "./index.module.scss";
import { fetchAll } from "@/hooks/useFetch";
import { GetStaticProps } from "next";
import { Post, Posts } from "@/types/post";
import Title from "@/components/elements/Title";

const Home: React.FC<Posts> = ({ posts }: Posts) => {
  return (
    <>
      <Title suffix="Personal Website" />
      <main className={styles.container}>
        <div className={styles.banner}>
          <h1>Hi there! welcome to my personal web</h1>
          <p>This is a place to share my personal thoughts</p>
        </div>
        <div className={styles.postsWrapper}>
          <h2>Newest Posts</h2>

          {posts.length > 0 ? (
            posts.map((post: Post) => (
              <div key={post.slug} className={styles.postCardWrapper}>
                <PostCard
                  slug={post.slug}
                  url={`/posts/${post.slug}`}
                  title={post.title}
                  summary={post.summary}
                  thumbnail={post.thumbnail}
                  content={post.content}
                />
              </div>
            ))
          ) : (
            <p className={styles.notFound}>No posts available at the moment.</p>
          )}
        </div>
      </main>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  try {
    const { data: posts, error } = await fetchAll("posts");

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
