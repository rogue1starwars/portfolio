import { type Author } from "./author";

export type Post = {
  slug: string;
  title: string;
  projectDate: string;
  date: string;
  skills: string;
  coverImage: string;
  author: Author;
  excerpt: string;
  ogImage: {
    url: string;
  };
  link?: string;
  content: string;
  preview?: boolean;
};
