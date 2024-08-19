import { contentfulClient } from "@/lib/contentful";

export const GET = async (req: Request) => {
  try {
    const { searchParams } = new URL(req.url);

    const res = await contentfulClient.getEntries({
      content_type: "blog",
      limit: 9,
      order: ["-sys.createdAt"],
      skip: searchParams.get("page")
        ? (Number(searchParams.get("page")) - 1) * 9
        : 0,
    });

    console.log(res);

    return Response.json({
      data: res,
    });
  } catch (error) {
    return Response.json({
      error: "error",
    });
  }
};
