import { SPerfilAfetado } from "./styles";
import userSvg from "/images/user.svg";

export const PerfilAfetado = () => {
  return (
    <SPerfilAfetado>
      <h1>Vítima da Silva</h1>
      <img src={userSvg} alt="" />
      <div className="numero">Número: 54 9 9564-9248</div>
      <div className="status">Status: Emergência</div>
      <div className="descricao">Descrição: Por favor ajuda endereço tal</div>
    </SPerfilAfetado>
  );
};
