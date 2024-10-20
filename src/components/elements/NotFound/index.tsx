import styles from "./index.module.scss";

const NotFoundError = ({ keyword }: { keyword: string }) => {
  return (
    <div className={styles.notFound}>
      {`No results found for the keyword: '${keyword}'`}
    </div>
  );
};

export default NotFoundError;
