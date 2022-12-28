import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import Agence from "./pages/agence/Agence";
import Velo from "./pages/velo/Velo";
import Evenement from "./pages/evenement/Evenement";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
            </Route>
            <Route path="agence">
              <Route index element={<Agence />} />
              <Route path=":agenceId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Agency" />}
              />
              </Route>
              <Route path="velo">
              <Route index element={<Velo />} />
              <Route path=":veloId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Bike" />}
              />
              </Route>
              <Route path="evenement">
              <Route index element={<Evenement />} />
              <Route path=":evenementId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Product" />}
              />



            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
