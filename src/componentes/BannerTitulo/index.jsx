import { styled } from "styled-components"
import imagemBanner from "/banner.png"

const BannerContainer = styled.div`
  @keyframes surgindo {
    0% {top: -125vh; }
    100% {top: -35vh; }
  }
  background-image: url(${imagemBanner});
  background-size: contain;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  justify-self: center;
  align-items: center;
  background-position: center;
  height: 110vh;
  width: 100%;
  padding-top: 40vh;
  position: absolute;
  top: -35vh;
  animation: surgindo 1.5s ease-out;
  overflow: hidden;
  z-index: 4;
  @media screen and (max-width: 570px) {
    padding-top: 20vh;
  }
  h1 {
    font-size: ${(props) => props.fontSize || 7}vw;
    max-width: 68rem;
    font-weight: 700;
    text-align: center;
    color: #554935;
    @media screen and (max-width: 570px) {
    font-size: ${(props) => props.fontSize || 10}vw;
    margin-bottom: 2vh;
  }
  }
`

export default function BannerTitulo({ children, fontSize }) {
  return (
    <BannerContainer fontSize={fontSize}>
      <h1>
        {children}
      </h1>
    </BannerContainer>
  );
}