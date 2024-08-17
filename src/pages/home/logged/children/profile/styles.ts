import styled from "styled-components";

export const SProfile = styled.div`
  animation: fadeInAnimation 1s ease;
  height: 100vh;
  background: linear-gradient(to bottom, #fff, #ccf);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3vh;
  .user-img {
    img {
      max-height: 100px;
    }
  }
  .user-data {
    width: 80%;
    height: 20vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2vh;
    div {
      font-size: 20px;
      font-weight: 500;
    }
  }
  label {
    display: flex;
    width: 80%;
    flex-direction: column;
    input {
      height: 5vh;
      padding-left: 3vw;
      width: 90%;
      border: 1px solid #000;
    }
    button {
      border: 1px solid #000;
      background: #fff;
    }
  }
`;
