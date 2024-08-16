import { SDefault } from "./styles";
import logoIfrs from "/images/logo_ifrs.png";

export const DefaultHome = () => {
  return (
    <SDefault className="default-home-page">
      <header className="default-menu">
        <div className="default-menu-content">
          <a className="ifrs-link" href="https://ifrs.edu.br/feliz">
            <img src={logoIfrs} alt="IFRS" />
          </a>
          <nav className="intro-home-nav">
            <a href="#intro-default-home" className="intro-home-nav-item">
              Sobre
            </a>
            <a href="#user-sign-default-home" className="intro-home-nav-item">
              Entrar/Cadastrar
            </a>
          </nav>
        </div>
      </header>
      <section id="intro-default-home">
        <div className="intro-container">
          <div className="logo-container">
            <div className="logo">Logo Maneira</div>
            <span className="creators">Davi Lucas Felipe Lassem e Luft</span>
          </div>
          <div className="about-container">
            <span className="about">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem
              unde modi quam voluptas quasi id amet ipsam laudantium placeat qui
              mollitia quia accusantium impedit suscipit maiores aliquid illo,
              iste nam!
            </span>
          </div>
        </div>
      </section>
      <section id="user-sign-default-home"></section>
    </SDefault>
  );
};
