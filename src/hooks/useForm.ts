import { ChangeEvent, useState } from "react";

// T se emplea para referenciar una interfaz definida
// en el tipo de dato del objeto JSX
export const useForm = <T extends Object>(initState: T) => {
  const [formulario, setFormulario] = useState(initState);

  // siempre es recomendado desestructurar el evento
  //const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setFormulario({
      ...formulario,
      [name]: value,
    });
  };

  return { formulario, handleChange, ...formulario };
};
