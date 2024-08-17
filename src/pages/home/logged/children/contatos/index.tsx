import { SContatos } from "./styles";

export const Contatos = () => {
  return (
    <SContatos>
      <h1>Contatos Emergenciais</h1>
      <div className="contacts-container">
        <div className="contacts">
          <div className="grid-element num">190</div>
          <div className="grid-element">Defesa civil</div>
          <div className="grid-element num">193</div>
          <div className="grid-element">Bombeiros</div>
          <div className="grid-element num">(55) 3742-9100</div>
          <div className="grid-element">Brigada militar</div>
          <div className="grid-element num">(51) 98444-0606</div>
          <div className="grid-element">Polícia civil</div>
        </div>
      </div>
    </SContatos>
  );
};
