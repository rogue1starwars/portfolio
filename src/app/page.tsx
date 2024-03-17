import Container from "@/app/_components/container";
import { HeroPost } from "@/app/_components/hero-post";
import { Intro } from "@/app/_components/intro";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "@/lib/api";
import Skills from "./_components/skills";
import Contact from "./_components/contact";
import Footer from "./_components/footer";

export default function Index() {
  const allPosts = getAllPosts();

  const heroPost = allPosts[0];

  const morePosts = allPosts.slice(1);

  return (
    <main>
      <Container>
        <Intro />
        {morePosts.length > 0 && <MoreStories posts={allPosts} />}
        <Skills />
        <Contact />
      </Container>
      <Footer />
    </main>
  );
}
