import React from "react";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { upperInt: null, lowerInt: null, stepInt: null };
    this.upper = this.upper.bind(this);
    this.lower = this.lower.bind(this);
    this.step = this.step.bind(this);
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
  render() {
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

        <div className="logs">
          <p>Результаты:</p>

          <div>
            <p>Интеграл =</p>
          </div>
        </div>
      </div>
    );
  }
}
