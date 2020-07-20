import React from "react";
import classNames from "classnames";
import { IconNames } from "@blueprintjs/icons";
import { Navbar, Classes, AnchorButton } from "@blueprintjs/core";

import Logo from "./VNPT_Logo.svg";
import styles from "./styles.module.scss";
import Link from "next/link";

interface Props {
  open: () => void;
}

const HeaderMobileNav: React.FC<Props> = ({ open }) => {
  return (
    <Navbar fixedToTop className={classNames(Classes.DARK, styles.nav)}>
      <div className={styles.left}>
        <AnchorButton fill large icon={IconNames.MENU} minimal onClick={open} />
      </div>
      <div className={styles.center}>
        <Link href="/">
          <div className={styles.logo}>
            <img src={Logo} width={30} style={{ width: 30 }} />
          </div>
        </Link>
      </div>
    </Navbar>
  );
};

export default HeaderMobileNav;
