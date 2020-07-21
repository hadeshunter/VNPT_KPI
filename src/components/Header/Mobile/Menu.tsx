import React from "react";
import classNames from "classnames";
import {
  Drawer,
  Position,
  Menu,
  Classes,
  Navbar,
  Alignment,
  AnchorButton,
} from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";

import { externalLink } from "utils/constants";
import styles from "./styles.module.scss";
import Link from "next/link";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const HeaderMobileMenu: React.FC<Props> = ({ isOpen, onClose }) => {
  return (
    <Drawer
      lazy
      className={styles.drawer}
      position={Position.LEFT}
      size="70%"
      onClose={onClose}
      isOpen={isOpen}
    >
      <Navbar className={classNames(styles.sideNav, Classes.DARK)}>
        <Navbar.Group align={Alignment.LEFT}>
          <AnchorButton large icon={IconNames.MENU} minimal onClick={onClose} />
        </Navbar.Group>
        <div className={classNames(styles.welcome, Classes.TEXT_MUTED)}>
          VNPT KPI
        </div>
      </Navbar>

      <div className={styles.content}>
        <div className={styles.menuContainer}>
          <Menu className={styles.menu} large>
            <Link href="/">
              <Menu.Item
                onClick={onClose}
                icon={IconNames.INFO_SIGN}
                text="Thông tin tài khoản"
              />
            </Link>
            <Menu.Divider />
            <Link href="/about">
              <Menu.Item
                onClick={onClose}
                icon={IconNames.CALCULATOR}
                text="Tính Fiber"
              />
            </Link>
            <Menu.Item
              target="blank"
              icon={IconNames.CALCULATOR}
              text="Thanh Lý Fiber"
            />
            <Menu.Divider />
            <Menu.Item
              href={externalLink.HOTLINE}
              icon={IconNames.PHONE}
              text="Hotline: (+28)800-126"
            />
            <Menu.Item
              href={externalLink.GOOGLE_MAP}
              target="blank"
              icon={IconNames.MAP_MARKER}
              text="Google Map"
            />
          </Menu>
        </div>

        <div className={styles.footer}>
          <div className={Classes.TEXT_SMALL} style={{ textAlign: "left" }}>
            <div>TT&nbsp;Công Nghệ Thông Tin&nbsp;VNPT&nbsp;TP HCM</div>
            <div className={classNames(Classes.TEXT_SMALL, Classes.TEXT_MUTED)}>
              <div>
                12/1 Nguyễn Thị Minh Khai,&nbsp;Phường DaKao, Quận 1,&nbsp;
                Thành phố&nbsp; Hồ&nbsp;Chí&nbsp;Minh
              </div>
            </div>
          </div>
        </div>
      </div>
    </Drawer>
  );
};

export default HeaderMobileMenu;
