import styled from "styled-components";

export const SAfetados = styled.div`
  animation: fadeInAnimation 1s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5vh;

  h1 {
    width: 80%;
    font-size: 30px;
  }

  .silva {
    border: solid 3px red;
  }

  .list-container {
    height: 50vh;
    width: 80%;
    margin-top: 8vh;
    ul {
      list-style: none;
      li {
        display: flex;
        height: 80px;
        align-items: center;
        gap: 20px;
        img {
          height: 70px;
        }
        .dados-afetado {
          display: flex;
          text-decoration: none;
          color: #000;
          height: 70px;
          flex-direction: column;
          justify-content: center;
          .nome-afetado {
            height: 30px;
            font-size: 17px;
          }
          .numero-afetado {
            font-size: 17px;
            height: 30px;
            font-weight: 500;
          }
        }
      }
    }
  }
`;
