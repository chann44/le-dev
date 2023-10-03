"use client";

import { type ReactNode } from "react";
import { ListItem } from "./list-item";

export type IList = {
  title?: string;
  children: ReactNode;
};

export function List(props: IList) {
  const { title, children } = props;
  return (
    <section className="flex flex-col gap-y-6">
      <h2 className="dark:text-primary/70 font-medium text-lg">{title}</h2>
      <div className="flex flex-col gap-y-1">{children}</div>
    </section>
  );
}
