import { ContadorRed } from './components/ContadorRed';
import { Counter } from './components/Counter';
import { Formulario } from './components/Formulario';
import { TimerPadre } from './components/TimerPadre';
import { Usuario } from './components/Usuario';

function App() {

  return (
    <>
      <h1>Hola mundo -TS</h1>
      <hr/>
      <Counter />
      <hr/>
      <Usuario />
      <hr/>
      <h3>useEffect + useRef</h3>
      <TimerPadre />
      <hr/>
      <h2>useReducer</h2>
      <ContadorRed />
      <hr/>
      <h2>Custom Hook</h2>
      <br/>
      <Formulario />
    </>
  )
}

export default App
