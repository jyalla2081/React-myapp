import React, { Component } from "react";
class LikeComponent extends Component {
  render() {
    let classes = "fa fa-heart";
    if (!this.props.liked) classes += "-o";
    return (
      <i
        className={classes}
        onClick={this.props.onLike}
        style={{ cursor: "pointer" }}
      ></i>
    );
  }
}

export default LikeComponent;
