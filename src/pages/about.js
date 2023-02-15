import Navbar from "@/components/Navbar";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

const about = () => {
  return (
    <>
      <Head>
        <title>About | Naveen Basyal</title>
      </Head>
      <Navbar />
      <div className="container home ">
        <div class="row mt-5">
          <div className="col-lg-4 col-sm-12 right_side">
            {" "}
            <div className="profileImg ">
              <Image style={{ width: "29rem" }} src="/source.gif" />
            </div>
          </div>
          <div className="col-lg-8 col-sm-12 left_side shadow-out">
            <h1>What i do</h1>
            <p>
              I love all aspects of technology and want to explore as much as I
              can!
            </p>
            <div className="devicons">
              <p align="center">
                {" "}
                <a target="_blank" rel="noreferrer">
                  {" "}
                  <Image
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg"
                    alt="bootstrap"
                    width="40"
                    height="40"
                  />{" "}
                </a>{" "}
                <a target="_blank" rel="noreferrer">
                  {" "}
                  <Image
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg"
                    alt="c"
                    width="40"
                    height="40"
                  />{" "}
                </a>{" "}
                <a target="_blank" rel="noreferrer">
                  {" "}
                  <Image
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg"
                    alt="cplusplus"
                    width="40"
                    height="40"
                  />{" "}
                </a>{" "}
                <a target="_blank" rel="noreferrer">
                  {" "}
                  <Image
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                    alt="css3"
                    width="40"
                    height="40"
                  />{" "}
                </a>{" "}
                <a target="_blank" rel="noreferrer">
                  {" "}
                  <Image
                    src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg"
                    alt="figma"
                    width="40"
                    height="40"
                  />{" "}
                </a>{" "}
                <a target="_blank" rel="noreferrer">
                  {" "}
                  <Image
                    src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
                    alt="git"
                    width="40"
                    height="40"
                  />{" "}
                </a>
                <br />
                <br />{" "}
                <a target="_blank" rel="noreferrer">
                  {" "}
                  <Image
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                    alt="html5"
                    width="40"
                    height="40"
                  />{" "}
                </a>{" "}
                <a target="_blank" rel="noreferrer">
                  {" "}
                  <Image
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                    alt="javascript"
                    width="40"
                    height="40"
                  />{" "}
                </a>{" "}
                <a target="_blank" rel="noreferrer">
                  {" "}
                  <Image
                    src="https://raw.githubusercontent.com/prplx/svg-logos/5585531d45d294869c4eaab4d7cf2e9c167710a9/svg/materialize.svg"
                    alt="materialize"
                    width="40"
                    height="40"
                  />{" "}
                </a>{" "}
                <a target="_blank" rel="noreferrer">
                  {" "}
                  <Image
                    src="https://cdn.cdnlogo.com/logos/n/80/next-js.svg"
                    alt="mysql"
                    width="40"
                    height="40"
                  />{" "}
                </a>{" "}
                <a target="_blank" rel="noreferrer">
                  {" "}
                  <Image
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
                    alt="nodejs"
                    width="40"
                    height="40"
                  />{" "}
                </a>{" "}
                <a target="_blank" rel="noreferrer">
                  {" "}
                  <Image
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                    alt="react"
                    width="40"
                    height="40"
                  />{" "}
                </a>{" "}
              </p>
            </div>
            <div className="text m-3 ">
              <p className="fs-5">
                ⚡Develop highly interactive Front end / User Interfaces for
                your web
              </p>
              <p className="fs-5">
                ⚡Develop WebApps, softwares and Design more and more things
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default about;
