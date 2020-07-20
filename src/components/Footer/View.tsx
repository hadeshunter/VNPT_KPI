import React from "react";
import classNames from "classnames";
import { IconNames } from "@blueprintjs/icons";
import { Classes, AnchorButton, Menu } from "@blueprintjs/core";

import Panel from "components/Panel";
import styles from "./styles.module.scss";
import { externalLink, internalLink } from "utils/constants";
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
              <Menu.Item icon={IconNames.SHOP} text="Trang chủ" />
            </Link>
            <Link href="/user">
              <Menu.Item
                icon={IconNames.INFO_SIGN}
                text="Thông tin tài khoản"
              />
            </Link>

            <Menu.Item text="Các chính sách" icon={IconNames.PROJECTS}>
              <Link href={internalLink.POLICY.PAYMENT}>
                <Menu.Item icon={IconNames.LOCK} text="Bảo mật thanh toán" />
              </Link>
              <Link href={internalLink.POLICY.PRIVACY}>
                <Menu.Item
                  icon={IconNames.PERSON}
                  text="Bảo vệ thông tin người tiêu dùng"
                />
              </Link>
              <Link href={internalLink.POLICY.SHIPPING_AND_RETURNS}>
                <Menu.Item
                  icon={IconNames.BOX}
                  text="Giao nhận, vận chuyển và hoàn tiền"
                />
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
                href={externalLink.FEEDBACK.QUALITY}
                icon={IconNames.BOX}
                text="Chất lượng sản phẩm"
              />
              <Menu.Item
                target="blank"
                href={externalLink.FEEDBACK.OTHER}
                icon={IconNames.CHAT}
                text="Phản hồi khác"
              />
            </Menu>

            <div className={Classes.TEXT_MUTED}>
              Phản hồi của quý khách sẽ được gửi trực tiếp đến Ban Giám đốc của
              Phát Thành.
            </div>
          </Panel>
        </div>

        <div>
          <Panel small title="THANH TOÁN">
            <div className={styles.paymentlist}>
              <img
                alt="momo"
                style={{ height: 48 }}
                src="/static/payment/momo.png"
              />
              <img
                alt="zalopay"
                className={styles.paymentPending}
                style={{ height: 48 }}
                src="/static/payment/zalopay.png"
              />
            </div>
            <div className={Classes.TEXT_MUTED}>
              Chúng tôi sẽ tích cực cập nhật những hình thức thanh toán mới để
              phục vụ quý khách.
            </div>

            <div style={{ marginTop: 8 }}>
              <a target="blank" href={externalLink.GOV}>
                <img
                  alt="online.gov.vn"
                  style={{ width: 150 }}
                  src="/static/gov.png"
                />
              </a>
              <div className={Classes.TEXT_MUTED}>
                Website của Phát Thành được Bộ Công Thương kiểm duyệt kể từ ngày
                21/03/2019. Quý khách hoàn toàn yên tâm khi mua hàng tại đây.
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
              {Math.max(new Date().getFullYear(), 2019)} Công ty TNHH SX&TM Cà
              Phê Phát Thành
            </span>
          </div>
          <div>
            <AnchorButton
              minimal
              icon={IconNames.PHONE}
              href={externalLink.HOTLINE}
            >
              Hotline: 1900-8688
            </AnchorButton>
          </div>
          <AnchorButton
            minimal
            icon={IconNames.MAP_MARKER}
            rightIcon={IconNames.SHARE}
            target="blank"
            href={externalLink.GOOGLE_MAP}
          >
            987 Tạ Quang Bửu, Phường 6, Quận 8, TPHCM
          </AnchorButton>
        </div>
      </div>
    </div>
  );
}
