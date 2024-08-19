import InfiniteScrollBlogs from "@/app/blogs/_components/InfiniteScrollBlogs";
import { Blog } from "@/types/blog";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  description: "Let's discover various information!",
};

const fetchBlogs = async (): Promise<{
  blogs: Blog[];
  maxPage: number;
}> => {
  try {
    const res = await (
      await fetch(`${process.env.NEXT_PUBLIC_WEBSITE_URL}/blogs/api`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        next: {
          revalidate: 60 * 5,
        },
      })
    ).json();
    const blogs = await new Promise<Array<Blog>>((resolve, reject) => {
      try {
        resolve(
          res.data?.["items"].map((item: any) => {
            return {
              ...item?.["fields"],
              id: item?.["sys"]?.["id"],
              image: `https:${item?.["fields"]?.["image"]?.["fields"]?.["file"]?.["url"]}`,
              content: item?.["fields"]?.["content"]?.["content"],
            } as Blog;
          })
        );
      } catch (error) {
        reject([]);
      }
    });

    return {
      blogs: blogs,
      maxPage: Math.ceil(Number(res.data?.["total"]) / 9),
    };
  } catch (error) {
    return {
      blogs: [],
      maxPage: 0,
    };
  }
};

const BlogsPage = async () => {
  const res = await fetchBlogs();
  const blogs = res["blogs"];
  const maxPage = res["maxPage"];

  return (
    <main>
      <section className="text-[2.5rem] font-extrabold my-16">
        Blog Posts
      </section>

      <section>
        <InfiniteScrollBlogs initialBlogs={blogs} maxPageProp={maxPage} />
      </section>
    </main>
  );
};

export default BlogsPage;
