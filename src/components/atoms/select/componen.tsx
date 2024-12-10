import styles from "./styles.module.css";

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  options: { value: string; label: string }[];
};

function Select(props: SelectProps) {
  const { options } = props;
  return (
    <select
      {...props}
      title="please select short or full plot"
      className={styles.select}
      id="plotSize"
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default Select;
