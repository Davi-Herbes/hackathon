import { SDicas } from "./styles";

export const Dicas = () => {
  return (
    <SDicas>
      <h1>Dicas</h1>
      <div className="dicas">
        <div className="topico">
          <h2>Durante</h2>
          <ul>
            <li>
              Evite entrar em contato direto com a água ou barro proveniente das
              inundações
            </li>
            <li> Garantir a segurança dos animais</li>
            <li> Em caso de evacuação, leve somente o necessário</li>
            <li> Evite entrar em contato com aparelho elétricos</li>
          </ul>
        </div>
        <div className="topico">
          <h2>Após</h2>
          <ul>
            <li>
              Não volte para casa até que as autoridades confirmem que é seguro
            </li>
            <li>
              Quando possível, limpe os ambientes afetados com produtos
              adequados para evitar doenças
            </li>
            <li>
              Tire fotos e faça um inventário dos danos para facilitar a
              solicitação de seguros ou ajudas financeiras
            </li>
            <li>Economize água, pois pode faltar com o tempo</li>
          </ul>
        </div>
      </div>
    </SDicas>
  );
};
