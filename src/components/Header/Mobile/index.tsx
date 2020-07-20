import React from "react";
import classNames from "classnames";

import Nav from "./Nav";
import Menu from "./Menu";

import styles from "./styles.module.scss";

interface State {
  isOpen: boolean;
}

interface Props {
  className: string;
}

class HeaderMobile extends React.Component<Props> {
  state: State = { isOpen: false };
  openMenu = () => this.setState({ isOpen: true });
  closeMenu = () => this.setState({ isOpen: false });
  render() {
    return (
      <div className={classNames(styles.main, this.props.className)}>
        <Nav open={this.openMenu} />
        <Menu onClose={this.closeMenu} isOpen={this.state.isOpen} />
      </div>
    );
  }
}

export default HeaderMobile;
