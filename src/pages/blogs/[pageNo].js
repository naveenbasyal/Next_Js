//Dynamic Routing using [] brackets
import { useRouter } from "next/router";

const pageNo = () => {
  const router = useRouter();
  const pageNumber = router.query.pageNo;
  return (
    //user can type like blogs/blog<whatever page or text>
    <div>
      <h1>This is the {pageNumber} content.</h1>
      <h3>
        
        created using dynamic routing by making a File inside the blog folder
        with name inside the ssquare brackets like [pageNo.js] and accessing it
        using userRouter Hook of the Next Js.
      </h3>
    </div>
  );
};

export default pageNo;
