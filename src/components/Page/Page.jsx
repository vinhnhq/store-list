import React from 'react';
import styles from './Page.scss';

type Props = {
  children: React.Node,
};

const Page = ({ children }: Props) => <div className={styles.Page}>{children}</div>;

export default Page;
