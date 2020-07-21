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
    const { user } = this.props;
    console.log(user.info);
    return (
      <div className={styles.popover}>
        <Popover
          isOpen={this.state.notify}
          interactionKind={PopoverInteractionKind.HOVER}
        >
          {user.info ? (
            <AnchorButton
              rightIcon={IconNames.CHEVRON_DOWN}
              icon={IconNames.USER}
              text={user.info.username}
              minimal
            ></AnchorButton>
          ) : (
            <AnchorButton
              rightIcon={IconNames.CHEVRON_DOWN}
              icon={IconNames.LOG_IN}
              text="Đăng nhập"
              minimal
            ></AnchorButton>
          )}
          <div className={styles.content}>
            <div>
              <ControlGroup fill style={{ padding: 10 }}>
                <div>
                  <p>{user.info?.fullname}</p>
                  <p>{user.info?.email}</p>
                  <p>{user.info?.phone}</p>

                  <AnchorButton
                    className={CommonClasses.CallToAction}
                    fill
                    href="/"
                    text={"Log out"}
                  />
                </div>
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
