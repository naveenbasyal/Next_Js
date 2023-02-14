import Navbar from "@/components/Navbar";

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
      <Navbar />
      <div className="w-100 d-flex justify-content-center">
        <div className="col-lg-9 col-sm-12 shadow-out m-4 p-4 ">
          <span className="mx-2 fs-3 ">{`${id}.`}</span>
          <span className="mx-3 fs-3 px-2">{title}</span>
          <p className="m-3 text-grey">{body}</p>
        </div>
      </div>
    </>
  );
};

export default pageNo;
