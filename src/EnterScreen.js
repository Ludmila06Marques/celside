import styled from "styled-components";
import excellece from "../src/img/cupaode150.png";
import tablet from "../src/img/PDStablet.png";
import bb from "../src/img/cupaoBB.png";
import PP from "../src/img/rbsPP+.png";
import tlf from "../src/img/pdsTLF.png";
import { useNavigate, Link } from "react-router-dom";

export default function EnterScreen({ setNome, nome }) {
  const navigate = useNavigate();

  function goBack() {
    navigate("/");
  }
  const primeira = nome.charAt(0);
  const primeiraGrande = primeira.toUpperCase();
  const nomePeq = nome.substr(1);
  const Junto = primeiraGrande + nomePeq;

  return (
    <>
      <Container>
        <NavBar>
          <ion-icon
            onClick={goBack}
            name="arrow-undo-circle-outline"
          ></ion-icon>
          <h1>Bem vind@ , {Junto}</h1>
        </NavBar>

        <ButtonBaixar>
          <a href={excellece} target="_blank" download>
            <h1>Oferta de fidelidade EXCELLENCE</h1>
          </a>
        </ButtonBaixar>

        <ButtonBaixar>
          <a href={tablet} target="_blank">
            <h1>Tablet</h1>
          </a>
        </ButtonBaixar>
        <ButtonBaixar>
          <a href={tlf} target="_blank">
            <h1>Telemóvel</h1>
          </a>
        </ButtonBaixar>
        <ButtonBaixar>
          <a href={PP} target="_blank">
            <h1>Oferta de fidelidade PP+</h1>
          </a>
        </ButtonBaixar>
        <ButtonBaixar>
          <a href={bb} target="_blank">
            <h1>BUY BACK</h1>
          </a>
        </ButtonBaixar>
      </Container>
    </>
  );
}

const ButtonBaixar = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  height: 47px;
  margin-top: 50px;
  border-radius: 8px;
  border: 1px solid rgb(2, 3, 129);
  background-color: rgb(2, 3, 129, 0.82);
  h1 {
    font-size: 20px;
    color: #ffffff;
  }
  :hover {
    cursor: pointer;
  }
  a {
    text-decoration: none;
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const NavBar = styled.div`
  z-index: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(2, 3, 129);
  width: 100%;
  height: 60px;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  h1 {
    font-size: 28px;
    color: #ffffff;
  }
  ion-icon {
    position: fixed;
    left: 20px;

    color: white;
    font-size: 30px;
  }
`;
