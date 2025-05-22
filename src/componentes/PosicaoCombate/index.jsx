import styled from "styled-components"

const ContainerFigura = styled.div`
        background-color: var(--fundo-secundario);
        border-radius: 100%;
        display: flex;
        justify-content: center;
        height: 13vh;
        width: 30vw;
        margin: 0 4vw;
        box-shadow: 0 0 2rem 1rem var(--fundo-secundario);
        user-select: none;
        @media screen and (max-width: 570px) {
            height: 6vh;
            width: 35vw;
        }
`

const ImagemPersonagem = styled.img`
    position: absolute;
    z-index: 1;
    user-select: none;
    height: ${(props) => props.$height};
    bottom: ${(props) => props.$bottom};
    left: ${(props) => props.$left || "auto"};

    @media screen and (max-width: 570px) {
        height: ${(props) => props.$heightMobile || props.$height};
        bottom: ${(props) => props.$bottomMobile || props.$bottom};
        left: ${(props) => props.$leftMobile || props.$left || "auto"};
    }
`;

const posicaoImagem = (personagem, status) => {
    if (status === "atacando") {
        if (personagem.nome === "Hornet") {
            return {
                height: '60vh',
                bottom: '12vh',
                heightMobile: '23vh',
                bottomMobile: '22vh'
            }
        }
        if (personagem.nome === "Kirby") {
            return {
                height: '45vh',
                bottom: '9vh',
                heightMobile: '15vh',
                bottomMobile: '22vh',
                leftMobile: '1vw',
            }
        }
        if (personagem.nome === "Megaman") {
            return {
                height: '50vh',
                bottom: '10vh',
                left: '10vw',
                heightMobile: '15vh',
                bottomMobile: '22.5vh',
                leftMobile: '13vw',
            }
        }
        if (personagem.nome === "Black Mage") {
            return {
                height: '28vh',
                bottom: '28vh',
                heightMobile: '10vh',
                bottomMobile: '30vh'
            }
        }
        if (personagem.nome === "Pinguim") {
            return {
                height: '38vh',
                bottom: '18vh',
                heightMobile: '15vh',
                bottomMobile: '25vh'
            }
        }
        if (personagem.nome === "Ovelha") {
            return {
                height: '38vh',
                bottom: '22vh',
                heightMobile: '10vh',
                bottomMobile: '28vh'
            }
        }
        if (personagem.nome === "Lula Molusco") {
            return {
                height: '35vh',
                bottom: '30vh',
                heightMobile: '12vh',
                bottomMobile: '30vh',
            }
        }
    } else if (status === "esperando") {
        if (personagem.nome === "Hornet") {
            return {
                height: '60vh',
                bottom: '9vh',
                heightMobile: '23vh',
                bottomMobile: '21vh'
            }
        }
        if (personagem.nome === "Kirby") {
            return {
                height: '36vh',
                bottom: '18vh',
                left: '7vw',
                heightMobile: '13vh',
                bottomMobile: '24vh',
                leftMobile: '4vw',
            }
        }
        if (personagem.nome === "Megaman") {
            return {
                height: '35vh',
                bottom: '13vh',
                heightMobile: '10vh',
                bottomMobile: '23.5vh',
            }
        }
        if (personagem.nome === "Black Mage") {
            return {
                height: '40vh',
                bottom: '22vh',
                heightMobile: '15vh',
                bottomMobile: '28vh',
            }
        }
        if (personagem.nome === "Pinguim") {
            return {
                height: '38vh',
                bottom: '18vh',
                heightMobile: '15vh',
                bottomMobile: '25vh'
            }
        }
        if (personagem.nome === "Ovelha") {
            return {
                height: '30vh',
                bottom: '24vh',
                heightMobile: '9vh',
                bottomMobile: '28.5vh',
            }
        }
        if (personagem.nome === "Lula Molusco") {
            return {
                height: '38vh',
                bottom: '26vh',
                heightMobile: '14vh',
                bottomMobile: '28.5vh'
            }
        }
        if (personagem.nome === "Tails") {
            return {
                height: '30vh',
                bottom: '29vh',
                heightMobile: '10vh',
                bottomMobile: '30vh'
            }
        }
    } else if (status === "derrota") {
        if (personagem.nome === "Hornet") {
            return {
                height: '32vh',
                bottom: '15vh',
                heightMobile: '11vh',
                bottomMobile: '23vh'
            }
        }
        if (personagem.nome === "Kirby") {
            return {
                height: '25vh',
                bottom: '12vh',
                heightMobile: '10vh',
                bottomMobile: '22vh',
            }
        }
        if (personagem.nome === "Megaman") {
            return {
                height: '35vh',
                bottom: '6vh',
                heightMobile: '9vh',
                bottomMobile: '21vh',
            }
        }
        if (personagem.nome === "Black Mage") {
            return {
                height: '35vh',
                bottom: '23vh',
                heightMobile: '12vh',
                bottomMobile: '28vh',
            }
        }
        if (personagem.nome === "Pinguim") {
            return {
                height: '30vh',
                bottom: '20vh',
                heightMobile: '9vh',
                bottomMobile: '27vh'
            }
        }
        if (personagem.nome === "Ovelha") {
            return {
                height: '30vh',
                bottom: '24vh',
                heightMobile: '9vh',
                bottomMobile: '28.5vh',
            }
        }
        if (personagem.nome === "Lula Molusco") {
            return {
                height: '40vh',
                bottom: '26vh',
                heightMobile: '14vh',
                bottomMobile: '28.5vh'
            }
        }
        if (personagem.nome === "Tails") {
            return {
                height: '27vh',
                bottom: '25vh',
                heightMobile: '8vh',
                bottomMobile: '28.5vh'
            }
        }
    }
}

export default function PosicaoCombate({ personagem, status }) {
    const estiloImagem = posicaoImagem(personagem, status);

    return (
        <ContainerFigura>
            {personagem.nome === "Tails" && status === "atacando" ?
                null :
                <ImagemPersonagem src={personagem[status]} alt={personagem.alt} $height={estiloImagem.height} $heightMobile={estiloImagem.heightMobile} $bottom={estiloImagem.bottom} $bottomMobile={estiloImagem.bottomMobile} $left={estiloImagem.left} $leftMobile={estiloImagem.leftMobile} draggable="false" />
            }
        </ContainerFigura>
    )
}