import React from "react";
import { IconNames, IconName } from "@blueprintjs/icons";
import classNames from "classnames";
import {
  Menu,
  MenuItem,
  Navbar,
  Classes,
  Alignment,
  AnchorButton,
  Popover,
  PopoverInteractionKind,
  Position,
  Button,
} from "@blueprintjs/core";

import { externalLink } from "utils/constants";
import AvatarMenu from "./AvatarMenu";
import styles from "./styles.module.scss";
import Logo from "./Logo.svg";
import VNPT_Logo from "./VNPT_Logo.svg";
import Link from "next/link";

export interface NavItem {
  text: string;
  href: string;
  icon?: IconName;
  target?: string;
  children?: NavItem[];
}

interface Props {
  className?: string;
}

export const NavMenu: NavItem[] = [
  {
    text: "Trang chủ",
    href: "/",
    icon: IconNames.HOME,
  },
  {
    text: "Danh sách fiber phát triển mới",
    href: "/",
    icon: IconNames.TH_LIST,
  },
  {
    text: "Các chức năng",
    href: "/",
    icon: IconNames.PROJECTS,
    // children: [
    //   {
    //     text: "DS Fiber đã thưởng",
    //     href: "/",
    //     icon: IconNames.LIST,
    //   },
    //   {
    //     text: "DS Fiber thanh lý trước thời hạn",
    //     href: "/",
    //     icon: IconNames.FILTER_LIST,
    //   },
    //   {
    //     text: "DS thưởng, phạt",
    //     href: "/",
    //     icon: IconNames.CALCULATOR,
    //   },
    // ],
  },
];

const buildMenu = (items: typeof NavMenu) => {
  return (
    <Menu large>
      {items.map((item, index) => (
        <Link href={item.href} key={index}>
          <MenuItem text={item.text} icon={item.icon} />
        </Link>
      ))}
    </Menu>
  );
};

const HeaderFull: React.FC<Props> = (props) => {
  const condense: React.CSSProperties = { height: 36 };
  return (
    <div className={classNames(styles.main, props.className)}>
      <Navbar
        style={condense}
        className={classNames(Classes.DARK, styles.topNav)}
      >
        <div className={styles.topNavContainer}>
          <Navbar.Group style={condense} align={Alignment.LEFT}>
            <AnchorButton
              minimal
              icon={<img alt="VNPT" className={styles.icon_logo} src={Logo} />}
              text="Trung Tâm Công Nghệ Thông Tin"
            />
          </Navbar.Group>
          <Navbar.Group style={condense} align={Alignment.RIGHT}>
            <AvatarMenu />
          </Navbar.Group>
        </div>
      </Navbar>

      <Link href="/">
        <img alt="VNPT" className={styles.logo} src={VNPT_Logo} />
      </Link>

      <Navbar className={styles.navbar}>
        <Navbar.Group align={Alignment.CENTER}>
          {NavMenu.map((item, index) =>
            item.children ? (
              <Popover
                key={item.href}
                interactionKind={PopoverInteractionKind.HOVER}
                content={buildMenu(item.children)}
                position={Position.BOTTOM}
              >
                <AnchorButton
                  target={item.target}
                  rightIcon={IconNames.CHEVRON_DOWN}
                  large
                  minimal
                  icon={item.icon}
                  text={item.text}
                  href={item.href}
                />
              </Popover>
            ) : item.target === "blank" ? (
              <AnchorButton
                key={item.href}
                className={styles.item}
                target={item.target}
                large
                minimal
                icon={item.icon}
                text={item.text}
                href={item.href}
              />
            ) : (
              <Link key={item.href} href={item.href}>
                <Button
                  className={styles.item}
                  large
                  icon={item.icon}
                  minimal
                  text={item.text}
                />
              </Link>
            ),
          )}
        </Navbar.Group>
      </Navbar>
    </div>
  );
};

export default HeaderFull;
