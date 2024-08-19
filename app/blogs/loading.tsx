import React from "react";

const BlogLoading = () => {
  return (
    <>
      <div className="flex max-w-full h-[50vh] rounded-lg bg-[#f3f4f6] cursor-pointer">
        <div className="h-full w-1/2 lg:w-2/3 rounded-tl rounded-bl bg-slate-200"></div>

        <div className="p-8 w-1/2 lg:w-1/3">
          <p className="bg-slate-200 h-8 mb-4"></p>
          <p className="bg-slate-200 h-8 "></p>
          <p className="bg-slate-200 h-8"></p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 my-4 gap-8">
        {Array.from({
          length: 9,
        }).map((_, skeletonIndex) => {
          return (
            <div key={skeletonIndex} className="bg-[#f3f4f6] rounded-lg pb-4">
              <div className="bg-slate-200 h-2/3 w-full min-h-[200px] min-w-[200px] rounded-t-lg"></div>

              <div className="p-4 flex flex-col gap-2">
                <p className="bg-slate-200 h-8 rounded-lg"></p>
                <p className="bg-slate-200 h-8 rounded-lg"></p>
                <p className="bg-slate-200 h-8 rounded-lg"></p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default BlogLoading;
