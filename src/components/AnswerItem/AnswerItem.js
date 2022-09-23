import React from "react";

class AnswerItem extends React.Component  {

  constructor(props) {
    super(props);
}
  render() {
    return (
      <div className="answer">
        <font face={this.props.face}> Ответ №{this.props.index}: </font>
        <p> {this.props.answer}</p>
        <button onClick={this.props.onClick}>X</button>
      </div>
    );
  }
}
export default AnswerItem;
