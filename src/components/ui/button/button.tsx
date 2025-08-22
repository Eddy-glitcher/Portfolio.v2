import React from "react";
import styles from "./button.module.scss";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "ghost" | "link" | "toggle"; // las variantes
  onClick?: () => void;
};

export default function Button({ children, variant = "ghost", onClick }: ButtonProps) {
  return (
    <button className={`${styles.button} ${styles[variant]}`} onClick={onClick}>
      <span>{children}</span>
    </button>
  );
}