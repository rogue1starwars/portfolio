import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

export function PostTitle({ children }: Props) {
  return (
    <h1 className="sm:text-5xl text-2xl font-bold tracking-tighter leading-tight md:leading-none mb-8">
      {children}
    </h1>
  );
}
