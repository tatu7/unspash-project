import React, { Component } from "react";

class ImgCard extends Component {
  constructor(props) {
    super(props);
    this.imageDOM = React.createRef();
    this.state = { span: 0 };
  }
  setSpan = () => {
    const height = this.imageDOM.current.clientHeight;
    const spans = Math.ceil(height + 10);
    this.setState({ span: spans });
  };
  componentDidMount() {
    this.imageDOM.current.addEventListener("load", this.setSpan);
  }
  render() {
    return (
      <img
        ref={this.imageDOM}
        src={this.props.data.urls.regular}
        alt={this.props.data.alt_description}
        style={{ gridRowEnd: `span ${this.state.span}` }}
      />
    );
  }
}

export default ImgCard;
