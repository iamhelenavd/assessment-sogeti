import { Link } from "@tanstack/react-router";
import LinkButton from "../../atoms/linkButton/component";
import Form from "../../organisms/form/component";
import styles from "./styles.module.css";

function Navigation() {
  return (
    <nav className={styles.navigation}>
      <Link className={styles.link} to="/">
        Home
      </Link>
      <Form className={styles.form} />
      <LinkButton to="/featured">Featured</LinkButton>
    </nav>
  );
}

export default Navigation;
