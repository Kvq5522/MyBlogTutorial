import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import useMediaQuery from "@/hooks/use-media-query";
import { AlignJustify, Home, Info, Notebook } from "lucide-react";
import Link from "next/link";
import React from "react";

const HeaderDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <AlignJustify />
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-screen">
        <DropdownMenuGroup>
          <DropdownMenuItem className="hover:bg-slate-200">
            <Link href="/" className="text-lg font-normal font-no">
              <div className="flex items-center gap-2">
                <Home /> Home
              </div>
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem className="hover:bg-slate-200">
            <Link href="/blogs" className="text-lg font-normal">
              <div className="flex items-center gap-2">
                <Notebook /> Blog
              </div>
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem className="hover:bg-slate-200">
            <Link href="/about" className="text-lg font-normal">
              <div className="flex items-center gap-2">
                <Info /> About
              </div>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default HeaderDropdown;
