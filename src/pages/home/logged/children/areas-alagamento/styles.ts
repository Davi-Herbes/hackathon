import styled from "styled-components";

export const SAreasAlagamento = styled.div`
  animation: fadeInAnimation 1s ease;
  background: linear-gradient(to bottom, #fff, #ccf);
  padding-top: 10vh;
  height: 100vh;
  h1,
  h2 {
    text-align: center;
    width: 90%;
    height: 10vh;
  }

  h1 {
    width: 100%;
    font-size: 5vh;
    text-align: center;
  }

  h2 {
    margin: 10vh 0;
  }

  .content-container {
    img {
      border: 1px #000 solid;
      max-width: 85%;
    }

    .directions {
      position: absolute;
      max-width: 5vh;
      right: 4.2vh;
    }

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2vh;

    .niveis {
      margin-left: 10vw;
      width: 100%;
      height: 20vh;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 2vw;
      .gradient-container {
        width: 7vw;
        height: 80%;
        background: linear-gradient(
          to bottom,
          blue,
          green 25%,
          yellow 60%,
          red 85%
        );
      }
      .infos-container {
        width: 70%;

        .info-container {
          height: 5vh;
          width: 80%;
          display: flex;
          align-items: center;
          gap: 6vw;

          white-space: nowrap;
          border-bottom: 2px #000 solid;
          border-radius: 2px;
          padding: 0 2vh;

          .color {
            border-radius: 50%;
            width: 20px;
            height: 20px;
          }

          .blue {
            background: blue;
          }

          .yellow {
            background: yellow;
          }

          .red {
            background: red;
          }
        }
      }
    }
  }
`;
