import { ReactNode } from "react";
import styles from "./styles.module.css";

type Plot = {
  children: ReactNode;
};

function Plot(props: Plot) {
  const { children } = props;

  return <p className={styles.plot}>{children}</p>;
}

export default Plot;
