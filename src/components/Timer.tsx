import { useState, useEffect, useRef } from "react";

/**
 * Aquí se usan los hooks useEffect y useRef, junto con
 * el manejo de los custom props.
 */

// custom props
type TimerArgs = {
  milisegundos: number;
};

export const Timer = ({ milisegundos }: TimerArgs) => { // aquí uso el custom props, y lo desestructuro
  const [segundos, setSegundos] = useState(0);
  const ref = useRef<NodeJS.Timeout>(); // NOTA: para Vite seguramente hay que instalar @types/node

  useEffect(() => {
    ref.current && clearInterval(ref.current);
    ref.current = setInterval(() => {
      setSegundos((s) => s + 1);
    }, milisegundos);
  }, [milisegundos]);

  return (
    <>
      <h4>
        Timer: <small>{segundos}</small>
      </h4>
    </>
  );
};
