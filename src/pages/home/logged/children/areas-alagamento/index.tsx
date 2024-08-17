import { SAreasAlagamento } from "./styles";
import mapaAlagamento from "/images/relevo-centro-feliz.png";
import directions from "/images/directions.svg";

export const AreasAlagamento = () => {
  return (
    <SAreasAlagamento>
      <h1>Áreas Alagamento</h1>
      <div className="content-container">
        <img src={mapaAlagamento} alt="" />
        <img className="directions" src={directions} alt="" />
        <div className="niveis">
          <div className="gradient-container"></div>
          <div className="infos-container">
            <div className="info-container">
              <div>Alto Risco</div>
            </div>
            <div className="info-container">
              <div>Risco moderado</div>
            </div>
            <div className="info-container">
              <div>Baixíssimo risco</div>
            </div>
          </div>
        </div>
      </div>
    </SAreasAlagamento>
  );
};
