import { createGlobalStyle } from "styled-components"

const colorido = "linear-gradient(90deg, #FF0000, #FF7F00, #FFFF00, #00FF00, #0000FF, #4B0082, #9400D3)";

const EstilosGlobais = createGlobalStyle`

:root {
  --fundo-primario: #e7d4b5;
  --fundo-secundario: #a0937d;
  --marrom-escuro: #554935;
  --marrom-escuro-auxiliar: #332c21;
  --verde: #B6C7AA;
  --texto: #F6E6CB;

  --aliado-cor: #ffffff;
  --black-mage-cor: #101010;
  --pinguim-cor: #4998ff;
  --ovelha-cor: ${colorido};
  --lula-molusco-cor: #ff83ee;
  --tails-cor: #ffd54b;
  
  --fonte-base: "Philosopher", sans-serif;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body, dialog {
  width: 100%;
  height: 100%;
  line-height: 1.6;
  background-color: var(--fundo-primario);
  font-family: var(--fonte-base);
  color: var(--texto);
}

ul, ol {
  list-style: none;
}

a {
  text-decoration: none;
  color: inherit;
}

button, input, textarea, select {
  font: inherit;
  border: none;
  background: none;
  outline: none;
}

img {
  max-width: 100%;
  height: auto;
}
`

export default EstilosGlobais