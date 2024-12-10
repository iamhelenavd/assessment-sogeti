import clsx from "clsx";
import styles from "./styles.module.css";

type ListItemProps = {
  text: string;
  className?: string;
  isGhost?: boolean;
};

function ListItem(props: ListItemProps) {
  const { text, isGhost = false } = props;
  return (
    <li className={clsx(styles.listItem, isGhost && styles.ghost)}>{text}</li>
  );
}

export default ListItem;
