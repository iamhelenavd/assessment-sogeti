import styles from "./styles.module.css";

type Plot = {
  plot?: string;
};

function Plot(props: Plot) {
  const { plot } = props;

  return <p className={styles.plot}>{plot}</p>;
}

export default Plot;
