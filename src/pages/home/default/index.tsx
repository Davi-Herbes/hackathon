import { SDefault } from "./styles";
import logoIfrs from "/images/logo_ifrs.png";

export const DefaultHome = () => {
  return (
    <SDefault className="default-home-page">
      <header className="default-menu">
        <a href="https://ifrs.edu.br/feliz">
          <img src={logoIfrs} alt="IFRS" />
        </a>
      </header>
      <section id="intro-default-home">
        <div className="logo-container">
          <div className="logo">Logo Maneira</div>
          <span className="creators">Davi Lucas Felipe Lassem e Luft</span>
        </div>
      </section>
      <section id="user-sign-default-home"></section>
    </SDefault>
  );
};
