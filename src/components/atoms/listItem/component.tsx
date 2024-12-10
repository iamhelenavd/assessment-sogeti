import clsx from "clsx";
import styles from "./styles.module.css";
import { ReactNode } from "react";

type ListItemProps = {
  children: ReactNode;
  className?: string;
  isGhost?: boolean;
};

function ListItem(props: ListItemProps) {
  const { children, isGhost = false } = props;
  return (
    <li className={clsx(styles.listItem, isGhost && styles.ghost)}>
      {children}
    </li>
  );
}

export default ListItem;
