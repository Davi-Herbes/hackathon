import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { NotFoundPage } from "./pages/not-found";
import { Tests } from "./pages/tests";
import { Home } from "./pages/home/indes";

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
        path: "/tests",
        element: <Tests />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);
