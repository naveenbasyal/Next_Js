import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
import styles from "@/styles/404.module.css";

// import "../styles/globals.css"
const ErrorPage = () => {
  const router = useRouter();
  //   function handle404() {
  //     router.push("/");
  //   }
  /* Redirect after some time using UseEffect  */
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);

  return (
    <section className={styles.page_404}>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 ">
            <div className="col-sm-10 col-sm-offset-1 col-lg-12  text-center">
              <div className={styles.four_zero_four_bg}>
                <h1 className="text-center ">404</h1>
              </div>

              <div className={styles.contant_box_404}>
                <h3 className="h2">Look like you're lost</h3>
                <p>the page you are looking for not avaible!</p>
                <Link href="/" className={styles.link_404}>
                  Go to Home
                </Link>
                {/* we can redirect to home using onclick method also with the help of useRouter.push method */}
                {/* <Link href="" onClick={handle404} className="link_404">
                  Home
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
