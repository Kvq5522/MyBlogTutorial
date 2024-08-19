import { contentfulClient } from "@/lib/contentful";

const sitemap = async () => {
  const getBlogs = await contentfulClient.getEntries({});
  const blogs = getBlogs.items.map((blog: any) => {
    return {
      url: `${process.env.WEBSITE_URL}/blogs/${blog.sys.id}`,
      lastModified: new Date(blog.sys.updatedAt).toISOString(),
    };
  });

  return [
    {
      url: `${process.env.WEBSITE_URL}/`,
      lastModified: new Date().toISOString(),
    },
    ...blogs,
  ];
};

export default sitemap;
