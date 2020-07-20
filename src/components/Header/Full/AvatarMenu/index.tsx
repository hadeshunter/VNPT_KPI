import React from "react";
import { connect } from "react-redux";
import {
  AnchorButton,
  Tag,
  Intent,
  Popover,
  PopoverInteractionKind,
  ControlGroup,
} from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
import { AppState } from "store";
import styles from "./AvatarMenu.module.scss";
import { CommonClasses } from "utils/common";
import { UserState } from "store/user/types";

interface AvatarMenuProps {
  user: UserState;
}

interface AvatarMenuState {
  notify?: boolean;
}

class AvatarMenu extends React.Component<AvatarMenuProps> {
  state: AvatarMenuState = {};
  render() {
    const count = 10;
    return (
      <div className={styles.popover}>
        <Popover
          isOpen={this.state.notify}
          interactionKind={PopoverInteractionKind.HOVER}
        >
          <AnchorButton
            rightIcon={IconNames.CHEVRON_DOWN}
            icon={IconNames.USER}
            text="Admin"
            minimal
          ></AnchorButton>
          <div className={styles.content}>
            <div>
              <ControlGroup fill style={{ padding: 10 }}>
                <AnchorButton
                  className={CommonClasses.CallToAction}
                  fill
                  href="/"
                  large
                  text={"Thông tin tài khoản"}
                />
              </ControlGroup>
            </div>
          </div>
        </Popover>
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  user: state.user,
});

export default connect(mapStateToProps)(AvatarMenu);
