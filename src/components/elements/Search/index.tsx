import styles from "./index.module.scss";
import { SearchProp } from "@/types/search";

const Search: React.FC<SearchProp> = (props: SearchProp) => {
  const { search, onChange } = props;
  return (
    <div>
      <input
        className={styles.search}
        type="text"
        placeholder="Search posts by title"
        value={search}
        onChange={onChange}
      />
    </div>
  );
};

export default Search;
