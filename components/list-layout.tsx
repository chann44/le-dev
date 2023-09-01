import { ListItem } from "./list-item";

export type IList = {
  title?: string;
  items?: ListItem[];
};

export function List(props: IList) {
  const { title, items } = props;
  return (
    <section className="flex flex-col gap-y-6">
      <h2 className="dark:text-primary/70">work</h2>
      <div className="flex flex-col gap-y-1">
        <ListItem right={<p>2021-2021</p>} />
        <ListItem right={<p>2021-2021</p>} />
        <ListItem right={<p>2021-2021</p>} />
        <ListItem right={<p>2021-2021</p>} />
      </div>
    </section>
  );
}
