import React from "react";
import { Timer } from "./Timer";
import { useState } from "react";

/**
 * Uso del useEffect y useRef
 */

export const TimerPadre = () => {
  const [milisegundos, setMilisegundos] = useState(1000);

  return (
    <>
      <span>Milisegundos: {milisegundos}</span>
      <br />
      <button
        className="btn btn-primary me-2 mt-1 mb-1"
        onClick={() => setMilisegundos(1000)}
      >
        1000
      </button>
      <button
        className="btn btn-success mt-1 mb-1"
        onClick={() => setMilisegundos(2000)}
      >
        2000
      </button>
      <Timer milisegundos={milisegundos} />
    </>
  );
};
