import styles from "./styles.module.css";

type CardHeaderProps = {
  title: string;
  released?: string;
};

function CardHeader(props: CardHeaderProps) {
  const { title, released } = props;
  return (
    <h3 className={styles.title}>
      {title}
      {released && <span>({released})</span>}
    </h3>
  );
}

export default CardHeader;
