import { useForm } from "../hooks/useForm";
import { FormData } from "./FormData";

export const Formulario = () => {
  const {email, nombre, edad, formulario, handleChange} = useForm<FormData>({
    email: '',
    nombre: '',
    edad: 0
  });

  return (
    <form autoComplete="off">
      <div className="mb-3">
        <label className="form-label">Email: </label>
        <input
          type="email"
          className="form-control"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Nombre: </label>
        <input
          type="text"
          className="form-control"
          name="nombre"
          placeholder="Nombre"
          value={nombre}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Edad: </label>
        <input
          type="number"
          className="form-control"
          name="edad"
          placeholder="Edad"
          value={edad}
          onChange={handleChange}
        />
      </div>
      <pre>{JSON.stringify(formulario)}</pre>
    </form>
  );
};
