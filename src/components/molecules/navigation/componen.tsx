import { Link } from "@tanstack/react-router";
import styles from "./styles.module.css";
import { startConfetti } from "../../../utils/animations/confetti/confetti";
import Form from "../../organisms/form/comopnent";
import { TbConfetti } from "react-icons/tb";

const handeClick = () => {
  startConfetti();
};

function Navigation() {
  return (
    <nav className={styles.navigation}>
      <Link className={styles.link} to="/">
        Home
      </Link>
      <Form className={styles.form} />
      <Link onClick={handeClick} className={styles.linkButton} to="/featured">
        Featured {""}
        <TbConfetti size={20}/>
      </Link>
    </nav>
  );
}

export default Navigation;
