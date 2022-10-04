import React from "react";
import AnswerItem from "../AnswerItem/AnswerItem";
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

  f(x) {
    let res;
    res = Math.pow(2, 3 * x);
    return res;
  }

  decision = () => {
    let a = parseFloat(this.state.lowerInt);
    let b = parseFloat(this.state.upperInt);
    let N = parseFloat(this.state.stepInt);
    let h = parseFloat((b - a) / N);
    let s = 0;
    let i = 0;
    for (i = 0; i < N; i++) {
      s += h * this.f(a + h * i);
    }
    this.state.AnswerList.push({ answer: s }); //добавляем в массив переменную с новым значением
    this.setState({ AnswerList: this.state.AnswerList }); //заменяем старый лист на новый
    return console.log("Результат = " + s);
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
