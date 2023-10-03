"use client";

import { type ReactNode } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./avtar";

export type ListItem = {
  logo?: string;
  title?: string;
  description?: string;
  right?: ReactNode;
};

export function ListItem(props: ListItem) {
  const { description, title, logo, right } = props;
  return (
    <div className="flex justify-between items-center hover:bg-white hover:bg-opacity-10 p-3 rounded-md cursor-pointer hover:border border-primary/30 hover:animate-pulse">
      {/* left */}
      <div className="flex items-center gap-x-3">
        <Avatar>
          <AvatarImage src={logo} />
          <AvatarFallback>{title?.slice(0, 2)}</AvatarFallback>
        </Avatar>
        <div>
          <p className="text-lg">{title}</p>
          <p className="text-sm dark:text-primary/60">{description}</p>
        </div>
      </div>
      {/* right */}
      <div className="dark:text-primary/60">{right}</div>
    </div>
  );
}
