"use client";

import React from "react";

type ReloadPageButtonProps = {
  label: string;
};

const ReloadPageButton = ({ label }: ReloadPageButtonProps) => {
  return (
    <div
      onClick={() => {
        window.location.reload();
      }}
    >
      {label}
    </div>
  );
};

export default ReloadPageButton;
