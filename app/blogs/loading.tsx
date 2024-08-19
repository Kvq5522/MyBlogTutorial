import React from "react";

const BlogLoading = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div
        className={
          "flex flex-grow justify-center items-center"
        }
      >
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
      </div>
    </div>
  );
};

export default BlogLoading;
