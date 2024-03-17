import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/api";
import { CMS_NAME } from "@/lib/constants";
import Container from "@/app/_components/container";
import { PostBody } from "@/app/_components/post-body";
import { getResume } from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHtml";

// import { PostBody } from "@/app/_components/post-body";

export default async function Page() {
  const resume = getResume();
  const content = await markdownToHtml(resume || "");
  return (
    <main>
      <Container>
        <article className="my-32">
          <PostBody content={content} />
        </article>
      </Container>
    </main>
  );
}
