import React from "react";

class AnswerItem extends React.Component  {


  render() {
    return (
      <div className="answer">
        <font color={this.props.color}> Ответ №{this.props.index}: </font>
        <p> {this.props.answer}</p>
        <button onClick={this.props.onClick}>X</button>
      </div>
    );
  }
}
export default AnswerItem;
