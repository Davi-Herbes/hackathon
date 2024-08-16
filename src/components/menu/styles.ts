import styled, { css } from "styled-components";
import { ThemeType } from "../../styles/types/theme-type";

export const SMenu = styled.header<{ theme: ThemeType }>`
  ${({ theme }) => css`
    background-color: ${theme.colors.background.dark};
    height: 13vh;
    width: 100%;
    display: flex;
    align-items: center;
    padding-left: 4vw;
    img {
      max-height: 12vh;
      filter: brightness(0) invert();
    }
  `}
`;
