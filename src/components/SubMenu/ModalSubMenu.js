import React, { Component } from "react";
import SubMenu from "./SubMenu";
import "./modal.scss";
import { connect } from "react-redux";
import subMenuActions from "../../redux/submenu/submenu.action";
import { CSSTransition } from "react-transition-group";

class ModalMenu extends Component {
  state = {
    mount: false,
  };

  componentDidMount() {
    this.setState({
      mount: true,
    });
  }

  stupidClose = () => {
    this.setState({
      mount: false,
    });
    setTimeout(() => {
      this.props.onClose();
    }, 300);
  };

  componentWillUnmount() {
    this.setState({
      mount: false,
    });
  }
  render() {
    return (
      <>
        <CSSTransition in={this.state.mount} timeout={300} classNames="jija">
          <div className="overlay" onClick={this.stupidClose}></div>
        </CSSTransition>
        <CSSTransition
          in={this.state.mount}
          timeout={300}
          classNames="animation"
          unmountOnExit
        >
          <div className="slide">
            <div className="modal">
              <SubMenu />
            </div>
          </div>
        </CSSTransition>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  isOpen: state.subMenu.open,
});

const mapDispatchToProps = (dispatch) => ({
  onClose: () => dispatch(subMenuActions.closeSubMenu()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalMenu);
