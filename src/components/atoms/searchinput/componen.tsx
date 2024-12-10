import styles from "./styles.module.css";

type SearchInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
};

function SearchInput(props: SearchInputProps) {
  return (
    <input
      {...props}
      title="searchInput"
      className={styles.input}
      placeholder="Search movie"
    />
  );
}

export default SearchInput;
