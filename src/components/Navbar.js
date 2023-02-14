import Link from "next/link";
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
