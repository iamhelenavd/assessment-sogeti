import { Link, ReactNode } from "@tanstack/react-router";
import { TbConfetti } from "react-icons/tb";
import { startConfetti } from "../../../utils/animations/confetti/confetti";
import styles from "./styles.module.css";
import { ComponentProps } from "react";

type LinkButtonProps = ComponentProps<typeof Link> & {
  children: ReactNode;
};

function LinkButton(props: LinkButtonProps) {
  const { children, ...rest } = props;
  return (
    <Link onClick={startConfetti} className={styles.button} {...rest}>
      {children}
      <TbConfetti size={20} />
    </Link>
  );
}

export default LinkButton;
