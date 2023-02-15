//index.js page is the main part which shows first between any pages: it does automatic route
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Head from "next/head";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return {
    // must return objects while doing getStaticProps and dont forget to pass the data
    props: {
      data,
    },
  };
};

const index = ({ data }) => {
  return (
    // index
    <>
     <Head>
        <title>Blogs | Naveen Basyal</title>
      </Head>
      <Navbar />
      <h1 className="text-center mt-5">Blog Home</h1>
      {data.slice(0, 5).map((val) => {
        /* slice method used to show only the required part
         and rest of the part is sliced from the data */
        return (
          <>
            <div
              key={val.id}
              className="blogs"
            >
              <div className="col-lg-8 col-sm-12 shadow-out my-4 p-4 d-flex">
                <div className="mx-2 fs-3 id ">{`${val.id}.`}</div>
                <Link href={`/blog/${val.id}`} className="mx-3 fs-4 px-2 title">
                  {val.title}
                </Link>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default index;
