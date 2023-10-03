import { allPosts } from "@/.contentlayer/generated";
import Link from "next/link";

export default function Home() {
  return (
    <div className="dark:text-primary  flex flex-col mt-5">
      {allPosts
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .map((post) => (
          <article
            className="my-2 text-sm dark:text-primary hover:opacity-50"
            key={post._id}
          >
            <Link href={post.slug}>
              <h2 className="text-xl">{post.title}</h2>
            </Link>
            {post.description && (
              <p className="text-primary/70">{post.description}</p>
            )}
          </article>
        ))}
    </div>
  );
}
