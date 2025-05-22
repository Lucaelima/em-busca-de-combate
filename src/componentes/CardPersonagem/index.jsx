import { styled } from "styled-components"

const Card = styled.div`
    background-color: var(--fundo-secundario);
    border-radius: 1rem;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    border: 0.5rem solid ${(props) => props.$selecionado === true ? 'var(--verde)' : 'var(--marrom-escuro)'};
    width: 20vw;
    padding: 1rem;
    box-shadow: ${(props) => props.$selecionado ? '0 0 2rem 2rem var(--verde)' : 'none'};
    cursor: pointer;
    @media screen and (max-width: 570px) {
        width: 70vw;    
    }
    img {
        width: 9rem;
        height: 9rem;
        background-color: ${(props) => props.$selecionado === true ? 'var(--verde)' : 'var(--marrom-escuro)'};
        border: 0.1rem solid var(--verde);
        border-radius: 1rem;
        align-self: center;
    }
    h2 {
        margin: 0.5rem 0 0 0;
        font-size: 2rem;
        color: ${(props) => props.$selecionado === true ? 'var(--verde)' : 'var(--marrom-escuro)'};
        align-self: center;
    }
    h3 {
        margin: 0.6rem 0 0 0;
        font-size: 1.5rem;
        color: var(--marrom-escuro);
    }
    p {
        margin: 0.5rem 0;
        font-size: 1.2rem;
    }
`

export default function CardPersonagem({ personagem, selecionarPersonagem }) {
    return (
        <Card $selecionado={personagem.selecionado} onClick={() => selecionarPersonagem(personagem)}>
            <img src={personagem.imagem} alt={personagem.alt} />
            <h2>{personagem.nome}</h2>
            <h3>Descrição:</h3>
            <p>{personagem.descricao}</p>
            <h3>Habilidade:</h3>
            <p>{personagem.habilidade}</p>
        </Card>
    )
}   