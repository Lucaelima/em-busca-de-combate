import { createContext, useContext, useEffect, useRef, useState } from "react";
import { PersonagensContext } from "./PersonagensContext";
import { InimigosContext } from "./InimigosContext";
import { DadosCombatesContext } from "./DadosCombatesContext";

export const AreaClickDefenderContext = createContext();

export const AreaClickDefenderProvider = ({ children }) => {

    const { somaClickDefenderInimigo, somaClickNaoDefenderInimigo } = useContext(DadosCombatesContext);
    const { inimigoEscolhido, setStatusInimigo } = useContext(InimigosContext)
    const { personagemEscolhido, aplicarDanoVidaPersonagem, setPersonagemBotaoAtaque, setPersonagemDanoComDefesa } = useContext(PersonagensContext)
    const [disponivelClickDefender, setDisponivelClickDefender] = useState(false);
    const [displayClickDefender, setDisplayClickDefender] = useState("none");
    const [danoDefendido, setDanoDefendido] = useState(0);
    const [danoNaoDefendido, setDanoNaoDefendido] = useState(0);
    const [danoeEvitado, setDanoEvitado] = useState(false);

    const inimigoDano = inimigoEscolhido?.dano || 0;

    const danoDefendidoRef = useRef(0);
    const danoNaoDefendidoRef = useRef(0);
    const danoDanoComDefesaRef = useRef(inimigoDano);

    useEffect(() => {
        const novoDanoComDefesa = Math.max(0, (inimigoDano + danoNaoDefendido) - Math.max(0, danoDefendido));
        danoDanoComDefesaRef.current = novoDanoComDefesa;
    }, [danoDefendido, danoNaoDefendido, inimigoDano]);

    const clickDefesaExecutado = (defender) => {
        if (disponivelClickDefender === true) {
            setDisponivelClickDefender(false);
            if (defender === true) {
                setDanoDefendido((prevDanoDefendido) => {
                    const novoDanoDefendido = prevDanoDefendido + 10;
                    danoDefendidoRef.current = novoDanoDefendido;
                    return novoDanoDefendido
                });
            } else if (defender === false) {
                setDanoNaoDefendido((prevDanoNaoDefendido) => {
                    const novoDanoNaoDefendido = prevDanoNaoDefendido + 10;
                    danoNaoDefendidoRef.current = novoDanoNaoDefendido;
                    return novoDanoNaoDefendido
                });
            }
        }
    };

    const executarDefesa = () => {
        const chanceDeDesvio = Math.floor(Math.random() * 4);
        setDisponivelClickDefender(false);
        setDisplayClickDefender("none");
        somaClickDefenderInimigo(danoDefendidoRef.current, inimigoDano);
        somaClickNaoDefenderInimigo(danoNaoDefendidoRef.current);
        if (personagemEscolhido.id === 2 && chanceDeDesvio === 3) {
            setDanoEvitado(true);
            danoDanoComDefesaRef.current = 0;
        } else {
            setPersonagemDanoComDefesa(danoDanoComDefesaRef.current);
        }
        setStatusInimigo("esperando");
        setTimeout(() => {
            aplicarDanoVidaPersonagem(danoDanoComDefesaRef.current);
            setDanoDefendido(0);
            danoDefendidoRef.current = 0;
            setDanoNaoDefendido(0);
            danoNaoDefendidoRef.current = 0;
            setPersonagemBotaoAtaque("flex");
            setDanoEvitado(false);
        }, 500)
    }

    return (
        <AreaClickDefenderContext.Provider value={{
            disponivelClickDefender,
            setDisponivelClickDefender,
            displayClickDefender,
            setDisplayClickDefender,
            clickDefesaExecutado,
            executarDefesa,
            danoeEvitado
        }}>
            {children}
        </AreaClickDefenderContext.Provider>
    )
}