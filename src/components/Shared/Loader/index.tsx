import styles from "./index.module.css";

const Loader = () => {
  const loader = "/dashboard/loading.gif";
  return (
    <div className={styles.container}>
      <div className={styles.loader}>
        <img src={loader} alt="" />
      </div>
    </div>
  );
};

export default Loader;
