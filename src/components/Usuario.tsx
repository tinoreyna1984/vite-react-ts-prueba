import { useState } from "react";

// Tipado abstracto de TS - interface
interface User {
  uid: string;
  name: string;
}

export const Usuario = () => {
  const [user, setUser] = useState<User>(); // la interfaz aplica aqui

  const login = () => {
    setUser({
      uid: "123456",
      name: "Tino",
    });
  };

  return (
    <div className="mt-3">
      <h3>Usuario: useState</h3>
      <button className="btn btn-outline-primary" onClick={login}>
        Login
      </button>
      {
        (!user)
        ? <pre className="mt-1">Presione Login</pre>
        : <pre className="mt-1">{JSON.stringify(user)}</pre>
      }
    </div>
  );
};
