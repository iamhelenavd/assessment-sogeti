import ThreeDotsWave from "../../../utils/animations/motion/threeDotsWave";
import styles from "./styles.module.css";

type ErrorMessageProps = {
  isLoading: boolean;
  isError: boolean;
};

function ErrorMessage(props: ErrorMessageProps) {
  const { isLoading, isError } = props;

  if (isLoading) {
    return (
      <div className={styles.errorMessage}>
        <ThreeDotsWave />
        <h1 className="errorMessage">Loading...</h1>
      </div>
    );
  }

  if (isError) {
    return (
      <div className={styles.errorMessage}>
        <ThreeDotsWave />
        <h1 className="errorMessage">No Matches found</h1>
      </div>
    );
  }

  return null;
}

export default ErrorMessage;
