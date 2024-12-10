import ThreeDotsWave from "../../../utils/animations/motion/threeDotsWave";
import styles from "./styles.module.css";
import clsx from "clsx";

type MessageProps = {
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
};

function Message(props: MessageProps) {
  const { isLoading, isError, isSuccess } = props;

  if (!isLoading && !isError && !isSuccess) {
    return (
      <div className={clsx(styles.message, styles.welcomeMessage)}>
        <h1 className={styles.title}>Welcome please search for a movie</h1>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className={styles.message}>
        <ThreeDotsWave />
        <h1 className={styles.title}>Loading...</h1>
      </div>
    );
  }

  if (isError) {
    return (
      <div className={styles.message}>
        <ThreeDotsWave />
        <h1 className={styles.title}>No Matches found</h1>
      </div>
    );
  }

  return null;
}

export default Message;
