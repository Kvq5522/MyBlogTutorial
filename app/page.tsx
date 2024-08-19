import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-8">
      <section className="grid grid-cols-1 md:grid-cols-2 w-full items-center gap-6 mt-4 mb-8">
        <div className="order-last md:order-first max-h-full">
          <h3 className="text-blue-500 text-center lg:text-left font-semibold">
            WANDER THE WORLD
          </h3>

          <p className="text-[1.5rem] md:text-[2rem] xl:text-[3.5rem] text-indigo-600 text-center lg:text-left font-extrabold text-wrap my-4">
            From short breaks to long adventures
          </p>

          <p className="text-center lg:text-left md:text-lg lg:text-xl">
            {`Travel blog featuring travel tips, guides, and photography from
            around the world. Whether you need guidance for your first trip, or
            you're a seasoned traveler looking for destination inspiration,
            you've come to the right place!`}
          </p>
        </div>

        <Image
          src="https://cdn.aglty.io/blog-starter-2021-template/posts/gaddafi-rusli-2ueUnL4CkV8-unsplash%201.jpg?format=auto&w=600"
          alt="image"
          width={300}
          height={300}
          className="w-full rounded object-contain"
        />
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 w-full items-center gap-4 mt-8 mb-16">
        <Image
          src="https://cdn.aglty.io/blog-starter-2021-template/posts/gaddafi-rusli-2ueUnL4CkV8-unsplash%201.jpg?format=auto&w=600"
          alt="image"
          width={300}
          height={300}
          className="w-full h-full rounded object-contain"
        />

        <div className="order-last">
          <h3 className="text-blue-500 text-center lg:text-right font-semibold">
            ABOUT US
          </h3>

          <p className="text-[1.5rem] md:text-[2rem] xl:text-[3.5rem] text-indigo-600 text-center lg:text-right font-extrabold text-wrap my-4">
            Adventurers and Storytellers
          </p>

          <p className="text-center lg:text-right md:text-lg lg:text-xl">
            {`Through our award-winning blog, 
            we love to provide travelers with guidance 
            and inspiration and connect them to meaningful
            experiences as they travel the world with curiosity!`}
          </p>
        </div>
      </section>
    </main>
  );
}
