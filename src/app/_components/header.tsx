import Link from "next/link";

const Header = () => {
  return (
    <h2 className="text-md font-bold tracking-normal leading-tight mb-16 mt-8">
      <Link href="/" className="hover:underline">
        RYOTA
      </Link>
    </h2>
  );
};

export default Header;
