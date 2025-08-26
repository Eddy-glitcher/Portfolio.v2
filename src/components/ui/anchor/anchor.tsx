import React from "react";
import styles from "./anchor.module.scss";

type anchorProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "link" | "toggle" | "social";
  target?: string,
  href? : string,
  onClick?: () => void;
};

export default function Anchor({ href, target, children, variant = "ghost", onClick }: anchorProps) {
  return (
    <a href={href} target={target} className={`${styles.Anchor} ${styles[variant]}`} onClick={onClick} rel="noopener noreferrer">
      <span>{children}</span>
    </a>
  );
}