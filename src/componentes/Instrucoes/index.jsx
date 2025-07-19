import { useContext, useEffect, useRef, useState } from "react";
import styled from "styled-components"
import { PersonagensContext } from "../../context/PersonagensContext";
import { InimigosContext } from "../../context/InimigosContext";
import iconeFechar from '/src/componentes/Instrucoes/assets/icone-fechar.png';
import iconeDefender from '/src/componentes/AreaClick/assets/defende-icone.png';
import iconeNaoDefender from '/src/componentes/AreaClick/assets/nao-defende-icone.png';

const ModalInstrucoes = styled.dialog`
    background-color: var(--fundo-secundario);
    border: 0.5rem solid var(--verde);
    border-radius: 1rem;
    display: flex;
    justify-self: center;
    flex-direction: column;
    top: 20vh;
    max-height: 75vh;
    max-width: 50rem;
    margin: 0.5rem;
    position: fixed;
    padding: 0.5rem;
    z-index: 4;
    h3 {
        margin: 2rem 2rem 0;
        color: var(--marrom-escuro);
        font-size: 3rem;
    }
    div {
        display: flex;
        align-items: center;
        flex-direction: row;
        font-size: 1.5rem;
        margin: 2rem;
        img {
            height: 6rem;
            width: 6rem;
            margin-left: 2rem;
        }
    }
    &::backdrop {
        background-color: rgba(255, 255, 255, 0.5);
    }
    @media screen and (max-width: 570px) {
        max-width: 85vw;
    } 
`

const BotaoFechar = styled.button`
    background-color: var(--marrom-escuro-auxiliar);
    border-radius: 100%;
    display: flex;
    align-self: flex-end;
    align-items: center;
    justify-content: center;
    min-height: 4rem;
    min-width: 4rem;
    cursor: pointer;
    &:hover {
        background-color: var(--marrom-escuro);
    }
    img {
        height: 3rem;
        width: 3rem;
    }
`

export default function Instrucoes() {
    const { personagemEscolhido } = useContext(PersonagensContext);
    const { inimigoEscolhido } = useContext(InimigosContext);

    const [dialogAberto, setdialogAberto] = useState(true);

    const dialogRef = useRef(null);

    const fecharDialog = () => {
        setdialogAberto(false);
    };

    useEffect(() => {
        dialogRef.current.showModal();
    }, []);

    return (
        dialogAberto && (
            <ModalInstrucoes ref={dialogRef} onClick={fecharDialog}>
                <BotaoFechar onClick={fecharDialog}><img src={iconeFechar} alt="X"></img></BotaoFechar>
                {inimigoEscolhido.id === 1 && (
                    <>
                        <h3>Ataque</h3>
                        <div>
                            Para atacar o inimigo aperte no icone de ataque quando ele estiver claro na tela.
                            <img src={personagemEscolhido.clickAtaque} alt="Icone de ataque" />
                        </div>
                        <h3>Defesa</h3>
                        <div>
                            Para defender o dano doinimigo aperte no icone de defesa quando ele estiver claro na tela.
                            <img src={iconeDefender} alt="Icone de defesa" />
                        </div>
                    </>
                )}
                {inimigoEscolhido.id === 3 && (
                    <>
                        <h3>Defesa Errada</h3>
                        <div>
                            Se for apertado no icone de defesa errado quando ele estiver claro na tela, receberá mais dano.
                            <img src={iconeNaoDefender} alt="Icone errado de defesa" />
                        </div>
                    </>
                )}
            </ModalInstrucoes>
        )
    )
}