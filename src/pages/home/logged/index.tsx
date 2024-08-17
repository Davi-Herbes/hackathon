import { Link, Outlet } from "react-router-dom";
import { SLogged } from "./styles";
import burgerSvg from "/images/burger-menu.svg";
import userSvg from "/images/user.svg";
import { useState } from "react";

export const LoggedHome = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <SLogged>
      {showMenu ? (
        <>
          <header className="request-selector">
            <div className="profile">
              <Link onClick={() => setShowMenu(false)} to="/home/profile">
                <img src={userSvg} alt="user" />
              </Link>
            </div>
            <div className="request">
              <Link onClick={() => setShowMenu(false)} to="/home/status">
                Status
              </Link>
            </div>
            <div className="request">
              <Link onClick={() => setShowMenu(false)} to="/home/contatos">
                Contatos
              </Link>
            </div>
            <div className="request">
              <Link onClick={() => setShowMenu(false)} to="/home/afetados">
                Afetados
              </Link>
            </div>
            <div className="request">
              <Link onClick={() => setShowMenu(false)} to="/home/dicas">
                Dicas
              </Link>
            </div>
            <div className="request">
              <Link
                onClick={() => setShowMenu(false)}
                to="/home/areas-alagamento"
              >
                Áreas de alagamento
              </Link>
            </div>
          </header>
          <div className="burger-menu"></div>
        </>
      ) : (
        <button className="burger-menu" onClick={() => setShowMenu(true)}>
          <img src={burgerSvg} alt="Menu" />
        </button>
      )}
      <div onClick={() => setShowMenu(false)} className="outlet-container">
        <Outlet />
      </div>
    </SLogged>
  );
};
