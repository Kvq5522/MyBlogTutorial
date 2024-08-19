import React from "react";

const IntercepBlogsLoading = () => {
  return (
    <div className="fixed z-10 left-0 right-0 top-0 bottom-0 mx-auto bg-black/60 p-10 flex flex-col min-h-screen min-w-screen">
      <div className="flex-grow flex justify-center items-center">
        <div className="absolute animate-spin rounded-full h-32 w-32 border-b-2 border-white"></div>
      </div>
    </div>
  );
};

export default IntercepBlogsLoading;
