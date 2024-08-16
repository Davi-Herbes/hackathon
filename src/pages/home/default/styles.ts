import styled, { css } from "styled-components";
import { ThemeType } from "../../../styles/types/theme-type";

export const SDefault = styled.div<{ theme: ThemeType }>`
  ${({ theme }) => css`
    height: 100vh;

    .default-menu {
      z-index: 1;
      position: fixed;
      width: 100%;
      background: #fff;

      display: flex;
      justify-content: center;
      box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.1);

      .default-menu-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 13vh;
        width: 80%;

        .ifrs-link {
          display: flex;
          align-items: center;
          img {
            max-height: 12vh;
          }
        }

        .intro-home-nav {
          display: flex;
          gap: 2vw;
          .intro-home-nav-item {
            transition: font-weight 300ms;
            text-decoration: none;
            color: #000;
          }
          .intro-home-nav-item:hover {
            font-weight: 330;
          }
        }
      }
    }

    section {
      width: 100%;
    }

    #intro-default-home {
      height: 100vh;
      width: 100%;
      padding-top: 13vh;
      align-content: center;
      padding-bottom: 13vh;
      animation: fadeInAnimation 2s forwards;

      .intro-container {
        margin: 0 auto;
        height: 50vh;
        width: 80%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 3vw;

        .logo-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
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

        .about-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
      }
    }

    #user-sign-default-home {
      background: #eef;
      height: 87vh;
    }
  `}
`;
