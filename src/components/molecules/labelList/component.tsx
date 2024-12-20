import { ImStarFull } from "react-icons/im";
import styles from "./styles.module.css";

type LabelListProps = {
  year: string;
  type?: string;
  ratings?: Array<{ value?: string }>;
};

function LabelList(props: LabelListProps) {
  const { year, type, ratings } = props;
  return (
    <ul className={styles.list}>
      {type && <li className={styles.type}>{type}</li>}
      {ratings?.map((rating, index) => {
        return (
          <li key={index}>
            <span>
              <ImStarFull size={12} color="var(--color-tertiary)" />
            </span>
            <span>{rating.value}</span>
          </li>
        );
      })}
      <li>
        <span>{year}</span>
      </li>
    </ul>
  );
}

export default LabelList;
