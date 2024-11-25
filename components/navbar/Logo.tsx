import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <p className="group relative text-3xl font-bold">
        Air <span className="text-primary">RBC</span>
        <span className="absolute -bottom-1 left-0 h-1 w-0 bg-primary transition-all duration-200 group-hover:w-full"></span>
      </p>
    </Link>
  );
};

export default Logo;
