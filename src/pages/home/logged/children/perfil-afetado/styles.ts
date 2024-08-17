import styled from "styled-components";

export const SPerfilAfetado = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: fadeInAnimation 1s forwards;
  h1,
  div {
    width: 80%;
  }
  h1 {
    margin-bottom: 2vh;
  }

  div {
    font-weight: 400;
    margin-bottom: 1vh;
  }
  img {
    height: 80px;
    margin: 2vh 0;
  }
`;
