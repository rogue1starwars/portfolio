import Container from "@/app/_components/container";
import { EXAMPLE_PATH } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <Container>
        <div className="py-8">
          <p className="font-medium text-gray-500">
            This page was made based on{" "}
            <a
              href={`https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
              className="hover:underline text-gray-800 font-bold"
            >
              Next.js Blog Example{" "}
            </a>
            and the content was formated using{" "}
            <a
              href="https://openai.com/"
              className="hover:underline text-gray-800 font-bold"
            >
              Chat GPT{" "}
            </a>
          </p>
          <p></p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
