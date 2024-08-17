import styled from "styled-components";

export const SContatos = styled.div`
  height: 100vh;
  text-align: center;
  background: linear-gradient(to bottom, #fff, #ccf);
  animation: fadeInAnimation 1s forwards;
  h1 {
    height: 15vh;
  }

  .contacts-container {
    height: 85vh;
    padding-top: 5vh;
    .contacts {
      height: 50vh;
      width: 100%;
      display: grid;
      padding: 4vh;
      justify-content: center;
      grid-template-rows: repeat(4, 1fr);
      grid-template-columns: 1fr 1fr;
      gap: 1vh;
      .grid-element {
        font-size: 20px;
        font-weight: 400;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .num {
        text-decoration: underline;
      }
    }
  }
`;
