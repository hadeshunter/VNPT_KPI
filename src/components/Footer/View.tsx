import React from "react";
import classNames from "classnames";
import { IconNames } from "@blueprintjs/icons";
import { Classes, AnchorButton, Menu } from "@blueprintjs/core";

import Panel from "components/Panel";
import styles from "./styles.module.scss";
import { externalLink } from "utils/constants";
import Link from "next/link";

interface Props {
  className?: string;
}

export default function Footer(props: Props) {
  const menuStyle = { margin: -5, padding: 0, marginBottom: 5 };
  return (
    <div className={classNames(styles.main, props.className)}>
      <div className={classNames(styles.container, styles.row)}>
        <Panel small title="Nội dung">
          <Menu style={menuStyle} large className={styles.content}>
            <Link href="/">
              <Menu.Item icon={IconNames.HOME} text="Trang chủ" />
            </Link>
            <Link href="/user">
              <Menu.Item
                icon={IconNames.TH_LIST}
                text="Danh sách fiber phát triển mới"
              />
            </Link>

            <Menu.Item text="Các chức năng" icon={IconNames.PROJECTS}>
              <Link href="/">
                <Menu.Item icon={IconNames.LIST} text="DS Fiber đã thưởng" />
              </Link>
              <Link href="/">
                <Menu.Item
                  icon={IconNames.FILTER_LIST}
                  text="DS Fiber thanh lý trước thời hạn"
                />
              </Link>
              <Link href="/">
                <Menu.Item icon={IconNames.CALCULATOR} text="DS thưởng, phạt" />
              </Link>
            </Menu.Item>
          </Menu>
        </Panel>

        <div>
          <Panel small title="PHẢN HỒI">
            <Menu style={menuStyle} large className={styles.content}>
              <Menu.Item
                target="blank"
                href={externalLink.FEEDBACK.BUG}
                icon={IconNames.APPLICATION}
                text="Báo lỗi phần mềm"
              />
              <Menu.Item
                target="blank"
                href={externalLink.FEEDBACK.OTHER}
                icon={IconNames.CHAT}
                text="Phản hồi khác"
              />
            </Menu>

            <div className={Classes.TEXT_MUTED}>
              Phản hồi của bạn sẽ được gửi trực tiếp đến hòm thư tiếp nhận ý
              kiến của trung tâm CNTT.
            </div>
          </Panel>
        </div>

        <div>
          <Panel small title="Thông tin">
            <div className={Classes.TEXT_MUTED}>
              TRUNG TÂM CÔNG NGHỆ THÔNG TIN
            </div>

            <div style={{ marginTop: 8 }}>
              <div className={Classes.TEXT_MUTED}>
                Website được xây dựng bởi đội ngũ IT trực thuộc trung tâm CNTT.
              </div>
            </div>
          </Panel>
        </div>
      </div>

      <div className={classNames(styles.nav, Classes.DARK)}>
        <div className={classNames(styles.container, styles.bot)}>
          <div style={{ padding: 5 }}>
            <span className={Classes.TEXT_MUTED}>©&nbsp;</span>
            <span>
              {Math.max(new Date().getFullYear(), 2019)} Trung tâm CNTT VNPT
              TPHCM
            </span>
          </div>
          <div>
            <AnchorButton
              minimal
              icon={IconNames.PHONE}
              href={externalLink.HOTLINE}
            >
              Hotline: (+28)800126
            </AnchorButton>
          </div>
          <AnchorButton
            minimal
            icon={IconNames.MAP_MARKER}
            rightIcon={IconNames.SHARE}
            target="blank"
            href={externalLink.GOOGLE_MAP}
          >
            12/1 NTMK,&nbsp; P.ĐaKao,&nbsp; Q.1,&nbsp; TP.HCM
          </AnchorButton>
        </div>
      </div>
    </div>
  );
}
