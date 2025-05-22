import styled from "styled-components";

const ContainerAnimacao = styled.div`
    @keyframes subindo {
        0% {
            transform: translateY(0);
            display: flex;
        }
        100% {
            transform: translateY(-30vh);
            display: none;
        }
    }
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 70vh;
    left: 13vw;
    z-index: 2;
    animation: subindo 1s linear forwards;
    p {
        font-size: 5rem;
        font-weight: 900;
        text-shadow: 3px 3px 2px rgba(255, 255, 255, 0.5);
    }
    @media screen and (max-width: 570px) {
        top: 75vh;
        left:  10vw;
        p {
            font-size: 2rem;
        }
    }
`

export default function AnimacaoDesviokirby() {
    return (
        <ContainerAnimacao>
            <p>Desviou</p>
        </ContainerAnimacao>
    )
}