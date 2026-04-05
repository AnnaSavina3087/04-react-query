import React from "react";
import styles from "./Loader.module.css";

type Props = {
  message?: string;
};

const Loader: React.FC<Props> = ({ message = "Loading..." }) => {
  return <div className={styles.text}>{message}</div>;
};

export default Loader;
