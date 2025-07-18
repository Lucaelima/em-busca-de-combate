import { memo, useContext } from "react";
import styled from "styled-components"
import { PersonagensContext } from "../../context/PersonagensContext";
import { InimigosContext } from "../../context/InimigosContext";
import iconeDefender from '/src/componentes/AreaClick/assets/defende-icone.png';
import iconeNaoDefender from '/src/componentes/AreaClick/assets/nao-defende-icone.png'

const ContainerAreaClick = styled.button`
    background: ${(props) => props.$statusAliado === "atacando" ? 'var(--aliado-cor)' : props.$inimigoCor};
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 14vh;
    width: 14vh;
    user-select: none;
    box-shadow: 0 0 3rem 3.5rem ${(props) => props.$statusAliado === "atacando" ? 'var(--aliado-cor)' : props.$inimigoCor};
    opacity: ${(props) => (props.$disponivelClick === true ? 1 : 0.3)};
    pointer-events: ${(props) => (props.$disponivelClick === true ? 'auto' : 'none')};
    cursor: ${(props) => (props.$disponivelClick === true ? 'pointer' : 'default')};
    img {
        height: 8rem;
        width: auto;
        object-fit: contain;
        user-select: none;
    }
    @media screen and (max-width: 570px) {
        height: 9vw;
        width: 9vw;
        box-shadow: 0 0 2rem 2.5rem ${(props) => props.$statusAliado === "atacando" ? 'var(--aliado-cor)' : props.$inimigoCor};
    }
`
const iconeAreaClick = (icone) => {
    if (icone === true) {
        return (
            <img src={iconeDefender} alt="Icone defender" draggable="false" />
        );
    } else if (icone === false) {
        return (
            <img src={iconeNaoDefender} alt="Icone não defender" draggable="false" />
        );
    }
    return null;
}

function AreaClick({ icone, disponivelClick, onClick }) {

    const { personagemEscolhido, statusPersonagem } = useContext(PersonagensContext)
    const { inimigoEscolhido } = useContext(InimigosContext)

    return (
        <ContainerAreaClick $statusAliado={statusPersonagem}
            $inimigoCor={inimigoEscolhido.cor}
            $disponivelClick={disponivelClick}
            onClick={onClick}
        >
            {statusPersonagem === "atacando" ? (
                <img src={personagemEscolhido.clickAtaque} alt="Icone ataque" draggable="false" />
            ) : (
                iconeAreaClick(icone)
            )}
        </ContainerAreaClick>
    )
}

export default memo(AreaClick);