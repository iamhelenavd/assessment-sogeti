import styles from "./styles.module.css";
import CardHeader from "../../atoms/cardHeader/component";
import LabelList from "../labelList/component";
import AwardList from "../awardList/component";
import Plot from "../../atoms/plotItem/component";
import PillList from "../pillList/component";

type MovieDetailsComponentProps = {
  full?: boolean;
  released?: string;
  title: string;
  year: string;
  ratings?: Array<{ value: string }>;
  type?: string;
  actors?: Array<string>;
  director?: string;
  plot?: string;
  awards: string;
  poster?: string;
  genre?: Array<string>;
};

function Card(props: MovieDetailsComponentProps) {
  const {
    released,
    title,
    year,
    ratings,
    type,
    actors,
    director,
    plot,
    awards,
    poster,
    genre,
  } = props;

  return (
    <div className={styles.card}>
      <img
        src={
          poster || "https://via.placeholder.com/150?text=No+Image+Available"
        }
        alt={title || "No image available"}
      />
      <div className={styles.content}>
        <CardHeader released={released} title={title} />
        <LabelList ratings={ratings} type={type} year={year} />
        <AwardList awards={awards} director={director} />
        <Plot plot={plot} />
        {genre && <PillList isGhost items={genre} />}
        {actors && <PillList title="Actors:" items={actors} />}
      </div>
    </div>
  );
}

export default Card;
