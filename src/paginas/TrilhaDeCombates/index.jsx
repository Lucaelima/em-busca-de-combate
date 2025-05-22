import { useContext, useEffect } from 'react';
import MapaDeNavegacao from '../../componentes/MapaDeNavegacao'
import TituloPagina from '../../componentes/TituloPagina'
import { InimigosContext } from '../../context/InimigosContext';

export default function TrilhaDeCombates() {

    const { setStatusInimigo } = useContext(InimigosContext);

    useEffect(() => {
        setStatusInimigo("esperando");
    }, []);

    return (
        <>
            <TituloPagina>Trilha de Combates</TituloPagina>
            <MapaDeNavegacao />
        </>
    )
}