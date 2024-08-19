import InfoModal from "@/components/Modal/InfoModal";
import React from "react";

const IntercepBlogsLoading = () => {
  return (
    <InfoModal className="w-[80vw] h-[90vh] overflow-y-auto">
      <main>
        <section>
          <div className="bg-slate-200 w-full h-[65vh] mb-4"></div>
        </section>

        <section className="px-16 md:px-[8rem] lg:px-[16rem] xl:px-[22rem]">
          <p className="bg-slate-200 h-8 mb-4 rounded-lg"></p>

          <p className="bg-slate-200 h-8 rounded-lg"></p>

          <h1 className="bg-slate-200 h-[500px] my-4 rounded-lg"></h1>
        </section>
      </main>
    </InfoModal>
  );
};

export default IntercepBlogsLoading;
