import React, { ReactNode } from 'react';
import styles from './Button.module.scss';

type ButtonProps = {
  children: ReactNode;
};

const Button: React.FC<ButtonProps> = ({ children }) => {
  return <div className={styles.button}>{children}</div>;
};

export default Button;
