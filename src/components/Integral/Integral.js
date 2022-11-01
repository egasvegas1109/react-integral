import React from "react";
import AnswerItem from "../AnswerItem/AnswerItem";
import axios from "axios"

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      upperInt: null,
      lowerInt: null,
      stepInt: null,
      result: null,
      AnswerList: [],
    };
    this.upper = this.upper.bind(this);
    this.lower = this.lower.bind(this);
    this.step = this.step.bind(this);
    this.decision = this.decision.bind(this);
    this.deleteAllHandler = this.deleteAllHandler.bind(this);
  }

  deleteHandler(index) {
    let answerList = this.state.AnswerList;
    answerList.splice(index, 1); //удаляем элемент массива
    this.setState({ AnswerList: answerList }); //заменяем старый массив на новый
    console.log("index = " + index);
  }

  deleteAllHandler() {
    let answerList = this.state.AnswerList;
    answerList.splice(0, answerList.length); //удаляем элемент массива
    this.setState({ AnswerList: answerList }); //заменяем старый массив на новый
    console.log("delete all");
  }

  upper(e) {
    this.setState({ upperInt: e.target.value }, function () {
      /* Получаем измененное значение state */
      console.log("Верхний предел " + this.state.upperInt);
    });
  }

  lower(e) {
    this.setState({ lowerInt: e.target.value }, function () {
      /* Получаем измененное значение state */
      console.log("Нижний предел " + this.state.lowerInt);
    });
  }

  step(e) {
    this.setState({ stepInt: e.target.value }, function () {
      /* Получаем измененное значение state */
      console.log("Число разбиений " + this.state.stepInt);
    });
  }

  decision = () => {
    
    // const data = {

    // }
    const headers = {
      upperInt: this.state.upperInt,
      lowerInt: this.state.lowerInt,
      stepInt: this.state.stepInt
    }

    axios.post("http://localhost:5272/IntegralSolution/calculate", {
      headers: headers})
      .then(res => {
        console.log(res);
      })
      .catch(error => console.log(error));

  };

  render() {
    let listItems = this.state.AnswerList.map((currElement, index, array) => {
      if (array.length - 1 === index) {
        return (
          <AnswerItem
            answer={currElement.answer}
            color="green"
            index={index + 1}
            key={index}
            onClick={this.deleteHandler.bind(this, index)}
          />
        );
      }
      return (
        <AnswerItem
          answer={currElement.answer}
          index={index + 1}
          key={index}
          onClick={this.deleteHandler.bind(this, index)}
        />
      );
    });
    return (
      <div>
        <header>
          <h3>Расчёт интеграла</h3>
          <p>Лабораторная №1</p>
          <p>Тютюкин Е.С. 1-46М </p>
          <hr></hr>
        </header>

        <div className="inputs">
          <div>
            <p>Верхний предел</p>
            <input placeholder="Введите значение" onChange={this.upper}></input>
          </div>

          <div>
            <p>Нижний предел</p>
            <input placeholder="Введите значение" onChange={this.lower}></input>
          </div>

          <div>
            <p>Число разбиений</p>
            <input placeholder="Введите значение" onChange={this.step}></input>
          </div>
        </div>
        <hr></hr>

        <div className="integral">
          <button onClick={this.decision}>Рассчитать</button>
          <button onClick={this.deleteAllHandler}>Очистить историю</button>
        </div>

        <div className="logs">
          <p>Результаты:</p>

          {listItems}
        </div>
      </div>
    );
  }
}
