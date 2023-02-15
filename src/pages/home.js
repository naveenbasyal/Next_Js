import Link from "next/link";
import Head from "next/head";
const home = () => {
  return (
    <>
      <Head>
        <title>Home | Naveen Basyal</title>
      </Head>
      <div className="container home ">
        <div class="row">
          <div className="col-lg-8 col-sm-12 left_side shadow-out">
            <h1>
              Hi all , I'm Naveen <span className="wave">👋</span>
            </h1>
            <p>
              I love software development and deep learning. I know a much about
              Web Dev too and UI/UX! Want to discuss regarding any project or
              just want to say a Hi? I am always available to listen to you
            </p>
            <Link
              href="mailto:naveenbasyak.001@gmail.com"
              className="shadow-out p-2 contactBtn"
            >
              Contact Me
            </Link>
          </div>
          <div className="col-lg-4 col-sm-12 right_side">
            {" "}
            <div className="profileImg shadow-in ">
              <img src="/ProfilePic.jpg" className="shadow-out" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default home;
