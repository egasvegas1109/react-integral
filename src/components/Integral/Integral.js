import { Component, useState } from 'react';
import AnswerItem from "../AnswerItem/AnswerItem";
import axios from "axios"

export default function Integral(){
  const [upperInt, setUpper] = useState(0)
  const [lowerInt, setLower] = useState(0)
  const [stepInt, setStep] = useState(0)
  const [AnswerList, setAnswerList] = useState([])

  const deleteHandler = (index) => {
    let answerList = AnswerList;
    answerList.splice(index, 1); //удаляем элемент массива
    setAnswerList(answerList.slice());//заменяем старый массив на новый
    console.log("index = " + index);
  }

  const deleteAllHandler = () => {
    const answerListNew=[]
    setAnswerList(answerListNew);
  }

  const upperChange = (e) => {
    var val = e.target.value;
    setUpper(val) 
    console.log(upperInt)
}

  const lowerChange = (e) => {
    var val = e.target.value;
    setLower(val) 
    console.log(lowerInt)
  }

  const stepChange = (e) => {
    var val = e.target.value;
    setStep(val) 
    console.log(stepInt)
  }

  const decision = () => {
    let currentList=AnswerList;
    let integralVars = {
      a: lowerInt,
      b: upperInt,
      n: stepInt,
    };

    axios.post("http://localhost:5272/IntegralSolution/calculate", integralVars)
      .then(res => {
        currentList.push({answer:res.data});
        setAnswerList(currentList.slice())
        console.log(res.data);
        console.log(currentList)
      })
      .catch(error => console.log(error));
  }


    let listItems = AnswerList.map((currElement, index, array) => {
      if (array.length - 1 === index) {
        return (
          <AnswerItem
            answer={currElement.answer}
            color="green"
            index={index + 1}
            key={index}
            onClick={() =>deleteHandler(index)}
          />
        );
      }
      return (
        <AnswerItem
          answer={currElement.answer}
          index={index + 1}
          key={index}
          onClick={() =>deleteHandler(index)}
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
            <input placeholder="Введите значение" onChange={(e) => upperChange(e)}></input>
          </div>

          <div>
            <p>Нижний предел</p>
            <input placeholder="Введите значение" onChange={(e) => lowerChange(e)}></input>
          </div>

          <div>
            <p>Число разбиений</p>
            <input placeholder="Введите значение" onChange={(e) => stepChange(e)}></input>
          </div>
        </div>
        <hr></hr>

        <div className="integral">
          <button onClick={() => decision()}>Рассчитать</button>
          <button onClick={() => deleteAllHandler()}>Очистить историю</button>
        </div>

        <div className="logs">
          <p>Результаты:</p>

          {listItems}
        </div>
      </div>
    );
}
