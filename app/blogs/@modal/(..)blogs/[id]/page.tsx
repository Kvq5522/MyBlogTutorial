import InfoModal from "@/components/Modal/InfoModal";
import Image from "next/image";
import { ScrollArea } from "@/components/ui/scroll-area";
import ReloadPageButton from "@/app/blogs/_components/ReloadPageButton";
import { Blog } from "@/types/blog";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const InterceptBlogDetail = async ({
  params: { id },
}: {
  params: { id: string };
}) => {
  const res = await fetch(`${process.env.WEBSITE_URL}/blogs/${id}/api`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    next: {
      revalidate: 60 * 5,
    },
  });

  const data = await new Promise<Blog>(async (resolve, reject) => {
    try {
      const jsonData = (await res.json())?.["data"];
      resolve({
        ...jsonData?.["fields"],
        id: jsonData?.["sys"]?.["id"],
        image: `https:${jsonData?.["fields"]?.["image"]?.["fields"]?.["file"]?.["url"]}`,
        content: jsonData?.["fields"]?.["content"],
      });
    } catch (error) {
      reject({});
    }
  });

  return (
    <InfoModal className="w-[80vw] h-[90vh] overflow-y-auto">
      <main>
        <section>
          <Image
            src={data.image}
            alt="Blog image"
            width={2000}
            height={2000}
            className="w-full h-[65vh] object-cover object-top rounded-lg my-4"
          />
        </section>

        <section className="px-16 md:px-[8rem] lg:px-[16rem] xl:px-[22rem]">
          <p className="text-lg text-indigo-600 font-semibold mb-4">
            {data.tag}{" "}
          </p>

          <p className="font-semibold italic">{`${new Date(
            data.date
          ).toLocaleDateString()}`}</p>

          <h1 className="my-4 text-[2.5rem] font-extrabold">{data.title}</h1>

          {documentToReactComponents(data.content)}
        </section>
      </main>
    </InfoModal>
  );
};

export default InterceptBlogDetail;
