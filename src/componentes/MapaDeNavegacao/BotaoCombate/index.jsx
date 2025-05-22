import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { InimigosContext } from "../../../context/InimigosContext";

const BotaoDeInimigo = styled.button`
    display: flex;
    justify-content: center;
    box-shadow: 0.1rem 0.3rem var(--marrom-escuro-auxiliar);
    border: none;
    border-radius: 100%;
    position: absolute;
    height: 3.5rem;
    width: 7rem; 
    ${({ $derrotado }) => !$derrotado ? `     
        background-color: var(--marrom-escuro);
        cursor: pointer;
    ` : `
        background-color: var(--marrom-escuro-auxiliar);
    `}
    ${({ $id }) => $id === 1 && `
        bottom: 229.8px;
        left: 128.4px;
    ` || $id === 2 && `
        bottom: 137.8px;
        left: 229.5px;
    ` || $id === 3 && `
        bottom: 115.2px;
        left: 423.4px;
    ` || $id === 4 && `
        bottom: 259px;
        left: 473.7px;
    ` || $id === 5 && `
        bottom: 303.5px;
        left: 624.4px;
    `};
    img {
        position: relative;
        height: 7rem;
        width: auto;
        bottom: 4.8rem;
        filter: ${({ $derrotado }) => $derrotado ? `grayscale(1)` : null};
    }
    @media screen and (max-width: 570px) {
        box-shadow: 0.05rem 0.15rem var(--marrom-escuro-auxiliar);
        height: 1.5rem;
        width: 3.1rem; 
        ${({ $id }) => $id === 1 && `
            bottom: 252.1px;
            left: 46.4px;
        ` || $id === 2 && `
            bottom: 210px;
            left: 92.6px;
        ` || $id === 3 && `
            bottom: 199.2px;
            left: 182.4px;
        ` || $id === 4 && `
            bottom: 265px;
            left: 205.7px;
        ` || $id === 5 && `
            bottom: 285.5px;
            left: 275px;
        `};
        img {
            height: 3rem;
            bottom: 2rem;
        }
    }
`

export default function BotaoCombate({ inimigo }) {

    const { setInimigoEscolhido } = useContext(InimigosContext);

    const navigate = useNavigate();

    return (
        <BotaoDeInimigo $id={inimigo.id} $derrotado={inimigo.derrotado} onClick={() => { !inimigo.derrotado ? setInimigoEscolhido(inimigo) || navigate(`/combate`) : null }}>
            <img src={inimigo.imagem} alt={inimigo.alt} />
        </BotaoDeInimigo>
    )
}
