import styles from "./index.module.scss";

interface KeywordProp {
  keyword: string;
}

const NotFoundError: React.FC<KeywordProp> = ({ keyword }: KeywordProp) => {
  return (
    <div className={styles.notFound}>
      {`No results found for the keyword: '${keyword}'`}
    </div>
  );
};

export default NotFoundError;
