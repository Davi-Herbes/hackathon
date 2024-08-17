import styled, { css } from "styled-components";
import { ThemeType } from "../../../../../styles/types/theme-type";

export const SStatus = styled.div<{ theme: ThemeType }>`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    background: linear-gradient(to bottom, #fff, #ccf);
    align-items: center;
    animation: fadeInAnimation 1s forwards;
    height: 100vh;
    h1 {
      width: 80%;
      margin-bottom: 5vh;
    }
    form {
      width: 80%;
      height: 50vh;
      display: flex;
      flex-direction: column;
      gap: 2vh;
      .urgence {
        display: flex;
        align-items: center;
        gap: 2vw;
        #urgence {
          height: 5vh;
          border: 1px solid #000;
          width: 5vh;
        }
      }
      .description {
        display: flex;
        flex-direction: column;
        gap: 1vh;

        #description {
          border: 1px solid #000;
          height: 20vh;
          padding-left: 3vw;
          padding-top: 2vw;
          font-weight: 500;
          font-size: 15px;
        }
      }
      button {
        height: 10vh;
        margin-top: 4vh;
        font-size: 25px;
        background: #fff;
        box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.2);
        font-family: ${theme.font.family.secondary};
        border: none;
      }
    }
    .submited {
      font-size: 17px;
      width: 80%;
    }
  `}
`;
