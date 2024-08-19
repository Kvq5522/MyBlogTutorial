import InfiniteScrollBlogs from "@/app/blogs/_components/InfiniteScrollBlogs";
import { Blog } from "@/types/blog";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  description: "Let's discover various information!",
};

const fetchBlogs = async () => {
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

    return blogs;
  } catch (error) {
    return [];
  }
};

const BlogsPage = async () => {
  const blogs = await fetchBlogs();

  return (
    <main>
      <section className="text-[2.5rem] font-extrabold my-16">
        Blog Posts
      </section>

      <section>
        <InfiniteScrollBlogs initialBlogs={blogs} />
      </section>
    </main>
  );
};

export default BlogsPage;
