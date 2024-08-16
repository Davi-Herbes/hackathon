import styled, { css } from "styled-components";
import { ThemeType } from "../../../styles/types/theme-type";

export const SDefault = styled.div<{ theme: ThemeType }>`
  ${({ theme }) => css`
    height: 100vh;

    .default-menu {
      padding-left: 4vw;
      height: 13vh;
      width: 100%;
      align-items: center;
      position: fixed;
      img {
        max-height: 12vh;
      }
      box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.1);
    }

    section {
      width: 100%;
    }

    #intro-default-home {
      height: 100vh;
      width: 100%;
      padding-top: 13vh;
      align-content: center;
      animation: fadeInAnimation 2s forwards;

      .logo-container {
        margin: 0 auto;
        height: 30vh;
        width: 50%;
        text-align: center;

        .logo {
          margin-bottom: 2vh;
          font-family: ${theme.font.family.secondary};
          font-weight: 900;
          font-size: ${theme.font.sizes.pageTitle};
        }
        .creators {
          font-weight: 400;
          font-size: ${theme.font.sizes.small};
        }
      }
    }

    #user-sign-default-home {
      background: #eef;
      height: 87vh;
    }
  `}
`;
