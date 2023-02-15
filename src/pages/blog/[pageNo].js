import Navbar from "@/components/Navbar";
import Link from "next/link";
import Head from "next/head";
//Dynamic Routing using [] brackets

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  //mapping the id of the data
  const paths = data.map((currVal) => {
    return {
      params: {
        pageNo: currVal.id.toString(), //we are only getting the id
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export async function getStaticProps(context) {
  const id = context.params.pageNo;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`); //at this point we are fetching the unique data by accessing only id
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}

const pageNo = ({ data }) => {
  const { id, title, body } = data;
  return (
    //user can type like blogs/blog<whatever page or text>
    <>
     <Head>
        <title>Blog No {id} | Naveen Basyal</title>
      </Head>
      <Navbar />
      <div className="container">
          <div className="col-lg-12 col-sm-12 shadow-out m-4 p-4">
            <div class="d-flex">
              <div className="mx-2 fs-3 ">{`${id}.`}</div>
              <div className=" fs-3 px-2">{title}</div>
            </div>
            <div className="my-2 mx-4 px-3 text-grey">{body}</div>
          </div>
          <Link href="/blog" className="shadow-out p-2 fs-3 ">
            Back
          </Link>
      </div>
    </>
  );
};

export default pageNo;
