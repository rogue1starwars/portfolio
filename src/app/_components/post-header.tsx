// import Avatar from "./avatar";
import CoverImage from "./cover-image";
// import DateFormatter from "./date-formatter";
import { PostTitle } from "@/app/_components/post-title";
import { type Author } from "@/interfaces/author";

type Props = {
  title: string;
  coverImage: string;
  projectDate: string;
  date: string;
  skills: string;
  author: Author;
};

export function PostHeader({ title, coverImage, date, skills, author, projectDate }: Props) {
  return (
    <>
      <div className="mb-8 ">
        <CoverImage title={title} src={coverImage} />
      </div>
      <PostTitle>{title}</PostTitle>
      <div className="mb-2 text-lg font-semibold text-gray-600">
        {projectDate}
        {/* <DateFormatter dateString={date} /> */}
      </div>
      <div className="mb-8 text-base text-gray-500">{skills}</div>
    </>
  );
}
