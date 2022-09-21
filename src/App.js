function App() {
  return (
    <div>
      <header>
        <h3>Расчёт интеграла</h3>
        <p>Лабораторная №1</p>
        <hr></hr>
      </header>

      <body>
        <div className="inputs">
          <div>
            <p>Верхний предел</p>
            <input placeholder="Введите значение"></input>
          </div>

          <div>
            <p>Нижний предел</p>
            <input placeholder="Введите значение"></input>
          </div>

          <div>
            <p>Число разбиений</p>
            <input placeholder="Введите значение"></input>
          </div>
        </div>
        <hr></hr>

        <div className="logs">
          <p>Результаты:</p>

          <div>
            <p>Интеграл =</p>
          </div>
        </div>

      </body>
    </div>
  );
}

export default App;
