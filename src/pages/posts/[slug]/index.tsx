import Image from "next/image";
import styles from "./index.module.scss";
import { fetchAll, fetchBySlug } from "@/hooks/useFetch";
import { Post } from "@/types/post";
import { GetStaticProps } from "next";
import useImage from "@/hooks/useImage";
import Title from "@/components/elements/Title";

const DetailPostPage: React.FC<{ post: Post }> = ({ post }: { post: Post }) => {
  const image = useImage(post.thumbnail);

  if (!post) {
    return <p>Loading ...</p>;
  }

  return (
    <>
      <Title suffix={post.title} />
      <main className={styles.container}>
        <div className={styles.banner}>
          <div className={styles.bannerOverlay}>
            <h1>{post.title}</h1>
          </div>
          {post.thumbnail && (
            <Image
              alt={`Thumbnail of ${post.title}`}
              src={image}
              fill
              objectFit="cover"
            />
          )}
        </div>
        <div className={styles.contentWrapper}>
          {<div dangerouslySetInnerHTML={{ __html: post.content }} />}
        </div>
      </main>
    </>
  );
};

export default DetailPostPage;

export const getStaticProps: GetStaticProps = async (ctx) => {
  try {
    const slug = ctx.params?.slug;

    if (!slug) {
      throw new Error("Slug is undefined");
    }

    const { data: post, error } = await fetchBySlug("posts", slug as string);

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
    paths: paths || [],
    fallback: false,
  };
};
