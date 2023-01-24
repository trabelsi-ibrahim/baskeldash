import Home from "./pages/home/Home";
//import Login from "./pages/login/Login";
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
import Piste from "./pages/piste/Piste";
import Home2 from "./pages/home2/Home2";
import List2 from "./pages/list2/List2";
import Velo2 from "./pages/velo2/Velo2"
import Evenement2 from "./pages/evenement2/Evenement2";
import Newc from "./pages/new/Newclub";
import Newu from "./pages/new/Newuser"
import Newa from "./pages/new/Newag";
import Newv from "./pages/new/Newbike";
import Newe from "./pages/new/Neweve";
import Newp from "./pages/new/Newpiste";
import Single2 from "./pages/single/Singleag";
import Singleu from "./pages/single/Singleuse";
import Singlev from "./pages/single/Singlevelo";
import Singlee from "./pages/single/Singleeve";
import Singlec from "./pages/single/Singleclub";
import Singlep from "./pages/single/Singlepiste";
import Login from "./components/login_signup/login";
import { Router } from "react-router-dom";
import { Link } from "react-router-dom";
import Main from "./pages/mainpage/main";
import Loc from "./pages/location/Location";
function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    
         

    <div className={darkMode ? "app dark" : "app"}>
       
      <BrowserRouter>
        <Routes>
        <Route path="login" element={<Login />} />
        <Route path="main" element={<Main />} />
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":id" element={<Singleu />} />
              <Route
                path="new"
                element={<Newu inputs={userInputs} title="Add New User" />}
              />
            </Route>
            <Route path="agence">
              <Route index element={<Agence />} />
              <Route path=":id" element={<Single2 />} />
              <Route
                path="new"
                element={<Newa inputs={agenceInputs} title="Add New Agency" />}
              />
              </Route>
              <Route path="velo">
               <Route index element={<Velo />} />
                 <Route path=":id" element={<Singlev />} />
                   <Route
                     path="new"
                      element={<Newv inputs={productInputs} title="Add New Bike" />}
                      />
              </Route>
                <Route path="evenement">
                 <Route index element={<Evenement />} />
                 <Route path=":id" element={<Singlee />} />
                 <Route
                  path="new"
                     element={<Newe inputs={eventInputs} title="Add New Event" />}
                     />
                </Route>
                <Route path="club">
                 <Route index element={<Club />} />
                 <Route path=":id" element={<Singlec />} />
                 <Route
                  path="new"
                     element={<Newc inputs={clubInputs} title="Add New club" />}
                     />
                </Route>
                <Route path="piste">
                 <Route index element={<Piste />} />
                 <Route path=":id" element={<Singlep />} />
                 <Route
                  path="new"
                     element={<Newp inputs={clubInputs} title="Add New piste" />}
                     />
                </Route>
                <Route path="location">
                 <Route index element={<Loc />} />
                 <Route path=":id" element={<Singlee />} />
                 <Route
                  path="new"
                     element={<Newe inputs={eventInputs} title="Add New Event" />}
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
                 <Route path=":id" element={<Single />} />
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
