import { Form } from "react-router-dom";
import { SDefault } from "./styles";
import logoCaiAlerta from "/images/logo_cai_alerta.png";
import { useStore } from "zustand";
import { useUserStore } from "../../../store/userstore";
import { useState } from "react";

export const DefaultHome = () => {
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");

  const userStore = useStore(useUserStore);

  const handleSubmit = () => {
    userStore.setPhone(phone);
    userStore.setUsername(username);
  };

  return (
    <SDefault className="default-home-page">
      <div className="logo-container">
        <img src={logoCaiAlerta} alt="Caí Alerta" />
      </div>
      <div className="sign-user-container">
        <Form onSubmit={handleSubmit} action="/confirm/" method="GET">
          <h1>Enviaremos um SMS para o seu número</h1>
          <div className="field-container">
            <label htmlFor="user-name">Seu nome: </label>
            <input
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              id="user-name"
            />
          </div>
          <div className="field-container">
            <label htmlFor="user-phone">Número de telefone: </label>
            <input
              onChange={(e) => setPhone(e.target.value)}
              type="tel"
              id="user-phone"
            />
          </div>
          <div className="field-container">
            <label htmlFor="user-pss">Senha: </label>
            <input type="password" id="user-pss" />
          </div>
          <button type="submit" className="submit-button">
            Enviar
          </button>
        </Form>
      </div>
    </SDefault>
  );
};
