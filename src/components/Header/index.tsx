import React from "react";

import Full from "./Full";
import Mobile from "./Mobile";
import styles from "./Header.module.scss";

const Header: React.FC = () => {
  return (
    <>
      <Full className={styles.full} />
      <Mobile className={styles.mobile} />
    </>
  );
};

export default Header;
