import { createContext, useContext, useState } from "react";
import personagens from '../dados/personagens'

export const PersonagensContext = createContext();

export const PersonagensProvider = ({ children }) => {

    const [personagensLista, setPersonagensLista] = useState(personagens);
    const [statusPersonagem, setStatusPersonagem] = useState("esperando");
    const [personagemEscolhido, setPersonagemEscolhido] = useState(null);
    const [personagemBotaoAtaque, setPersonagemBotaoAtaque] = useState('none');
    const [mostrarPosicaoClickPersonagem, setMostrarPosicaoClickPersonagem] = useState(false);
    const [personagemDanoComDefesa, setPersonagemDanoComDefesa] = useState(0)

    const selecionarPersonagem = (personagem) => {
        setPersonagensLista(personagensLista.map(personagemNaLista => {
            if (personagemNaLista.id === personagem.id) {
                setPersonagemEscolhido(personagemNaLista)
                return { ...personagemNaLista, selecionado: true }
            } else {
                return { ...personagemNaLista, selecionado: false }
            }
        }));
    }

    const aplicarDanoVidaPersonagem = (dano) => {
        const novoDano = Math.max(0, personagemEscolhido.id === 1 ? dano - 10 : dano);
        const novaVida = Math.max(0, personagemEscolhido.vida - novoDano);
        setPersonagemEscolhido({ ...personagemEscolhido, vida: novaVida })

        setMostrarPosicaoClickPersonagem(false);
        setPersonagemDanoComDefesa(0);
    };

    const resetPersonagem = () => {
        setPersonagemEscolhido({ ...personagemEscolhido, vida: 100 });
        setStatusPersonagem("esperando");
    }

    return (
        <PersonagensContext.Provider value={{
            personagensLista,
            selecionarPersonagem,
            personagemEscolhido,
            statusPersonagem,
            setStatusPersonagem,
            aplicarDanoVidaPersonagem,
            personagemBotaoAtaque,
            setPersonagemBotaoAtaque,
            mostrarPosicaoClickPersonagem,
            setMostrarPosicaoClickPersonagem,
            resetPersonagem,
            personagemDanoComDefesa,
            setPersonagemDanoComDefesa
        }}>
            {children}
        </PersonagensContext.Provider>
    )
}