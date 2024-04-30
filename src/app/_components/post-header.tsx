// import Avatar from "./avatar";
import CoverImage from "./cover-image";
// import DateFormatter from "./date-formatter";
import { PostTitle } from "@/app/_components/post-title";
import Link from "next/link";

type Props = {
  title: string;
  coverImage: string;
  projectDate: string;
  skills: string;
  link?: string;
};

export function PostHeader({
  title,
  coverImage,
  skills,
  projectDate,
  link,
}: Props) {
  return (
    <>
      <div className="mb-8 ">
        <CoverImage title={title} src={coverImage} />
      </div>
      <PostTitle>{title}</PostTitle>
      <div className="mb-2 text-lg font-semibold text-gray-600">
        {projectDate}
      </div>
      <div className="mb-8 text-base text-gray-500">{skills}</div>
      {link && (
        <Link className="text-gray-800 font-bold text-sm hover:underline" href={link}>
          Github Repository
        </Link>
      )}
    </>
  );
}
