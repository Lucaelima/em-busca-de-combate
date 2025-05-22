import { Route, Routes } from "react-router-dom";
import Inicial from "../paginas/Inicial";
import SelecionarPersonagem from "../paginas/SelecionarPersonagem";
import TrilhaDeCombates from "../paginas/TrilhaDeCombates";
import Combate from "../paginas/Combate";
import Final from "../paginas/Final";

export default function Rotas() {
    return (
        <Routes>
            <Route path="/" element={<Inicial />} />
            <Route path="selecionar-personagem" element={<SelecionarPersonagem />} />
            <Route path="trilha-de-combates" element={<TrilhaDeCombates />} />
            <Route path="combate" element={<Combate />} />
            <Route path="final" element={<Final />} />
        </Routes>
    )
}