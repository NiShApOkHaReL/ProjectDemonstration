import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import AdminHome from "./admin/AdminHome";
import Register from "./users/pages/auth/register/Register";
import Login from "./users/pages/auth/login/Login";
import Report from "./users/pages/user/Report";
import ViewReport from './users/pages/user/ViewReport'
import AboutUs from "./users/pages/user/AboutUs";
import AdminViewReport from "./admin/components/pages/AdminViewReport";
import ViewLetter from "./admin/components/pages/ViewLetter";
import Logout from "./users/pages/auth/logout/Logout"
import ViewOnMap from "./admin/components/pages/ViewOnMap"
import ViewUsers from "./admin/components/pages/ViewUsers";


function App() {
  return (
    <>
      <BrowserRouter>
        {/* removed div */}
        {/* removed navbar */}
        {/* also changed the path casing */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/admin' element={<AdminHome />} />
          <Route path='/admin/adminviewreport' element={<AdminViewReport />} />
          <Route path='/admin/viewletter/:id' element={<ViewLetter />} />

          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/report' element={<Report />} />
          <Route path='/viewReport' element={<ViewReport />} />
          <Route path='/aboutUs' element={<AboutUs />} />
          <Route path='/logout' element={<Logout/>}/>
          <Route path='/admin/viewonmap/:id' element={<ViewOnMap/>}/>
          <Route path='/admin/ViewUsers' element={<ViewUsers/>}/>


        </Routes>
        {/* removed footer */}
      </BrowserRouter>
    </>
  );
}

export default App;
