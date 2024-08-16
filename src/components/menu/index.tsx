import { ReactNode } from "react";
import { SMenu } from "./styles";
import logoIfrs from "/images/logo_ifrs.png";

type Props = {
  children?: ReactNode;
};

export const Menu = ({ children }: Props) => {
  return (
    <SMenu className="menu">
      <a href="https://ifrs.edu.br/feliz">
        <img src={logoIfrs} alt="IFRS" />
      </a>
      {children}
    </SMenu>
  );
};
