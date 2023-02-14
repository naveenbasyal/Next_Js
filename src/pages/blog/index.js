//index.js page is the main part which shows first between any pages: it does automatic route
import Navbar from "@/components/Navbar";
import Link from "next/link";
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
      <Navbar />
      <h1 className="text-center">Blog Home</h1>
      {data.slice(0, 10).map((val) => {
        /* slice method used to show only the required part
         and rest of the part is sliced from the data */
        return (
          <>
            <div key={val.id} className="w-100 d-flex justify-content-center">
              <div className="col-lg-8 col-sm-12 shadow-out my-4 py-4 rounded">
                <span className="mx-2 fs-3 ">{`${val.id}.`}</span>
                <Link href={`/blog/${val.id}`}>
                  <span className="mx-3 fs-3 px-2">{val.title}</span>
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
