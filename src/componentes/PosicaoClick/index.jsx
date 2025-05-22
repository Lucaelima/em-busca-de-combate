import { memo } from "react";
import styled from "styled-components";

const PosicaoClick = styled.div`
    @keyframes movimentoAreClick {
        ${(props) => props.$animacaoClick || ''}
    }
    display: ${(props) => props.$displayClick};
    position: absolute;
    top: ${(props) => props.$top ? props.$top : 0}vh;
    left: ${(props) => props.$left ? props.$left : 0}vw;
    transition: ${(props) => props.$aliado ? "top 0.5s ease-out, left 0.5s ease-out" : null};
    z-index: 3;
    animation: movimentoAreClick ${(props) => props.$tempoClick}s linear forwards; 
`

export default memo(PosicaoClick);