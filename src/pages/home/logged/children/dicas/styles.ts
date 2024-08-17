import styled from "styled-components";

export const SDicas = styled.div`
  display: flex;
  flex-direction: column;
  animation: fadeInAnimation 1s ease;
  padding: 0 10vw;
  background: linear-gradient(to bottom, #fff, #ccf);

  h1 {
    margin-top: 2.5vh;
    margin-bottom: 2.5vh;
  }
  .dicas {
    h2 {
      margin-bottom: 2.5vh;
    }
    width: 100%;
    .topico {
      margin-bottom: 2.5vh;
      ul {
        display: flex;
        flex-direction: column;
        gap: 1vh;
        li {
          list-style: "-";
          font-size: 2.5vh;
          font-weight: 400;
        }
      }
    }
  }
`;
