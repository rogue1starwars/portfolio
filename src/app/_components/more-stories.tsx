import { Post } from "@/interfaces/post";
import { PostPreview } from "./post-preview";
import Link from "next/link";

type Props = {
  posts: Post[];
};

export function MoreStories({ posts }: Props) {
  return (
    <section>
      <h2 className="mb-8 text-2xl font-bold tracking-normal leading-tight">
        PROJECTS
      </h2>
      <div className="grid grid-cols-1 gap-y-20 mb-24">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            projectDate={post.projectDate}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
        <Link href="/posts/others" className="font-semibold text-gray-600 hover:underline text-right mt-[-36px]">More Projects</Link>
      </div>
    </section>
  );
}
