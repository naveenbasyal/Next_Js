import Link from "next/link";
const index = () => {
  return (
    <>
      <nav>
        <ul>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/blogs">Blog</Link>
          <Link href="/contact">Contact</Link>
        </ul>
      </nav>
    </>
  );
};

export default index;
