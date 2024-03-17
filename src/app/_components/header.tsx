import Link from "next/link";

const Header = () => {
  return (
    <h2 className="text-md font-medium tracking-normal leading-tight mb-8 mt-8">
      <Link href="/" className="hover:underline">
        RYOTA
      </Link>
    </h2>
  );
};

export default Header;
