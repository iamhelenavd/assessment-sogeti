import { TbAward, TbChairDirector } from "react-icons/tb";
import styles from "./styles.module.css";

type SquareListProps = {
  director?: string;
  awards: string;
};

function AwardList(props: SquareListProps) {
  const { director, awards } = props;

  return (
    <ul className={styles.labelsWrapper}>
      <li>
        <span>
          <TbAward size={24} color="var(--color-tertiary)" />
        </span>
        {awards}
      </li>
      {director && (
        <li>
          <span>
            <TbChairDirector size={24} color="var(--color-quinarye)" />
          </span>
          {director}
        </li>
      )}
    </ul>
  );
}

export default AwardList;
