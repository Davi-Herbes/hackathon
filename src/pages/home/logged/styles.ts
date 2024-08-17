import styled from "styled-components";

export const SLogged = styled.section`
  .request-selector {
    display: flex;
    flex-direction: column;
    position: fixed;
    height: 100vh;
    width: 40vw;
    align-items: center;
    justify-content: space-around;
    text-align: center;
    z-index: 1;
    background: rgba(0, 0, 20, 0.95);
    animation: showMenu 300ms ease-in-out;

    .profile {
      height: 10vh;
      width: 10vh;
      background: #eee;
      align-content: center;
      border-radius: 50%;
      a {
        img {
          max-height: 8vh;
        }
      }
    }

    .request {
      max-width: 30vw;
      a {
        color: #fff;
        font-size: 3vh;
        font-weight: 400;
        text-decoration: none;
      }
    }
  }
  .outlet-container {
    width: 100%;
    height: 90vh;
  }
  .burger-menu {
    height: 6vh;
    width: 6vh;
    background: #fff;
    border: none;
    img {
      max-height: 5vh;
    }
  }

  @keyframes showMenu {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0);
    }
  }
`;
