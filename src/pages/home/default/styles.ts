import styled from "styled-components";
import { ThemeType } from "../../../styles/types/theme-type";

export const SDefault = styled.div<{ theme: ThemeType }>`
  animation: fadeInAnimation 1s ease;
  .logo-container {
    height: 50vh;
    width: 100%;
    img {
      width: 100%;
      padding: 1vh;
    }
    span {
      font-weight: 500;
    }

    text-align: center;
  }

  .sign-user-container {
    margin-top: 5vh;
    min-height: 50vh;
    form {
      margin-top: 10vh;
      text-align: center;
      height: 80%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;

      h1 {
        width: 80%;
        font-size: 3vh;
      }

      .field-container {
        width: 80%;

        label {
          width: 100%;
          height: 4vh;
        }
        input {
          width: 100%;
          height: 6vh;
          border: 1px solid #000;
          border-radius: 2px;
          padding-left: 2vw;
          margin-bottom: 5vh;
        }
        input:focus {
          border: 1.5px solid #000;
          transform: scale(1.02);
        }
      }
      .submit-button {
        height: 7vh;
        width: 80%;
        border: 1px solid #000;
        font-size: 2.5vh;
        border-radius: 2px;
        margin-bottom: 5vh;
        background: #fff;
      }
    }
  }
`;
