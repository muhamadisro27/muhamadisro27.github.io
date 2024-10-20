import { ChangeEvent } from "react";
import styles from "./index.module.scss";

interface SearchProp {
  search: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Search = (props: SearchProp) => {
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
