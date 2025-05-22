import { styled } from 'styled-components'
import mapa from './assets/mapa.png'
import { useContext } from 'react'
import { InimigosContext } from '../../context/InimigosContext'
import BotaoCombate from './BotaoCombate'

const ContainerMapa = styled.div`
    background-image: url(${mapa});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    justify-self: center;
    position: relative;
    width: 70rem;
    height: 45rem;
    margin-top: 3rem;
    @media screen and (max-width: 570px) {
        width: 30rem;
    }
`

export default function MapaDeNavegacao() {

    const { inimigosLista } = useContext(InimigosContext);

    let ultimoInimigoDerrotado = null;

    return (
        <ContainerMapa>
            {inimigosLista.map((inimigo) => {
                if (inimigo.id === 1 || (inimigo.id - 1) === ultimoInimigoDerrotado || inimigo.derrotado) {
                    if (inimigo.derrotado) {
                        ultimoInimigoDerrotado = inimigo.id;
                    }
                    return <BotaoCombate key={inimigo.id} inimigo={inimigo} />
                }
            })}
        </ContainerMapa>
    )
}