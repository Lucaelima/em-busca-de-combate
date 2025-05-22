import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { InimigosContext } from "../../../../context/InimigosContext";
import { PersonagensContext } from "../../../../context/PersonagensContext";

const AnimacaoContainer = styled.div`  
    display: flex;
    justify-content: center;
    align-items: center;
    height: 10rem;
    width: 20rem;
    position: absolute;
    top: 30vh;
    left: 0;
    z-index: 2;
    @media screen and (max-width: 570px) {
        height: 10rem;
        top: 30vh;
        left: -71vw;
    }
`

const AnimacaoPaticulaAtaque = styled.div`
    @keyframes explode {
        0% {
            transform: translate(20rem, 20rem);
            opacity: 1;
         }
        100% {
            transform: translate(var(--x), var(--y));
            opacity: 0;
        }
    }
    position: absolute;
    width: ${(props) => props.$quantidadeDano}rem;
    height: ${(props) => props.$quantidadeDano}rem;
    background: ${(props) => props.$inimigo.cor};
    border-radius: 50%;
    animation: explode 1.5s ease-out forwards;
`;

export default function AnimacaoAtaqueInimigo() {

    const { inimigoEscolhido } = useContext(InimigosContext);
    const { personagemDanoComDefesa } = useContext(PersonagensContext);

    const [particulas, setParticulas] = useState([]);

    const efeitoAudio = new Audio(inimigoEscolhido.audio);

    useEffect(() => {
        const gerarParticulas = Array.from({ length: 50 }, () => ({
            x: `${Math.random() * 40}rem`,
            y: `${Math.random() * 40}rem`
        }));
        setParticulas(gerarParticulas);

        efeitoAudio.play();

        const timeout = setTimeout(() => setParticulas([]), inimigoEscolhido.tempoClick * 1000);
        return () => clearTimeout(timeout);
    }, []);


    return (
        <AnimacaoContainer>
            {particulas.map((particula, index) => (
                <AnimacaoPaticulaAtaque
                    key={index}
                    style={{
                        "--x": particula.x,
                        "--y": particula.y,
                    }}
                    $inimigo={inimigoEscolhido}
                    $quantidadeDano={personagemDanoComDefesa * 0.1}
                />
            ))}
        </AnimacaoContainer>
    )
}