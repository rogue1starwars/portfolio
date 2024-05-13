import { type Author } from "@/interfaces/author";
import Link from "next/link";
// import Avatar from "./avatar";
import CoverImage from "./cover-image";
// import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  coverImage: string;
  projectDate: string;
  excerpt: string;
  slug: string;
};

export function PostPreview({
  title,
  coverImage,
  projectDate,
  excerpt,
  slug,
}: Props) {
  return (
    <div className="flex sm:flex-row flex-col">
      <div className="basis-1/3 flex-initial mb-8 h-full">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      <div className="basis-2/3 ml-3">
        <h3 className="text-xl font-semibold leading-snug">
          <Link
            as={`/posts/${slug}`}
            href="/posts/[slug]"
            className="hover:underline"
          >
            {title}
          </Link>
        </h3>
        <div className="text-sm font-bold text-gray-500 ">{projectDate}</div>
        <div className="text-lg mb-2"></div>
        <p className="text-base leading-relaxed mb-4">{excerpt}</p>
      </div>
    </div>
  );
}
