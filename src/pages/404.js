import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

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
    <section className="page_404">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 ">
            <div className="col-sm-10 col-sm-offset-1 col-lg-12  text-center">
              <div className="four_zero_four_bg">
                <h1 className="text-center ">404</h1>
              </div>

              <div className="contant_box_404">
                <h3 className="h2">Look like you're lost</h3>
                <p>the page you are looking for not avaible!</p>
                <Link href="/" className="link_404">
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
