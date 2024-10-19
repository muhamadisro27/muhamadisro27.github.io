import Image from "next/image";
import styles from "./index.module.scss";
import { fetchAll, fetchBySlug } from "@/hooks/useFetch";
import { Post } from "@/types/post";

const DetailPostPage = ({ post }: { post: Post }) => {
  if (!post) {
    return <p>Loading ...</p>;
  }

  return (
    <main className={styles.container}>
      <div className={styles.banner}>
        <div className={styles.bannerOverlay}>
          <h1>{post.title}</h1>
          <p>{post.summary}</p>
        </div>
        {post.thumbnail && (
          <Image
            alt={`Thumbnail of ${post.title}`}
            src={`/${post.thumbnail}`}
            fill
            objectFit="cover"
          />
        )}
      </div>
      <div className={styles.contentWrapper}>
        {<div dangerouslySetInnerHTML={{ __html: post.content }} />}
      </div>
    </main>
  );
};

export default DetailPostPage;

export const getStaticProps = async (ctx: any) => {
  try {
    const slug = ctx.params.slug;

    const { data: post, error } = await fetchBySlug("posts", slug);

    if (error) {
      throw new Error(error.message);
    }

    return {
      props: {
        post,
      },
    };
  } catch (error) {
    console.error(error);

    return {
      props: {
        post: {},
      },
    };
  }
};

export const getStaticPaths = async () => {
  const { data: posts } = await fetchAll("posts");

  const paths = posts?.map((post: Post) => ({
    params: {
      slug: post.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};
