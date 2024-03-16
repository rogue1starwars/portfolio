import Avatar from "./avatar";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";
import { PostTitle } from "@/app/_components/post-title";
import { type Author } from "@/interfaces/author";

type Props = {
  title: string;
  coverImage: string;
  projectDate: string;
  date: string;
  author: Author;
};

export function PostHeader({ title, coverImage, date, author, projectDate }: Props) {
  return (
    <>
      <div className="mb-8 ">
        <CoverImage title={title} src={coverImage} />
      </div>
      <PostTitle>{title}</PostTitle>
      <div className="mb-6 text-lg">
        {projectDate}
        {/* <DateFormatter dateString={date} /> */}
      </div>
    </>
  );
}
