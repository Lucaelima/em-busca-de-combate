import { BrowserRouter } from "react-router-dom";
import EstilosGlobais from "./componentes/EstilosGlobais";
import Rotas from "./rotas/Rotas";

export default function App() {
  return (
    <>
      <EstilosGlobais />
      <BrowserRouter>
        <Rotas />
      </BrowserRouter>
    </>
  );
}