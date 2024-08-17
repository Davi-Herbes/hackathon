import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { NotFoundPage } from "./pages/not-found";
import { Home } from "./pages/home";
import { LoggedHome } from "./pages/home/logged";
import { Dicas } from "./pages/home/logged/children/dicas";
import { AreasAlagamento } from "./pages/home/logged/children/areas-alagamento";
import { Confirm } from "./pages/confirm";
import { Profile } from "./pages/home/logged/children/profile";
import { Contatos } from "./pages/home/logged/children/contatos";
import { Afetados } from "./pages/home/logged/children/afetados";
import { Status } from "./pages/home/logged/children/status";
import { PerfilAfetado } from "./pages/home/logged/children/perfil-afetado";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/confirm",
        element: <Confirm />,
      },
      {
        path: "/home",
        element: <LoggedHome />,
        children: [
          { path: "/home/profile", element: <Profile /> },
          { path: "/home/dicas", element: <Dicas /> },
          { path: "/home/contatos", element: <Contatos /> },
          { path: "/home/perfil-afetado", element: <PerfilAfetado /> },
          { path: "/home/status", element: <Status /> },
          { path: "/home/afetados", element: <Afetados /> },
          { path: "/home/areas-alagamento", element: <AreasAlagamento /> },
        ],
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);
