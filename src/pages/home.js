import styles from "@/styles/home.module.css";

const home = () => {
  return (
    <>
      <h1 className={styles.home}>Home page</h1>
      <img
        width={500}
        src="https://images.pexels.com/photos/7532110/pexels-photo-7532110.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
      />
    </>
  );
};

export default home;
