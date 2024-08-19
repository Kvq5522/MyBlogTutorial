import { contentfulClient } from "@/lib/contentful";

export const GET = async (req: Request) => {
  try {
    const { pathname } = new URL(req.url);
    const pathSegments = pathname.split("/");
    const pathLength = pathSegments.length;
    const res = await contentfulClient.getEntry(pathSegments[pathLength - 2]);

    return Response.json({
      data: res,
    });
  } catch (error) {
    return Response.json({
      error: "error",
    });
  }
};
