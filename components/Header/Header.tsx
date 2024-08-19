"use client";

import HeaderDropdown from "@/components/Header/HeaderDropdown";
import useMediaQuery from "@/hooks/use-media-query";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  const isSmallScreen = useMediaQuery("(max-width:768px)");

  return (
    <div className="w-full flex justify-between items-center py-8">
      <div className="flex gap-8">
        <Link href="/">
          <Image
            src="/images/header-logo.png"
            alt="Logo"
            width={32}
            height={32}
          />
        </Link>

        <p className="text-2xl font-semibold">My Blog</p>
      </div>

      {isSmallScreen ? (
        <HeaderDropdown />
      ) : (
        <div className="flex gap-8">
          <Link
            href="/"
            dir="ltr"
            className="px-2 rounded text-lg font-semibold hover:border-b-2 hover:border-b-indigo-400"
          >
            Home
          </Link>

          <Link
            href="/blogs"
            className="px-2 rounded text-lg font-semibold hover:border-b-2 hover:border-b-indigo-400"
          >
            Blog
          </Link>

          <Link
            href="/about"
            className="px-2 rounded text-lg font-semibold hover:border-b-2 hover:border-b-indigo-400"
          >
            About
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
