import { TbSearch } from "react-icons/tb";
import styles from "./styles.module.css";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  icon?: boolean;
  children?: string;
};

function Button(props: ButtonProps) {
  const { icon, children } = props;
  return (
    <button {...props} className={styles.button}>
      {children}
      {icon && <TbSearch size={22} color="#808080" />}
    </button>
  );
}

export default Button;
