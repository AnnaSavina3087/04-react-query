// ErrorMessage.tsx

import React from "react";
import styles from "./ErrorMessage.module.css";

type Props = {
  message: string;
};

const ErrorMessage: React.FC<Props> = ({ message }) => {
  return <div className={styles.error}>{message}</div>;
};

export default ErrorMessage;
