import PostCard from "@/components/elements/PostCard";
import NotFoundError from "@/components/elements/NotFound";
import styles from "./index.module.scss";
import { GetStaticProps } from "next";
import { fetchAll } from "@/hooks/useFetch";
import { Posts } from "@/types/post";
import Search from "@/components/elements/Search";
import React, { ChangeEvent, useMemo, useState } from "react";
import Title from "@/components/elements/Title";
import EachUtils from "@/utils/eachUtils";

const PostPage: React.FC<Posts> = ({ posts }: Posts) => {
  const [search, setSearch] = useState("");

  const handleChangeSearch = (e: ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    setSearch(value);
  };

  const filteredData = useMemo(() => {
    if (!search) return posts;

    const lcSearch = search.toLocaleLowerCase();

    return posts.filter(({ title }: { title: string }) => {
      const lcTitle = title.toLocaleLowerCase();

      return lcTitle.includes(lcSearch);
    });
  }, [posts, search]);

  return (
    <>
      <Title suffix="Posts" />
      <main className={styles.container}>
        <div className={styles.banner}>
          <h1>All Blog Posts</h1>
          <p>A list of all my past blog posts</p>
        </div>

        <Search onChange={handleChangeSearch} search={search} />

        {filteredData.length > 0 ? (
          <EachUtils
            of={filteredData}
            render={(post) => (
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
            )}
          />
        ) : (
          <NotFoundError keyword={search} />
        )}
      </main>
    </>
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
