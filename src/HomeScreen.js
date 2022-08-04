import styled from "styled-components";
import celside from "../src/img/celside.png";
import { useNavigate } from "react-router-dom";

export default function HomeScreen({ setNome, nome }) {
  const navigate = useNavigate();

  function verifica() {
    if (nome !== "") {
      navigate("/cupao");
    } else {
      alert("Digite seu nome");
    }
  }

  return (
    <>
      <Container>
        <Foto>
          <img src={celside}></img>
        </Foto>

        <InputNome
          placeholder="Digite seu nome"
          onChange={(e) => setNome(e.target.value)}
        />
        <Entrar onClick={verifica}>Entrar</Entrar>
      </Container>
    </>
  );
}

const Entrar = styled.button`
  margin-top: 10px;
  width: 300px;
  height: 52px;
  background-color: lightgray;
  border-radius: 8px;
  border: 1px solid lightgray;
  color: rgb(2, 3, 129, 0.82);
  font-size: 18px;
  font-weight: bold;
`;
const InputNome = styled.input`
margin-top: 10px;
  text-align: center;
  width: 300px;
  height: 52px;
  background-color: #ffffff;
  border-radius: 8px;
  border: 1px solid rgb(2, 3, 129, 0.82);
`;
const Foto = styled.div`
  img {
    width: 300px;
    height: auto;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: rgb(2, 3, 129, 0.82);
`;
