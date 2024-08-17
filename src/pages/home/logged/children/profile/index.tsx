import { SProfile } from "./styles";
import userSvg from "/images/user.svg";
import { useStore } from "zustand";
import { useUserStore } from "../../../../../store/userstore";

export const Profile = () => {
  // const [username, setUsername] = useState("");
  // const [endereco, setEndereco] = useState("");

  const userStore = useStore(useUserStore);

  return (
    <SProfile>
      <h1>Perfil</h1>

      <div className="user-img">
        <img src={userSvg} />
      </div>

      <div className="user-data">
        <div>{userStore.username ? userStore.username : "Sem nome"}</div>
        <div>{userStore.addr ? userStore.addr : "Sem Endereço"}</div>
        <div>{userStore.phone ? userStore.phone : "Sem Endereço"}</div>
      </div>
      <label>
        Nome Completo
        <input
          onChange={(e) => {
            userStore.setUsername(e.target.value);
          }}
          type="text"
        />
      </label>
      <label>
        Endereço
        <input
          type="text"
          onChange={(e) => {
            userStore.setAddr(e.target.value);
          }}
        />
      </label>
      <label>
        Numero
        <input
          onChange={(e) => {
            userStore.setPhone(e.target.value);
          }}
          type="text"
        />
      </label>
    </SProfile>
  );
};
