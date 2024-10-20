import PostCard from "@/components/elements/PostCard";
import styles from "./index.module.scss";
import { GetStaticProps } from "next";
import { fetchAll } from "@/hooks/useFetch";
import { Post } from "@/types/post";

const PostPage = ({ posts }: { posts: Post[] }) => {
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
        {posts &&
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
          ))}
      </div>
    </main>
  );
};

export default PostPage;

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
