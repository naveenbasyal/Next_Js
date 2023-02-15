import Link from "next/link";
import Image from "next/image";
const Navbar = () => {
  return (
    <>
      <nav>
        <div className="menu">
          <input type="checkbox" id="check" />
          <div className="logo d-flex">
            <div className="profileImage shadow-in p-2">
              <Image src="/Avatar.jpg" alt="profile" className="shadow-out" />
            </div>
            <Link href="/">NaveenBasyal</Link>
          </div>
          <ul>
            <label className="btn cancel" htmlFor="check">
              <i className="fas fa-times"></i>
            </label>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/blog">Blogs</Link>
            </li>
            <li>
              <Link href="#">Projects</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
          <label htmlFor="check" className="btn bars">
            <i className="fas fa-bars"></i>
          </label>
        </div>
      </nav>
      {/* <nav className="nav">
        <span className="">Naveen Basyal</span>
        <ul className="d-flex align-items-center">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/blog">Blogs</Link>
          <Link href="/contact">Contact</Link>
        </ul>
      </nav> */}
    </>
  );
};

export default Navbar;
