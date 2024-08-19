import React from "react";

const AboutPage = async () => {
  return (
    <main className="flex flex-col min-h-screen">
      <section className="px-16 md:px-[8rem] lg:px-[16rem] xl:px-[22rem] gap-4 flex-grow">
        <p className="text-[4rem] font-bold my-4">About Us</p>

        <p className="text-2xl my-4">
          {`We are a travel blog featuring travel tips, guides, and photography
          from around the world. Whether you need guidance for your first trip,
          or you're a seasoned traveler looking for destination inspiration,
          you've come to the right place!`}
        </p>

        <blockquote className="text-2xl italic">
          {`"Jobs fill your pockets, adventures fill your soul."`}
        </blockquote>

        <p className="text-2xl my-4 font-semibold">Our Mission</p>

        <p className="text-2xl my-4">
          Through our award-winning blog, we love to provide travelers with
          guidance and inspiration and connect them to meaningful experiences as
          they travel the world with curiosity...
        </p>
      </section>
    </main>
  );
};

export default AboutPage;
