import { styled } from 'styled-components'
import CardPersonagem from '../../componentes/CardPersonagem'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { PersonagensContext } from '../../context/PersonagensContext'
import TituloPagina from '../../componentes/TituloPagina'
import BotaoPadrao from '../../componentes/BotaoPadrao'

const ContainerCards = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin: 3rem 12rem;
    @media screen and (max-width: 570px) {
        margin: 3rem 4rem;
        gap: 2.5rem;
    }
`
const ContainerBotao = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 8rem;
  bottom: 10vh;
  width: 100vw;
`

export default function SelecionarPersonagem() {
    const { personagensLista, selecionarPersonagem } = useContext(PersonagensContext);
    const navigate = useNavigate();
    return (
        <>
            <TituloPagina>Escolha seu Personagem</TituloPagina>
            <ContainerCards>
                {personagensLista.map((personagem) => {
                    return <CardPersonagem key={personagem.id} personagem={personagem} selecionarPersonagem={selecionarPersonagem} />;
                })}
            </ContainerCards>
            <ContainerBotao>
                <BotaoPadrao onClick={personagensLista.some(personagem => personagem.selecionado) ? () => navigate("/trilha-de-combates") : null}>
                    Ao combate!
                </BotaoPadrao>
            </ContainerBotao>
        </>
    )
}