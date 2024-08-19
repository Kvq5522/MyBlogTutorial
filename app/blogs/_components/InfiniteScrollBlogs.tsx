"use client";

import ScrollToBottomDectection from "@/components/ScrollDetections/ScrollToBottomDetection";
import { Blog } from "@/types/blog";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

type InfiniteScrollBlogsProps = {
  initialBlogs: Array<Blog>;
};

const InfiniteScrollBlogs = ({ initialBlogs }: InfiniteScrollBlogsProps) => {
  const [blogs, setBlogs] = useState<Array<Blog>>(initialBlogs);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    if (page > 1) {
      const fetchBlogs = async () => {
        try {
          const res = await fetch(
            `${process.env.NEXT_PUBLIC_WEBSITE_URL}/blogs/api?page=${page}`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          const data = await res.json();

          setBlogs((prev) => [
            ...prev,
            ...data?.["data"]?.["items"].map((item: any) => {
              return {
                ...item?.["fields"],
                id: item?.["sys"]?.["id"],
                image: `https:${item?.["fields"]?.["image"]["fields"]?.["file"]?.["url"]}`,
                content: item?.["fields"]?.["content"]?.["content"],
              } as Blog;
            }),
          ]);
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      };

      fetchBlogs();
    }
  }, [page]);

  return blogs.length > 0 ? (
    <div className="w-full">
      <div
        className="flex max-w-full h-[50vh] rounded-lg bg-[#f3f4f6] cursor-pointer"
        onClick={() => {
          router.push(`/blogs/${blogs[0]?.["id"]}`);
        }}
      >
        <Image
          src={blogs[0]?.["image"]}
          alt="Blog image"
          width={600}
          height={600}
          className="h-full w-1/2 lg:w-2/3 rounded-tl rounded-bl object-cover md:object-fill"
        />

        <div className="p-8 w-1/2 lg:w-1/3">
          <p className="text-lg text-indigo-600 font-semibold mb-4">
            {blogs[0]?.["tag"]}
          </p>
          <p className="font-semibold italic">
            {new Date(blogs[0]?.["date"]).toLocaleDateString()}
          </p>
          <p className="text-[1.2rem] md:text-[1.5rem] font-extrabold text-wrap mt-2">
            {blogs[0]?.["title"]}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 my-4 gap-8">
        {blogs.map((blog: any, index: number) => {
          if (index == 0) {
            return null;
          }

          return (
            <div
              key={index}
              className="bg-[#f3f4f6] rounded-lg cursor-pointer pb-4"
              onClick={() => {
                router.push(`/blogs/${blog.id}`);
              }}
            >
              <Image
                src={blog?.["image"]}
                alt="Blog image"
                width={300}
                height={300}
                className="h-2/3 w-full rounded-t-lg object-cover md:object-fill"
              />

              <div className="p-4">
                <p className="text-lg text-indigo-600 font-semibold mb-4">
                  {blog?.["tag"]}
                </p>
                <p className="font-semibold italic">
                  {new Date(blog?.["date"]).toLocaleDateString()}
                </p>

                <p className="text-[1.5rem] font-extrabold text-wrap line-clamp-2 mt-2">
                  {blog?.["title"]}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <ScrollToBottomDectection
        onScrollToBottom={() => {
          if (!loading) {
            setPage((prev) => prev + 1);
            setLoading(true);
          }
        }}
      />
    </div>
  ) : (
    <></>
  );
};

export default InfiniteScrollBlogs;
