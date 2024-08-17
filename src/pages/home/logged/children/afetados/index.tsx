import { Link } from "react-router-dom";
import { SAfetados } from "./styles";
import userSvg from "/images/user.svg";

export const Afetados = () => {
  return (
    <SAfetados>
      <h1>Lista de Afetados</h1>
      <div className="list-container">
        <ul>
          <li className="silva">
            <img src={userSvg} />
            <Link to="/home/perfil-afetado" className="dados-afetado">
              <div className="nome-afetado">Vítima da Silva</div>
              <div className="numero-afetado">54 9 9564-9248</div>
            </Link>
          </li>
          <li>
            <img src={userSvg} />
            <div className="dados-afetado">
              <div className="nome-afetado">Vítima 2</div>
              <div className="numero-afetado">54 9 9564-3448</div>
            </div>
          </li>
          <li>
            <img src={userSvg} />
            <div className="dados-afetado">
              <div className="nome-afetado">Vítima 3</div>
              <div className="numero-afetado">54 9 92345-9248</div>
            </div>
          </li>
          <li>
            <img src={userSvg} />
            <div className="dados-afetado">
              <div className="nome-afetado">Vítima 4</div>
              <div className="numero-afetado">54 9 9564-9258</div>
            </div>
          </li>
          <li>
            <img src={userSvg} />
            <div className="dados-afetado">
              <div className="nome-afetado">Vítima 5</div>
              <div className="numero-afetado">54 9 9523-2548</div>
            </div>
          </li>
          <li>
            <img src={userSvg} />
            <div className="dados-afetado">
              <div className="nome-afetado">Vítima 6</div>
              <div className="numero-afetado">54 9 9564-9248</div>
            </div>
          </li>
        </ul>
      </div>
    </SAfetados>
  );
};
