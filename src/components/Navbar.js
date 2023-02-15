import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav>
        <div class="menu">
          <input type="checkbox" id="check" />
          <div class="logo d-flex">
            <div className="profileImage shadow-in p-2">
              <img src="/Avatar.jpg" alt="profile" className="shadow-out" />
            </div>
            <Link href="/">NaveenBasyal</Link>
          </div>
          <ul>
            <label class="btn cancel" for="check">
              <i class="fas fa-times"></i>
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
          <label for="check" class="btn bars">
            <i class="fas fa-bars"></i>
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
