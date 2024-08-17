import styled from "styled-components";

export const SConfirm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: fadeInAnimation 1s ease;
  gap: 4vh;
  h1 {
    margin-top: 5vh;
    width: 80%;
  }
  form {
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4vh;

    input {
      width: 95%;
      padding-left: 3vw;
      height: 7vh;
      border: solid #000 1px;
    }
    button {
      height: 7vh;
      width: 95%;
      background: #fff;
      border: 1px #000 solid;
      border-radius: 2px;
    }
  }
`;
