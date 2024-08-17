import { Form } from "react-router-dom";
import { SStatus } from "./styles";
import { useStore } from "zustand";
import { useUserStore } from "../../../../../store/userstore";
import { FormEvent, useState } from "react";

export const Status = () => {
  const userStore = useStore(useUserStore);
  const [urgence, setUrgence] = useState(false);
  const [description, setDescription] = useState("");

  const [submited, setSubmited] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    userStore.setUrgence(urgence);
    userStore.setDescription(description);
    setSubmited(true);
  };

  return (
    <SStatus>
      <h1>Status</h1>

      {submited ? (
        <div className="submited">
          <h1>Pedido enviado! Aguarde socorro e se mantenha a calma.</h1>
        </div>
      ) : (
        <Form onSubmit={handleSubmit} action="/">
          <label className="urgence" htmlFor="urgence">
            Você está em apuros?
            <input
              onChange={(e) => setUrgence(e.target.checked)}
              id="urgence"
              type="checkbox"
            />
          </label>

          <label className="description" htmlFor="description">
            Descreva sua situação:
            <textarea
              id="description"
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>
          <button type="submit">Enviar</button>
        </Form>
      )}
    </SStatus>
  );
};
