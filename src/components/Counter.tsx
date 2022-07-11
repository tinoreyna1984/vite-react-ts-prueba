import { useState } from "react";

export const Counter = () => {
  const valorInicial = 0;
  const [counter, setCounter] = useState(valorInicial);

  // TS - tipado estricto. En este caso no devuelve nada, pero el ingreso es un numero
  const incrementar = (numero: number = 1): void => {
    setCounter(counter + numero);
  };

  return (
    <div className="mt-5">
      <h3>useState - React + TS</h3>
      <span>Valor: {counter}</span>
      <br />
      <button
        className="btn btn-outline-light mt-2"
        onClick={() => incrementar()}
      >
        +1
      </button>
      <button
        className="btn btn-outline-light mt-2 ms-2"
        onClick={() => incrementar(2)}
      >
        +2
      </button>
      <button
        className="btn btn-outline-light mt-2 ms-2"
        onClick={() => setCounter(valorInicial)}
      >
        +Borrar
      </button>
    </div>
  );
};
