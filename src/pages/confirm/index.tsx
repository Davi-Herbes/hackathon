import { Form } from "react-router-dom";
import { SConfirm } from "./styles";
import { useStore } from "zustand";
import { useUserStore } from "../../store/userstore";

export const Confirm = () => {
  const userStore = useStore(useUserStore);
  return (
    <SConfirm>
      <h1>Enviamos um SMS de verificação para {userStore.phone}</h1>
      <Form action="/home/areas-alagamento">
        <label htmlFor="confirm-code">Digite o código enviado:</label>
        <input id="confirm-code" type="text" />
        <button type="submit">Enviar</button>
      </Form>
    </SConfirm>
  );
};
