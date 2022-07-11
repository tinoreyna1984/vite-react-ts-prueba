import { useReducer } from "react";

/**
 * Uso del useReducer y todo lo referente a cambios de estado esenciales
 */

const initialState = {
  contador: 10,
};

// tipo de acción que se puede emitir (action.type)
// tipado obligatorio para el payload
type ActionType =
  | { type: "incrementar" }
  | { type: "decrementar" }
  | { type: "custom"; payload: number };

// notar que se usa el tipado de acciones
const contadorReducer = (state: typeof initialState, action: ActionType) => {
  switch (action.type) {
    case "incrementar":
      return {
        ...state,
        contador: state.contador + 1,
      };

    case "decrementar":
      return {
        ...state,
        contador: state.contador - 1,
      };

    case "custom":
      return {
        ...state,
        contador: action.payload,
      };

    default:
      return state;
  }
};

export const ContadorRed = () => {

  //const [ contadorState, dispatch] = useReducer(contadorReducer, initialState);
  const [{ contador }, dispatch] = useReducer(contadorReducer, initialState);

  return (
    <>
      <h2>Contador: {contador}</h2>
      <button
        className="btn btn-outline-primary mt-1 mb-4 me-2"
        onClick={() => dispatch({ type: "incrementar" })}
      >
        +1
      </button>
      <button
        className="btn btn-outline-primary mt-1 mb-4 me-2"
        onClick={() => dispatch({ type: "decrementar" })}
      >
        -1
      </button>

      <button
        className="btn btn-outline-danger mt-1 mb-4"
        onClick={() => dispatch({ type: "custom", payload: 100 })}
      >
        100
      </button>
    </>
  );
};
