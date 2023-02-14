import Link from "next/link";
import home from "@/pages/home";
const Navbar = () => {
  return (
    <>
      <nav>
        <ul>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
