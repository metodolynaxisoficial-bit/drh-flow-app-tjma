import { createBrowserRouter } from "react-router";
import { Root } from "./layouts/Root";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Cadastro } from "./pages/Cadastro";
import { RecuperarSenha } from "./pages/RecuperarSenha";
import { Dashboard } from "./pages/Dashboard";
import { VidaFuncional } from "./pages/VidaFuncional";
import { Frequencia } from "./pages/Frequencia";
import { Licencas } from "./pages/Licencas";
import { Beneficios } from "./pages/Beneficios";
import { Adicionais } from "./pages/Adicionais";
import { Teletrabalho } from "./pages/Teletrabalho";
import { Protocolo } from "./pages/Protocolo";
import { Assistente } from "./pages/Assistente";
import { Acompanhamento } from "./pages/Acompanhamento";
import { LGPD } from "./pages/LGPD";
import { Perfil } from "./pages/Perfil";
import { SobreSistema } from "./pages/SobreSistema";
import { Manifesto } from "./pages/Manifesto";
import { AdminDashboard } from "./pages/admin/AdminDashboard";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/home",
    Component: Home,
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/cadastro",
    Component: Cadastro,
  },
  {
    path: "/recuperar-senha",
    Component: RecuperarSenha,
  },
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Dashboard },
      { path: "manifesto", Component: Manifesto },
      { path: "vida-funcional", Component: VidaFuncional },
      { path: "frequencia", Component: Frequencia },
      { path: "licencas", Component: Licencas },
      { path: "beneficios", Component: Beneficios },
      { path: "adicionais", Component: Adicionais },
      { path: "teletrabalho", Component: Teletrabalho },
      { path: "protocolo", Component: Protocolo },
      { path: "assistente", Component: Assistente },
      { path: "acompanhamento", Component: Acompanhamento },
      { path: "lgpd", Component: LGPD },
      { path: "perfil", Component: Perfil },
      { path: "sobre-sistema", Component: SobreSistema },
      { path: "admin", Component: AdminDashboard },
      { path: "*", Component: NotFound },
    ],
  },
]);
