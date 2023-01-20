import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs, userInputs ,agenceInputs,clubInputs,eventInputs} from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import Agence from "./pages/agence/Agence";
import Velo from "./pages/velo/Velo";
import Evenement from "./pages/evenement/Evenement";
import Club from "./pages/club/Club";
import Home2 from "./pages/home2/Home2";
import List2 from "./pages/list2/List2";
import Velo2 from "./pages/velo2/Velo2"
import Evenement2 from "./pages/evenement2/Evenement2";
import Newc from "./pages/new/Newclub";
import Newu from "./pages/new/Newuser"
import Newa from "./pages/new/Newag";
import Newv from "./pages/new/Newbike";
import Newe from "./pages/new/Neweve";
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
                element={<Newu inputs={userInputs} title="Add New User" />}
              />
            </Route>
            <Route path="agence">
              <Route index element={<Agence />} />
              <Route path=":agenceId" element={<Single />} />
              <Route
                path="new"
                element={<Newa inputs={agenceInputs} title="Add New Agency" />}
              />
              </Route>
              <Route path="velo">
               <Route index element={<Velo />} />
                 <Route path=":veloId" element={<Single />} />
                   <Route
                     path="new"
                      element={<Newv inputs={productInputs} title="Add New Bike" />}
                      />
              </Route>
                <Route path="evenement">
                 <Route index element={<Evenement />} />
                 <Route path=":evenementId" element={<Single />} />
                 <Route
                  path="new"
                     element={<Newe inputs={eventInputs} title="Add New Event" />}
                     />
                </Route>
                <Route path="club">
                 <Route index element={<Club />} />
                 <Route path=":clubId" element={<Single />} />
                 <Route
                  path="new"
                     element={<Newc inputs={clubInputs} title="Add New club" />}
                     />
                </Route>
                <Route path="admin">
                 <Route index element={<Home2 />} />
                 <Route path="historique">
              <Route index element={<List2 />} />
              <Route path=":userId" element={<Single />} />
              </Route>
              <Route path="velo">
               <Route index element={<Velo2 />} />
                 <Route path=":veloId" element={<Single />} />
                   <Route
                     path="new"
                      element={<Newv inputs={productInputs} title="Add New Bike" />}
                      />
              </Route>
              <Route path="evenement">
                 <Route index element={<Evenement2 />} />
                 <Route path=":evenementId" element={<Single />} />
                 <Route
                  path="new"
                     element={<Newc inputs={eventInputs} title="Add New Event" />}
                     />
                </Route>
            
                 
                 </Route>
                
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
