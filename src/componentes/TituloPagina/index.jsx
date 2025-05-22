import { styled } from 'styled-components'

const TituloEstilizado = styled.h2`
    text-align: center;
    font-size: 3rem;
    color: var(--marrom-escuro);
    padding-top: 3rem;
`

export default function TituloPagina({ children }) {
    return (
        <TituloEstilizado>
            {children}
        </TituloEstilizado>
    )
}