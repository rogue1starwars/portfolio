import Link from "next/link";

export default function Contact() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold tracking-normal leading-tight">
        CONTACT
      </h2>
      <div className="mb-32">
        <div className="leading-loose">
          <div className="grid grid-cols-3">
            <span>Email</span>
            <Link
              href="mailto:rogue1starwars0728@gmail.com"
              className="hover:underline col-span-2"
            >
              rogue1starwars0728@gmail.com
            </Link>
            <span>Github</span>
            <Link
              href="https://github.com/rogue1starwars"
              className="hover:underline col-span-2"
            >
              rogue1starwars
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
