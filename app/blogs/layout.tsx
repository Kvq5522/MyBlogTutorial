import React from "react";

type BlogLayoutProps = {
  children: React.ReactNode;
  modal: React.ReactNode;
};

const BlogLayout = ({ children, modal }: BlogLayoutProps) => {
  return (
    <div>
      {children}
      {modal}
    </div>
  );
};

export default BlogLayout;
