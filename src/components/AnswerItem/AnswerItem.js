import { Component } from "react";

class AnswerItem extends Component {
  render() {
    return (
      <div className="answer">
        <font face={this.props.face}> Ответ №{this.props.index}: </font>
        <p> {this.props.answer}</p>
      </div>
    );
  }
}
export default AnswerItem;
