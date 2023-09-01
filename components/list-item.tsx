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
    <div className="flex justify-between items-center hover:bg-white hover:bg-opacity-10 p-3 rounded-md">
      {/* left */}
      <div className="flex items-center gap-x-3">
        <Avatar>
          <AvatarImage src="/ve.webp" />
          <AvatarFallback>VE</AvatarFallback>
        </Avatar>
        <div>
          <p className="text-lg">Vercel</p>
          <p className="text-sm dark:text-primary/60">vp of Desing</p>
        </div>
      </div>
      {/* right */}
      <div className="dark:text-primary/60">{right}</div>
    </div>
  );
}
